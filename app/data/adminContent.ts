"use client";

import { useEffect, useState } from "react";
import {
  emptyAdminContent,
  normalizeContent,
  type AdminApplication,
  type AdminApplicationFile,
  type AdminArticle,
  type AdminCollectionName,
  type AdminContent,
  type AdminGalleryItem,
  type AdminOpportunity,
  type AdminPartner,
  type AdminProject,
} from "./adminTypes";

export type {
  AdminApplication,
  AdminApplicationFile,
  AdminArticle,
  AdminCollectionName,
  AdminContent,
  AdminGalleryItem,
  AdminOpportunity,
  AdminPartner,
  AdminProject,
};

export const adminStorageKey = "c2e-admin-content-v1";
export { emptyAdminContent };

export function loadAdminContent(): AdminContent {
  if (typeof window === "undefined") {
    return emptyAdminContent;
  }

  try {
    const rawContent = window.localStorage.getItem(adminStorageKey);
    return rawContent
      ? normalizeContent(JSON.parse(rawContent))
      : emptyAdminContent;
  } catch {
    return emptyAdminContent;
  }
}

export function saveAdminContent(content: AdminContent) {
  window.localStorage.setItem(adminStorageKey, JSON.stringify(content));
  window.dispatchEvent(new Event("c2e-admin-content-updated"));
}

export async function fetchAdminContent(): Promise<AdminContent> {
  try {
    const response = await fetch("/api/admin/content", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Unable to fetch admin content");
    }

    const content = normalizeContent(await response.json());
    saveAdminContent(content);
    return content;
  } catch {
    return loadAdminContent();
  }
}

export async function persistAdminContent(
  content: AdminContent
): Promise<AdminContent> {
  saveAdminContent(content);

  try {
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      throw new Error("Unable to save admin content");
    }

    const savedContent = normalizeContent(await response.json());
    saveAdminContent(savedContent);
    return savedContent;
  } catch {
    return content;
  }
}

export async function createAdminItem<T>(
  collection: AdminCollectionName,
  item: T
): Promise<AdminContent> {
  const response = await fetch(`/api/admin/content/${collection}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Unable to create admin item");
  }

  const content = normalizeContent(await response.json());
  saveAdminContent(content);
  return content;
}

export async function deleteAdminItem(
  collection: AdminCollectionName,
  index: number
): Promise<AdminContent> {
  const response = await fetch(`/api/admin/content/${collection}/${index}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Unable to delete admin item");
  }

  const content = normalizeContent(await response.json());
  saveAdminContent(content);
  return content;
}

export async function submitApplication(
  application: AdminApplication
): Promise<AdminContent> {
  const response = await fetch("/api/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(application),
  });

  if (!response.ok) {
    throw new Error("Unable to submit application");
  }

  const content = normalizeContent(await response.json());
  saveAdminContent(content);
  return content;
}

export function useAdminContent() {
  const [content, setContent] = useState<AdminContent>(emptyAdminContent);

  useEffect(() => {
    const refreshContent = () => {
      setContent(loadAdminContent());
      void fetchAdminContent().then(setContent);
    };

    refreshContent();
    window.addEventListener("storage", refreshContent);
    window.addEventListener("c2e-admin-content-updated", refreshContent);

    return () => {
      window.removeEventListener("storage", refreshContent);
      window.removeEventListener("c2e-admin-content-updated", refreshContent);
    };
  }, []);

  return content;
}
