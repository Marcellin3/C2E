import type { AdminPublication } from "./adminTypes";

type ExternalReport = AdminPublication & { externalUrl: string };

export const featuredReportDocuments = [
  {
    id: "renforcement-capacites-recherche",
    slug: "renforcement-capacites-recherche",
    type: "etude-rapport",
    title:
      "Renforcement des capacités des enseignants et chercheurs des universités dans le domaine de la recherche",
    category: "Recherche scientifique",
    excerpt:
      "Une étude consacrée au renforcement des compétences des enseignants et chercheurs universitaires afin de soutenir la production scientifique en RDC.",
    authors: "C2E",
    publishedAt: "2026",
    year: "2026",
    location: "République démocratique du Congo",
    content: "",
    coverImage: "",
    readingTime: "",
    pdfUrl: "",
    status: "published",
    externalUrl:
      "https://docs.google.com/document/d/1hOe3XmfZI4IFzdhsF5etVT7oPCSi5rU-/edit?usp=sharing&ouid=106073737309109967207&rtpof=true&sd=true",
  },
] satisfies ExternalReport[];
