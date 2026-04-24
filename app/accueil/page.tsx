"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Globe2,
  Users,
} from "lucide-react";

const objectives = [
  {
    icon: BarChart3,
    title: "Évaluation & Analyse d'Impact",
    description:
      "Réaliser des études de faisabilité et des évaluations d’impact afin de mesurer l’efficacité des politiques publiques dans la santé, l'économie et l’environnement.",
    tone: "lg",
  },
  {
    icon: GraduationCap,
    title: "Capacités",
    description:
      "Formations spécialisées en suivi-évaluation, avec un focus sur le leadership des jeunes chercheurs.",
    tone: "blue",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Produire des recherches indépendantes et intégrer les nouvelles technologies.",
    tone: "light",
  },
  {
    icon: ShieldCheck,
    title: "Plaidoyer & Redevabilité",
    description:
      "Garantir une gestion axée sur les résultats et la transparence au service de la population.",
    tone: "dark",
  },
];

const reasons = [
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
      "De la conception à l’apprentissage issu des évaluations, nous restons présents à chaque étape des politiques, projets et programmes.",
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
      "Nous adaptons nos méthodes aux besoins du terrain tout en maintenant des standards élevés d’éthique, de qualité et de redevabilité.",
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
];

const partners = [
  {
    name: "Collaboration",
    icon: Handshake,
    description:
      "Nous collaborons avec des organisations de confiance qui partagent nos valeurs et notre engagement envers l’impact positif et durable.",
  },
  {
    name: "Qualité",
    icon: ShieldCheck,
    description:
      "Nos partenaires sont rigoureusement sélectionnés pour leur expertise, leur professionnalisme et leur capacité à fournir des services d’excellence.",
  },
  {
    name: "Engagement",
    icon: Users,
    description:
      "Nous nous entourons de partenaires engagés qui placent l’humain et le développement des communautés au coeur de leurs actions.",
  },
  {
    name: "Expertise",
    icon: BriefcaseBusiness,
    description:
      "Nous travaillons avec des experts reconnus dans leurs domaines pour garantir des solutions innovantes, adaptées et durables.",
  },
  {
    name: "Impact",
    icon: Globe2,
    description:
      "Ensemble, nous créons des initiatives à fort impact, visant à améliorer durablement la qualité de vie et à construire un avenir meilleur.",
  },
];

// Nouveaux partenaires basés sur votre image
const actualPartners = [
  { name: "Ephphatha", logo: "/photos/ephaphatha.jpg" },
  { name: "Heal Africa", logo: "/photos/heal.png" },
  { name: "wold vision", logo: "/photos/world.jpg" },
  { name: "Goma Actif", logo: "/photos/logo ok.png" },
  { name: "Institut Français", logo: "/photos/logo ok.png" },
  { name: "Mulezi RDC", logo: "/photos/Mulezi.jpeg" },
  { name: "360 Congo Invest", logo: "/photos/logo ok.png" },
];

