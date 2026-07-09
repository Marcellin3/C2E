"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  GraduationCap,
  Heart,
  Leaf,
  Scale,
  BookOpen,
  Building,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  FileText,
  AlertCircle,
  HelpCircle,
  Award,
  Globe2,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Compass,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/TranslationProvider";

// Localized content object to keep translations organized without bloating the main dictionary
const pageTranslations = {
  fr: {
    hero: {
      badge: "Plan Stratégique 2024-2028",
      title: "Synthèse du Plan Stratégique",
      subtitle: "Centre d'Expertise et d'Évaluation (C2E)",
      breadcrumbHome: "Accueil",
      breadcrumbServices: "Services",
      breadcrumbCurrent: "Plan Stratégique",
    },
    toc: {
      title: "Sommaire",
      sec1: "1. Présentation générale",
      sec2: "2. Contexte & Justification",
      sec3: "3. Vision, Mission & Valeurs",
      sec4: "4. Diagnostic SWOT",
      sec5: "5. Objectifs Stratégiques",
      sec6: "6. Approches & Perspectives",
      backLink: "Retour aux services",
    },
    sec1: {
      title: "1. Présentation générale du C2E",
      p1: "Le Centre d’Expertise et d’Évaluation (C2E) est une organisation congolaise à but non lucratif créée pour apporter des solutions innovantes, participatives et fondées sur des données probantes aux défis de développement auxquels fait face la République Démocratique du Congo. Son action vise à soutenir les institutions publiques, privées, universitaires et les organisations de la société civile dans la conception, la mise en œuvre, le suivi-évaluation et l’apprentissage des politiques et programmes de développement.",
      p2: "Présent principalement dans les provinces du Nord-Kivu et du Sud-Kivu, le C2E intervient dans un contexte marqué par l’insécurité, les conflits armés, la pauvreté, l’insécurité alimentaire, les déplacements de populations, les inégalités de genre, la dégradation environnementale ainsi que le faible accès aux services sociaux de base.",
      p3: "Le Plan Stratégique 2024-2028 constitue le cadre de référence qui orientera l’ensemble des actions de l’organisation durant les cinq prochaines années. Il vise à renforcer l’impact des interventions du C2E en faveur des populations les plus vulnérables et à contribuer au développement durable des communautés congolaises.",
      callout: "Une organisation dédiée au changement social et à l'innovation en RDC.",
    },
    sec2: {
      title: "2. Contexte et justification du Plan Stratégique",
      p1: "La RDC dispose d’importantes ressources naturelles, d’un vaste potentiel agricole et d’une population jeune. Cependant, malgré ces atouts, le pays demeure confronté à de nombreux défis structurels. Les conflits armés persistants, particulièrement dans l’Est du pays, continuent de provoquer des déplacements massifs de populations, l’insécurité alimentaire, la destruction des infrastructures et la détérioration des conditions de vie.",
      p2: "Selon les analyses humanitaires, des millions de Congolais nécessitent une assistance pour faire face aux conséquences des crises sécuritaires, économiques et environnementales. Les enfants, les femmes et les personnes déplacées figurent parmi les catégories les plus touchées.",
      p3: "Sur le plan social, la RDC connaît des taux élevés de pauvreté, de malnutrition chronique, de violences basées sur le genre et de violations des droits des enfants. Les infrastructures sanitaires, éducatives et d’approvisionnement en eau demeurent insuffisantes, particulièrement dans les zones rurales et affectées par les conflits.",
      p4: "Face à cette situation, le C2E a élaboré ce plan stratégique afin de contribuer à la réduction des vulnérabilités, au renforcement de la résilience communautaire et à la promotion du développement humain durable.",
    },
    sec3: {
      title: "3. Vision, mission et valeurs du C2E",
      visionTitle: "Vision",
      visionText: "Le C2E aspire à une République Démocratique du Congo où les politiques publiques, les projets et les programmes de développement produisent des impacts significatifs sur l’amélioration de la qualité de vie des populations grâce à des recherches et évaluations rigoureuses.",
      missionTitle: "Mission",
      missionText: "La mission du C2E est de fournir des solutions innovantes aux institutions gouvernementales, non gouvernementales, privées et universitaires dans les domaines de la conception, de la planification, de la mise en œuvre, du suivi-évaluation et de l’apprentissage des programmes de développement.",
      valuesTitle: "Valeurs fondamentales",
      valuesText: "Les actions du C2E reposent sur plusieurs valeurs essentielles qui guident les comportements de l’organisation et renforcent sa crédibilité auprès des partenaires et des bénéficiaires :",
      valuesList: [
        { name: "Créativité", desc: "Favoriser l'émergence d'idées neuves et de solutions originales." },
        { name: "Rigueur scientifique", desc: "Garantir la qualité, la précision et l'objectivité de nos analyses." },
        { name: "Responsabilité", desc: "Assumer pleinement l'impact de nos décisions et engagements." },
        { name: "Intégrité", desc: "Agir avec honnêteté, transparence et éthique professionnelle." },
        { name: "Respect", desc: "Valoriser la diversité humaine, culturelle et les opinions d'autrui." },
        { name: "Équité", desc: "Promouvoir la justice sociale, l'égalité des chances et de genre." },
        { name: "Collaboration", desc: "Privilégier le travail d'équipe et la coopération multipartite." },
        { name: "Professionnalisme", desc: "Démontrer des standards de performance et d'expertise élevés." },
      ]
    },
    sec4: {
      title: "4. Analyse stratégique et diagnostic organisationnel (SWOT)",
      intro: "L’élaboration du plan stratégique a été précédée par une analyse approfondie de l’environnement interne (Forces et Faiblesses) et externe (Opportunités et Menaces) du C2E.",
      swot: {
        strengths: {
          title: "Forces (Strengths)",
          items: [
            "Des partenariats diversifiés avec les organisations nationales et internationales",
            "L’engagement du personnel et du Conseil d’Administration",
            "Une capacité technique reconnue dans notre champ d'action",
            "Une bonne collaboration avec les institutions gouvernementales",
            "Une expertise multidisciplinaire adaptée aux réalités du terrain"
          ]
        },
        weaknesses: {
          title: "Faiblesses (Weaknesses)",
          items: [
            "Faible mobilisation des ressources financières",
            "Insuffisance de visibilité institutionnelle globale",
            "Absence d’une stratégie de communication efficace",
            "Faibles mécanismes de rétention du personnel qualifié",
            "Capacités institutionnelles encore limitées dans certains domaines"
          ]
        },
        opportunities: {
          title: "Opportunités (Opportunities)",
          items: [
            "La présence de nombreux partenaires techniques et financiers en RDC",
            "L’intérêt croissant des institutions publiques pour les approches intégrées",
            "Les opportunités de collaboration avec les universités et agences de l'ONU",
            "L’existence de plateformes de coordination sectorielle et de clusters"
          ]
        },
        threats: {
          title: "Menaces (Threats)",
          items: [
            "L’instabilité sécuritaire persistante dans l’Est de la RDC",
            "L’évolution constante des priorités stratégiques des bailleurs",
            "La dépendance excessive aux financements extérieurs",
            "Les crises humanitaires et économiques récurrentes sur le plan national"
          ]
        }
      }
    },
    sec5: {
      title: "5. Axes et objectifs stratégiques 2024-2028",
      intro: "Pour répondre aux défis identifiés, le C2E a défini neuf objectifs stratégiques majeurs, déclinés par secteurs d'intervention.",
      objectives: [
        {
          title: "Lutte contre les violences basées sur le genre (VBG)",
          desc: "Le C2E contribuera à la prévention des violences basées sur le genre à travers la sensibilisation communautaire, le changement des normes sociales discriminatoires et la prise en charge holistique des survivantes."
        },
        {
          title: "Protection de l’enfance",
          desc: "L’organisation facilitera l’accès des enfants affectés par les conflits à des services de protection adaptés, inclusifs et respectueux de leurs droits."
        },
        {
          title: "Éducation",
          desc: "Le C2E soutiendra l’accès à une éducation inclusive et de qualité grâce à l’amélioration des infrastructures scolaires, la dotation en équipements et le renforcement des capacités des enseignants."
        },
        {
          title: "Santé sexuelle et reproductive",
          desc: "Les interventions viseront l’amélioration de l’accès aux services de santé reproductive, particulièrement pour les femmes, les adolescentes et les groupes vulnérables."
        },
        {
          title: "Sécurité alimentaire et nutrition",
          desc: "L’organisation contribuera à la lutte contre la malnutrition et l’insécurité alimentaire à travers l’assistance nutritionnelle, l’appui agricole et le renforcement des moyens d’existence."
        },
        {
          title: "Gouvernance et consolidation de la paix",
          desc: "Le C2E encouragera la participation citoyenne, le dialogue communautaire, la cohésion sociale et la gestion pacifique des conflits."
        },
        {
          title: "Environnement et développement durable",
          desc: "Les interventions viseront la restauration des ressources naturelles, l’adaptation au changement climatique et la promotion d’une gestion durable de l’environnement."
        },
        {
          title: "Recherche et gestion des connaissances",
          desc: "Le C2E développera des systèmes de recherche, de production de connaissances et de capitalisation des expériences afin d’améliorer les politiques et programmes de développement."
        },
        {
          title: "Renforcement institutionnel",
          desc: "L’organisation investira dans le développement de ses capacités organisationnelles, techniques, financières et administratives afin d’assurer sa pérennité et son efficacité."
        }
      ]
    },
    sec6: {
      title: "6. Approches de mise en œuvre et perspectives",
      intro: "Pour atteindre ses objectifs, le C2E adoptera plusieurs approches complémentaires.",
      approaches: [
        {
          title: "Approche holistique et intégrée",
          desc: "Les interventions seront conçues de manière multisectorielle afin de répondre simultanément aux différents besoins des populations."
        },
        {
          title: "Approche sensible aux conflits",
          desc: "Toutes les actions tiendront compte des réalités sécuritaires et des risques de fragilisation sociale afin d’éviter tout impact négatif sur les communautés."
        },
        {
          title: "Approche basée sur les droits",
          desc: "Le C2E placera les droits humains au centre de ses interventions afin de promouvoir l’égalité, la dignité et l’inclusion sociale."
        },
        {
          title: "Approche communautaire",
          desc: "Les bénéficiaires seront impliqués dans l’identification des besoins, la conception et la mise en œuvre des activités afin de renforcer leur appropriation et leur autonomie."
        },
        {
          title: "Approche d’apprentissage et d’innovation",
          desc: "Les résultats des recherches, évaluations et leçons apprises serviront à améliorer continuellement les programmes et à développer des solutions innovantes."
        }
      ],
      perspectivesTitle: "Perspectives à l’horizon 2028",
      perspectivesP1: "À travers ce plan stratégique, le C2E ambitionne de devenir un acteur de référence en matière de recherche, d’évaluation et de développement communautaire en RDC. L’organisation souhaite contribuer significativement à l’amélioration des conditions de vie des populations vulnérables, au renforcement de leur résilience et à la promotion d’un développement inclusif, équitable et durable.",
      perspectivesP2: "En consolidant ses partenariats, en renforçant ses capacités institutionnelles et en mobilisant davantage de ressources, le C2E entend jouer un rôle majeur dans la transformation sociale et économique des communautés congolaises au cours de la période 2024-2028."
    }
  },
  en: {
    hero: {
      badge: "Strategic Plan 2024-2028",
      title: "Strategic Plan Synthesis",
      subtitle: "Center for Expertise and Evaluation (C2E)",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      breadcrumbCurrent: "Strategic Plan",
    },
    toc: {
      title: "Summary Table",
      sec1: "1. General Presentation",
      sec2: "2. Context & Justification",
      sec3: "3. Vision, Mission & Values",
      sec4: "4. SWOT Analysis",
      sec5: "5. Strategic Objectives",
      sec6: "6. Implementation & Perspectives",
      backLink: "Back to services",
    },
    sec1: {
      title: "1. General Presentation of C2E",
      p1: "The Center for Expertise and Evaluation (C2E) is a Congolese non-profit organization established to provide innovative, participatory, and evidence-based solutions to the development challenges facing the Democratic Republic of Congo. Its action aims to support public, private, academic institutions, and civil society organizations in the design, implementation, monitoring-evaluation, and learning of development policies and programs.",
      p2: "Mainly operating in the provinces of North Kivu and South Kivu, C2E intervenes in a context marked by insecurity, armed conflicts, poverty, food insecurity, population displacement, gender inequalities, environmental degradation, and poor access to basic social services.",
      p3: "The 2024-2028 Strategic Plan constitutes the reference framework that will guide all the actions of the organization over the next five years. It aims to strengthen the impact of C2E's interventions in favor of the most vulnerable populations and to contribute to the sustainable development of Congolese communities.",
      callout: "An organization dedicated to social change and innovation in the DRC.",
    },
    sec2: {
      title: "2. Context and Justification of the Strategic Plan",
      p1: "The DRC has significant natural resources, vast agricultural potential, and a young population. However, despite these assets, the country remains confronted by numerous structural challenges. Persistent armed conflicts, particularly in the eastern part of the country, continue to cause massive population displacements, food insecurity, destruction of infrastructure, and deterioration of living conditions.",
      p2: "According to humanitarian analyses, millions of Congolese require assistance to cope with the consequences of security, economic, and environmental crises. Children, women, and displaced persons are among the most affected.",
      p3: "Socially, the DRC experiences high rates of poverty, chronic malnutrition, gender-based violence, and violations of children's rights. Health, education, and water supply infrastructures remain insufficient, particularly in rural and conflict-affected areas.",
      p4: "Faced with this situation, C2E has developed this strategic plan to contribute to the reduction of vulnerabilities, the strengthening of community resilience, and the promotion of sustainable human development.",
    },
    sec3: {
      title: "3. Vision, Mission and Values of C2E",
      visionTitle: "Vision",
      visionText: "C2E aspires to a Democratic Republic of Congo where public policies, projects, and development programs produce significant impacts on improving the quality of life of populations through rigorous research and evaluations.",
      missionTitle: "Mission",
      missionText: "C2E's mission is to provide innovative solutions to governmental, non-governmental, private, and academic institutions in the areas of design, planning, implementation, monitoring-evaluation, and learning of development programs.",
      valuesTitle: "Core Values",
      valuesText: "C2E's actions are based on several essential values that guide the behaviors of the organization and reinforce its credibility with partners and beneficiaries:",
      valuesList: [
        { name: "Creativity", desc: "Fostering the emergence of new ideas and original solutions." },
        { name: "Scientific rigor", desc: "Ensuring the quality, precision, and objectivity of our analyses." },
        { name: "Responsibility", desc: "Fully assuming the impact of our decisions and commitments." },
        { name: "Integrity", desc: "Acting with honesty, transparency, and professional ethics." },
        { name: "Respect", desc: "Valuing human and cultural diversity and the opinions of others." },
        { name: "Equity", desc: "Promoting social justice, equal opportunities, and gender equality." },
        { name: "Collaboration", desc: "Prioritizing teamwork and multi-party cooperation." },
        { name: "Professionalism", desc: "Demonstrating high standards of performance and expertise." },
      ]
    },
    sec4: {
      title: "4. Strategic Analysis & SWOT Diagnostic",
      intro: "The development of the strategic plan was preceded by an in-depth analysis of the internal environment (Strengths and Weaknesses) and external environment (Opportunities and Threats) of C2E.",
      swot: {
        strengths: {
          title: "Strengths",
          items: [
            "Diversified partnerships with national and international organizations",
            "Commitment of staff and the Board of Directors",
            "Recognized technical capacity within our scope of action",
            "Good collaboration with government institutions",
            "Multidisciplinary expertise adapted to field realities"
          ]
        },
        weaknesses: {
          title: "Weaknesses",
          items: [
            "Low mobilization of financial resources",
            "Insufficient global institutional visibility",
            "Lack of an effective communication strategy",
            "Weak retention mechanisms for qualified staff",
            "Institutional capacities still limited in certain areas"
          ]
        },
        opportunities: {
          title: "Opportunities",
          items: [
            "Presence of numerous technical and financial partners in the DRC",
            "Growing interest of public institutions in integrated approaches",
            "Collaboration opportunities with universities and UN agencies",
            "Existence of sectoral coordination platforms and clusters"
          ]
        },
        threats: {
          title: "Threats",
          items: [
            "Persistent security instability in eastern DRC",
            "Constantly changing donor strategic priorities",
            "Excessive dependence on external funding",
            "Recurring economic and humanitarian crises on a national level"
          ]
        }
      }
    },
    sec5: {
      title: "5. Strategic Axes & Objectives 2024-2028",
      intro: "To respond to the identified challenges, C2E has defined nine major strategic objectives, categorized by intervention sectors.",
      objectives: [
        {
          title: "Fight Against Gender-Based Violence (GBV)",
          desc: "C2E will contribute to the prevention of gender-based violence through community awareness, changing discriminatory social norms, and providing holistic care for survivors."
        },
        {
          title: "Child Protection",
          desc: "The organization will facilitate access for children affected by conflict to adapted, inclusive protection services that respect their rights."
        },
        {
          title: "Education",
          desc: "C2E will support access to inclusive and quality education by improving school infrastructure, providing equipment, and strengthening teachers' capacities."
        },
        {
          title: "Sexual and Reproductive Health",
          desc: "Interventions will aim to improve access to reproductive health services, particularly for women, female adolescents, and vulnerable groups."
        },
        {
          title: "Food Security and Nutrition",
          desc: "The organization will contribute to the fight against malnutrition and food insecurity through nutritional assistance, agricultural support, and livelihood strengthening."
        },
        {
          title: "Governance and Peacebuilding",
          desc: "C2E will encourage citizen participation, community dialogue, social cohesion, and the peaceful management of conflicts."
        },
        {
          title: "Environment and Sustainable Development",
          desc: "Interventions will target the restoration of natural resources, adaptation to climate change, and the promotion of sustainable environmental management."
        },
        {
          title: "Research and Knowledge Management",
          desc: "C2E will develop systems for research, knowledge production, and capitalization of experiences to improve development policies and programs."
        },
        {
          title: "Institutional Strengthening",
          desc: "The organization will invest in the development of its organizational, technical, financial, and administrative capacities to ensure its sustainability and effectiveness."
        }
      ]
    },
    sec6: {
      title: "6. Implementation Approaches & Perspectives",
      intro: "To achieve its objectives, C2E will adopt several complementary approaches.",
      approaches: [
        {
          title: "Holistic and Integrated Approach",
          desc: "Interventions will be designed in a multi-sectoral manner to address the different needs of populations simultaneously."
        },
        {
          title: "Conflict-Sensitive Approach",
          desc: "All actions will take into account security realities and risks of social weakening to avoid any negative impact on communities."
        },
        {
          title: "Rights-Based Approach",
          desc: "C2E will place human rights at the center of its interventions to promote equality, dignity, and social inclusion."
        },
        {
          title: "Community-Based Approach",
          desc: "Beneficiaries will be involved in identifying needs, designing, and implementing activities to strengthen their ownership and autonomy."
        },
        {
          title: "Learning and Innovation Approach",
          desc: "Results of research, evaluations, and lessons learned will serve to continually improve programs and develop innovative solutions."
        }
      ],
      perspectivesTitle: "Perspectives for 2028",
      perspectivesP1: "Through this strategic plan, C2E aims to become a benchmark player in research, evaluation, and community development in the DRC. The organization wishes to contribute significantly to improving the living conditions of vulnerable populations, strengthening their resilience, and promoting inclusive, equitable, and sustainable development.",
      perspectivesP2: "By consolidating its partnerships, strengthening its institutional capacities, and mobilizing more resources, C2E intends to play a major role in the social and economic transformation of Congolese communities over the 2024-2028 period."
    }
  },
  sw: {
    hero: {
      badge: "Mpango Mkakati wa 2024-2028",
      title: "Muhtasari wa Mpango Mkakati",
      subtitle: "Kituo cha Utaalamu na Tathmini (C2E)",
      breadcrumbHome: "Nyumbani",
      breadcrumbServices: "Huduma",
      breadcrumbCurrent: "Mpango Mkakati",
    },
    toc: {
      title: "Yaliyomo",
      sec1: "1. Utangulizi mkuu",
      sec2: "2. Muktadha na Uhalali",
      sec3: "3. Maono, Ujumbe na Maadili",
      sec4: "4. Uchambuzi wa SWOT",
      sec5: "5. Malengo ya Kimkakati",
      sec6: "6. Utekelezaji na Matarajio",
      backLink: "Rudi kwenye huduma",
    },
    sec1: {
      title: "1. Utangulizi mkuu wa C2E",
      p1: "Kituo cha Utaalamu na Tathmini (C2E) ni shirika la Kikongo lisilo la kiserikali na lisilo la kifaida lililoanzishwa ili kutoa suluhu za kibunifu, shirikishi na zenye msingi wa ushahidi kwa changamoto za maendeleo zinazoikabili Jamhuri ya Kidemokrasia ya Kongo. Kazi yake inalenga kusaidia taasisi za umma, binafsi, vyuo vikuu na mashirika ya kiraia katika kubuni, kutekeleza, kufuatilia na kutathmini pamoja na kujifunza kutokana na sera na mipango ya maendeleo.",
      p2: "Likifanya kazi hasa katika mikoa ya Kivu Kaskazini na Kivu Kusini, C2E inaingilia kati katika mazingira yaliyojaa ukosefu wa usalama, migogoro ya silaha, umaskini, ukosefu wa usalama wa chakula, watu kuhama makazi yao, usawa wa kijinsia, uharibifu wa mazingira pamoja na upatikanaji mdogo wa huduma za msingi za kijamii.",
      p3: "Mpango Mkakati wa 2024-2028 ndio mwongozo utakaongoza shughuli zote za shirika kwa miaka mitano ijayo. Lengo lake ni kuongeza matokeo ya kazi za C2E kwa makundi ya watu walio hatarini zaidi na kuchangia maendeleo endelevu ya jamii za Kongo.",
      callout: "Shirika lililojitolea kwa mabadiliko ya kijamii na ubunifu nchini DRC.",
    },
    sec2: {
      title: "2. Muktadha na Uhalali wa Mpango Mkakati",
      p1: "DRC ina rasilimali nyingi za asili, uwezo mkubwa wa kilimo na idadi kubwa ya vijana. Hata hivyo, licha ya fursa hizi, nchi bado inakabiliwa na changamoto nyingi za kimuundo. Migogoro ya silaha inayoendelea, hasa Mashariki mwa nchi, inaendelea kusababisha watu wengi kuhama makazi yao, ukosefu wa chakula, uharibifu wa miundombinu na kuzorota kwa hali ya maisha.",
      p2: "Kulingana na uchambuzi wa kibinadamu, mamilioni ya Wakongomani wanahitaji msaada ili kukabiliana na athari za usalama, kiuchumi na kimazingira. Watoto, wanawake na wakimbizi wa ndani ni miongoni mwa makundi yaliyoathirika zaidi.",
      p3: "Katika nyanja ya kijamii, DRC inakabiliwa na viwango vya juu vya umaskini, utapiamlo wa kudumu, unyanyasaji wa kijinsia na ukiukwaji wa haki za watoto. Miundombinu ya afya, elimu na usambazaji wa maji bado haitoshelezi, hasa katika maeneo ya vijijini na yale yaliyoathiriwa na migogoro.",
      p4: "Kutokana na hali hii, C2E imeandaa mpango mkakati huu ili kuchangia katika kupunguza udhaifu, kuimarisha ustahimilivu wa jamii na kukuza maendeleo endelevu ya binadamu.",
    },
    sec3: {
      title: "3. Maono, Ujumbe na Maadili ya C2E",
      visionTitle: "Maono",
      visionText: "C2E inatamani Jamhuri ya Kidemokrasia ya Kongo ambapo sera za umma, miradi na mipango ya maendeleo inaleta matokeo makubwa katika kuboresha maisha ya wananchi kupitia utafiti na tathmini makini.",
      missionTitle: "Ujumbe",
      missionText: "Ujumbe wa C2E ni kutoa suluhu za kibunifu kwa taasisi za kiserikali, zisizo za kiserikali, za kibinafsi na za kitaaluma katika maeneo ya kubuni, kupanga, kutekeleza, kufuatilia na kutathmini pamoja na kujifunza kutokana na mipango ya maendeleo.",
      valuesTitle: "Maadili ya Msingi",
      valuesText: "Kazi za C2E zinasimamiwa na maadili muhimu yafuatayo ambayo yanaongoza mienendo ya shirika na kujenga uaminifu kwa washirika na walengwa:",
      valuesList: [
        { name: "Ubunifu", desc: "Kuhimiza mawazo mapya na suluhisho asilia." },
        { name: "Umakini wa kisayansi", desc: "Kuhakikisha ubora, usahihi na uaminifu wa uchambuzi wetu." },
        { name: "Uwajibikaji", desc: "Kubeba kikamilifu matokeo ya maamuzi na ahadi zetu." },
        { name: "Uadilifu", desc: "Kutenda kwa uaminifu, uwazi na maadili ya kitaaluma." },
        { name: "Heshima", desc: "Kuthamini tofauti za kibinadamu, kiutamaduni na maoni ya wengine." },
        { name: "Usawa", desc: "Kukuza haki ya kijamii, fursa sawa na usawa wa kijinsia." },
        { name: "Ushirikiano", desc: "Kuweka kipaumbele kazi ya pamoja na ushirikiano wa pande nyingi." },
        { name: "Taaluma", desc: "Kuonyesha viwango vya juu vya utendaji na utaalamu." },
      ]
    },
    sec4: {
      title: "4. Uchambuzi wa Kimkakati na SWOT",
      intro: "Maandalizi ya mpango mkakati yalitanguliwa na uchambuzi wa kina wa mazingira ya ndani (Nguvu na Udhaifu) na mazingira ya nje (Fursa na Hatari) ya C2E.",
      swot: {
        strengths: {
          title: "Nguvu (Strengths)",
          items: [
            "Ushirikiano mpana na mashirika ya kitaifa na kimataifa",
            "Kujitolea kwa wafanyakazi na Bodi ya Wakurugenzi",
            "Uwezo wa kiufundi unaotambulika katika nyanja zetu za kazi",
            "Ushirikiano mzuri na taasisi za kiserikali",
            "Utaalamu wa fani mbalimbali unaoendana na uhalisia wa uwanjani"
          ]
        },
        weaknesses: {
          title: "Udhaifu (Weaknesses)",
          items: [
            "Uhamishaji mdogo wa rasilimali za kifedha",
            "Kutojulikana sana kwa taasisi kwa ujumla",
            "Ukosefu wa mkakati mzuri wa mawasiliano ya nje",
            "Mbinu dhaifu za kuhifadhi wafanyakazi wenye ujuzi",
            "Uwezo wa taasisi bado una mipaka katika baadhi ya nyanja"
          ]
        },
        opportunities: {
          title: "Fursa (Opportunities)",
          items: [
            "Kuwepo kwa washirika wengi wa kiufundi na kifedha nchini DRC",
            "Nia inayoongezeka ya taasisi za umma kwa mbinu shirikishi",
            "Fursa za ushirikiano na vyuo vikuu na mashirika ya UN",
            "Kuwepo kwa majukwaa ya uratibu wa sekta mbalimbali na clusters"
          ]
        },
        threats: {
          title: "Hatari (Threats)",
          items: [
            "Hali ya kutokuwa na usalama inayoendelea Mashariki mwa DRC",
            "Kubadilika mara kwa mara kwa vipaumbele vya wafadhili",
            "Utegemezi mkubwa wa fedha kutoka nje ya nchi",
            "Migogoro ya mara kwa mara ya kibinadamu na kiuchumi kitaifa"
          ]
        }
      }
    },
    sec5: {
      title: "5. Malengo ya Kimkakati ya 2024-2028",
      intro: "Ili kukabiliana na changamoto zilizobainishwa, C2E imeweka malengo makuu tisa ya kimkakati, yaliyogawanywa kulingana na sekta za uingiliaji.",
      objectives: [
        {
          title: "Kupambana na Unyanyasaji wa Kijinsia (GBV)",
          desc: "C2E itachangia katika kuzuia unyanyasaji wa kijinsia kupitia uelimishaji wa jamii, kubadilisha mila na desturi za kijamii zenye ubaguzi, na kutoa huduma kamili kwa wahanga."
        },
        {
          title: "Ulinzi wa Mtoto",
          desc: "Shirika litafanikisha upatikanaji wa huduma za ulinzi zinazofaa, jumuishi na zinazoheshimu haki za watoto walioathiriwa na migogoro."
        },
        {
          title: "Elimu",
          desc: "C2E itaunga mkono upatikanaji wa elimu jumuishi na yenye ubora kwa kuboresha miundombinu ya shule, kutoa vifaa na kuwajengea uwezo walimu."
        },
        {
          title: "Afya ya Uzazi na Kujamiiana",
          desc: "Kazi hizi zitalenga kuboresha upatikanaji wa huduma za afya ya uzazi, hasa kwa wanawake, vijana balehe na makundi yaliyo hatarini."
        },
        {
          title: "Usalama wa Chakula na Lishe",
          desc: "Shirika litachangia katika mapambano dhidi ya utapiamlo na ukosefu wa usalama wa chakula kupitia msaada wa lishe, usaidizi wa kilimo na kuimarisha njia za kujipatia riziki."
        },
        {
          title: "Utawala na Ujenzi wa Amani",
          desc: "C2E itahamasisha ushiriki wa wananchi, mazungumzo ya jamii, mshikamano wa kijamii na utatuzi wa migogoro kwa njia ya amani."
        },
        {
          title: "Mazingira na Maendeleo Endelevu",
          desc: "Kazi hizi zitalenga kurejesha rasilimali za asili, kukabiliana na mabadiliko ya tabianchi na kukuza usimamizi endelevu wa mazingira."
        },
        {
          title: "Utafiti na Usimamizi wa Maarifa",
          desc: "C2E itatengeneza mifumo ya utafiti, uzalishaji wa maarifa na kukusanya uzoefu ili kuboresha sera na mipango ya maendeleo."
        },
        {
          title: "Kuimarisha Taasisi",
          desc: "Shirika litawekeza katika kukuza uwezo wake wa kitaasisi, kiufundi, kifedha na kiutawala ili kuhakikisha uendelevu na ufanisi wake."
        }
      ]
    },
    sec6: {
      title: "6. Mbinu za Utekelezaji na Matarajio",
      intro: "Ili kufikia malengo yake, C2E itatumia mbinu kadhaa zinazosaidiana.",
      approaches: [
        {
          title: "Mbinu Kamili na Shirikishi",
          desc: "Kazi zitaandaliwa katika sekta nyingi ili kukidhi mahitaji mbalimbali ya wananchi kwa wakati mmoja."
        },
        {
          title: "Mbinu Inayozingatia Migogoro",
          desc: "Shughuli zote zitazingatia hali halisi ya usalama na hatari za kudhoofisha uhusiano wa kijamii ili kuepuka athari zozote hasi kwa jamii."
        },
        {
          title: "Mbinu Inayozingatia Haki",
          desc: "C2E itaweka haki za binadamu katikati ya shughuli zake ili kukuza usawa, heshima na ushirikishwaji wa kijamii."
        },
        {
          title: "Mbinu ya Kijamii",
          desc: "Walengwa watashirikishwa katika kutambua mahitaji, kubuni na kutekeleza shughuli ili kuimarisha umiliki na uhuru wao."
        },
        {
          title: "Mbinu ya Kujifunza na Ubunifu",
          desc: "Matokeo ya utafiti, tathmini na mafunzo yaliyopatikana yatatumika kuboresha mipango kila wakati na kubuni suluhu mpya."
        }
      ],
      perspectivesTitle: "Matarajio ya 2028",
      perspectivesP1: "Kupitia mpango mkakati huu, C2E inalenga kuwa mdau wa mfano katika utafiti, tathmini na maendeleo ya jamii nchini DRC. Shirika linatamani kuchangia kwa kiasi kikubwa katika kuboresha maisha ya watu walio hatarini zaidi, kuimarisha ustahimilivu wao na kukuza maendeleo jumuishi, ya usawa na endelevu.",
      perspectivesP2: "Kwa kuimarisha ushirikiano wake, kukuza uwezo wa kitaasisi na kukusanya rasilimali zaidi, C2E inanuia kuwa na mchango mkubwa katika mabadiliko ya kijamii na kiuchumi ya jamii za Kongo katika kipindi cha 2024-2028."
    }
  }
};

