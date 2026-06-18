export const locales = ["fr", "en", "sw"] as const;

export type Locale = (typeof locales)[number];

type Translations = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    brand: string;
    languageLabel: string;
    languages: Record<Locale, string>;
    contactUs: string;
    learnMore: string;
    viewServices: string;
    contact: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    interactiveMap: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    realisations: string;
    resources: string;
    blogNews: string;
    mediaGallery: string;
    opportunitiesCareers: string;
    contact: string;
    location: string;
  };
  footer: {
    description: string;
    navigation: string;
    contact: string;
    copyright: string;
  };
  accueil: {
    badge: string;
    heroTitle: string;
    heroText: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutText: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    objectivesLabel: string;
    objectivesTitle: string;
    objectivesText: string;
    reasonsLabel: string;
    reasonsTitle: string;
    partnersLabel: string;
    trustTitle: string;
    trustArrowLabel: string;
    footerDescription: string;
    objectives: Array<{
      title: string;
      description: string;
    }>;
    reasons: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    partners: Array<{
      name: string;
      description: string;
    }>;
    actualPartners: Array<{
      name: string;
      logo: string;
    }>;
  };
  servicesPage: {
    badge: string;
    title: string;
    intro: string;
    servicesCta: string;
    learnMoreCta: string;
    projectsSupported: string;
    expertsLabel: string;
    actionTitle: string;
    actionTextOne: string;
    actionTextTwo: string;
    actionCta: string;
    teamTitle: string;
    testimonialsTitle: string;
    testimonialsText: string;
    previousTestimonial: string;
    nextTestimonial: string;
    testimonialDotLabel: string;
    services: Array<{
      title: string;
      text: string;
    }>;
    consultants: Array<{
      name: string;
      image: string;
      desc: string;
    }>;
    testimonials: Array<{
      quote: string;
      author: string;
      role: string;
      accent: string;
      image: string;
    }>;
  };
  realisation: {
    eyebrow: string;
    title: string;
    intro: string;
    projectsCta: string;
    talkCta: string;
    searchPlaceholder: string;
    grid: string;
    list: string;
    filters: string;
    recent: string;
    oldest: string;
    reset: string;
    projectsFoundSingular: string;
    projectsFoundPlural: string;
    noResults: string;
    sideTitleOne: string;
    sideTextOne: string;
    sideCtaOne: string;
    sideTitleTwo: string;
    sideTextTwo: string;
    sideCtaTwo: string;
    appointmentCta: string;
    statsTitle: string;
    statsProjects: string;
    statsCountry: string;
    statsYears: string;
    allCategories: string;
    categories: {
      planning: string;
      study: string;
      evaluation: string;
      accountability: string;
      research: string;
    };
    impactStats: Array<{
      value: string;
      label: string;
    }>;
    projects: Array<{
      title: string;
      categoryKey: keyof Translations["realisation"]["categories"];
      client: string;
      date: string;
      description: string;
      image: string;
    }>;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    officeTitle: string;
    officeAddress: string;
    officialEmail: string;
    phoneTitle: string;
    phoneLocal: string;
    phoneInternational: string;
    phoneSupport: string;
    formTitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    workEmail: string;
    workEmailPlaceholder: string;
    subject: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    mapLabel: string;
    subjects: {
      evaluationRequest: string;
      capacityBuilding: string;
      strategicPartnership: string;
      other: string;
    };
  };
};

