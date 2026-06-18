"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ImageIcon,
  Newspaper,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/TranslationProvider";

export default function RessourcesPage() {
  const { locale, t } = useTranslation();

  const intro =
    locale === "en"
      ? "Explore our gallery, articles and opportunities from one central resource hub."
      : locale === "sw"
      ? "Chunguza galeri, makala na fursa zetu kupitia ukurasa mmoja wa rasilimali."
      : "Retrouvez notre galerie, nos actualites et nos opportunites depuis un espace ressources unique.";

  const sections = [
    {
      title: t.nav.blogNews,
      text:
        locale === "en"
          ? "Articles, notes and field perspectives."
          : locale === "sw"
          ? "Makala, maelezo na mitazamo ya uwanjani."
          : "Articles, notes et regards de terrain.",
      href: "/ressources/blog-actualites",
      icon: Newspaper,
    },
    {
      title: t.nav.mediaGallery,
      text:
        locale === "en"
          ? "A visual mosaic of projects and activities."
          : locale === "sw"
          ? "Mkusanyiko wa picha za miradi na shughuli."
          : "Une mosaique visuelle de nos projets et activites.",
      href: "/ressources/galerie",
      icon: ImageIcon,
    },
    {
      title: t.nav.opportunitiesCareers,
      text:
        locale === "en"
          ? "Open calls, internships and collaboration opportunities."
          : locale === "sw"
          ? "Fursa za kazi, mafunzo na ushirikiano."
          : "Offres, stages et opportunites de collaboration.",
      href: "/ressources/opportunites-carrieres",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#ecf7ff_0%,#dcecff_55%,#eef6e8_100%)] px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-800 shadow-sm border border-slate-200/40">
              {t.nav.resources}
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{t.nav.resources}</h1>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              {intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-Montserrat mt-5 text-2xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {section.text}
                </p>
                <Link
                  href={section.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                >
                  Ouvrir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
