import type { AdminPublication } from "./adminTypes";

type ExternalAnalysis = AdminPublication & { externalUrl: string };

export const featuredAnalyses = [
  {
    id: "analyse-protection-rdc",
    slug: "analyse-protection-rdc",
    type: "analyse-perspective",
    title:
      "Analyse du contexte de protection des populations affectées par les conflits en RDC",
    category: "Protection",
    excerpt:
      "Une analyse de la crise de protection en République démocratique du Congo, des violences basées sur le genre et des besoins prioritaires des populations déplacées.",
    authors: "C2E",
    publishedAt: "2026",
    content: "",
    coverImage: "",
    readingTime: "",
    status: "published",
    externalUrl:
      "https://docs.google.com/document/d/1YqC8DlRXaNQNOSB7zi1HBbuUIYLEL1Zg/edit?usp=sharing&ouid=106073737309109967207&rtpof=true&sd=true",
  },
  {
    id: "analyse-albinos-goma",
    slug: "analyse-albinos-goma",
    type: "analyse-perspective",
    title:
      "Analyse de situation des personnes albinos dans la ville de Goma, province du Nord-Kivu",
    category: "Inclusion",
    excerpt:
      "Un état des lieux des besoins spécifiques, des enjeux de protection et de l'accès aux soins des personnes albinos à Goma.",
    authors: "C2E",
    publishedAt: "2026",
    content: "",
    coverImage: "",
    readingTime: "",
    status: "published",
    externalUrl:
      "https://docs.google.com/document/d/1mMEmoAmYI2T3erFYu4kjPHb8Z1vLs6_x/edit?usp=sharing&ouid=106073737309109967207&rtpof=true&sd=true",
  },
] satisfies ExternalAnalysis[];
