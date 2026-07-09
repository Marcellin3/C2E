"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Compass,
  ClipboardList,
  Database,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/TranslationProvider";



export default function Services() {
  const { t, locale } = useTranslation();

  const services = [
    { icon: <Compass size={28} />, ...t.servicesPage.services[0] },
    { icon: <ClipboardList size={28} />, ...t.servicesPage.services[1] },
    { icon: <Database size={28} />, ...t.servicesPage.services[2] },
    { icon: <GraduationCap size={28} />, ...t.servicesPage.services[3] },
    { icon: <Lightbulb size={28} />, ...t.servicesPage.services[4] },
    { icon: <Users size={28} />, ...t.servicesPage.services[5] },
  ];

  const consultants = t.servicesPage.consultants;
  const testimonials = t.servicesPage.testimonials;
  const sectors = [
    {
      number: "01",
      image: "/photos/securité alim.jpg",
      name: "Sécurité alimentaire - Nutrition",
      bullets: [
        "Restaurer les moyens d'existence des populations affectées par l'insécurité alimentaire.",
        "Couvrir les besoins alimentaires urgents et appuyer la prise en charge intégrée.",
        "Fournir des intrants agricoles et renforcer la résilience locale.",
      ],
    },
    {
      number: "02",
      image: "/photos/etude de base.jpg",
      name: "Education et développement communautaire",
      bullets: [
        "Faciliter l'accès des enfants et adolescents à une éducation inclusive de qualité.",
        "Améliorer les infrastructures éducatives et les environnements scolaires protecteurs.",
        "Appuyer les mobiliers, matériels pédagogiques et la formation des enseignants.",
      ],
    },
    {
      number: "03",
      image: "/photos/violance.jpg",
      name: "Violence basée sur le genre (VBG)",
      bullets: [
        "Contribuer à la réduction des violences basées sur le genre.",
        "Promouvoir des normes socioculturelles respectant l'égalité des sexes.",
        "Renforcer la résilience des survivant(e)s par une prise en charge holistique.",
      ],
    },
    {
      number: "04",
      image: "/photos/violance.jpg",
      name: "Santé reproductive",
      bullets: [
        "Améliorer les conditions de vie de la population (femmes et adolescents).",
        "Promouvoir l'approche multisectorielle visant l’amélioration de la fourniture de services de santé reproductive (SDSR) sensibles au genre.",
        "Promouvoir l’utilisation équitable de services de santé reproductive par la population.",
      ],
    },
    {
      number: "05",
      image: "/photos/environnement.jpg",
      name: "Environnement et Développement Durable",
      bullets: [
        "Promouvoir le pouvoir socioéconomique des populations locales.",
        "Restaurer durablement les moyens d'existence.",
        "Encourager la gestion durable des ressources naturelles et les solutions fondées sur la nature.",
      ],
    },
    {
      number: "06",
      image: "/photos/gouvernace et paix.jpg",
      name: "Gouvernance et Paix",
      bullets: [
        "Améliorer la participation citoyenne dans la gouvernance locale.",
        "Faciliter la collaboration entre dirigeants et communautés.",
        "Promouvoir le dialogue inclusif, la cohésion sociale et la gestion pacifique des conflits.",
      ],
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
      <section 
        className="relative overflow-hidden px-2 py-8 text-white sm:px-4 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photos/plant.jpg')" }}
      >
        {/* Dark overlay to match the reference design and make text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-950/85 to-slate-700/90" />

        {/* Ambient glow effects for a high-end feel */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Eyebrow / Badge */}
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full">
              {t.servicesPage.badge}
            </span>

            {/* Main Title - Centered like "Design Your Kitchen..." */}
            <h1 className="font-Montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-white max-w-3xl mx-auto">
              {t.servicesPage.title}
            </h1>

            {/* Description/Intro - Centered and elegant */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300">
              {t.servicesPage.intro}
            </p>

            {/* Center Pill Button & Secondary Button */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/services#services-grid"
                className="interactive-lift rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg transition hover:bg-slate-100 flex items-center gap-2"
              >
                {t.servicesPage.servicesCta} <span className="text-yellow-500"></span>
              </Link>
              <Link
                href="/Contact"
                className="interactive-lift rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/15 hover:border-white/40"
              >
                {t.servicesPage.learnMoreCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services-grid"
        className="relative overflow-hidden bg-gray-50 px-4 py-16 md:px-20"
      >
        <div className="mx-auto max-w-7xl mb-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end border-b border-slate-200/60 pb-8">
          <div>
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-blue-600">
              {locale === "fr" ? "Nos Services" : "Our services"}
            </span>
            <h2 className="font-Montserrat text-2xl font-extrabold  text-slate-900 ">
              C2E offre plusierus services aux organisations publics et privées
            </h2>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const highlighted = index === 0 || index === 4;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className={`relative overflow-hidden rounded-2xl px-8 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)] ${highlighted
                    ? "border border-sky-200 bg-[linear-gradient(135deg,#e0f2fe_0%,#bae6fd_100%)]"
                    : "border border-slate-100 bg-white"
                    }`}
                >
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${highlighted
                      ? "bg-white text-blue-700"
                      : "bg-blue-950 text-white"
                      }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="font-Montserrat max-w-[18rem] text-[1.4rem] font-bold leading-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-500">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50/50 px-4 py-10 text-slate-700 sm:px-6 lg:px-16 border-t border-slate-100">
        {/* Mockup-style 2-column header layout */}
        <div className="mx-auto max-w-7xl mb-12 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end border-b border-slate-200/60 pb-8">
          <div>
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-blue-600">
              {locale === "fr" ? "Nos domaines d'action" : "Our areas of action"}
            </span>
            <h2 className="font-Montserrat text-2xl  text-slate-900">
              C2E intervien dans plusieures Secteurs, telque:
            </h2>
          </div>
        </div>

        {/* Mockup-style Grid Cards layout */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => {
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/50 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                >
                  {/* Top Image Container */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    
                    {/* Badge Overlay (Bottom-Right, like mockup category badge) */}
                    <span className="absolute bottom-3 right-3 rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                      {locale === "fr" ? "Secteur " : locale === "en" ? "Sector " : "Sekta "}{sector.number}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-Montserrat text-lg font-bold text-slate-900 mb-4 leading-snug">
                      {sector.name}
                    </h3>
                    
                    {/* Bullets Data (Untouched) styled beautifully */}
                    <ul className="space-y-3 text-xs leading-relaxed text-slate-500 flex-1">
                      {sector.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button (Bottom-Left, like mockup green CTA) */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        href="/plan-strategique"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition"
                      >
                        {locale === "fr" ? "En savoir plus" : "Learn more"} <span className="text-yellow-500 font-extrabold">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 relative md:justify-self-end"
          >
            <img
              src="/photos/super.png"
              alt="Carte du monde"
              className="w-full max-w-[520px] opacity-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <h2 className="font-Montserrat text-3xl font-bold leading-snug text-slate-900 md:text-[2.8rem]">
              {t.servicesPage.actionTitle}
            </h2>
            <p className="mt-4 mb-4 text-[15px] leading-7 text-slate-500">
              {t.servicesPage.actionTextOne}
            </p>

            <p className="mb-8 text-[15px] leading-7 text-slate-500">
              {t.servicesPage.actionTextTwo}
            </p>

            <a
              href="https://maps.google.com/?q=Goma,RDC"
              target="_blank"
              rel="noreferrer"
              className="glass-hover interactive-lift inline-flex rounded-2xl bg-yellow-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-yellow-600"
            >
              {t.servicesPage.actionCta} →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="font-Montserrat text-3xl font-bold text-slate-900 sm:text-5xl">
            {t.servicesPage.teamTitle}
          </h2>
        </div>

        <div className="grid gap-10 sm:gap-14 lg:grid-cols-3">
          {consultants.map((consultant, index) => (
            <motion.div
              key={`${consultant.name}-${consultant.image}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-Montserrat text-[1.4rem] font-bold text-blue-800">
                  {consultant.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {consultant.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Board of Directors Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/conseil-administration"
            className="interactive-lift rounded-full bg-blue-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-blue-700 flex items-center gap-2"
          >
            {locale === "fr" ? "Notre C.A" : locale === "en" ? "Our Board of Directors" : "Bodi Yetu"} <span className="text-yellow-400 font-extrabold">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-Montserrat text-2xl font-bold text-slate-900 md:text-5xl">
              {t.servicesPage.testimonialsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 md:text-base">
              {t.servicesPage.testimonialsText}
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-[940px] px-0 pb-18 md:px-12 md:pb-0">
            <button
              type="button"
              onClick={showPreviousTestimonial}
              aria-label={t.servicesPage.previousTestimonial}
              className="absolute left-2 top-[calc(100%+0.8rem)] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1459a7] text-white shadow-[0_14px_28px_rgba(20,89,167,0.24)] transition hover:bg-[#0f4c90] md:left-0 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2 md:-left-6"
            >
              <FaChevronLeft size={15} />
            </button>

            <button
              type="button"
              onClick={showNextTestimonial}
              aria-label={t.servicesPage.nextTestimonial}
              className="absolute right-2 top-[calc(100%+0.8rem)] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#1459a7] text-white shadow-[0_14px_28px_rgba(20,89,167,0.24)] transition hover:bg-[#0f4c90] md:right-0 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2 md:-right-6"
            >
              <FaChevronRight size={15} />
            </button>

            <motion.div
              key={currentTestimonial.author}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)] border border-slate-100"
            >
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[240px] overflow-hidden rounded-t-2xl md:min-h-[340px] md:rounded-l-2xl md:rounded-tr-none">
                  <div className={`absolute inset-0 ${currentTestimonial.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,196,255,0.42)_0%,rgba(255,255,255,0)_62%)]" />
                  <div className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-white bg-white shadow-[0_12px_28px_rgba(14,116,219,0.08)] md:h-[150px] md:w-[150px]">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="px-4 py-4 md:px-6 md:py-6">
                  <p className="font-Montserrat text-4xl leading-none text-slate-300 md:text-5xl">&ldquo;</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[1.15rem] md:leading-8">
                    {currentTestimonial.quote}
                  </p>
                  <div className="mt-8">
                    <p className="font-Montserrat text-lg font-bold text-slate-900 md:text-[1.3rem]">
                      {currentTestimonial.author}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 md:text-sm">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex items-center justify-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.author}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`${t.servicesPage.testimonialDotLabel} ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${activeTestimonial === index
                    ? "w-8 bg-[#1459a7]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
