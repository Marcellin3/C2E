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
import Footer from "../componen/Footer";
import { useTranslation } from "../i18n/TranslationProvider";

export default function Services() {
  const { t } = useTranslation();

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
      <section className="relative overflow-hidden bg-[#dff5ff] px-4 pb-18 pt-10 text-blue-900 sm:px-6 md:px-10 lg:px-14 lg:pb-24 lg:pt-12">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gray-50 [clip-path:ellipse(80%_100%_at_50%_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md pb-8 pt-6"
          >
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-[0_10px_24px_rgba(14,116,219,0.08)]">
              {t.servicesPage.badge}
            </span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.06] text-blue-950 sm:text-[3rem] md:text-[4.2rem]"
            >
              {t.servicesPage.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-md text-[17px] leading-8 text-slate-700"
            >
              {t.servicesPage.intro}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services#services-grid"
                className="glass-hover interactive-lift rounded-full bg-blue-950 px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition hover:bg-blue-900"
              >
                {t.servicesPage.servicesCta}
              </Link>
              <Link
                href="/Contact"
                className="glass-hover interactive-lift rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-600 shadow-[0_12px_26px_rgba(14,116,219,0.08)] transition hover:bg-slate-50"
              >
                {t.servicesPage.learnMoreCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            className="relative mx-auto flex min-h-[340px] w-full max-w-[700px] items-center justify-center sm:min-h-[420px] lg:min-h-[520px]"
          >
            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full bg-white/90 shadow-[0_28px_70px_rgba(14,116,219,0.16)] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]">
              <div className="relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full border-[10px] border-white bg-[linear-gradient(135deg,#f4fbff_0%,#dff4ff_100%)] shadow-[0_18px_40px_rgba(14,116,219,0.16)] sm:h-[255px] sm:w-[255px] lg:h-[310px] lg:w-[310px] lg:border-[12px]">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44">
                  <Image
                    src="/photos/logo ok.png"
                    alt="Logo C2E"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="absolute left-3 top-16 h-12 w-12 overflow-hidden rounded-full border-4 border-white shadow-lg sm:left-4 sm:top-24 sm:h-14 sm:w-14 lg:left-2 lg:top-28 lg:h-16 lg:w-16">
                <Image
                  src="/photos/projet.jpg"
                  alt="Expert C2E"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-2 left-[44%] h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg sm:bottom-3 sm:h-20 sm:w-20 lg:bottom-4 lg:left-[46%] lg:h-24 lg:w-24">
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
              className="absolute left-1 top-6 rounded-[1.25rem] bg-[linear-gradient(135deg,#47c9ff_0%,#1f78cf_100%)] px-3 py-2 text-white shadow-[0_22px_48px_rgba(31,120,207,0.28)] sm:left-5 sm:top-10 sm:px-5 sm:py-3 lg:left-8 lg:top-14 lg:px-6 lg:py-4"
            >
              <p className="text-lg sm:text-2xl">+10</p>
              <p className="mt-1 font-display text-sm font-semibold text-yellow-400">
                {t.servicesPage.projectsSupported}
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-28 max-w-[140px] rounded-[1.25rem] bg-white px-3 py-2 text-blue-900 shadow-[0_22px_48px_rgba(14,116,219,0.12)] sm:right-2 sm:top-36 sm:max-w-[180px] sm:px-5 sm:py-3 lg:top-44 lg:px-6 lg:py-4"
            >
              <p className="text-lg sm:text-2xl">+15</p>
              <p className="mt-1 font-display text-sm font-semibold text-yellow-400">
                {t.servicesPage.expertsLabel}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="services-grid"
        className="relative overflow-hidden bg-gray-50 px-4 py-16 md:px-20"
      >
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
                  className={`relative overflow-hidden rounded-xl px-8 py-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)] ${
                    highlighted
                      ? "border border-sky-200 bg-[linear-gradient(135deg,#8fe3ff_0%,#68cfff_35%,#84ddff_100%)]"
                      : "border border-white/80 bg-white"
                  }`}
                >
                  <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${
                      highlighted
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
            <h2 className="font-display text-4xl font-semibold leading-snug text-gray-800 md:text-[3.2rem]">
              {t.servicesPage.actionTitle}
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              {t.servicesPage.actionTextOne}
            </p>

            <p className="mb-8 leading-relaxed text-gray-600">
              {t.servicesPage.actionTextTwo}
            </p>

            <a
              href="https://maps.google.com/?q=Goma,RDC"
              target="_blank"
              rel="noreferrer"
              className="glass-hover interactive-lift inline-flex rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-gray-900 shadow-md transition hover:bg-yellow-500"
            >
              {t.servicesPage.actionCta} →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-16 text-center">
          <Users size={40} className="mx-auto mb-4 text-blue-600" />
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            {t.servicesPage.teamTitle}
          </h2>
        </div>

        <div className="grid gap-10 sm:gap-14 lg:grid-cols-3">
          {consultants.map((consultant, index) => (
            <motion.div
              key={consultant.name}
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
            <h2 className="font-display text-xl text-blue-950 md:text-5xl">
              {t.servicesPage.testimonialsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
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
              className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_52px_rgba(15,23,42,0.08)]"
            >
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[240px] overflow-hidden rounded-t-[2rem] md:min-h-[340px] md:rounded-l-[2rem] md:rounded-tr-none">
                  <div className={`absolute inset-0 ${currentTestimonial.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,196,255,0.42)_0%,rgba(255,255,255,0)_62%)]" />
                  <div className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[5px] border-white bg-white shadow-[0_14px_28px_rgba(14,116,219,0.12)] md:h-[150px] md:w-[150px]">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="px-4 py-4 md:px-6 md:py-6">
                  <p className="text-4xl leading-none text-slate-200 md:text-5xl">&ldquo;</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-[1.2rem] md:leading-8">
                    {currentTestimonial.quote}
                  </p>
                  <div className="mt-8">
                    <p className="text-xl font-semibold text-blue-950 md:text-[1.4rem]">
                      {currentTestimonial.author}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 md:text-base">
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
                  className={`h-2.5 rounded-full transition-all ${
                    activeTestimonial === index
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
