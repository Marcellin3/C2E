"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, FlaskConical, User, Filter } from "lucide-react";
import Footer from "../../components/Footer";
import { motionTokens } from "../../components/motion";
import { useAdminContent } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";
import { useState, useMemo } from "react";

export default function ArticlesScientifiquesPage() {
  const { t } = useTranslation();
  const adminContent = useAdminContent();
  const [selectedDomain, setSelectedDomain] = useState<string>("All");

  const scientificArticles = useMemo(() => {
    const articles = (adminContent.publications || []).filter(
      (p) => p.type === "article-scientifique" && p.status === "published"
    );
    
    // Sort by most recent
    return articles.sort((a, b) => {
      // Very basic date sorting (assuming string match or actual parseable date)
      // For a real production app, you might want more robust date handling here
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() || -1;
    });
  }, [adminContent.publications]);

  const domains = useMemo(() => {
    const uniqueDomains = new Set<string>();
    scientificArticles.forEach((article) => {
      if (article.category) uniqueDomains.add(article.category);
    });
    return ["All", ...Array.from(uniqueDomains)];
  }, [scientificArticles]);

  const filteredArticles = useMemo(() => {
    if (selectedDomain === "All") return scientificArticles;
    return scientificArticles.filter((article) => article.category === selectedDomain);
  }, [scientificArticles, selectedDomain]);

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#fdf4ff_0%,#eef2ff_100%)] px-4 py-14 sm:px-6 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-800 shadow-sm border border-slate-200/40">
              <FlaskConical className="h-3.5 w-3.5" />
              {t.publications.heroTitle}
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{t.publications.articlesScientific}</h1>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              {t.publications.scientificHeroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {domains.length > 1 && (
            <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
              <span className="flex items-center gap-2 text-sm font-bold text-slate-500 mr-2">
                <Filter className="h-4 w-4" />
                Filtrer :
              </span>
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    selectedDomain === domain
                      ? "bg-violet-600 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {domain === "All" ? "Tous les domaines" : domain}
                </button>
              ))}
            </div>
          )}

          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600 mb-4">
                <FlaskConical className="h-8 w-8" />
              </div>
              <h3 className="font-Montserrat text-xl font-bold text-slate-900 mb-2">{t.publications.emptyState}</h3>
              <p className="text-slate-500">{t.publications.emptyStateDesc}</p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredArticles.map((article, index) => {
                const detailHref = `/publications/articles-scientifiques/${article.slug}`;

                return (
                  <motion.article
                    key={article.id || article.slug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={motionTokens.viewport}
                    transition={{ duration: motionTokens.duration.normal, delay: index * motionTokens.stagger, ease: motionTokens.ease }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)] overflow-hidden h-full"
                  >
                    {article.coverImage && (
                      <div className="h-48 w-full overflow-hidden bg-slate-100">
                        <img 
                          src={article.coverImage} 
                          alt={article.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                        {article.category && (
                          <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 font-bold text-violet-700">
                            {article.category}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-slate-500">
                          <Calendar className="h-3.5 w-3.5" />
                          {article.publishedAt}
                        </span>
                      </div>
                      
                      <h2 className="font-Montserrat text-2xl font-bold text-slate-900 leading-tight mb-3">
                        {article.title}
                      </h2>
                      
                      <div className="flex items-center gap-2 mb-4 text-sm font-medium text-slate-600">
                        <User className="h-4 w-4" />
                        {article.authors}
                      </div>

                      <p className="text-sm leading-6 text-slate-500 mb-6 flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                        <Link
                          href={detailHref}
                          className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-800 transition group"
                        >
                          {t.publications.readArticle}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        {article.readingTime && (
                          <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                            {article.readingTime}
                          </span>
                        )}
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