export const translations: Record<Locale, Translations> = {
  fr: {
    meta: {
      title: "C2E - Centre d'Expertise et d'Evaluation",
      description:
        "C2E accompagne les institutions dans la planification, le suivi et l'évaluation des politiques et programmes de développement.",
    },
    common: {
      brand: "C2E",
      languageLabel: "Langue",
      languages: { fr: "Français", en: "English", sw: "Kiswahili" },
      contactUs: "Contactez-nous",
      learnMore: "En savoir plus",
      viewServices: "Voir nos services",
      contact: "Contact",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn / C2E",
      interactiveMap: "Carte interactive",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      realisations: "Réalisations",
      resources: "Ressources",
      blogNews: "Blog & Actualités",
      mediaGallery: "Galerie",
      opportunitiesCareers: "Opportunités & Carrières",
      contact: "Contact",
      location: "Goma, RDC",
    },
    footer: {
      description:
        "Centre d'Expertise et d'Évaluation basé à Goma. Experts en planification, évaluation et recherche appliquée pour un impact durable en RDC.",
      navigation: "Navigation",
      contact: "Contact",
      copyright:
        "© 2026 Centre d'Expertise et d'Évaluation - Excellence & Rigueur",
    },
    accueil: {
      badge: "Centre d'Expertise et d'Evaluation",
      heroTitle:
        "Nous créons des solutions stratégiques durables pour les organisations",
      heroText:
        "Nous accompagnons les institutions publiques et privées dans le suivi-évaluation, la recherche et la gestion axée sur les résultats.",
      aboutLabel: "À propos de nous",
      aboutTitle: "Le Centre d'Expertise et d'Évaluation (C2E)",
      aboutText:
        "est une organisation sans but lucratif spécialisée en recherche, suivi-évaluation et appui stratégique des politiques et programmes de développement. Nous accompagnons les institutions publiques, privées et les organisations dans la conception, la mise en oeuvre et l'amélioration de leurs interventions grâce à des approches rigoureuses, participatives et basées sur des données probantes. À travers nos services, nous contribuons à renforcer les capacités locales et à générer un impact durable au service des communautés.",
      missionTitle: "Notre Mission",
      missionText:
        "La mission du C2E est de fournir des solutions innovantes et idoines aux institutions gouvernementales, non gouvernementales, privées et universitaires dans la conception et la planification des politiques, projets et programmes de développement, leur mise en oeuvre, leur suivi-évaluation ainsi que dans leur apprentissage issu des évaluations.",
      visionTitle: "Notre Vision",
      visionText:
        "La vision du C2E est de faire une différence dans la conduite responsable de la recherche et des évaluations de qualité des politiques et programmes de développement, ainsi que dans la formation continue des bénéficiaires de nos services. Cette vision porte une RDC où chaque projet de développement a un impact significatif sur l'amélioration de la qualité de vie des communautés.",
      objectivesLabel: "Nos Objectifs",
      objectivesTitle:
        "Des priorités claires pour renforcer l'impact du développement.",
      objectivesText:
        "Le C2E a pour objectif principal de mener des études et évaluations de haute qualité qui éclairent les commanditaires, renforcent les capacités locales en suivi-évaluation et contribuent à l'impact des politiques publiques et des programmes de développement en RDC.",
      reasonsLabel: "Quelques Raisons",
      reasonsTitle: "Pourquoi Nous",
      partnersLabel: "Nos Partenaires",
      trustTitle: "Des relations de confiance au service d'un impact durable",
      trustArrowLabel: "Découvrir nos partenariats",
      footerDescription:
        "Centre d'Expertise et d'Évaluation basé à Goma. Experts en planification, évaluation et recherche appliquée pour un impact durable en RDC.",
      objectives: [
        {
          title: "Évaluation & Analyse d'Impact",
          description:
            "Réaliser des études de faisabilité et des évaluations d'impact afin de mesurer l'efficacité des politiques publiques dans la santé, l'économie et l'environnement.",
        },
        {
          title: "Capacités",
          description:
            "Formations spécialisées en suivi-évaluation, avec un focus sur le leadership des jeunes chercheurs.",
        },
        {
          title: "Innovation",
          description:
            "Produire des recherches indépendantes et intégrer les nouvelles technologies.",
        },
        {
          title: "Plaidoyer & Redevabilité",
          description:
            "Garantir une gestion axée sur les résultats et la transparence au service de la population.",
        },
      ],
      reasons: [
        {
          number: "01",
          title: "Expertise contextuelle solide",
          description:
            "Nous combinons la rigueur méthodologique avec une compréhension fine des réalités institutionnelles et communautaires en RDC.",
        },
        {
          number: "02",
          title: "Accompagnement de bout en bout",
          description:
            "De la conception à l'apprentissage issu des évaluations, nous restons présents à chaque étape des politiques, projets et programmes.",
        },
        {
          number: "03",
          title: "Décisions mieux éclairées",
          description:
            "Nos études et évaluations produisent des données utiles, lisibles et directement mobilisables par les commanditaires.",
        },
        {
          number: "04",
          title: "Approche agile et responsable",
          description:
            "Nous adaptons nos méthodes aux besoins du terrain tout en maintenant des standards élevés d'éthique, de qualité et de redevabilité.",
        },
        {
          number: "05",
          title: "Renforcement des capacités locales",
          description:
            "Nous faisons de chaque mission une opportunité de transfert de compétences en suivi-évaluation, recherche et gestion des résultats.",
        },
        {
          number: "06",
          title: "Impact orienté développement",
          description:
            "Notre travail vise des changements concrets sur la qualité des interventions et sur la vie des communautés bénéficiaires.",
        },
      ],
      partners: [
        {
          name: "Collaboration",
          description:
            "Nous collaborons avec des organisations de confiance qui partagent nos valeurs et notre engagement envers un impact positif et durable.",
        },
        {
          name: "Qualité",
          description:
            "Nos partenaires sont rigoureusement sélectionnés pour leur expertise, leur professionnalisme et leur capacité à fournir des services d'excellence.",
        },
        {
          name: "Engagement",
          description:
            "Nous nous entourons de partenaires engagés qui placent l'humain et le développement des communautés au coeur de leurs actions.",
        },
        {
          name: "Expertise",
          description:
            "Nous travaillons avec des experts reconnus dans leurs domaines pour garantir des solutions innovantes, adaptées et durables.",
        },
        {
          name: "Impact",
          description:
            "Ensemble, nous créons des initiatives à fort impact, visant à améliorer durablement la qualité de vie et à construire un avenir meilleur.",
        },
      ],
      actualPartners: [
        { name: "Ephphatha", logo: "/photos/ephaphatha.jpg" },
        { name: "Heal Africa", logo: "/photos/heal.png" },
        { name: "World Vision", logo: "/photos/world.jpg" },
        { name: "Goma Actif", logo: "/photos/logo ok.png" },
        { name: "Institut Français", logo: "/photos/logo ok.png" },
        { name: "Mulezi RDC", logo: "/photos/Mulezi.jpeg" },
        { name: "360 Congo Invest", logo: "/photos/logo ok.png" },
      ],
    },
    servicesPage: {
      badge: "Centre d'Expertise et d'Évaluation",
      title: "Nos Services",
      intro:
        "Le Centre d'Expertise et d'Évaluation (C2E) accompagne les ONG, institutions et partenaires techniques dans la recherche, la planification stratégique, l'évaluation et le suivi des projets de développement.",
      servicesCta: "Nos services",
      learnMoreCta: "En savoir plus",
      projectsSupported: "Projets accompagnés",
      expertsLabel: "Experts dans différents domaines",
      actionTitle: "Notre Rayon d'Action",
      actionTextOne:
        "Le C2E intervient sur toute l'étendue de la République Démocratique du Congo et peut étendre ses activités à d'autres régions du monde selon les opportunités et les besoins des partenaires.",
      actionTextTwo:
        "Nos interventions couvrent plusieurs secteurs stratégiques notamment la santé, l'éducation, l'environnement et la gouvernance. Nous accompagnons les ONG, institutions publiques et partenaires techniques à travers des études, évaluations et projets financés par des bailleurs nationaux et internationaux.",
      actionCta: "Voir nos zones d'intervention",
      teamTitle: "Notre Équipe",
      testimonialsTitle: "Ce qu'ils disent de nous",
      testimonialsText:
        "Une communauté qui grandit à Goma autour de nos programmes, de nos partenaires et de notre accompagnement.",
      previousTestimonial: "Témoignage précédent",
      nextTestimonial: "Témoignage suivant",
      testimonialDotLabel: "Afficher le témoignage",
      services: [
        {
          title: "Conception & Planification Stratégique",
          text: "Analyses stratégiques, conception de politiques publiques, élaboration de projets et études d'évaluabilité pour garantir des interventions solides dès leur genèse.",
        },
        {
          title: "Suivi, Évaluation, Apprentissage & Redevabilité (MEAL)",
          text: "Conception de systèmes MEAL complets : baseline, évaluations intermédiaires et finales, intégration de l'analyse de risques et gestion de la complexité.",
        },
        {
          title: "Ingénierie des Données & Digitalisation",
          text: "Mise en place de plateformes numériques (KoboCollect, REDCap) et analyse quantitative et qualitative rigoureuse.",
        },
        {
          title: "Renforcement des Capacités & Coaching",
          text: "Formations spécialisées, coaching en gestion de projets et autonomisation des acteurs locaux.",
        },
        {
          title: "Recherche, Innovation & Partenariats",
          text: "Méthodologies innovantes, conférences et partenariats nationaux et internationaux.",
        },
        {
          title: "Expertise Transversale & Audit",
          text: "Interventions multisectorielles et audits financiers pour garantir transparence et redevabilité.",
        },
      ],
      consultants: [
        {
          name: "Philemon MBARAMBARA",
          image: "/photos/projet.jpg",
          desc: "Chercheur en santé communautaire et expert en conception de plans stratégiques institutionnels pour les organisations publiques et privées.",
        },
        {
          name: "Dr Patrick MUTUTA | PhD Sciences Environnementales",
          image: "/photos/Patrick.jpg",
          desc: "Expert senior avec plus de 15 ans d'expérience en évaluation d'impact, planification stratégique, gestion des organisations et conduite d'études complexes ainsi que d'évaluations finales de projets humanitaires et de développement en RDC.",
        },
        {
          name: "Charmant MUTUTA",
          image: "/photos/Charmant.jpg",
          desc: "Spécialiste en gestion et coordination de projets.",
        },
        {
          name: "Etienne BUHURU",
          image: "/photos/Buhuru.jpg",
          desc: "Économiste et spécialiste en administration et finance, plus de 10 ans d'expérience dans la gestion administrative financière et budgétaire de projets humanitaires et développement.Avec une expertise solide en gestion des subventions, contrôle interne, conformité aux exigences des bailleurs, reporting financier et supervision compatable.",
        },
        {
          name: "Prince BITAKI",
          image: "/photos/Prince.jpg",
          desc: "Économiste mathématicien et chercheur universitaire, spécialiste en logistique, supply chain, administration et ressources humaines.",
        },
        {
          name: "Marcellin MULEZI",
          image: "/photos/Mulezi.jpeg",
          desc: "Technicien en développement rural, spécialiste en conception et mise en oeuvre des projets de développement, data analyst certifié et Web3 builder.",
        },
        {
          name: "Maitre Gilbert CIGOLO",
          image: "/photos/.jpeg",
          desc: "Technicien en développement rural, spécialiste en conception et mise en oeuvre des projets de développement, data analyst certifié et Web3 builder.",
        },
        {
          name: "Marcellin MULEZI",
          image: "/photos/Mulezi.jpeg",
          desc: "Technicien en développement rural, spécialiste en conception et mise en oeuvre des projets de développement, data analyst certifié et Web3 builder.",
        },
        {
          name: "Marcellin MULEZI",
          image: "/photos/Mulezi.jpeg",
          desc: "Technicien en développement rural, spécialiste en conception et mise en oeuvre des projets de développement, data analyst certifié et Web3 builder.",
        },
      ],
      testimonials: [
        {
          quote:
            "L'accompagnement du C2E nous a aidés à mieux structurer notre projet, poser des indicateurs utiles et renforcer la qualité de notre suivi sur le terrain.",
          author: "Responsable de projet",
          role: "Organisation partenaire - Nord-Kivu",
          accent: "bg-[linear-gradient(135deg,#eaf7ff_0%,#d8efff_100%)]",
          image: "/photos/Prince.jpg",
        },
        {
          quote:
            "Une équipe disponible, méthodique et ancrée dans le terrain. Les recommandations formulées étaient claires, utiles et directement applicables à notre contexte.",
          author: "Coordonnateur",
          role: "Programme communautaire - RDC",
          accent: "bg-[linear-gradient(135deg,#edf8ff_0%,#dcefff_100%)]",
          image: "/photos/Charmant.jpg",
        },
        {
          quote:
            "Leur approche est rigoureuse et humaine. Nous avons gagné en clarté stratégique et en capacité de pilotage grâce à leur appui.",
          author: "Partenaire institutionnel",
          role: "Programme de développement - RDC",
          accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#d7f0ff_100%)]",
          image: "/photos/téléchargé 4.jpg",
        },
      ],
    },
    realisation: {
      eyebrow: "Solutions en Action",
      title: "Acquérez une expertise avec C2E",
      intro:
        "Des missions concrètes au service du développement durable en RDC. Profitez d'un accompagnement rigoureux pour transformer vos visions en impacts mesurables.",
      projectsCta: "Explorer nos projets",
      talkCta: "Parlons-en",
      searchPlaceholder:
        "Rechercher un projet, une catégorie ou un client...",
      grid: "Grille",
      list: "Liste",
      filters: "Filtres :",
      recent: "Plus récents",
      oldest: "Plus anciens",
      reset: "Réinitialiser",
      projectsFoundSingular: "projet trouvé",
      projectsFoundPlural: "projets trouvés",
      noResults: "Aucun projet ne correspond à votre recherche.",
      sideTitleOne: "Vous avez un projet ?",
      sideTextOne:
        "Nous sommes là pour vous accompagner et toucher plus de communautés, avec des impacts bien mesurables.",
      sideCtaOne: "Découvrez ce que nous pouvons faire pour vous",
      sideTitleTwo: "Parlez à nos experts !",
      sideTextTwo:
        "Laissez-nous un message pour prendre un rendez-vous avec nous.",
      sideCtaTwo: "Parler de votre besoin",
      appointmentCta: "Prendre rendez-vous",
      statsTitle: "Statistiques",
      statsProjects: "Projets",
      statsCountry: "Pays",
      statsYears: "Années",
      allCategories: "Toutes les catégories",
      categories: {
        planning: "Planification",
        study: "Étude",
        evaluation: "Évaluation",
        accountability: "Redevabilité",
        research: "Recherche",
      },
      impactStats: [
        { value: "+10", label: "Projets réalisés dans la communauté" },
        { value: "+6", label: "Organisations accompagnées dans leurs actions" },
        { value: "20", label: "Provinces couvertes par nos projets en RDC" },
        { value: "+500", label: "Bénéficiaires indirects de nos actions" },
      ],
      projects: [
        {
          title: "Plan stratégique ONG Action Solidaire pour la Paix",
          categoryKey: "planning",
          client: "ONG ASP",
          date: "Mars 2023",
          description: "Élaboration du plan stratégique 2023-2027.",
          image: "/photos/plant.jpg",
        },
        {
          title: "Étude de base PNUD Kinshasa",
          categoryKey: "study",
          client: "PNUD",
          date: "Décembre 2023",
          description:
            "Programme de substitution partielle au bois énergie en RDC.",
          image: "/photos/etude de base.jpg",
        },
        {
          title: "Évaluation Heal Africa & Ephphatha",
          categoryKey: "evaluation",
          client: "WorldShare",
          date: "Février 2024",
          description:
            "Évaluation organisationnelle et formation en gestion de projet.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "Plan stratégique CR-OLK",
          categoryKey: "planning",
          client: "CR-OLK",
          date: "2024",
          description:
            "Plan stratégique 2024-2028 du centre de recherche lacustre.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "Meta-évaluation CVA",
          categoryKey: "evaluation",
          client: "World Vision",
          date: "2024",
          description:
            "Analyse de l'approche Citizen Voice and Action en RDC.",
          image: "/photos/téléchargé 1.jpg",
        },
        {
          title: "Projet Empowered 2 Protect",
          categoryKey: "evaluation",
          client: "Help a Child",
          date: "2024",
          description:
            "Évaluation finale du projet de lutte contre les violences basées sur le genre.",
          image: "/photos/image 03.jpg",
        },
        {
          title: "Projet GPSA - Cordaid",
          categoryKey: "accountability",
          client: "Cordaid",
          date: "2024",
          description:
            "Évaluation du projet de redevabilité sociale au Sud-Kivu.",
          image: "/photos/projet.jpg",
        },
        {
          title: "Caravane interreligieuse",
          categoryKey: "research",
          client: "Faith to Action",
          date: "2024",
          description:
            "Étude de cas sur un projet d'apprentissage interreligieux.",
          image: "/photos/téléchargé 2.jpg",
        },
      ],
    },
    contactPage: {
      eyebrow: "Parlez-nous de vos projets",
      title: "Contactez le Centre d'Expertise et d'Évaluation (C2E)",
      officeTitle: "Notre Siège",
      officeAddress:
        "12C Avenue des Ecoles, Quartier les Volcans, Commune de Goma, Ville de Goma, RDC.",
      officialEmail: "Email Officiel",
      phoneTitle: "Lignes Directes",
      phoneLocal: "Goma (RDC)",
      phoneInternational: "International",
      phoneSupport: "Support",
      formTitle: "Envoyez-nous un message",
      fullName: "Nom complet",
      fullNamePlaceholder: "Ex: Jean Mukendi",
      workEmail: "Email professionnel",
      workEmailPlaceholder: "nom@organisation.org",
      subject: "Sujet",
      message: "Votre message",
      messagePlaceholder: "Décrivez votre besoin ici...",
      submit: "Envoyer le message",
      mapLabel: "Carte interactive : Goma, Quartier les Volcans",
      subjects: {
        evaluationRequest: "Demande d'évaluation",
        capacityBuilding: "Renforcement de capacités",
        strategicPartnership: "Partenariat stratégique",
        other: "Autre",
      },
    },
  },
  en: {
    meta: {
      title: "C2E - Center for Expertise and Evaluation",
      description:
        "C2E supports institutions in planning, monitoring, and evaluating development policies and programs.",
    },
    common: {
      brand: "C2E",
      languageLabel: "Language",
      languages: { fr: "French", en: "English", sw: "Swahili" },
      contactUs: "Contact us",
      learnMore: "Learn more",
      viewServices: "View our services",
      contact: "Contact",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn / C2E",
      interactiveMap: "Interactive map",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      realisations: "Projects",
      resources: "Resources",
      blogNews: "Blog & News",
      mediaGallery: "Gallery",
      opportunitiesCareers: "Opportunities & Careers",
      contact: "Contact",
      location: "Goma, DRC",
    },
    footer: {
      description:
        "Center for Expertise and Evaluation based in Goma. Experts in planning, evaluation and applied research for lasting impact in the DRC.",
      navigation: "Navigation",
      contact: "Contact",
      copyright:
        "© 2026 Center for Expertise and Evaluation - Excellence & Rigor",
    },
    accueil: {
      badge: "Center for Expertise and Evaluation",
      heroTitle:
        "We build lasting strategic solutions for organizations",
      heroText:
        "We support public and private institutions in monitoring and evaluation, research, and results-based management.",
      aboutLabel: "About us",
      aboutTitle: "The Center for Expertise and Evaluation (C2E)",
      aboutText:
        "is a non-profit organization specialized in research, monitoring and evaluation, and strategic support for development policies and programs. We support public institutions, private actors, and organizations in the design, implementation, and improvement of their interventions through rigorous, participatory, and evidence-based approaches.",
      missionTitle: "Our Mission",
      missionText:
        "C2E's mission is to provide innovative and relevant solutions to governmental, non-governmental, private, and academic institutions in the design and planning of development policies, projects, and programs, their implementation, monitoring and evaluation, and learning from evaluations.",
      visionTitle: "Our Vision",
      visionText:
        "C2E's vision is to make a difference in the responsible conduct of research and quality evaluations of development policies and programs, while continuously strengthening the capacities of the beneficiaries of our services.",
      objectivesLabel: "Our Objectives",
      objectivesTitle: "Clear priorities to strengthen development impact.",
      objectivesText:
        "C2E's main objective is to conduct high-quality studies and evaluations that inform decision-makers, strengthen local monitoring and evaluation capacities, and contribute to the impact of public policies and development programs in the DRC.",
      reasonsLabel: "A Few Reasons",
      reasonsTitle: "Why Choose Us",
      partnersLabel: "Our Partners",
      trustTitle: "Trusted relationships for lasting impact",
      trustArrowLabel: "Explore our partnerships",
      footerDescription:
        "Center for Expertise and Evaluation based in Goma. Experts in planning, evaluation and applied research for lasting impact in the DRC.",
      objectives: [
        {
          title: "Evaluation & Impact Analysis",
          description:
            "Conduct feasibility studies and impact evaluations to measure the effectiveness of public policies in health, economics, and the environment.",
        },
        {
          title: "Capacity Building",
          description:
            "Specialized monitoring and evaluation training, with a focus on empowering young researchers.",
        },
        {
          title: "Innovation",
          description:
            "Produce independent research and integrate new technologies.",
        },
        {
          title: "Advocacy & Accountability",
          description:
            "Ensure results-based management and transparency in service of communities.",
        },
      ],
      reasons: [
        {
          number: "01",
          title: "Strong contextual expertise",
          description:
            "We combine methodological rigor with a deep understanding of institutional and community realities in the DRC.",
        },
        {
          number: "02",
          title: "End-to-end support",
          description:
            "From design to evaluation learning, we stay engaged at every stage of policies, projects, and programs.",
        },
        {
          number: "03",
          title: "Better-informed decisions",
          description:
            "Our studies and evaluations produce actionable, readable data that sponsors can use directly.",
        },
        {
          number: "04",
          title: "Agile and responsible approach",
          description:
            "We adapt our methods to field realities while maintaining high standards of ethics, quality, and accountability.",
        },
        {
          number: "05",
          title: "Local capacity strengthening",
          description:
            "We turn every mission into an opportunity to transfer skills in monitoring and evaluation, research, and results management.",
        },
        {
          number: "06",
          title: "Development-oriented impact",
          description:
            "Our work aims for tangible improvements in intervention quality and in the lives of beneficiary communities.",
        },
      ],
      partners: [
        {
          name: "Collaboration",
          description:
            "We collaborate with trusted organizations that share our values and commitment to positive and lasting impact.",
        },
        {
          name: "Quality",
          description:
            "Our partners are carefully selected for their expertise, professionalism, and ability to deliver excellence.",
        },
        {
          name: "Commitment",
          description:
            "We work with committed partners who place people and community development at the heart of their action.",
        },
        {
          name: "Expertise",
          description:
            "We partner with recognized experts to ensure innovative, relevant, and sustainable solutions.",
        },
        {
          name: "Impact",
          description:
            "Together, we create high-impact initiatives that improve quality of life and build a better future.",
        },
      ],
      actualPartners: [
        { name: "Ephphatha", logo: "/photos/ephaphatha.jpg" },
        { name: "Heal Africa", logo: "/photos/heal.png" },
        { name: "World Vision", logo: "/photos/world.jpg" },
        { name: "Goma Actif", logo: "/photos/logo ok.png" },
        { name: "French Institute", logo: "/photos/logo ok.png" },
        { name: "Mulezi DRC", logo: "/photos/Mulezi.jpeg" },
        { name: "360 Congo Invest", logo: "/photos/logo ok.png" },
      ],
    },
    servicesPage: {
      badge: "Center for Expertise and Evaluation",
      title: "Our Services",
      intro:
        "The Center for Expertise and Evaluation (C2E) supports NGOs, institutions, and technical partners in research, strategic planning, evaluation, and monitoring of development projects.",
      servicesCta: "Our services",
      learnMoreCta: "Learn more",
      projectsSupported: "Projects supported",
      expertsLabel: "Experts across different fields",
      actionTitle: "Our Geographic Reach",
      actionTextOne:
        "C2E operates across the Democratic Republic of Congo and can expand its work to other regions of the world depending on opportunities and partner needs.",
      actionTextTwo:
        "Our work covers strategic sectors including health, education, environment, and governance. We support NGOs, public institutions, and technical partners through studies, evaluations, and projects funded by national and international donors.",
      actionCta: "See our areas of intervention",
      teamTitle: "Our Team",
      testimonialsTitle: "What they say about us",
      testimonialsText:
        "A growing community in Goma built around our programs, our partners, and our support.",
      previousTestimonial: "Previous testimonial",
      nextTestimonial: "Next testimonial",
      testimonialDotLabel: "Show testimonial",
      services: [
        {
          title: "Strategic Design & Planning",
          text: "Strategic analyses, public policy design, project development, and evaluability studies to ensure strong interventions from the start.",
        },
        {
          title: "Monitoring, Evaluation, Learning & Accountability (MEAL)",
          text: "Design of complete MEAL systems: baselines, midterm and final evaluations, risk analysis, and complexity management.",
        },
        {
          title: "Data Engineering & Digitalization",
          text: "Deployment of digital platforms such as KoboCollect and REDCap, with rigorous quantitative and qualitative analysis.",
        },
        {
          title: "Capacity Building & Coaching",
          text: "Specialized training, project management coaching, and empowerment of local actors.",
        },
        {
          title: "Research, Innovation & Partnerships",
          text: "Innovative methodologies, conferences, and national and international partnerships.",
        },
        {
          title: "Cross-cutting Expertise & Audit",
          text: "Multisector interventions and financial audits to ensure transparency and accountability.",
        },
      ],
      consultants: [
        {
          name: "Dr Patrick MUTUTA | PhD Environmental Sciences",
          image: "/photos/Patrick.jpg",
          desc: "Senior expert with more than 15 years of experience in impact evaluation, strategic planning, organizational management, and complex studies and final evaluations of humanitarian and development projects in the DRC.",
        },
        {
          name: "Philemon MBARAMBARA",
          image: "/photos/projet.jpg",
          desc: "Community health researcher and expert in designing institutional strategic plans for public and private organizations.",
        },
        {
          name: "Marcellin MULEZI",
          image: "/photos/Mulezi.jpeg",
          desc: "Rural development technician, specialist in project design and implementation, certified data analyst, and Web3 builder.",
        },
        {
          name: "Charmant MUTUTA",
          image: "/photos/Charmant.jpg",
          desc: "Specialist in project management and coordination.",
        },
        {
          name: "Prince BITAKI",
          image: "/photos/Prince.jpg",
          desc: "Mathematical economist and university researcher specializing in logistics, supply chain, administration, and human resources.",
        },
        {
          name: "Etienne BUHURU",
          image: "/photos/Buhuru.jpg",
          desc: "Economist and administration and finance specialist with strong expertise in project administration, budgeting, and financial management.",
        },
      ],
      testimonials: [
        {
          quote:
            "C2E's support helped us structure our project better, define useful indicators, and improve the quality of our field monitoring.",
          author: "Project manager",
          role: "Partner organization - North Kivu",
          accent: "bg-[linear-gradient(135deg,#eaf7ff_0%,#d8efff_100%)]",
          image: "/photos/Prince.jpg",
        },
        {
          quote:
            "A responsive, methodical team deeply rooted in field realities. Their recommendations were clear, useful, and directly applicable to our context.",
          author: "Coordinator",
          role: "Community program - DRC",
          accent: "bg-[linear-gradient(135deg,#edf8ff_0%,#dcefff_100%)]",
          image: "/photos/Charmant.jpg",
        },
        {
          quote:
            "Their approach is both rigorous and human. Thanks to their support, we gained strategic clarity and stronger management capacity.",
          author: "Institutional partner",
          role: "Development program - DRC",
          accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#d7f0ff_100%)]",
          image: "/photos/téléchargé 4.jpg",
        },
      ],
    },
    realisation: {
      eyebrow: "Solutions in Action",
      title: "Build expertise with C2E",
      intro:
        "Concrete assignments serving sustainable development in the DRC. Benefit from rigorous support to turn your vision into measurable impact.",
      projectsCta: "Explore our projects",
      talkCta: "Let's talk",
      searchPlaceholder: "Search by project, category, or client...",
      grid: "Grid",
      list: "List",
      filters: "Filters:",
      recent: "Most recent",
      oldest: "Oldest",
      reset: "Reset",
      projectsFoundSingular: "project found",
      projectsFoundPlural: "projects found",
      noResults: "No project matches your search.",
      sideTitleOne: "Do you have a project?",
      sideTextOne:
        "We are here to support you and help reach more communities with measurable impact.",
      sideCtaOne: "Discover what we can do for you",
      sideTitleTwo: "Talk to our experts!",
      sideTextTwo: "Leave us a message to schedule a meeting with us.",
      sideCtaTwo: "Talk about your needs",
      appointmentCta: "Book an appointment",
      statsTitle: "Statistics",
      statsProjects: "Projects",
      statsCountry: "Country",
      statsYears: "Years",
      allCategories: "All categories",
      categories: {
        planning: "Planning",
        study: "Study",
        evaluation: "Evaluation",
        accountability: "Accountability",
        research: "Research",
      },
      impactStats: [
        { value: "+10", label: "Projects completed in the community" },
        { value: "+6", label: "Organizations supported in their actions" },
        { value: "20", label: "Provinces covered by our projects in the DRC" },
        { value: "+500", label: "Indirect beneficiaries of our actions" },
      ],
      projects: [
        {
          title: "Strategic plan for Action Solidaire pour la Paix NGO",
          categoryKey: "planning",
          client: "ASP NGO",
          date: "March 2023",
          description: "Development of the 2023-2027 strategic plan.",
          image: "/photos/plant.jpg",
        },
        {
          title: "UNDP Kinshasa baseline study",
          categoryKey: "study",
          client: "UNDP",
          date: "December 2023",
          description:
            "Partial substitution program for fuel wood in the DRC.",
          image: "/photos/etude de base.jpg",
        },
        {
          title: "Heal Africa & Ephphatha evaluation",
          categoryKey: "evaluation",
          client: "WorldShare",
          date: "February 2024",
          description:
            "Organizational evaluation and project management training.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "CR-OLK strategic plan",
          categoryKey: "planning",
          client: "CR-OLK",
          date: "2024",
          description:
            "2024-2028 strategic plan for the lakeside research center.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "CVA meta-evaluation",
          categoryKey: "evaluation",
          client: "World Vision",
          date: "2024",
          description:
            "Analysis of the Citizen Voice and Action approach in the DRC.",
          image: "/photos/téléchargé 1.jpg",
        },
        {
          title: "Empowered 2 Protect project",
          categoryKey: "evaluation",
          client: "Help a Child",
          date: "2024",
          description:
            "Final evaluation of a project fighting gender-based violence.",
          image: "/photos/image 03.jpg",
        },
        {
          title: "GPSA - Cordaid project",
          categoryKey: "accountability",
          client: "Cordaid",
          date: "2024",
          description:
            "Evaluation of a social accountability project in South Kivu.",
          image: "/photos/projet.jpg",
        },
        {
          title: "Interfaith caravan",
          categoryKey: "research",
          client: "Faith to Action",
          date: "2024",
          description:
            "Case study on an interfaith learning project.",
          image: "/photos/téléchargé 2.jpg",
        },
      ],
    },
    contactPage: {
      eyebrow: "Tell us about your projects",
      title: "Contact the Center for Expertise and Evaluation (C2E)",
      officeTitle: "Our Office",
      officeAddress:
        "12C Avenue des Ecoles, Les Volcans district, Goma commune, Goma city, DRC.",
      officialEmail: "Official Email",
      phoneTitle: "Direct Lines",
      phoneLocal: "Goma (DRC)",
      phoneInternational: "International",
      phoneSupport: "Support",
      formTitle: "Send us a message",
      fullName: "Full name",
      fullNamePlaceholder: "Example: Jean Mukendi",
      workEmail: "Work email",
      workEmailPlaceholder: "name@organization.org",
      subject: "Subject",
      message: "Your message",
      messagePlaceholder: "Describe your needs here...",
      submit: "Send message",
      mapLabel: "Interactive map: Goma, Les Volcans district",
      subjects: {
        evaluationRequest: "Evaluation request",
        capacityBuilding: "Capacity building",
        strategicPartnership: "Strategic partnership",
        other: "Other",
      },
    },
  },
  sw: {
    meta: {
      title: "C2E - Kituo cha Utaalamu na Tathmini",
      description:
        "C2E inasaidia taasisi katika kupanga, kufuatilia, na kutathmini sera na programu za maendeleo.",
    },
    common: {
      brand: "C2E",
      languageLabel: "Lugha",
      languages: { fr: "Kifaransa", en: "Kiingereza", sw: "Kiswahili" },
      contactUs: "Wasiliana nasi",
      learnMore: "Jifunze zaidi",
      viewServices: "Tazama huduma zetu",
      contact: "Mawasiliano",
      email: "Barua pepe",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn / C2E",
      interactiveMap: "Ramani ya moja kwa moja",
    },
    nav: {
      home: "Nyumbani",
      about: "Kuhusu",
      services: "Huduma",
      realisations: "Miradi",
      resources: "Rasilimali",
      blogNews: "Blogu na Habari",
      mediaGallery: "Galeri",
      opportunitiesCareers: "Fursa na Kazi",
      contact: "Mawasiliano",
      location: "Goma, DRC",
    },
    footer: {
      description:
        "Kituo cha Utaalamu na Tathmini kilichopo Goma. Wataalamu wa mipango, tathmini na utafiti wa matumizi kwa athari endelevu nchini DRC.",
      navigation: "Urambazaji",
      contact: "Mawasiliano",
      copyright:
        "© 2026 Kituo cha Utaalamu na Tathmini - Ubora na Umakini",
    },
    accueil: {
      badge: "Kituo cha Utaalamu na Tathmini",
      heroTitle:
        "Tunaunda suluhisho za kimkakati na endelevu kwa mashirika",
      heroText:
        "Tunasaidia taasisi za umma na binafsi katika ufuatiliaji na tathmini, utafiti, na usimamizi unaolenga matokeo.",
      aboutLabel: "Kuhusu sisi",
      aboutTitle: "Kituo cha Utaalamu na Tathmini (C2E)",
      aboutText:
        "ni shirika lisilo la kifaida linalobobea katika utafiti, ufuatiliaji na tathmini, pamoja na msaada wa kimkakati kwa sera na programu za maendeleo. Tunasaidia taasisi za umma, sekta binafsi na mashirika katika kubuni, kutekeleza na kuboresha shughuli zao kwa kutumia mbinu madhubuti, shirikishi na zinazotegemea ushahidi.",
      missionTitle: "Dhamira Yetu",
      missionText:
        "Dhamira ya C2E ni kutoa suluhisho bunifu na zinazofaa kwa taasisi za serikali, zisizo za serikali, binafsi na kitaaluma katika kubuni na kupanga sera, miradi na programu za maendeleo, utekelezaji wake, ufuatiliaji na tathmini, pamoja na kujifunza kutokana na tathmini.",
      visionTitle: "Maono Yetu",
      visionText:
        "Maono ya C2E ni kuleta tofauti katika uendeshaji wa uwajibikaji wa utafiti na tathmini bora za sera na programu za maendeleo, huku ikiendelea kuimarisha uwezo wa wanufaika wa huduma zetu.",
      objectivesLabel: "Malengo Yetu",
      objectivesTitle:
        "Vipaumbele wazi vya kuimarisha athari ya maendeleo.",
      objectivesText:
        "Lengo kuu la C2E ni kufanya tafiti na tathmini zenye ubora wa juu zinazosaidia watoa maamuzi, kuimarisha uwezo wa ndani katika ufuatiliaji na tathmini, na kuchangia athari ya sera za umma na programu za maendeleo nchini DRC.",
      reasonsLabel: "Baadhi ya Sababu",
      reasonsTitle: "Kwa Nini Sisi",
      partnersLabel: "Washirika Wetu",
      trustTitle: "Mahusiano ya kuaminiana kwa athari endelevu",
      trustArrowLabel: "Gundua ushirikiano wetu",
      footerDescription:
        "Kituo cha Utaalamu na Tathmini kilichopo Goma. Wataalamu wa mipango, tathmini na utafiti wa matumizi kwa athari endelevu nchini DRC.",
      objectives: [
        {
          title: "Tathmini na Uchambuzi wa Athari",
          description:
            "Kufanya tafiti za uwezekano na tathmini za athari ili kupima ufanisi wa sera za umma katika afya, uchumi na mazingira.",
        },
        {
          title: "Ujenzi wa Uwezo",
          description:
            "Mafunzo maalum ya ufuatiliaji na tathmini, yakilenga kuwawezesha watafiti vijana.",
        },
        {
          title: "Ubunifu",
          description:
            "Kuzalisha tafiti huru na kuingiza teknolojia mpya.",
        },
        {
          title: "Utetezi na Uwajibikaji",
          description:
            "Kuhakikisha usimamizi unaolenga matokeo na uwazi kwa manufaa ya jamii.",
        },
      ],
      reasons: [
        {
          number: "01",
          title: "Utaalamu thabiti wa muktadha",
          description:
            "Tunachanganya umakini wa mbinu na uelewa wa kina wa hali za taasisi na jamii nchini DRC.",
        },
        {
          number: "02",
          title: "Msaada wa mwisho hadi mwisho",
          description:
            "Kuanzia kubuni hadi kujifunza kutokana na tathmini, tunabaki pamoja katika kila hatua ya sera, miradi na programu.",
        },
        {
          number: "03",
          title: "Maamuzi yaliyo bora zaidi",
          description:
            "Tafiti na tathmini zetu huzalisha data inayoweza kutumika moja kwa moja na wadau.",
        },
        {
          number: "04",
          title: "Mbinu yenye unyumbufu na uwajibikaji",
          description:
            "Tunabadilisha mbinu zetu kulingana na mazingira ya kazi huku tukidumisha viwango vya juu vya maadili, ubora na uwajibikaji.",
        },
        {
          number: "05",
          title: "Kuimarisha uwezo wa ndani",
          description:
            "Tunafanya kila kazi kuwa nafasi ya kuhamisha ujuzi katika ufuatiliaji na tathmini, utafiti na usimamizi wa matokeo.",
        },
        {
          number: "06",
          title: "Athari inayolenga maendeleo",
          description:
            "Kazi yetu inalenga mabadiliko halisi katika ubora wa shughuli na maisha ya jamii zinazonufaika.",
        },
      ],
      partners: [
        {
          name: "Ushirikiano",
          description:
            "Tunashirikiana na mashirika yanayoaminika yanayoshiriki maadili yetu na kujitolea kwa athari chanya na endelevu.",
        },
        {
          name: "Ubora",
          description:
            "Washirika wetu huchaguliwa kwa umakini kwa utaalamu wao, taaluma yao na uwezo wao wa kutoa huduma bora.",
        },
        {
          name: "Kujitolea",
          description:
            "Tunafanya kazi na washirika wanaoweka watu na maendeleo ya jamii mbele ya yote.",
        },
        {
          name: "Utaalamu",
          description:
            "Tunafanya kazi na wataalamu wanaotambulika ili kuhakikisha suluhisho bunifu, yanayofaa na endelevu.",
        },
        {
          name: "Athari",
          description:
            "Kwa pamoja tunaunda mipango yenye athari kubwa inayoboresha maisha na kujenga kesho bora.",
        },
      ],
      actualPartners: [
        { name: "Ephphatha", logo: "/photos/ephaphatha.jpg" },
        { name: "Heal Africa", logo: "/photos/heal.png" },
        { name: "World Vision", logo: "/photos/world.jpg" },
        { name: "Goma Actif", logo: "/photos/logo ok.png" },
        { name: "Institut Français", logo: "/photos/logo ok.png" },
        { name: "Mulezi RDC", logo: "/photos/Mulezi.jpeg" },
        { name: "360 Congo Invest", logo: "/photos/logo ok.png" },
      ],
    },
    servicesPage: {
      badge: "Kituo cha Utaalamu na Tathmini",
      title: "Huduma Zetu",
      intro:
        "C2E inasaidia mashirika yasiyo ya kiserikali, taasisi na washirika wa kiufundi katika utafiti, mipango ya kimkakati, tathmini na ufuatiliaji wa miradi ya maendeleo.",
      servicesCta: "Huduma zetu",
      learnMoreCta: "Jifunze zaidi",
      projectsSupported: "Miradi iliyosaidiwa",
      expertsLabel: "Wataalamu katika nyanja mbalimbali",
      actionTitle: "Eneo Letu la Kazi",
      actionTextOne:
        "C2E inafanya kazi kote katika Jamhuri ya Kidemokrasia ya Kongo na inaweza kupanua shughuli zake katika maeneo mengine ya dunia kulingana na fursa na mahitaji ya washirika.",
      actionTextTwo:
        "Shughuli zetu zinagusa sekta muhimu kama afya, elimu, mazingira na utawala. Tunasaidia NGOs, taasisi za umma na washirika wa kiufundi kupitia tafiti, tathmini na miradi inayofadhiliwa na wafadhili wa kitaifa na kimataifa.",
      actionCta: "Tazama maeneo yetu ya kazi",
      teamTitle: "Timu Yetu",
      testimonialsTitle: "Wanachosema kuhusu sisi",
      testimonialsText:
        "Jamii inayokua huko Goma inayozunguka programu zetu, washirika wetu na msaada wetu.",
      previousTestimonial: "Ushuhuda uliopita",
      nextTestimonial: "Ushuhuda unaofuata",
      testimonialDotLabel: "Onyesha ushuhuda",
      services: [
        {
          title: "Ubunifu na Mipango ya Kimkakati",
          text: "Uchambuzi wa kimkakati, uundaji wa sera za umma, maendeleo ya miradi na tafiti za evaluability ili kuhakikisha shughuli imara tangu mwanzo.",
        },
        {
          title: "Ufuatiliaji, Tathmini, Kujifunza na Uwajibikaji (MEAL)",
          text: "Ubunifu wa mifumo kamili ya MEAL: baseline, tathmini za kati na mwisho, uchambuzi wa hatari na usimamizi wa changamano.",
        },
        {
          title: "Uhandisi wa Data na Ubadilishaji Kidijitali",
          text: "Uwekaji wa majukwaa ya kidijitali kama KoboCollect na REDCap pamoja na uchambuzi makini wa takwimu na ubora.",
        },
        {
          title: "Ujenzi wa Uwezo na Uongozi",
          text: "Mafunzo maalum, ushauri wa usimamizi wa miradi na kuwawezesha wahusika wa ndani.",
        },
        {
          title: "Utafiti, Ubunifu na Ushirikiano",
          text: "Mbinu bunifu, makongamano na ushirikiano wa kitaifa na kimataifa.",
        },
        {
          title: "Utaalamu wa Kisekta Mbalimbali na Ukaguzi",
          text: "Mingilio ya sekta mbalimbali na ukaguzi wa kifedha ili kuhakikisha uwazi na uwajibikaji.",
        },
      ],
      consultants: [
        {
          name: "Dr Patrick MUTUTA | PhD Sayansi za Mazingira",
          image: "/photos/Patrick.jpg",
          desc: "Mtaalamu mwandamizi mwenye uzoefu wa zaidi ya miaka 15 katika tathmini ya athari, mipango ya kimkakati, usimamizi wa mashirika na tafiti changamano za miradi ya kibinadamu na maendeleo nchini DRC.",
        },
        {
          name: "Philemon MBARAMBARA",
          image: "/photos/projet.jpg",
          desc: "Mtafiti wa afya ya jamii na mtaalamu wa kutengeneza mipango ya kimkakati kwa taasisi za umma na binafsi.",
        },
        {
          name: "Marcellin MULEZI",
          image: "/photos/Mulezi.jpeg",
          desc: "Fundi wa maendeleo ya vijijini, mtaalamu wa kubuni na kutekeleza miradi ya maendeleo, mchambuzi wa data aliyeidhinishwa na mbunifu wa Web3.",
        },
        {
          name: "Charmant MUTUTA",
          image: "/photos/Charmant.jpg",
          desc: "Mtaalamu wa usimamizi na uratibu wa miradi.",
        },
        {
          name: "Prince BITAKI",
          image: "/photos/Prince.jpg",
          desc: "Mwanauchumi wa hesabu na mtafiti wa chuo kikuu aliyejikita katika logistiki, supply chain, utawala na rasilimali watu.",
        },
        {
          name: "Etienne BUHURU",
          image: "/photos/Buhuru.jpg",
          desc: "Mwanauchumi na mtaalamu wa utawala na fedha mwenye uzoefu mkubwa katika usimamizi wa miradi, bajeti na fedha.",
        },
      ],
      testimonials: [
        {
          quote:
            "Msaada wa C2E ulitusaidia kupanga mradi wetu vizuri zaidi, kuweka viashiria muhimu na kuimarisha ubora wa ufuatiliaji wetu wa uwanjani.",
          author: "Meneja wa mradi",
          role: "Shirika mshirika - Kivu Kaskazini",
          accent: "bg-[linear-gradient(135deg,#eaf7ff_0%,#d8efff_100%)]",
          image: "/photos/Prince.jpg",
        },
        {
          quote:
            "Timu inayopatikana kirahisi, yenye utaratibu na iliyojikita kwenye uhalisia wa uwanja. Mapendekezo yao yalikuwa wazi na yanatumika moja kwa moja.",
          author: "Mratibu",
          role: "Programu ya jamii - DRC",
          accent: "bg-[linear-gradient(135deg,#edf8ff_0%,#dcefff_100%)]",
          image: "/photos/Charmant.jpg",
        },
        {
          quote:
            "Mbinu yao ni ya kitaalamu na ya kibinadamu kwa wakati mmoja. Tulipata uwazi wa kimkakati na uwezo bora wa kusimamia kazi zetu.",
          author: "Mshirika wa taasisi",
          role: "Programu ya maendeleo - DRC",
          accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#d7f0ff_100%)]",
          image: "/photos/téléchargé 4.jpg",
        },
      ],
    },
    realisation: {
      eyebrow: "Suluhisho Zinazotumika",
      title: "Jenga utaalamu na C2E",
      intro:
        "Kazi halisi zinazohudumia maendeleo endelevu nchini DRC. Pata msaada makini wa kubadilisha maono yako kuwa athari inayopimika.",
      projectsCta: "Chunguza miradi yetu",
      talkCta: "Tuzungumze",
      searchPlaceholder: "Tafuta mradi, kategoria au mteja...",
      grid: "Gridi",
      list: "Orodha",
      filters: "Vichujio:",
      recent: "Mpya zaidi",
      oldest: "Ya zamani zaidi",
      reset: "Weka upya",
      projectsFoundSingular: "mradi umepatikana",
      projectsFoundPlural: "miradi imepatikana",
      noResults: "Hakuna mradi unaolingana na utafutaji wako.",
      sideTitleOne: "Una mradi?",
      sideTextOne:
        "Tuko hapa kukusaidia kufikia jamii nyingi zaidi kwa athari inayopimika.",
      sideCtaOne: "Gundua tunachoweza kukufanyia",
      sideTitleTwo: "Ongea na wataalamu wetu!",
      sideTextTwo: "Tuachie ujumbe ili kupanga miadi na sisi.",
      sideCtaTwo: "Eleza mahitaji yako",
      appointmentCta: "Panga miadi",
      statsTitle: "Takwimu",
      statsProjects: "Miradi",
      statsCountry: "Nchi",
      statsYears: "Miaka",
      allCategories: "Kategoria zote",
      categories: {
        planning: "Mipango",
        study: "Utafiti",
        evaluation: "Tathmini",
        accountability: "Uwajibikaji",
        research: "Utafiti wa kijamii",
      },
      impactStats: [
        { value: "+10", label: "Miradi iliyotekelezwa katika jamii" },
        { value: "+6", label: "Mashirika yaliyosaidiwa katika kazi zao" },
        { value: "20", label: "Mikoa iliyofikiwa na miradi yetu nchini DRC" },
        { value: "+500", label: "Wanufaika wa moja kwa moja na wa pembeni" },
      ],
      projects: [
        {
          title: "Mpango wa kimkakati wa NGO Action Solidaire pour la Paix",
          categoryKey: "planning",
          client: "ONG ASP",
          date: "Machi 2023",
          description: "Uandaaji wa mpango wa kimkakati wa 2023-2027.",
          image: "/photos/plant.jpg",
        },
        {
          title: "Utafiti wa msingi wa PNUD Kinshasa",
          categoryKey: "study",
          client: "PNUD",
          date: "Desemba 2023",
          description:
            "Programu ya kupunguza matumizi ya kuni kama nishati nchini DRC.",
          image: "/photos/etude de base.jpg",
        },
        {
          title: "Tathmini ya Heal Africa na Ephphatha",
          categoryKey: "evaluation",
          client: "WorldShare",
          date: "Februari 2024",
          description:
            "Tathmini ya shirika na mafunzo ya usimamizi wa miradi.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "Mpango wa kimkakati wa CR-OLK",
          categoryKey: "planning",
          client: "CR-OLK",
          date: "2024",
          description:
            "Mpango wa kimkakati wa 2024-2028 wa kituo cha utafiti wa maziwa.",
          image: "/photos/evaluation.jpg",
        },
        {
          title: "Meta-tathmini ya CVA",
          categoryKey: "evaluation",
          client: "World Vision",
          date: "2024",
          description:
            "Uchambuzi wa mbinu ya Citizen Voice and Action nchini DRC.",
          image: "/photos/téléchargé 1.jpg",
        },
        {
          title: "Mradi wa Empowered 2 Protect",
          categoryKey: "evaluation",
          client: "Help a Child",
          date: "2024",
          description:
            "Tathmini ya mwisho ya mradi wa kupambana na ukatili wa kijinsia.",
          image: "/photos/image 03.jpg",
        },
        {
          title: "Mradi wa GPSA - Cordaid",
          categoryKey: "accountability",
          client: "Cordaid",
          date: "2024",
          description:
            "Tathmini ya mradi wa uwajibikaji wa kijamii huko Sud-Kivu.",
          image: "/photos/projet.jpg",
        },
        {
          title: "Msafara wa kidini wa pamoja",
          categoryKey: "research",
          client: "Faith to Action",
          date: "2024",
          description:
            "Utafiti wa kesi kuhusu mradi wa kujifunza kati ya dini mbalimbali.",
          image: "/photos/téléchargé 2.jpg",
        },
      ],
    },
    contactPage: {
      eyebrow: "Tuambie kuhusu miradi yako",
      title: "Wasiliana na Kituo cha Utaalamu na Tathmini (C2E)",
      officeTitle: "Ofisi Yetu",
      officeAddress:
        "12C Avenue des Ecoles, Quartier les Volcans, Commune de Goma, Ville de Goma, DRC.",
      officialEmail: "Barua pepe rasmi",
      phoneTitle: "Namba za moja kwa moja",
      phoneLocal: "Goma (DRC)",
      phoneInternational: "Kimataifa",
      phoneSupport: "Msaada",
      formTitle: "Tutumie ujumbe",
      fullName: "Jina kamili",
      fullNamePlaceholder: "Mfano: Jean Mukendi",
      workEmail: "Barua pepe ya kazi",
      workEmailPlaceholder: "jina@shirika.org",
      subject: "Mada",
      message: "Ujumbe wako",
      messagePlaceholder: "Eleza mahitaji yako hapa...",
      submit: "Tuma ujumbe",
      mapLabel: "Ramani ya moja kwa moja: Goma, Quartier les Volcans",
      subjects: {
        evaluationRequest: "Ombi la tathmini",
        capacityBuilding: "Ujenzi wa uwezo",
        strategicPartnership: "Ushirikiano wa kimkakati",
        other: "Nyingine",
      },
    },
  },
};

export const defaultLocale: Locale = "fr";
