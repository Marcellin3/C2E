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

export type AdminApplicationFile = {
  name: string;
  type: string;
  dataUrl: string;
};

export type AdminApplication = {
  opportunityTitle: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  portfolio: string;
  cv?: AdminApplicationFile;
  motivationLetter?: AdminApplicationFile;
  certificates?: AdminApplicationFile[];
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

export type AdminCollectionName = keyof AdminContent;

export const emptyAdminContent: AdminContent = {
  gallery: [],
  projects: [],
  articles: [],
  opportunities: [],
  partners: [],
  applications: [],
};

export function normalizeContent(value: unknown): AdminContent {
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

export function isAdminCollectionName(
  value: string
): value is AdminCollectionName {
  return value in emptyAdminContent;
}
