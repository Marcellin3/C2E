import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  emptyAdminContent,
  normalizeContent,
  type AdminCollectionName,
  type AdminContent,
} from "../../data/adminTypes";

const dataDirectory = path.join(process.cwd(), ".data");
const dataFilePath = path.join(dataDirectory, "admin-content.json");

async function ensureDataFile() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(dataFilePath, "utf8");
  } catch {
    await writeFile(
      dataFilePath,
      JSON.stringify(emptyAdminContent, null, 2),
      "utf8"
    );
  }
}

export async function readAdminContent(): Promise<AdminContent> {
  await ensureDataFile();

  try {
    return normalizeContent(JSON.parse(await readFile(dataFilePath, "utf8")));
  } catch {
    return emptyAdminContent;
  }
}

export async function writeAdminContent(
  content: AdminContent
): Promise<AdminContent> {
  const normalizedContent = normalizeContent(content);
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(
    dataFilePath,
    JSON.stringify(normalizedContent, null, 2),
    "utf8"
  );
  return normalizedContent;
}

export async function addAdminItem<T>(
  collection: AdminCollectionName,
  item: T
): Promise<AdminContent> {
  const content = await readAdminContent();

  return writeAdminContent({
    ...content,
    [collection]: [item, ...(content[collection] as T[])],
  } as AdminContent);
}

export async function deleteAdminItem(
  collection: AdminCollectionName,
  index: number
): Promise<AdminContent> {
  const content = await readAdminContent();

  return writeAdminContent({
    ...content,
    [collection]: content[collection].filter(
      (_, itemIndex) => itemIndex !== index
    ),
  });
}
