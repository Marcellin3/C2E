"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileBarChart, Share2, Calendar, User, Clock, Printer } from "lucide-react";
import Footer from "../../../components/Footer";
import { useAdminContent } from "../../../data/adminContent";
import { useTranslation } from "../../../i18n/TranslationProvider";

export default function AnalysePerspectiveDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useTranslation();
  const adminContent = useAdminContent();

  const article = adminContent.publications?.find(
    (p) => p.slug === params.slug && p.type === "analyse-perspective"
  );

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{t.publications.errorState}</h1>
          <Link href="/publications/analyses-perspectives" className="text-amber-600 hover:underline">
            <ArrowLeft className="inline-block h-4 w-4 mr-2" /> Retour
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-white px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:pt-24 border-b border-slate-200">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/publications/analyses-perspectives"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-800 transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux analyses
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 font-bold text-amber-700">
              <FileBarChart className="h-3.5 w-3.5" />
              Analyse & Perspective
            </span>
            {article.category && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-700 uppercase tracking-wider">
                {article.category}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              {article.publishedAt}
            </span>
            {article.readingTime && (
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime}
              </span>
            )}
          </div>

          <h1 className="font-Montserrat text-3xl font-bold text-slate-900 sm:text-5xl leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <User className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{article.authors}</p>
                {article.affiliation && (
                  <p className="text-xs text-slate-500">{article.affiliation}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => window.print()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                title="Imprimer"
              >
                <Printer className="h-4 w-4" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                <Share2 className="h-4 w-4" />
              </button>
              {article.pdfUrl && (
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber-700"
                >
                  <Download className="h-4 w-4" />
                  {t.publications.downloadPdf}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-slate prose-amber max-w-none prose-headings:font-Montserrat prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-amber-600">
            {article.coverImage && (
              <figure className="mb-10 mt-0">
                <img 
                  src={article.coverImage} 
                  alt={article.title} 
                  className="w-full rounded-2xl object-cover max-h-[450px]"
                />
              </figure>
            )}
            
            <div className="text-xl leading-relaxed text-slate-600 font-medium mb-12 italic border-l-4 border-amber-400 pl-6">
              {article.excerpt}
            </div>

            <div className="whitespace-pre-line">
              {article.content}
            </div>

          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
