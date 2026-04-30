import type { AdminOpportunity } from "./adminContent";
import type { Locale } from "../i18n/translations";

export const opportunities: Record<Locale, AdminOpportunity[]> = {
  fr: [
    {
      title: "Consultant(e) en suivi et evaluation",
      type: "Consultance",
      timing: "Ouvert",
      text: "Appui aux missions d'etudes, d'evaluation et de structuration des dispositifs de suivi.",
      deadline: "Candidatures ouvertes",
      location: "Goma, Bukavu ou a distance selon la mission",
      requirements:
        "Experience en suivi-evaluation, maitrise des outils de collecte, capacite d'analyse et excellente redaction technique.",
      description:
        "Le ou la consultant(e) accompagne les equipes C2E dans la preparation des missions, la conception des outils, l'analyse des donnees et la production de livrables clairs pour les partenaires. Les missions peuvent inclure des evaluations de projets, des diagnostics terrain, des ateliers de capitalisation et la structuration de cadres de suivi.",
    },
    {
      title: "Stagiaire en recherche et analyse",
      type: "Stage",
      timing: "Candidatures en cours",
      text: "Participation a la collecte, a l'analyse des donnees et a la production de notes techniques.",
      deadline: "Candidatures en continu",
      location: "Bureau C2E avec deplacements ponctuels",
      requirements:
        "Formation en sciences sociales, economie, statistiques, gestion de projet ou domaine proche; curiosite, rigueur et aisance avec les outils bureautiques.",
      description:
        "Le stage permet de contribuer aux activites de recherche appliquee de C2E: revue documentaire, preparation de questionnaires, saisie et nettoyage de donnees, analyse simple, redaction de comptes rendus et appui logistique aux missions. C'est une opportunite pour apprendre les standards professionnels de l'etude et de l'evaluation.",
    },
    {
      title: "Reserve de talents terrain",
      type: "Opportunite",
      timing: "Permanent",
      text: "Profils mobilisables pour des missions communautaires, enquetes et accompagnement de projets.",
      deadline: "Inscription permanente",
      location: "Terrains d'intervention selon les projets",
      requirements:
        "Bonne connaissance du contexte local, disponibilite pour les missions, sens de l'ethique, communication claire avec les communautes.",
      description:
        "La reserve de talents rassemble des enqueteurs, facilitateurs, superviseurs et assistants terrain pouvant etre mobilises lorsque C2E lance une mission. Les profils retenus peuvent participer a des collectes de donnees, consultations communautaires, suivis de projet et activites d'accompagnement local.",
    },
  ],
  en: [
    {
      title: "Monitoring and evaluation consultant",
      type: "Consultancy",
      timing: "Open",
      text: "Support for studies, evaluations and the design of monitoring systems.",
      deadline: "Applications open",
      location: "Goma, Bukavu or remote depending on the assignment",
      requirements:
        "Experience in monitoring and evaluation, data collection tools, analytical capacity and strong technical writing.",
      description:
        "The consultant supports C2E teams in assignment preparation, tool design, data analysis and the delivery of clear technical outputs for partners. Assignments may include project evaluations, field diagnostics, learning workshops and monitoring framework design.",
    },
    {
      title: "Research and analysis intern",
      type: "Internship",
      timing: "Applications open",
      text: "Contribute to data collection, analysis and the drafting of technical notes.",
      deadline: "Rolling applications",
      location: "C2E office with occasional field travel",
      requirements:
        "Training in social sciences, economics, statistics, project management or a related field; curiosity, rigor and comfort with office tools.",
      description:
        "The internship supports C2E's applied research activities: desk review, questionnaire preparation, data entry and cleaning, basic analysis, meeting notes and logistical support for assignments. It is an opportunity to learn professional study and evaluation standards.",
    },
    {
      title: "Field talent pool",
      type: "Opportunity",
      timing: "Ongoing",
      text: "Deployable profiles for community missions, surveys and project support.",
      deadline: "Permanent registration",
      location: "Project intervention areas",
      requirements:
        "Good knowledge of local context, availability for assignments, ethical conduct and clear communication with communities.",
      description:
        "The field talent pool brings together enumerators, facilitators, supervisors and field assistants who can be mobilized when C2E launches an assignment. Selected profiles may contribute to data collection, community consultations, project monitoring and local support activities.",
    },
  ],
  sw: [
    {
      title: "Mshauri wa ufuatiliaji na tathmini",
      type: "Ushauri",
      timing: "Wazi",
      text: "Msaada kwa tafiti, tathmini na uundaji wa mifumo ya ufuatiliaji.",
      deadline: "Maombi yako wazi",
      location: "Goma, Bukavu au mtandaoni kulingana na kazi",
      requirements:
        "Uzoefu katika ufuatiliaji na tathmini, zana za ukusanyaji data, uwezo wa uchambuzi na uandishi mzuri wa kiufundi.",
      description:
        "Mshauri husaidia timu za C2E kuandaa kazi, kubuni zana, kuchambua data na kutoa ripoti wazi kwa washirika. Kazi zinaweza kujumuisha tathmini za miradi, uchunguzi wa uwanjani, warsha za kujifunza na uundaji wa mifumo ya ufuatiliaji.",
    },
    {
      title: "Mwanafunzi wa utafiti na uchambuzi",
      type: "Mafunzo",
      timing: "Maombi yanaendelea",
      text: "Kushiriki katika ukusanyaji wa data, uchambuzi na uandishi wa nyaraka za kiufundi.",
      deadline: "Maombi yanaendelea",
      location: "Ofisi ya C2E na safari chache za uwanjani",
      requirements:
        "Mafunzo katika sayansi ya jamii, uchumi, takwimu, usimamizi wa miradi au fani inayokaribiana; umakini na uwezo wa kutumia zana za ofisi.",
      description:
        "Mafunzo haya yanahusisha mapitio ya nyaraka, maandalizi ya dodoso, kuingiza na kusafisha data, uchambuzi wa awali, kuandika muhtasari na kusaidia maandalizi ya kazi za uwanjani.",
    },
    {
      title: "Hifadhi ya vipaji vya uwanjani",
      type: "Fursa",
      timing: "Muda wote",
      text: "Wasifu wa kuhamasishwa kwa kazi za jamii, tafiti na usaidizi wa miradi.",
      deadline: "Usajili wa kudumu",
      location: "Maeneo ya miradi",
      requirements:
        "Ufahamu mzuri wa mazingira ya ndani, upatikanaji kwa kazi za uwanjani, maadili na mawasiliano mazuri na jamii.",
      description:
        "Hifadhi hii inaleta pamoja wakusanya data, wawezeshaji, wasimamizi na wasaidizi wa uwanjani wanaoweza kushirikishwa C2E inapozindua kazi. Wanaweza kusaidia ukusanyaji data, mashauriano ya jamii, ufuatiliaji wa miradi na msaada wa karibu.",
    },
  ],
};

export function createOpportunitySlug(opportunity: AdminOpportunity, index: number) {
  const normalizedTitle = opportunity.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${index + 1}-${normalizedTitle || "opportunite"}`;
}
