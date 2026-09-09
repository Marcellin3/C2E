"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, Filter, FileText, Calendar, Building, MapPin } from "lucide-react";
import Footer from "../../components/Footer";
import { motionTokens } from "../../components/motion";
import { useAdminContent } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";
import { useState, useMemo } from "react";

export default function EtudesRapportsPage() {
  const { t } = useTranslation();
  const adminContent = useAdminContent();
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const studies = useMemo(() => {
    const articles = (adminContent.publications || []).filter(
      (p) => p.type === "etude-rapport" && p.status === "published"
    );
    
    return articles.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() || -1;
    });
  }, [adminContent.publications]);

  const years = useMemo(() => {
    const uniqueYears = new Set<string>();
    studies.forEach((item) => {
      // Very basic year extraction, could be improved based on real data
      const year = item.year || (item.publishedAt ? new Date(item.publishedAt).getFullYear().toString() : "");
      if (year && !isNaN(Number(year))) uniqueYears.add(year);
    });
    return ["All", ...Array.from(uniqueYears).sort().reverse()];
  }, [studies]);

  const filteredStudies = useMemo(() => {
    if (selectedYear === "All") return studies;
    return studies.filter((item) => {
      const year = item.year || (item.publishedAt ? new Date(item.publishedAt).getFullYear().toString() : "");
      return year === selectedYear;
    });
  }, [studies, selectedYear]);

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#f0fdf4_0%,#dcfce7_100%)] px-4 py-14 sm:px-6 sm:py-20 relative overflow-hidden border-b border-emerald-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm border border-emerald-200/50">
              <BookOpen className="h-3.5 w-3.5" />
              {t.publications.heroTitle}
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{t.publications.studiesReports}</h1>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              {t.publications.studiesHeroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {years.length > 1 && (
            <div className="mb-10 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 text-sm font-bold text-slate-500 mr-2">
                <Filter className="h-4 w-4" />
                Année :
              </span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    selectedYear === year
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {year === "All" ? "Toutes les années" : year}
                </button>
              ))}
            </div>
          )}

          {filteredStudies.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-Montserrat text-xl font-bold text-slate-900 mb-2">{t.publications.emptyState}</h3>
              <p className="text-slate-500">{t.publications.emptyStateDesc}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredStudies.map((item, index) => {
                const detailHref = `/publications/etudes-rapports/${item.slug}`;

                return (
                  <motion.article
                    key={item.id || item.slug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={motionTokens.viewport}
                    transition={{ duration: motionTokens.duration.normal, delay: index * 0.1, ease: motionTokens.ease }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col sm:flex-row items-stretch gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden"
                  >
                    <div className="flex-grow flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-bold text-emerald-700">
                          <FileText className="h-3.5 w-3.5" />
                          Rapport
                        </span>
                        {item.category && (
                          <span className="text-slate-500 font-semibold">{item.category}</span>
                        )}
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.year || item.publishedAt}
                        </span>
                      </div>
                      
                      <h2 className="font-Montserrat text-xl font-bold text-slate-900 leading-tight mb-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm leading-6 text-slate-500 mb-4 flex-grow line-clamp-2">
                        {item.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mt-auto text-xs text-slate-500">
                        {item.authors && (
                          <div className="flex items-center gap-1.5 font-medium">
                            <Building className="h-3.5 w-3.5" />
                            {item.authors}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 sm:pl-6 sm:border-l border-slate-100 shrink-0">
                      <Link
                        href={detailHref}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:w-full"
                      >
                        {t.publications.view}
                      </Link>
                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 sm:w-full"
                        >
                          <Download className="h-4 w-4" />
                          {t.publications.download}
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
