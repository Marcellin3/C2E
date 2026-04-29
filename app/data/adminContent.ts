"use client";

import { useEffect, useState } from "react";

export type AdminProject = {
  title: string;
  categoryKey: "planning" | "study" | "evaluation" | "accountability" | "research";
  client: string;
  date: string;
  description: string;
  image: string;
};

export type AdminGalleryItem = {
  image: string;
  title: string;
  description: string;
};

export type AdminArticle = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export type AdminOpportunity = {
  title: string;
  type: string;
  timing: string;
  text: string;
  deadline?: string;
  location?: string;
  requirements?: string;
  description?: string;
};

export type AdminPartner = {
  name: string;
  logo: string;
};

export type AdminApplication = {
  opportunityTitle: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  portfolio: string;
  submittedAt: string;
};

export type AdminContent = {
  gallery: AdminGalleryItem[];
  projects: AdminProject[];
  articles: AdminArticle[];
  opportunities: AdminOpportunity[];
  partners: AdminPartner[];
  applications: AdminApplication[];
};

export const adminStorageKey = "c2e-admin-content-v1";

export const emptyAdminContent: AdminContent = {
  gallery: [],
  projects: [],
  articles: [],
  opportunities: [],
  partners: [],
  applications: [],
};

function normalizeContent(value: unknown): AdminContent {
  const content = value as Partial<AdminContent> | null;

  return {
    gallery: Array.isArray(content?.gallery) ? content.gallery : [],
    projects: Array.isArray(content?.projects) ? content.projects : [],
    articles: Array.isArray(content?.articles) ? content.articles : [],
    opportunities: Array.isArray(content?.opportunities)
      ? content.opportunities
      : [],
    partners: Array.isArray(content?.partners) ? content.partners : [],
    applications: Array.isArray(content?.applications)
      ? content.applications
      : [],
  };
}

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

export function useAdminContent() {
  const [content, setContent] = useState<AdminContent>(emptyAdminContent);

  useEffect(() => {
    const refreshContent = () => setContent(loadAdminContent());

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