export default function Accueil() {
  const heroImages = [
    "/photos/téléchargé 1.jpg",
    "/photos/téléchargé 2.jpg",
    "/photos/téléchargé 3.jpg",
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

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
        <div className="absolute right-0 top-0 h-full w-[42%] bg-[linear-gradient(270deg,_rgba(58,158,255,0.18),_transparent)]" />
        <div className="absolute right-[8%] top-[18%] h-40 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative mx-auto min-h-[560px] max-w-7xl px-6 py-16 md:min-h-[620px] md:py-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl py-8 text-white"
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-white/95 backdrop-blur-md">
              Centre d'Expertise et d'Evaluation
            </span>

            <h1 className="mt-6 max-w-[700px] text-4xl font-black leading-[1.02] tracking-[-0.03em] md:text-[4.85rem]">
              Nous créons des solutions stratégiques durables pour les Organisations
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-200 md:text-[18px]">
              Nous accompagnons les institutions publiques et privées dans le
              suivi-évaluation, la recherche et la gestion axée sur les résultats.
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
                Contact Us
              </Link>
            </motion.div>

            <div className="mt-10 flex items-center gap-3">
              {heroImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Afficher l'image ${index + 1}`}
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

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[540px] px-2">
            <div className="relative grid grid-cols-[1.18fr_0.82fr] gap-4 bg-white p-4">
              <div
                className="min-h-[260px] rounded-[2.3rem_1.1rem_1.1rem_1.1rem] bg-cover bg-center shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(11,34,82,0.06), rgba(11,34,82,0.20)), url('/photos/téléchargé 4.jpg')",
                }}
              />
              <div
                className="min-h-[260px] rounded-[1.1rem_2.3rem_1.1rem_1.1rem] bg-cover bg-center shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(11,34,82,0.06), rgba(11,34,82,0.20)), url('/photos/téléchargé 1.jpg')",
                }}
              />
              <div
                className="min-h-[162px] rounded-[1.1rem_1.1rem_1.1rem_2.3rem] bg-cover bg-center shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(11,34,82,0.06), rgba(11,34,82,0.20)), url('/photos/téléchargé 2.jpg')",
                }}
              />
              <div
                className="min-h-[162px] rounded-[1.1rem_1.1rem_2.3rem_1.1rem] bg-cover bg-center shadow-[0_16px_40px_rgba(15,23,42,0.14)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(11,34,82,0.06), rgba(11,34,82,0.20)), url('/photos/téléchargé 3.jpg')",
                }}
              />

              <div className="absolute left-1/2 top-[54%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[5px] border-white bg-white shadow-[0_18px_38px_rgba(45,119,255,0.28)]">
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
                About Us
              </p>
              <h2 className="mt-4 max-w-2xl text-[2.45rem] text-blue-900/90 font-semibold leading-[1.1]">
                Le Centre d’Expertise et d’Évaluation (C2E)
              </h2>
            </div>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 md:text-[18px]">
              est une organisation
              sans but lucratif spécialisée en recherche, suivi-évaluation et
              appui stratégique des politiques et programmes de développement.
              Nous accompagnons les institutions publiques, privées et les
              organisations dans la conception, la mise en œuvre et
              l’amélioration de leurs interventions grâce à des approches
              rigoureuses, participatives et basées sur des données probantes.
              À travers nos services, nous contribuons à renforcer les capacités
              locales et à générer un impact durable au service des
              communautés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
          </div>

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
                  Notre Mission
                </h3>
              </div>

              <p className="mt-8 text-[17px] leading-8 text-slate-600 md:text-[18px]">
                La mission du C2E est de fournir des solutions innovantes et
                idoines aux institutions gouvernementales, non gouvernementales,
                privées et universitaires dans la conception et/ou planification
                des politiques, projets et programmes de développement, leur
                mise en œuvre, leur suivi - évaluation ainsi que dans leur
                apprentissage issu des évaluations.
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
                  Notre Vision
                </h3>
              </div>

              <p className="mt-8 text-[17px] leading-8 text-slate-600 md:text-[18px]">
                La vision du C2E est de faire une différence dans la conduite
                responsable de la recherche et des évaluations de qualité des
                politiques et programmes de développement, la formation
                continue des bénéficiaires de nos services. Cette vision veut
                d’une RDC où chaque projet de développement ait un impact
                significatif sur l’amélioration de la qualité de vie de ses
                communautés.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-[2.4rem] font-semibold leading-[1.08] text-blue-900 md:text-[3.2rem]">
              Nos Objectifs
            </p>

            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[1.08] text-slate-900 md:text-[3.2rem]">
              Des priorités claires pour renforcer l’impact du développement.
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600 md:text-[18px]">
              Le C2E a pour objectif principal de mener des études et
              évaluations de haute qualité qui éclairent les commanditaires,
              renforcent les capacités locales en suivi-évaluation et
              contribuent à l’impact des politiques publiques et des programmes
              de développement en RDC.
            </p>
          </div>

          <div className="mx-auto flex max-w-[620px] items-start gap-5 md:gap-6">
            <div className="flex flex-1 flex-col gap-5 md:-translate-y-8 md:gap-6">
              {[objectives[0], objectives[2]].map((item, index) => {
                const Icon = item.icon;
                const cardClass =
                  index === 0
                    ? "bg-[linear-gradient(135deg,#0f79ff_0%,#123f87_100%)] text-white shadow-[0_24px_55px_rgba(15,121,255,0.22)]"
                    : "bg-white text-slate-900 border border-slate-100 shadow-[0_18px_38px_rgba(15,23,42,0.08)]";

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

      <section className="bg-[#f8fbff] px-20 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
              Quelques Raisons
            </p>
            <h2 className="mt-4 text-[2.5rem] font-semibold leading-tight text-blue-900">
              Pourquoi Nous
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <motion.div
                key={reason.number}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="text-[1.05rem] font-semibold tracking-[0.14em] text-slate-400">
                    {reason.number}
                  </span>
                  <span className="h-px flex-1 max-w-[54px] bg-slate-300 transition-colors duration-300 group-hover:bg-blue-500" />
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

      {/* Nos Partenaires*/}
      <section className="bg-white py-16 overflow-hidden border-t border-slate-50">
        <div className="mx-auto max-w-7xl px-6 mb-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
            Nos Partenaires
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {[...actualPartners, ...actualPartners].map((partner, index) => (
              <div
                key={index}
                className="mx-5 flex h-[78px] w-[250px] shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-16 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
                />
                <span className="block min-w-0 text-sm font-semibold leading-5 text-slate-700 whitespace-normal break-words">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Style pour l'animation de défilement infini */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      <section className="overflow-hidden bg-[#fefefe] px-16 py-18 text-blue-900">
        <div className="relative mx-auto max-w-7xl">
          <Globe2
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-56 right-[-7rem] hidden h-[36rem] w-[36rem] text-[#021332] opacity-[0.18] xl:block"
            strokeWidth={1}
          />

          <div className="relative grid gap-10 xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-10 xl:gap-y-12">
            <div className="relative flex min-h-[320px] flex-col xl:pr-10">
              <h2 className="mt-5 max-w-[22rem] text-[2.55rem] font-semibold leading-[1.18] text-[#053692] md:text-[3.15rem] xl:text-[3.55rem]">
                Des relations de confiance au service d&apos;un impact durable
              </h2>

              <motion.div
                whileHover={{ x: 3 }}
                className="mt-10 flex h-10 w-1 items-center justify-center rounded-full bg-white text-[#062764] xl:absolute xl:bottom-6 xl:left-[21.5rem]"
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
                  className="min-h-[310px] rounded-[4px] border-2 border-blue-900 bg-transparent px-6 pb-4 pt-4"
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
                  className={`min-h-[310px] rounded-[4px] border-2 border-blue-900 bg-transparent px-9 pb-10 pt-8 ${partner.name === "Impact" ? "relative overflow-hidden" : ""
                    }`}
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
      </section>

      <footer className="relative z-10">
        <div className="bg-blue-900/90 backdrop-blur-2xl border-t border-white/10 text-white px-10 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-4xl font-semibold mb-4 text-yellow-400">C2E</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Centre d’Expertise et d’Évaluation basé à Goma. Experts en planification,
                évaluation et recherche appliquée pour un impact durable en RDC.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.7rem] font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm opacity-90">
                {["Accueil", "Réalisations", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Accueil" ? "/accueil" : item === "RÃ©alisations" ? "/realisation" : item === "Services" ? "/services" : "/Contact"} className="interactive-lift w-fit transition-colors hover:text-yellow-400">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[1.7rem] font-semibold mb-4">Contact</h3>
              <div className="space-y-4 text-sm">
                <a href="mailto:c2experteval@gmail.com" className="interactive-lift flex items-center gap-3 hover:text-yellow-400"><MdEmail className="text-yellow-400" size={20} /><span>c2experteval@gmail.com</span></a>
                <a href="https://wa.me/243997674407" target="_blank" rel="noreferrer" className="interactive-lift flex items-center gap-3 hover:text-yellow-400"><FaWhatsapp className="text-yellow-400" size={20} /><span>+243 997 674 407</span></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="interactive-lift flex items-center gap-3 hover:text-yellow-400"><FaLinkedin className="text-yellow-400" size={20} /><span>LinkedIn / C2E</span></a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs opacity-50 mt-12 pt-6 border-t border-white/5">
            © 2026 Centre d’Expertise et d’Évaluation – Excellence & Rigueur
          </div>
        </div>
      </footer>
    </main>
  );
}
