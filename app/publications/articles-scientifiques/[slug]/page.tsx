"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, FileText, FlaskConical, Share2, Quote, Calendar, User, BookOpen } from "lucide-react";
import Footer from "../../../components/Footer";
import { useAdminContent } from "../../../data/adminContent";
import { useTranslation } from "../../../i18n/TranslationProvider";

export default function ArticleScientifiqueDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useTranslation();
  const adminContent = useAdminContent();

  const article = adminContent.publications?.find(
    (p) => p.slug === params.slug && p.type === "article-scientifique"
  );

  if (!article) {
    // Handling a brief flash of notFound during hydration might happen if publications are fetched async, 
    // but in this client component architecture, we might just want to wait or show a skeleton.
    // For simplicity, we just show a not found or empty state.
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{t.publications.errorState}</h1>
          <Link href="/publications/articles-scientifiques" className="text-violet-600 hover:underline">
            <ArrowLeft className="inline-block h-4 w-4 mr-2" /> Retour
          </Link>
        </div>
      </div>
    );
  }

  // To build the "sommaire automatique", we could parse markdown H2/H3.
  // Since we don't have a markdown parser setup right here, we will mock a table of contents or just display it if we had it.

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-white px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:pt-24 border-b border-slate-200">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/publications/articles-scientifiques"
            className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-800 transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 font-bold text-violet-700">
              <FlaskConical className="h-3.5 w-3.5" />
              Article Scientifique
            </span>
            {article.category && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-700">
                {article.category}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              {article.publishedAt}
            </span>
            {article.readingTime && (
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <BookOpen className="h-3.5 w-3.5" />
                {article.readingTime}
              </span>
            )}
          </div>

          <h1 className="font-Montserrat text-3xl font-bold text-slate-900 sm:text-5xl leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-slate-100">
            <div>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-1">
                <User className="h-4 w-4 text-slate-400" />
                {article.authors}
              </p>
              {article.affiliation && (
                <p className="text-xs text-slate-500">{article.affiliation}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {article.pdfUrl && (
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-violet-700"
                >
                  <Download className="h-4 w-4" />
                  {t.publications.downloadPdf}
                </a>
              )}
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {article.doi && (
            <div className="mt-4 text-sm text-slate-500">
              <strong>DOI:</strong> <a href={`https://doi.org/${article.doi}`} className="text-violet-600 hover:underline">{article.doi}</a>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="prose prose-slate prose-violet max-w-none prose-headings:font-Montserrat prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-violet-600">
            {article.coverImage && (
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full rounded-2xl mb-10 object-cover max-h-[400px] border border-slate-200"
              />
            )}
            
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10 border border-slate-100 text-slate-700 italic">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3 not-italic">Résumé</h3>
              {article.excerpt}
            </div>

            {/* Simulated Content Rendering */}
            {/* In a real scenario, article.content would be parsed via react-markdown or similar */}
            <div className="whitespace-pre-line text-slate-700 leading-8">
              {article.content}
            </div>

          </article>

          <aside className="hidden lg:block space-y-8">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-Montserrat text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Citer cet article
              </h3>
              <div className="rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-600 border border-slate-100 mb-4">
                {article.authors} ({article.year || new Date().getFullYear()}). {article.title}. <i>Centre d'Expertise et d'Évaluation (C2E)</i>.
              </div>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50">
                <Quote className="h-3.5 w-3.5" />
                {t.publications.copyCitation}
              </button>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
