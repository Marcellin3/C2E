"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Compass,
  ClipboardList,
  Database,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Compass size={28} />,
      title: "Conception & Planification Stratégique",
      text: "Analyses stratégiques, conception de politiques publiques, élaboration de projets et études d’évaluabilité pour garantir des interventions solides dès leur genèse.",
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Suivi, Évaluation, Apprentissage & Rédévalité(MEAL)",
      text: "Conception de systèmes MEAL complets : baseline, évaluations intermédiaires et finales, intégration de l’analyse de risques et gestion de la complexité.",
    },
    {
      icon: <Database size={28} />,
      title: "Ingénierie des Données & Digitalisation",
      text: "Mise en place de plateformes numériques (KoboCollect, REDCap) et analyse quantitative et qualitative rigoureuse.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Renforcement des Capacités & Coaching",
      text: "Formations spécialisées, coaching en gestion de projets et autonomisation des acteurs locaux.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Recherche, Innovation & Partenariats",
      text: "Méthodologies innovantes, conférences et partenariats nationaux et internationaux.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Expertise Transversale & Audit",
      text: "Interventions multisectorielles et audits financiers pour garantir transparence et redevabilité.",
    },
  ];

  const consultants = [
    {
      name: "Dr Patrick MUTUTA | PhD Sciences Environnementales",
      image: "/photos/Patric.jpg",
      desc: "Expert senior avec plus de 15 ans d'expérience en Évaluation d'Impact, Planification Stratégique, Gestion des Organisations & Conduite d'études complexes et d'évaluations finales de projets humanitaires et de développement en RDC. Avce une expertise de terrain éprouvée, accompagnant les organisations Nationales et internationales dans l'optimisation de leurs performances et la définition de leurs orientations stratégiques.",
    },
    {
      name: "Philemon MBARAMBARA",
      image: "/consultants/philemon.jpg",
      desc: "Candidat au PhD en Systèmes, Organisations et Politiques de Santé - Chercheur en santé communautaire-Expert en conception de plans stratégiques institutionnels des organisation Privée et Publique-Plus de 15 ans dans les Evaluation des Projets Humanitaires et de développments.",
    },
    {
      name: "Marcellin MULEZI",
      image: "/photos/Mulezi.jpeg",
      desc: "Technicien en Développement Rural|Spécialiste en conception, élaboration et Mise en oeuvre des projets de Développement|Data Analyst certifié|Web 3 Builder.",
    },
    {
      name: "Charmant MUTUTA",
      image: "/photos/Charmant.jpg",
      desc: "Spécialiste en gestion et coordination de projets.",
    },
    {
      name: "Prince BITAKI",
      image: "/photos/Prince.jpg",
      desc: "Economiste Mathématicien et Chercheur d'Université Spécialiste en Logistique Supply chain, Administration et Ressources humaines. Avec 10 ans d'expérience en Logistique et gestion de stock.",
    },
    {
      name: "Etienne BUHURU",
      image: "/photos/Buhuru.jpg",
      desc: "Economiste et Spécialiste en Administration et finance, Plus de 10 ans d’expérience dans la gestion administrative financière et budgétaire de projet humanitaires et développement. Avec une expertise solide en gestion des subventions, Contrôle interne, Conformité aux exigences des baileurs, reporting financier et Supervision Comptable.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ce programme m'a permis de comprendre enfin ce qu'est la blockchain et comment Cardano peut servir nos projets locaux. Accessible, concret, motivant.",
      author: "Participant·e",
      role: "Promotion Onboarding - Goma",
      accent: "bg-[linear-gradient(135deg,#eaf7ff_0%,#d8efff_100%)]",
      image: "/photos/téléchargé 4.jpg",
    },
    {
      quote:
        "L'accompagnement du C2E nous a aidés à mieux structurer notre projet, poser des indicateurs utiles et renforcer la qualité de notre suivi sur le terrain.",
      author: "Responsable de projet",
      role: "Organisation partenaire - Nord-Kivu",
      accent: "bg-[linear-gradient(135deg,#edf8ff_0%,#dcefff_100%)]",
      image: "/photos/Prince.jpg",
    },
    {
      quote:
        "Une équipe disponible, méthodique et ancrée dans le terrain. Les recommandations formulées étaient claires, utiles et directement applicables à notre contexte.",
      author: "Coordonnateur",
      role: "Programme communautaire - RDC",
      accent: "bg-[linear-gradient(135deg,#eef8ff_0%,#d7f0ff_100%)]",
      image: "/photos/Charmant.jpg",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="relative overflow-hidden bg-[#dff5ff] px-14 pb-24 pt-12 text-blue-900">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gray-50 [clip-path:ellipse(80%_100%_at_50%_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md pb-8 pt-6"
          >
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-[0_10px_24px_rgba(14,116,219,0.08)]">
              Centre d'Expertise et d'Évaluation
            </span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.06] text-blue-950 md:text-[4.2rem]"
            >
              Nos Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-md text-[17px] leading-8 text-slate-700"
            >
              Le Centre d’Expertise et d’Évaluation (C2E) accompagne les ONG,
              institutions et partenaires techniques dans la recherche, la
              planification stratégique, l’évaluation et le suivi des projets de
              développement.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services#services-grid" className="glass-hover interactive-lift rounded-full bg-blue-950 px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition hover:bg-blue-900">
                Nos services
              </Link>
              <Link href="/Contact" className="glass-hover interactive-lift rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-600 shadow-[0_12px_26px_rgba(14,116,219,0.08)] transition hover:bg-slate-50">
                En savoir plus
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            className="relative mx-auto flex min-h-[520px] w-full max-w-[700px] items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-14 left-14 rounded-[999px] border-4 border-white bg-white p-1 shadow-[0_18px_34px_rgba(14,116,219,0.12)]"
            >
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-4 rounded-[999px] border-4 border-white bg-white p-1 shadow-[0_18px_34px_rgba(14,116,219,0.12)]"
            >
            </motion.div>

            <div className="relative flex h-[430px] w-[430px] items-center justify-center rounded-full bg-white/90 shadow-[0_28px_70px_rgba(14,116,219,0.16)]">
              <div className="relative flex h-[310px] w-[310px] items-center justify-center overflow-hidden rounded-full border-[12px] border-white bg-[linear-gradient(135deg,#f4fbff_0%,#dff4ff_100%)] shadow-[0_18px_40px_rgba(14,116,219,0.16)]">
                <div className="relative h-50 w-50 md:h-44 md:w-44">
                  <Image
                    src="/photos/logo ok.png"
                    alt="Logo C2E"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="absolute left-8 top-[42%] flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg">
                <span className="text-xl">✦</span>
              </div>

              <div className="absolute right-8 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg">
                <span className="text-lg">➤</span>
              </div>

              <div className="absolute left-2 top-28 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/photos/projet.jpg"
                  alt="Expert C2E"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-[46%] h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/photos/téléchargé 4.jpg"
                  alt="Consultant C2E"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-8 top-14 rounded-[1.25rem] bg-[linear-gradient(135deg,#47c9ff_0%,#1f78cf_100%)] px-6 py-4 text-white shadow-[0_22px_48px_rgba(31,120,207,0.28)]"
            >
              <p className="text-2xl text-blue-100">+10</p>
              <p className="mt-1 font-display text-sm font-semibold text-yellow-400">
                Projets acompagner
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-2 top-44 rounded-[1.25rem] bg-white px-6 py-4 text-blue-900 shadow-[0_22px_48px_rgba(14,116,219,0.12)]"
            >
              <p className="text-2xl text-blue-100">+15</p>
              <p className="mt-1 font-display text-sm font-semibold text-yellow-400">
              Experts dans diferent domaines
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services-grid" className="relative overflow-hidden bg-gray-50 px-4 py-16 md:px-20">
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-7 md:grid-cols-3 items-center">
            {services.map((service, index) => {
              const highlighted = index === 0 || index === 4;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-xl px-8 py-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] ${highlighted
                    ? "border border-sky-200 bg-[linear-gradient(135deg,#8fe3ff_0%,#68cfff_35%,#84ddff_100%)]"
                    : "border border-white/80 bg-white"
                    }`}
                >
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${highlighted
                      ? "bg-white text-blue-700"
                      : "bg-blue-950 text-white"
                      }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="max-w-[18rem] font-display text-[1.5rem] font-semibold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[28rem] text-[15px] leading-7 text-gray-600">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/photos/super.png"
              alt="Carte du monde"
              className="w-full opacity-80"
            />

            <motion.div
              animate={{ x: [0, 80, 160, 240, 320] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-[20%] top-[45%]"
            >
              ✈️
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-semibold leading-snug text-gray-800 md:text-[3.2rem]">
              Notre <span className="text-blue-700">Rayon d’Action</span>
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Le <strong>C2E</strong> intervient sur toute l’étendue de la
              République Démocratique du Congo et peut étendre ses activités à
              d’autres régions du monde selon les opportunités et les besoins
              des partenaires.
            </p>

            <p className="mb-8 leading-relaxed text-gray-600">
              Nos interventions couvrent plusieurs secteurs stratégiques
              notamment la santé, l’éducation, l’environnement et la
              gouvernance. Nous accompagnons les ONG, institutions publiques et
              partenaires techniques à travers des études, évaluations et
              projets financés par des bailleurs nationaux et internationaux.
            </p>

            <a href="https://maps.google.com/?q=Goma,RDC" target="_blank" rel="noreferrer" className="glass-hover interactive-lift inline-flex rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-yellow-500">
              Voir nos zones d’intervention →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10 md:px-20">
        <div className="mb-16 text-center">
          <Users size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="font-display text-5xl font-semibold">Notre Equipe</h2>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:shadow-2xl"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-display text-[1.65rem] font-semibold text-blue-700">
                  {consultant.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {consultant.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-display text-xl font-sm text-blue-950 md:text-6xl">
              Ce qu&apos;ils en disent de nous
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500 md:text-xl">
              Une communauté qui grandit à Goma autour de nos programmes, de
              nos partenaires et de notre accompagnement.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-[1120px] px-0 md:px-14">
            <button
              type="button"
              onClick={showPreviousTestimonial}
              aria-label="Témoignage précédent"
              className="absolute left-0 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#1459a7] text-white shadow-[0_18px_36px_rgba(20,89,167,0.28)] transition hover:bg-[#0f4c90] md:-left-8"
            >
              <FaChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={showNextTestimonial}
              aria-label="Témoignage suivant"
              className="absolute right-0 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#1459a7] text-white shadow-[0_18px_36px_rgba(20,89,167,0.28)] transition hover:bg-[#0f4c90] md:-right-8"
            >
              <FaChevronRight size={18} />
            </button>

            <motion.div
              key={currentTestimonial.author}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_28px_70px_rgba(15,23,42,0.10)]"
            >
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[300px] overflow-hidden rounded-t-[2.5rem] md:min-h-[430px] md:rounded-l-[2.5rem] md:rounded-tr-none">
                  <div className={`absolute inset-0 ${currentTestimonial.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,196,255,0.42)_0%,rgba(255,255,255,0)_62%)]" />
                  <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_16px_34px_rgba(14,116,219,0.14)] md:h-[190px] md:w-[190px]">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="px-2 py-2 md:px-4 md:py-4">
                  <p className="text-6xl leading-none text-slate-200">&ldquo;</p>
                  <p className="mt-4 text-sm text-slate-700 md:text-[1.60rem]">
                    {currentTestimonial.quote}
                  </p>
                  <div className="mt-12">
                    <p className="text-2xl font-semibold text-blue-950">
                      {currentTestimonial.author}
                    </p>
                    <p className="mt-2 text-xl text-slate-500">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.author}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Afficher le témoignage ${index + 1}`}
                  className={`h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? "w-10 bg-[#1459a7]"
                      : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10">
        <div className="border-t border-white/10 bg-blue-900/90 px-10 py-12 text-white backdrop-blur-2xl">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-display text-4xl font-semibold text-yellow-400">
                C2E
              </h3>
              <p className="text-sm leading-relaxed opacity-80">
                Centre d’Expertise et d’Évaluation basé à Goma. Experts en
                planification, évaluation et recherche appliquée pour un impact
                durable en RDC.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-display text-[1.7rem] font-semibold">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                {["Accueil", "Réalisations", "Services", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link href={item === "Accueil" ? "/accueil" : item === "Réalisations" ? "/realisation" : item === "Services" ? "/services" : "/Contact"} className="interactive-lift w-fit transition-colors hover:text-yellow-400">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-[1.7rem] font-semibold">
                Contact
              </h3>
              <div className="space-y-4 text-sm">
                <a href="mailto:c2experteval@gmail.com" className="interactive-lift flex items-center gap-3 hover:text-yellow-400">
                  <MdEmail className="text-yellow-400" size={20} />
                  <span>c2experteval@gmail.com</span>
                </a>
                <a href="https://wa.me/243997674407" target="_blank" rel="noreferrer" className="interactive-lift flex items-center gap-3 hover:text-yellow-400">
                  <FaWhatsapp className="text-yellow-400" size={20} />
                  <span>+243 997 674 407</span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="interactive-lift flex items-center gap-3 hover:text-yellow-400">
                  <FaLinkedin className="text-yellow-400" size={20} />
                  <span>LinkedIn / C2E</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs opacity-50">
            © 2026 Centre d’Expertise et d’Évaluation - Excellence & Rigueur
          </div>
        </div>
      </footer>
    </div>
  );
}
