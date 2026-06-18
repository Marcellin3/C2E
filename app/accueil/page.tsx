"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";
import { useAdminContent } from "../data/adminContent";
import { useTranslation } from "../i18n/TranslationProvider";

export default function Accueil() {
  const { t, locale } = useTranslation();
  const adminContent = useAdminContent();

  const objectives = [
    { icon: BarChart3, ...t.accueil.objectives[0] },
    { icon: GraduationCap, ...t.accueil.objectives[1] },
    { icon: Lightbulb, ...t.accueil.objectives[2] },
    { icon: ShieldCheck, ...t.accueil.objectives[3] },
  ];

  const partners = [
    { icon: Handshake, ...t.accueil.partners[0] },
    { icon: ShieldCheck, ...t.accueil.partners[1] },
    { icon: Users, ...t.accueil.partners[2] },
    { icon: BriefcaseBusiness, ...t.accueil.partners[3] },
    { icon: Globe2, ...t.accueil.partners[4] },
  ];

  const heroImages = [
    "/photos/téléchargé 1.jpg",
    "/photos/téléchargé 2.jpg",
    "/photos/téléchargé 3.jpg",
  ];
  const valuesContent = {
    fr: {
      label: "Nos valeurs",
      title: "Des principes qui orientent chacune de nos interventions.",
      text: "Au C2E, nos valeurs traduisent notre maniere de travailler avec les institutions, les partenaires et les communautes. Elles guident nos decisions, structurent nos methodes et renforcent la confiance dans chaque mission.",
      cardLabel: "Valeurs",
      items: [
        "Innovation et creativite : C2E developpe des solutions originales, repense les approches classiques et favorise l'emergence de nouvelles connaissances.",
        "Rigueur, integrite et professionnalisme : C2E garantit la qualite scientifique, l'ethique, la transparence et l'excellence dans toutes ses actions.",
        "Responsabilite et engagement : C2E assume pleinement ses missions, respecte ses engagements et oeuvre avec serieux pour des resultats durables.",
        "Respect, equite et inclusion : C2E valorise chaque individu, promeut la justice sociale et defend une societe inclusive.",
        "Collaboration et cooperation : C2E privilegie le travail collectif, l'ecoute des partenaires et la solidarite pour relever les defis communautaires.",
      ],
    },
    en: {
      label: "Our values",
      title: "Principles that guide each of our interventions.",
      text: "At C2E, our values shape how we work with institutions, partners, and communities. They guide our decisions, structure our methods, and strengthen trust in every mission.",
      cardLabel: "Values",
      items: [
        "Innovation and creativity: C2E develops original solutions, rethinks conventional approaches, and encourages the emergence of new knowledge.",
        "Rigor, integrity, and professionalism: C2E ensures scientific quality, ethics, transparency, and excellence in all its actions.",
        "Responsibility and commitment: C2E fully assumes its missions, honors its commitments, and works seriously for sustainable results.",
        "Respect, equity, and inclusion: C2E values every individual, promotes social justice, and stands for an inclusive society.",
        "Collaboration and cooperation: C2E prioritizes teamwork, partner listening, and solidarity to address community challenges.",
      ],
    },
    sw: {
      label: "Maadili yetu",
      title: "Misingi inayoongoza kila hatua ya kazi yetu.",
      text: "Katika C2E, maadili yetu yanaelekeza namna tunavyofanya kazi na taasisi, washirika na jamii. Yanaongoza maamuzi yetu, yanaimarisha mbinu zetu na kujenga uaminifu katika kila jukumu.",
      cardLabel: "Maadili",
      items: [
        "Ubunifu na uhalisia mpya: C2E hubuni suluhisho za kipekee, hufikiria upya mbinu za kawaida na kuhamasisha maarifa mapya.",
        "Umakini, uadilifu na taaluma: C2E huhakikisha ubora wa kisayansi, maadili, uwazi na ubora katika kila hatua.",
        "Uwajibikaji na kujitolea: C2E hubeba wajibu wa kazi zake kikamilifu, hutimiza ahadi zake na kufanya kazi kwa umakini kwa matokeo ya kudumu.",
        "Heshima, usawa na ujumuishi: C2E humthamini kila mtu, huendeleza haki ya kijamii na kutetea jamii jumuishi.",
        "Ushirikiano na umoja: C2E hupendelea kazi ya pamoja, kusikiliza washirika na mshikamano katika kukabili changamoto za jamii.",
      ],
    },
  }[locale];

  const recentStudiesContent = {
    fr: {
      label: "Nos études récentes",
      title: "Des projets réalisés qui traduisent notre expertise de terrain.",
      text: "Découvrez une sélection de missions menées par le C2E auprès des institutions, organisations et partenaires de développement. Chaque intervention associe rigueur méthodologique, écoute du contexte local et recherche d'impact durable.",
      cta: "Voir toutes les réalisations",
    },
    en: {
      label: "Our recent studies",
      title: "Completed projects that reflect our field expertise.",
      text: "Explore a selection of assignments delivered by C2E with institutions, organizations, and development partners. Each intervention combines methodological rigor, local context awareness, and a focus on lasting impact.",
      cta: "View all",
    },
    sw: {
      label: "Tafiti zetu za karibuni",
      title: "Miradi iliyotekelezwa inayoonesha utaalamu wetu wa uwanjani.",
      text: "Chunguza baadhi ya kazi zilizotekelezwa na C2E pamoja na taasisi, mashirika, na washirika wa maendeleo. Kila kazi inachanganya umakini wa mbinu, uelewa wa mazingira ya eneo, na lengo la athari endelevu.",
      cta: "Tazama zaidi",
    },
  }[locale];

  const recentStudies = t.realisation.projects.slice(0, 6);

  const [activeStudy, setActiveStudy] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStudy((current) => (current + 1) % recentStudies.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [recentStudies.length]);

  const showPreviousStudy = () => {
    setActiveStudy((current) =>
      current === 0 ? recentStudies.length - 1 : current - 1
    );
  };

  const showNextStudy = () => {
    setActiveStudy((current) => (current + 1) % recentStudies.length);
  };

  const visibleStudies = [0, 1, 2].map(
    (offset) => recentStudies[(activeStudy + offset) % recentStudies.length]
  );

  return (
    <main className="overflow-hidden bg-[#eef4fb] text-slate-900">
      <section className="relative isolate overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${activeImage === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(4,16,37,0.94) 0%, rgba(4,16,37,0.86) 34%, rgba(4,16,37,0.46) 70%, rgba(4,16,37,0.76) 100%), url('${image}')`,
            }}
          />
        ))}
        <div className="absolute left-0 top-0 h-full w-32 bg-[linear-gradient(180deg,_rgba(30,112,255,0.78),_rgba(9,46,118,0.22))] [clip-path:polygon(0_0,100%_0,56%_100%,0_100%)]" />
        <div className="absolute left-14 top-0 h-full w-20 bg-[linear-gradient(180deg,_rgba(89,154,255,0.46),_rgba(14,59,142,0.14))] [clip-path:polygon(0_0,100%_0,52%_100%,0_100%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-[linear-gradient(270deg,_rgba(58,158,255,0.18),_transparent)] md:block" />
        <div className="absolute right-[8%] top-[18%] hidden h-40 w-72 rounded-full bg-sky-400/10 blur-3xl md:block" />
        <div className="relative mx-auto min-h-[500px] max-w-7xl px-4 py-14 sm:px-6 md:min-h-[620px] md:py-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl py-8 text-white "
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/95 backdrop-blur-md">
              {t.accueil.badge}
            </span>

            <h1 className="mt-6 max-w-[850px] font-Montserrat text-[2.5rem] font-bold leading-[1.08] tracking-normal text-white sm:text-5xl md:text-6xl">
              {t.accueil.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-200 md:text-[18px]">
              {t.accueil.heroText}
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-flex"
            >
              <Link
                href="/Contact"
                className="glass-hover interactive-lift rounded-full bg-[#1ca8ff] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_45px_rgba(28,168,255,0.36)] transition hover:bg-sky-400"
              >
                {t.common.contactUs}
              </Link>
            </motion.div>

            <div className="mt-10 flex items-center gap-3">
              {heroImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`${t.accueil.aboutLabel} ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${activeImage === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[540px] px-2">
            <div className="relative grid grid-cols-[1.18fr_0.82fr] gap-3 bg-white p-3 sm:gap-4 sm:p-4">
              {[
                "/photos/téléchargé 4.jpg",
                "/photos/téléchargé 1.jpg",
                "/photos/téléchargé 2.jpg",
                "/photos/téléchargé 3.jpg",
              ].map((image, index) => (
                <div
                  key={image}
                  className={`bg-cover bg-center shadow-[0_16px_40px_rgba(15,23,42,0.14)] ${index === 0
                    ? "min-h-[180px] rounded-[1.8rem_1rem_1rem_1rem] sm:min-h-[260px] sm:rounded-[2.3rem_1.1rem_1.1rem_1.1rem]"
                    : index === 1
                      ? "min-h-[180px] rounded-[1rem_1.8rem_1rem_1rem] sm:min-h-[260px] sm:rounded-[1.1rem_2.3rem_1.1rem_1.1rem]"
                      : index === 2
                        ? "min-h-[110px] rounded-[1rem_1rem_1rem_1.8rem] sm:min-h-[162px] sm:rounded-[1.1rem_1.1rem_1.1rem_2.3rem]"
                        : "min-h-[110px] rounded-[1rem_1rem_1.8rem_1rem] sm:min-h-[162px] sm:rounded-[1.1rem_1.1rem_2.3rem_1.1rem]"
                    }`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(11,34,82,0.06), rgba(11,34,82,0.20)), url('${image}')`,
                  }}
                />
              ))}

              <div className="absolute left-1/2 top-[54%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_18px_38px_rgba(45,119,255,0.28)] sm:h-24 sm:w-24 sm:border-[5px]">
                <img
                  src="/photos/logo ok.png"
                  alt="Logo C2E"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                {t.accueil.aboutLabel}
              </p>
              <h2 className="font-Montserrat mt-4 max-w-2xl text-[2.45rem] font-bold leading-[1.15] text-slate-900">
                {t.accueil.aboutTitle}
              </h2>
            </div>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {t.accueil.aboutText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-100 bg-white px-8 py-10 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-Montserrat text-2xl font-bold text-slate-900">
                  {t.accueil.missionTitle}
                </h3>
              </div>

              <p className="mt-6 text-[15px] leading-7 text-slate-500">
                {t.accueil.missionText}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-100 bg-white px-8 py-10 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="font-Montserrat text-2xl font-bold text-slate-900">
                  {t.accueil.visionTitle}
                </h3>
              </div>

              <p className="mt-6 text-[15px] leading-7 text-slate-500">
                {t.accueil.visionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              {t.accueil.objectivesLabel}
            </p>

            <h2 className="font-Montserrat mt-4 text-[2rem] font-bold leading-[1.15] text-slate-900 sm:text-[2.4rem] md:text-[3.2rem]">
              {t.accueil.objectivesTitle}
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {t.accueil.objectivesText}
            </p>
          </div>

          <div className="mx-auto flex max-w-[620px] flex-col items-stretch gap-5 sm:flex-row sm:items-start md:gap-6">
            <div className="flex flex-1 flex-col gap-5 md:-translate-y-8 md:gap-6">
              {[objectives[0], objectives[2]].map((item, index) => {
                const Icon = item.icon;
                const cardClass =
                  index === 0
                    ? "bg-[linear-gradient(135deg,#1e3a8a_0%,#0f172a_100%)] text-white shadow-[0_16px_36px_rgba(30,58,138,0.15)]"
                    : "border border-slate-100 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.04)]";
                const textClass =
                  index === 0 ? "text-white/80" : "text-slate-500";
                const iconClass =
                  index === 0 ? "text-sky-300" : "text-blue-600";

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className={`rounded-2xl px-7 py-8 md:px-8 md:py-9 ${cardClass}`}
                  >
                    <Icon className={`mb-6 h-8 w-8 ${iconClass}`} />
                    <h3 className="font-Montserrat text-[1.35rem] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-6 ${textClass}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-1 flex-col gap-5 md:translate-y-8 md:gap-6">
              {[objectives[1], objectives[3]].map((item, index) => {
                const Icon = item.icon;
                const isBlue = index === 1;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className={`rounded-2xl px-7 py-8 md:px-8 md:py-9 ${isBlue
                      ? "bg-[linear-gradient(135deg,#1e3a8a_0%,#0f172a_100%)] text-white shadow-[0_16px_36px_rgba(30,58,138,0.15)]"
                      : "border border-slate-100 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                      }`}
                  >
                    <Icon
                      className={`mb-6 h-8 w-8 ${isBlue ? "text-sky-300" : "text-blue-600"
                        }`}
                    />
                    <h3 className="font-Montserrat text-[1.35rem] font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-6 ${isBlue ? "text-white/80" : "text-slate-500"
                        }`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-14 sm:px-6 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mt-4 text-[2.5rem] font-semibold leading-tight text-blue-900">
              {t.accueil.reasonsTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {t.accueil.reasons.map((reason) => (
              <motion.div
                key={reason.number}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-[1.05rem] font-semibold tracking-[0.14em] text-slate-400">
                    {reason.number}
                  </span>
                  <span className="h-px max-w-[54px] flex-1 bg-slate-300 transition-colors duration-300 group-hover:bg-blue-500" />
                </div>

                <h3 className="mt-4 max-w-[15rem] text-2xl font-semibold leading-[1.08] text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-5 max-w-[18rem] text-[15px] leading-8 text-slate-500">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-slate-50 bg-white py-16">
        <div className="mx-auto mb-10 max-w-7xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
            {t.accueil.partnersLabel}
          </p>
        </div>

        <div className="group relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {[...adminContent.partners, ...t.accueil.actualPartners, ...adminContent.partners, ...t.accueil.actualPartners].map(
              (partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="mx-5 flex h-[78px] w-[250px] shrink-0 items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-16 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
                  />
                  <span className="block min-w-0 whitespace-normal break-words text-sm font-semibold leading-5 text-slate-700">
                    {partner.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      <section className="bg-[#f7fbff] px-4 py-16 sm:px-6 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              {valuesContent.label}
            </p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] text-slate-900 sm:text-[2.2rem] md:text-[3rem]">
              {valuesContent.title}
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {valuesContent.text}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-2xl border border-slate-100 bg-white px-5 pb-6 pt-12 shadow-[0_12px_36px_rgba(15,23,42,0.04)] sm:px-8 sm:pb-8 sm:pt-14"
          >
            <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_100%)] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(30,58,138,0.2)]">
              {valuesContent.cardLabel}
            </div>

            <div className="space-y-6">
              {valuesContent.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl px-2 py-1 sm:gap-5"
                >
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <p className="text-[15px] leading-7 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              {recentStudiesContent.label}
            </p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] text-slate-900 sm:text-[2.15rem] md:text-[3rem]">
              {recentStudiesContent.title}
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {recentStudiesContent.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/realisation"
                className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition hover:bg-blue-900"
              >
                {recentStudiesContent.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousStudy}
                  aria-label="Projet précédent"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={showNextStudy}
                  aria-label="Projet suivant"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -right-6 top-10 hidden h-48 w-48 rounded-full bg-sky-100 blur-3xl lg:block" />
            <div className="relative grid gap-4 xl:grid-cols-[1.1fr_0.72fr]">
              <motion.article
                key={visibleStudies[0].title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_22px_55px_rgba(15,23,42,0.10)]"
              >
                <div
                  className="min-h-[260px] bg-cover bg-center sm:min-h-[330px]"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.42)), url('${visibleStudies[0].image}')`,
                  }}
                />
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                      {t.realisation.categories[visibleStudies[0].categoryKey]}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      {visibleStudies[0].date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[1.45rem] font-semibold leading-tight text-slate-900">
                    {visibleStudies[0].title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {visibleStudies[0].description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-blue-900">
                    {visibleStudies[0].client}
                  </p>
                </div>
              </motion.article>

              <div className="grid gap-4">
                {visibleStudies.slice(1).map((project, index) => (
                  <button
                    key={`${project.title}-${index}`}
                    type="button"
                    onClick={() =>
                      setActiveStudy(
                        (activeStudy + index + 1) % recentStudies.length
                      )
                    }
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-[0_14px_34px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.11)]"
                  >
                    <div
                      className="h-32 bg-cover bg-center transition duration-300 group-hover:scale-[1.02]"
                      style={{
                        backgroundImage: `linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.32)), url('${project.image}')`,
                      }}
                    />
                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">
                        {t.realisation.categories[project.categoryKey]}
                      </p>
                      <h4 className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
                        {project.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {recentStudies.map((project, index) => (
                <button
                  key={`${project.title}-dot-${index}`}
                  type="button"
                  onClick={() => setActiveStudy(index)}
                  aria-label={`Afficher le projet ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${activeStudy === index
                    ? "w-8 bg-blue-900"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </main>
  );
}
