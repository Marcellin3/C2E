import type { Locale } from "../i18n/translations";

type Project = {
  title: string;
  categoryKey: "planning" | "study" | "evaluation" | "accountability" | "research";
  client: string;
  date: string;
  description: string;
  image: string;
};

const featuredStudiesByLocale: Record<Locale, Project[]> = {
  fr: [
    {
      title:
        "Analyse des facteurs limitant l'impact reel des projets de developpement en Republique Democratique du Congo",
      categoryKey: "research",
      client: "Recherche appliquee",
      date: "2026",
      description:
        "Etude axee sur le role des capacites en suivi-evaluation-apprentissage, de la formation academique et de la gouvernance des interventions sur les communautes locales.",
      image: "/photos/evaluation.jpg",
    },
    {
      title:
        "Des cotes oubliees aux solutions climatiques : le role strategique du littoral congolais",
      categoryKey: "study",
      client: "Transition climatique",
      date: "2026",
      description:
        "Analyse sur le potentiel du littoral congolais comme levier de resilience, d'innovation climatique et de politiques territoriales durables.",
      image: "/photos/téléchargé 4.jpg",
    },
  ],
  en: [
    {
      title:
        "Analysis of factors limiting the real impact of development projects in the Democratic Republic of the Congo",
      categoryKey: "research",
      client: "Applied research",
      date: "2026",
      description:
        "Study focused on the role of monitoring-evaluation-learning capacities, academic training, and intervention governance for local communities.",
      image: "/photos/evaluation.jpg",
    },
    {
      title:
        "From forgotten coasts to climate solutions: the strategic role of the Congolese coastline",
      categoryKey: "study",
      client: "Climate transition",
      date: "2026",
      description:
        "Analysis of the Congolese coastline as a lever for resilience, climate innovation, and sustainable territorial policy.",
      image: "/photos/world.jpg",
    },
  ],
  sw: [
    {
      title:
        "Uchambuzi wa sababu zinazopunguza athari halisi ya miradi ya maendeleo katika Jamhuri ya Kidemokrasia ya Kongo",
      categoryKey: "research",
      client: "Utafiti wa matumizi",
      date: "2026",
      description:
        "Utafiti unaochambua nafasi ya uwezo wa ufuatiliaji-tathmini-kujifunza, elimu ya kitaaluma, na utawala wa afua katika jamii za eneo husika.",
      image: "/photos/evaluation.jpg",
    },
    {
      title:
        "Kutoka fukwe zilizosahaulika hadi suluhisho za tabianchi: nafasi ya kimkakati ya pwani ya Kongo",
      categoryKey: "study",
      client: "Mabadiliko ya tabianchi",
      date: "2026",
      description:
        "Uchambuzi wa pwani ya Kongo kama nguzo ya ustahimilivu, ubunifu wa tabianchi, na sera endelevu za maeneo.",
      image: "/photos/world.jpg",
    },
  ],
};

export function getProjectsWithFeaturedStudies(
  locale: Locale,
  projects: Project[]
): Project[] {
  return [...featuredStudiesByLocale[locale], ...projects];
}