export default function PlanStrategique() {
  const { locale } = useTranslation();
  
  // Guard locale value to fall back to 'fr' if not supported in page translations
  const lang: "fr" | "en" | "sw" = (locale === "en" || locale === "sw" || locale === "fr") ? locale : "fr";
  const content = pageTranslations[lang];

  const [activeSection, setActiveSection] = useState("sec1");

  useEffect(() => {
    const sections = ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Icon mapping for SWOT
  const getSwotIcon = (type: string) => {
    switch (type) {
      case "strengths":
        return <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
      case "weaknesses":
        return <AlertCircle className="h-6 w-6 text-rose-600 dark:text-rose-400" />;
      case "opportunities":
        return <TrendingUp className="h-6 w-6 text-sky-600 dark:text-sky-400" />;
      case "threats":
        return <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <HelpCircle className="h-6 w-6 text-slate-600" />;
    }
  };

  // Icon mapping for the 9 objectives
  const getObjectiveIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldAlert className="h-7 w-7 text-rose-500" />;
      case 1:
        return <ShieldCheck className="h-7 w-7 text-sky-500" />;
      case 2:
        return <GraduationCap className="h-7 w-7 text-indigo-500" />;
      case 3:
        return <Heart className="h-7 w-7 text-pink-500" />;
      case 4:
        return <Leaf className="h-7 w-7 text-emerald-500" />;
      case 5:
        return <Scale className="h-7 w-7 text-cyan-500" />;
      case 6:
        return <Globe2 className="h-7 w-7 text-teal-500" />;
      case 7:
        return <BookOpen className="h-7 w-7 text-violet-500" />;
      case 8:
        return <Building className="h-7 w-7 text-amber-500" />;
      default:
        return <Target className="h-7 w-7 text-blue-500" />;
    }
  };

  const getObjectiveColors = (index: number) => {
    const colorClasses = [
      "border-rose-100 bg-rose-50/20 hover:border-rose-200 dark:border-rose-950/20 dark:bg-rose-950/5",
      "border-sky-100 bg-sky-50/20 hover:border-sky-200 dark:border-sky-950/20 dark:bg-sky-950/5",
      "border-indigo-100 bg-indigo-50/20 hover:border-indigo-200 dark:border-indigo-950/20 dark:bg-indigo-950/5",
      "border-pink-100 bg-pink-50/20 hover:border-pink-200 dark:border-pink-950/20 dark:bg-pink-950/5",
      "border-emerald-100 bg-emerald-50/20 hover:border-emerald-200 dark:border-emerald-950/20 dark:bg-emerald-950/5",
      "border-cyan-100 bg-cyan-50/20 hover:border-cyan-200 dark:border-cyan-950/20 dark:bg-cyan-950/5",
      "border-teal-100 bg-teal-50/20 hover:border-teal-200 dark:border-teal-950/20 dark:bg-teal-950/5",
      "border-violet-100 bg-violet-50/20 hover:border-violet-200 dark:border-violet-950/20 dark:bg-violet-950/5",
      "border-amber-100 bg-amber-50/20 hover:border-amber-200 dark:border-amber-950/20 dark:bg-amber-950/5",
    ];
    return colorClasses[index] || colorClasses[0];
  };

  const menuItems = [
    { id: "sec1", label: content.toc.sec1 },
    { id: "sec2", label: content.toc.sec2 },
    { id: "sec3", label: content.toc.sec3 },
    { id: "sec4", label: content.toc.sec4 },
    { id: "sec5", label: content.toc.sec5 },
    { id: "sec6", label: content.toc.sec6 },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen dark:bg-slate-950 dark:text-slate-200">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-20 text-white md:px-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_45rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.05),transparent_35rem)]" />
        
        {/* Glow ambient background lights */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/accueil" className="hover:text-white transition">{content.hero.breadcrumbHome}</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-white transition">{content.hero.breadcrumbServices}</Link>
              <ChevronRight size={12} />
              <span className="text-yellow-400">{content.hero.breadcrumbCurrent}</span>
            </nav>

            {/* Badge */}
            <span className="inline-block rounded-full bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-yellow-400 shadow-sm">
              {content.hero.badge}
            </span>

            {/* Main title */}
            <h1 className="font-Montserrat text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight text-white max-w-4xl">
              {content.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="font-Montserrat text-lg sm:text-xl md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb/Back link for sticky layout */}
      <div className="border-b border-slate-200/60 bg-white/70 py-4 backdrop-blur-md sticky top-[64px] z-30 dark:bg-slate-900/70 dark:border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft size={14} /> {content.toc.backLink}
          </Link>
        </div>
      </div>

      {/* Main content grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          
          {/* Left Column: Sticky Summary Navigation (hidden on mobile) */}
          <aside className="hidden lg:block">
            <div className="sticky top-[140px] space-y-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_8px_30px_rgba(15,23,42,0.02)]">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-Montserrat text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {content.toc.title}
                </h3>
              </div>
              
              <ul className="space-y-1.5">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block rounded-lg px-3 py-2 text-xs font-bold transition-all ${
                        activeSection === item.id
                          ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-2 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Column: Content sections */}
          <div className="space-y-16 md:space-y-24">
            
            {/* Section 1: Presentation */}
            <motion.section
              id="sec1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(15,23,42,0.02)] space-y-6">
                <h2 className="font-Montserrat text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {content.sec1.title}
                </h2>
                
                <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-start">
                  <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {content.sec1.p1}
                    </p>
                    <p>{content.sec1.p2}</p>
                    <p>{content.sec1.p3}</p>
                  </div>
                  
                  {/* Callout Box */}
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 dark:from-blue-950/20 dark:to-indigo-950/10 dark:border-blue-900/30">
                    <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <p className="text-xs font-semibold leading-relaxed text-blue-900 dark:text-blue-300">
                      {content.sec1.callout}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 2: Contexte & Justification */}
            <motion.section
              id="sec2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(15,23,42,0.02)] space-y-6">
                <h2 className="font-Montserrat text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {content.sec2.title}
                </h2>

                <div className="grid gap-6 md:grid-row-2">
                  <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    <p>{content.sec2.p1}</p>
                    <p>{content.sec2.p2}</p>
                  </div>
                  <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    <p>{content.sec2.p3}</p>
                    <p className="font-semibold text-blue-900 dark:text-blue-300 rounded-2xl bg-blue-50/50 border border-blue-100/40 p-5 dark:bg-blue-950/10 dark:border-blue-950/30">
                      {content.sec2.p4}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 3: Vision, Mission & Valeurs */}
            <motion.section
              id="sec3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="space-y-8">
                {/* Vision & Mission Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  
                  {/* Vision Card */}
                  <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden group">
                    <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/5 blur-2xl group-hover:scale-150 transition duration-500" />
                    <Target className="h-10 w-10 text-yellow-400 mb-4" />
                    <h3 className="font-Montserrat text-xl font-bold mb-3">{content.sec3.visionTitle}</h3>
                    <p className="text-[14px] leading-relaxed text-slate-200">{content.sec3.visionText}</p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden group border border-slate-800">
                    <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl group-hover:scale-150 transition duration-500" />
                    <Compass className="h-10 w-10 text-sky-400 mb-4" />
                    <h3 className="font-Montserrat text-xl font-bold mb-3">{content.sec3.missionTitle}</h3>
                    <p className="text-[14px] leading-relaxed text-slate-200">{content.sec3.missionText}</p>
                  </div>

                </div>

                {/* Values Card */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(15,23,42,0.02)] space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-Montserrat text-2xl font-bold text-slate-900 dark:text-white">
                      {content.sec3.valuesTitle}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {content.sec3.valuesText}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {content.sec3.valuesList.map((val, idx) => (
                      <motion.div
                        key={val.name}
                        whileHover={{ y: -4 }}
                        className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800/50"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 dark:bg-blue-950 dark:text-blue-400 mb-2">
                          0{idx + 1}
                        </span>
                        <h4 className="font-Montserrat text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
                          {val.name}
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                          {val.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 4: SWOT */}
            <motion.section
              id="sec4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(15,23,42,0.02)] space-y-6">
                <div className="space-y-2">
                  <h2 className="font-Montserrat text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {content.sec4.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {content.sec4.intro}
                  </p>
                </div>

                {/* SWOT 2x2 Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                  
                  {/* Strengths */}
                  <div className="p-6 rounded-2xl border border-emerald-200/60 bg-emerald-50/20 dark:border-emerald-950/40 dark:bg-emerald-950/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                        {getSwotIcon("strengths")}
                      </div>
                      <h3 className="font-Montserrat text-lg font-bold text-emerald-900 dark:text-emerald-300">
                        {content.sec4.swot.strengths.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {content.sec4.swot.strengths.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="p-6 rounded-2xl border border-rose-200/60 bg-rose-50/20 dark:border-rose-950/40 dark:bg-rose-950/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-900/30">
                        {getSwotIcon("weaknesses")}
                      </div>
                      <h3 className="font-Montserrat text-lg font-bold text-rose-900 dark:text-rose-300">
                        {content.sec4.swot.weaknesses.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {content.sec4.swot.weaknesses.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Opportunities */}
                  <div className="p-6 rounded-2xl border border-sky-200/60 bg-sky-50/20 dark:border-sky-950/40 dark:bg-sky-950/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-900/30">
                        {getSwotIcon("opportunities")}
                      </div>
                      <h3 className="font-Montserrat text-lg font-bold text-sky-900 dark:text-sky-300">
                        {content.sec4.swot.opportunities.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {content.sec4.swot.opportunities.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Threats */}
                  <div className="p-6 rounded-2xl border border-amber-200/60 bg-amber-50/20 dark:border-amber-950/40 dark:bg-amber-950/5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
                        {getSwotIcon("threats")}
                      </div>
                      <h3 className="font-Montserrat text-lg font-bold text-amber-900 dark:text-amber-300">
                        {content.sec4.swot.threats.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {content.sec4.swot.threats.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.section>

            {/* Section 5: Objectives */}
            <motion.section
              id="sec5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-Montserrat text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {content.sec5.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {content.sec5.intro}
                  </p>
                </div>

                {/* 3x3 Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {content.sec5.objectives.map((obj, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className={`p-6 rounded-2xl border transition-all flex flex-col ${getObjectiveColors(
                        index
                      )}`}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                        {getObjectiveIcon(index)}
                      </div>
                      
                      <h3 className="font-Montserrat text-[15px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {obj.title}
                      </h3>
                      
                      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 flex-1">
                        {obj.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Section 6: Approaches & Perspectives */}
            <motion.section
              id="sec6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-36"
            >
              <div className="space-y-10">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_32px_rgba(15,23,42,0.02)] space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-Montserrat text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {content.sec6.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {content.sec6.intro}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {content.sec6.approaches.map((approach, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 dark:border-slate-800/60 dark:bg-slate-900/30"
                      >
                        <h3 className="font-Montserrat text-sm font-bold text-slate-900 dark:text-white mb-2">
                          {approach.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-light">
                          {approach.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Callout: Perspectives */}
                <div className="relative overflow-hidden rounded-2xl bg-blue-950 p-8 text-white shadow-xl md:p-12">
                  <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                  
                  <div className="relative z-10 space-y-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                        <TrendingUp className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h2 className="font-Montserrat text-2xl font-extrabold tracking-tight">
                        {content.sec6.perspectivesTitle}
                      </h2>
                    </div>

                    <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-slate-100 font-light">
                      <p>{content.sec6.perspectivesP1}</p>
                      <p>{content.sec6.perspectivesP2}</p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/Contact"
                        className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-yellow-300 transition-colors shadow-md"
                      >
                        {locale === "fr" ? "Nous contacter" : locale === "en" ? "Contact us" : "Wasiliana nasi"}{" "}
                        <ArrowRight size={14} className="text-slate-950 font-black" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
