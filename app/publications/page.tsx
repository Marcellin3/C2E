"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileBarChart, FlaskConical } from "lucide-react";
import Footer from "../components/Footer";
import { motionTokens } from "../components/motion";
import { useTranslation } from "../i18n/TranslationProvider";

export default function PublicationsPage() {
  const { t } = useTranslation();

  const categories = [
    {
      title: t.publications.articlesScientific,
      description: t.publications.articlesScientificDesc,
      cta: t.publications.articlesScientificCta,
      href: "/publications/articles-scientifiques",
      icon: FlaskConical,
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
    },
    {
      title: t.publications.analysesPerspectives,
      description: t.publications.analysesPerspectivesDesc,
      cta: t.publications.analysesPerspectivesCta,
      href: "/publications/analyses-perspectives",
      icon: FileBarChart,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
    },
    {
      title: t.publications.studiesReports,
      description: t.publications.studiesReportsDesc,
      cta: t.publications.studiesReportsCta,
      href: "/publications/etudes-rapports",
      icon: BookOpen,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
  ];

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#fdf4ff_0%,#f3e8ff_55%,#eef2ff_100%)] px-4 py-14 sm:px-6 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-800 shadow-sm border border-slate-200/40">
              C2E Data & Research
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{t.publications.heroTitle}</h1>
            <p className="text-lg leading-8 text-slate-700 font-medium">
              {t.publications.heroSubtitle}
            </p>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {t.publications.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={motionTokens.viewport}
                transition={{ duration: motionTokens.duration.normal, delay: index * motionTokens.stagger, ease: motionTokens.ease }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${category.border} bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)] flex flex-col h-full`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.bg} ${category.color} mb-6`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="font-Montserrat text-2xl font-bold text-slate-900 mb-4">{category.title}</h2>
                <p className="text-sm leading-6 text-slate-500 mb-8 flex-grow">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className={`inline-flex items-center justify-between gap-2 text-sm font-bold ${category.color} group border-t border-slate-100 pt-5`}
                >
                  {category.cta}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-slate-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
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
