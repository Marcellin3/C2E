"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileBarChart, User, Tag, Clock } from "lucide-react";
import Footer from "../../components/Footer";
import { motionTokens } from "../../components/motion";
import { useAdminContent } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";
import { useState, useMemo } from "react";

export default function AnalysesPerspectivesPage() {
  const { t } = useTranslation();
  const adminContent = useAdminContent();
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const analyses = useMemo(() => {
    const articles = (adminContent.publications || []).filter(
      (p) => p.type === "analyse-perspective" && p.status === "published"
    );
    
    return articles.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() || -1;
    });
  }, [adminContent.publications]);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    analyses.forEach((item) => {
      if (item.category) uniqueTags.add(item.category);
    });
    return ["All", ...Array.from(uniqueTags)];
  }, [analyses]);

  const filteredAnalyses = useMemo(() => {
    if (selectedTag === "All") return analyses;
    return analyses.filter((item) => item.category === selectedTag);
  }, [analyses, selectedTag]);

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#fffbf0_0%,#fff7ed_100%)] px-4 py-14 sm:px-6 sm:py-20 relative overflow-hidden border-b border-amber-100">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 -left-20 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-800 shadow-sm border border-amber-200/50">
              <FileBarChart className="h-3.5 w-3.5" />
              {t.publications.heroTitle}
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{t.publications.analysesPerspectives}</h1>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              {t.publications.analysesHeroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {tags.length > 1 && (
            <div className="mb-10 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 text-sm font-bold text-slate-500 mr-2">
                <Tag className="h-4 w-4" />
                Sujets :
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    selectedTag === tag
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {tag === "All" ? "Tous les sujets" : tag}
                </button>
              ))}
            </div>
          )}

          {filteredAnalyses.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-4">
                <FileBarChart className="h-8 w-8" />
              </div>
              <h3 className="font-Montserrat text-xl font-bold text-slate-900 mb-2">{t.publications.emptyState}</h3>
              <p className="text-slate-500">{t.publications.emptyStateDesc}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredAnalyses.map((item, index) => {
                const detailHref = `/publications/analyses-perspectives/${item.slug}`;

                return (
                  <motion.article
                    key={item.id || item.slug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={motionTokens.viewport}
                    transition={{ duration: motionTokens.duration.normal, delay: index * 0.1, ease: motionTokens.ease }}
                    whileHover={{ x: 4 }}
                    className="group relative flex flex-col sm:flex-row gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden"
                  >
                    {item.coverImage && (
                      <div className="h-48 sm:h-auto sm:w-64 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <img 
                          src={item.coverImage} 
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow py-2">
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                        {item.category && (
                          <span className="font-bold text-amber-600 uppercase tracking-wider">
                            {item.category}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.publishedAt}
                        </span>
                        {item.readingTime && (
                          <span className="flex items-center gap-1.5 text-slate-400 ml-auto sm:ml-0">
                            <Clock className="h-3.5 w-3.5" />
                            {item.readingTime}
                          </span>
                        )}
                      </div>
                      
                      <h2 className="font-Montserrat text-2xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-amber-600 transition-colors">
                        <Link href={detailHref} className="before:absolute before:inset-0">
                          {item.title}
                        </Link>
                      </h2>
                      
                      <p className="text-sm leading-6 text-slate-500 mb-4 flex-grow line-clamp-2">
                        {item.excerpt}
                      </p>

                      <div className="flex items-center gap-2 mt-auto text-sm font-medium text-slate-700">
                        <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center">
                          <User className="h-3 w-3 text-slate-500" />
                        </div>
                        {item.authors}
                      </div>
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
