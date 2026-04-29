"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Footer from "../componen/Footer";
import { useAdminContent } from "../data/adminContent";
import { getProjectsWithFeaturedStudies } from "../data/featuredStudies";
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
      label: "Nos recentes",
      title: "Des missions recentes qui illustrent notre expertise de terrain.",
      cta: "Voir plus",
    },
    en: {
      label: "Our recent studies",
      title: "Recent assignments that reflect our field expertise.",
      cta: "View all",
    },
    sw: {
      label: "Tafiti zetu za karibuni",
      title: "Majukumu ya karibuni yanayoonesha utaalamu wetu wa uwanjani.",
      cta: "Tazama zaidi",
    },
  }[locale];

  const recentStudies = getProjectsWithFeaturedStudies(
    locale,
    t.realisation.projects
  ).slice(0, 4);

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
        <div className="relative mx-auto min-h-[500px] max-w-7xl px-14 py-14 sm:px-6 md:min-h-[620px] md:py-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl py-8 text-white"
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/95 backdrop-blur-md">
              {t.accueil.badge}
            </span>

            <h1 className="mt-6 max-w-[700px] text-[2.35rem] font-black leading-[1.02] tracking-[-0.03em] sm:text-[3rem] md:text-[4.85rem]">
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
              <p className="text-3xl font-bold uppercase tracking-[0.22em] text-black">
                {t.accueil.aboutLabel}
              </p>
              <h2 className="mt-4 max-w-2xl text-[2.45rem] font-semibold leading-[1.1] text-blue-900/90">
                {t.accueil.aboutTitle}
              </h2>
            </div>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {t.accueil.aboutText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-14 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-sky-100 bg-white px-8 py-10 shadow-[0_18px_45px_rgba(59,130,246,0.10)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-[2rem] font-semibold text-blue-700">
                  {t.accueil.missionTitle}
                </h3>
              </div>

              <p className="mt-8 text-[17px] leading-8 text-slate-600 md:text-[18px]">
                {t.accueil.missionText}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-yellow-200 bg-white px-8 py-10 shadow-[0_18px_45px_rgba(217,70,239,0.10)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-200 text-yellow-500">
                  <Globe2 className="h-7 w-7" />
                </div>
                <h3 className="text-[2rem] font-semibold text-yellow-400">
                  {t.accueil.visionTitle}
                </h3>
              </div>

              <p className="mt-8 text-[17px] leading-8 text-slate-600 md:text-[18px]">
                {t.accueil.visionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-14 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-[2.4rem] font-semibold leading-[1.08] text-blue-900 md:text-[3.2rem]">
              {t.accueil.objectivesLabel}
            </p>

            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[1.08] text-slate-900 md:text-[3.2rem]">
              {t.accueil.objectivesTitle}
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600 md:text-[18px]">
              {t.accueil.objectivesText}
            </p>
          </div>

          <div className="mx-auto flex max-w-[620px] items-start gap-5 md:gap-6">
            <div className="flex flex-1 flex-col gap-5 md:-translate-y-8 md:gap-6">
              {[objectives[0], objectives[2]].map((item, index) => {
                const Icon = item.icon;
                const cardClass =
                  index === 0
                    ? "bg-[linear-gradient(135deg,#0f79ff_0%,#123f87_100%)] text-white shadow-[0_24px_55px_rgba(15,121,255,0.22)]"
                    : "border border-slate-100 bg-white text-slate-900 shadow-[0_18px_38px_rgba(15,23,42,0.08)]";
                const textClass =
                  index === 0 ? "text-white/80" : "text-slate-500";
                const iconClass =
                  index === 0 ? "text-white/85" : "text-sky-600";

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className={`rounded-[2rem] px-7 py-8 md:px-8 md:py-9 ${cardClass}`}
                  >
                    <Icon className={`mb-6 h-10 w-10 ${iconClass}`} />
                    <h3 className="text-[1.45rem] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className={`mt-4 text-sm leading-7 ${textClass}`}>
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
                    className={`rounded-[2rem] px-7 py-8 md:px-8 md:py-9 ${isBlue
                      ? "bg-[linear-gradient(135deg,#0f79ff_0%,#123f87_100%)] text-white shadow-[0_24px_55px_rgba(15,121,255,0.22)]"
                      : "border border-slate-100 bg-white text-slate-900 shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
                      }`}
                  >
                    <Icon
                      className={`mb-6 h-10 w-10 ${isBlue ? "text-white/85" : "text-sky-600"
                        }`}
                    />
                    <h3 className="text-[1.45rem] font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-7 ${isBlue ? "text-white/80" : "text-slate-500"
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
                  className="mx-5 flex h-[78px] w-[250px] shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
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

      <section className="bg-[#f7fbff] px-4 py-20 sm:px-6 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              {valuesContent.label}
            </p>
            <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.08] text-slate-900 md:text-[3rem]">
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
            className="relative rounded-[2.2rem] border border-sky-100 bg-white px-5 pb-6 pt-12 shadow-[0_24px_60px_rgba(34,120,255,0.12)] sm:px-8 sm:pb-8 sm:pt-14"
          >
            <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#0666db_0%,#1495ff_100%)] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(6,102,219,0.28)]">
              {valuesContent.cardLabel}
            </div>

            <div className="space-y-6">
              {valuesContent.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.5rem] px-2 py-1 sm:gap-5"
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

      <section className="overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="max-w-md">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              {recentStudiesContent.label}
            </p>
            <h2 className="mt-4 text-[2.8rem] font-semibold leading-[0.95] text-slate-900 sm:text-[3.5rem] md:text-[4.4rem]">
              Etudes
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-slate-600">
              {recentStudiesContent.title}
            </p>

            <Link
              href="/realisation"
              className="mt-7 inline-flex items-center rounded-[0.6rem] bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
            >
              {recentStudiesContent.cta}
            </Link>

            <div className="mt-8 flex items-center gap-3">
              {recentStudies.map((study, index) => (
                <button
                  key={study.title}
                  type="button"
                  onClick={() => setActiveStudy(index)}
                  aria-label={`${recentStudiesContent.label} ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${activeStudy === index
                    ? "w-10 bg-slate-900"
                    : "w-2.5 bg-slate-400 hover:bg-slate-600"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-stretch gap-4 sm:gap-5">
              {recentStudies.map((_, offset) => {
                const study =
                  recentStudies[(activeStudy + offset) % recentStudies.length];
                const isActive = offset === 0;

                return (
                  <motion.article
                    key={`${study.title}-${offset}`}
                    className={`relative shrink-0 overflow-hidden rounded-[1.6rem] bg-white ${isActive
                      ? "h-[25rem] w-[18rem] sm:h-[28rem] sm:w-[20rem]"
                      : "mt-6 h-[20rem] w-[13rem] sm:mt-8 sm:h-[23rem] sm:w-[15rem]"
                      }`}
                    initial={{ opacity: 0.7, y: 18 }}
                    animate={{
                      opacity: isActive ? 1 : 0.82,
                      scale: isActive ? 1 : 0.96,
                      y: isActive ? 0 : 18,
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.04) 0%, rgba(15,23,42,0.18) 35%, rgba(15,23,42,0.88) 100%), url('${study.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.05)_48%,rgba(15,23,42,0.90)_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                        <span>{study.client}</span>
                        <span className="h-1 w-1 rounded-full bg-white/45" />
                        <span>{study.date}</span>
                      </div>

                      <h3 className="mt-3 text-[1.2rem] font-semibold leading-tight sm:text-[1.45rem]">
                        {study.title}
                      </h3>

                      {isActive ? (
                        <p className="mt-3 text-sm leading-7 text-white/78">
                          {study.description}
                        </p>
                      ) : null}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="overflow-hidden bg-[#fefefe] px-4 py-14 text-blue-900 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-7xl">
          <Globe2
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-56 right-[-7rem] hidden h-[36rem] w-[36rem] text-[#021332] opacity-[0.18] xl:block"
            strokeWidth={1}
          />

          <div className="relative grid gap-10 xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-10 xl:gap-y-12">
            <div className="relative flex min-h-[320px] flex-col xl:pr-10">
              <h2 className="mt-5 max-w-[22rem] text-[2.1rem] font-semibold leading-[1.18] text-[#053692] sm:text-[2.55rem] md:text-[3.15rem] xl:text-[3.55rem]">
                {t.accueil.trustTitle}
              </h2>

              <motion.div
                whileHover={{ x: 3 }}
                className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#062764] xl:absolute xl:bottom-6 xl:left-[21.5rem]"
                aria-label={t.accueil.trustArrowLabel}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>

            {partners.slice(0, 2).map((partner, index) => {
              const Icon = partner.icon;

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="min-h-[260px] rounded-[4px] border-2 border-blue-900 bg-transparent px-5 pb-4 pt-4 sm:min-h-[310px] sm:px-6"
                >
                  <Icon className="h-14 w-14 text-[#0623c6]" strokeWidth={1.7} />
                  <h3 className="mt-10 text-[2.1rem] font-semibold leading-none text-yellow-500">
                    {partner.name}
                  </h3>
                  <p className="mt-6 max-w-[20rem] text-[1.05rem] leading-[1.9] text-[#0623c6]">
                    {partner.description}
                  </p>
                </motion.div>
              );
            })}

            {partners.slice(2).map((partner, index) => {
              const Icon = partner.icon;

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="min-h-[260px] rounded-[4px] border-2 border-blue-900 bg-transparent px-5 pb-8 pt-6 sm:min-h-[310px] sm:px-9 sm:pb-10 sm:pt-8"
                >
                  <Icon className="relative z-10 h-14 w-14 text-[#0623c6]" strokeWidth={1.7} />
                  <h3 className="relative z-10 mt-10 text-[2.1rem] font-semibold leading-none text-yellow-500">
                    {partner.name}
                  </h3>
                  <p className="relative z-10 mt-6 max-w-[20rem] text-[1.05rem] leading-[1.9] text-[#0623c6]">
                    {partner.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>*/}

      <Footer />
    </main>
  );
}
