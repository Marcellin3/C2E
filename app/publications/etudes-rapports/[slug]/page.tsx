"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText, Share2, Calendar, Building, MapPin } from "lucide-react";
import Footer from "../../../components/Footer";
import { useAdminContent } from "../../../data/adminContent";
import { useTranslation } from "../../../i18n/TranslationProvider";

export default function EtudeRapportDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useTranslation();
  const adminContent = useAdminContent();

  const article = adminContent.publications?.find(
    (p) => p.slug === params.slug && p.type === "etude-rapport"
  );

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{t.publications.errorState}</h1>
          <Link href="/publications/etudes-rapports" className="text-emerald-600 hover:underline">
            <ArrowLeft className="inline-block h-4 w-4 mr-2" /> Retour
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#f0fdf4_0%,#ffffff_100%)] px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:pt-24 border-b border-emerald-100">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/publications/etudes-rapports"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux études et rapports
          </Link>

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 font-bold text-emerald-800">
                  <FileText className="h-3.5 w-3.5" />
                  Étude & Rapport
                </span>
                {article.category && (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-700">
                    {article.category}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.year || article.publishedAt}
                </span>
              </div>

              <h1 className="font-Montserrat text-3xl font-bold text-slate-900 sm:text-4xl leading-tight mb-6">
                {article.title}
              </h1>

              <p className="text-lg leading-8 text-slate-600 font-medium mb-8">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 py-4 border-t border-emerald-100">
                {article.authors && (
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Building className="h-4 w-4 text-emerald-600" />
                    {article.authors}
                  </div>
                )}
                {article.location && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    {article.location}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-Montserrat text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Document complet
              </h3>
              {article.pdfUrl ? (
                <>
                  <p className="text-xs text-slate-500 mb-4">
                    Téléchargez le rapport complet au format PDF pour accéder à l'ensemble des données, méthodologies et résultats.
                  </p>
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700"
                  >
                    <Download className="h-4 w-4" />
                    {t.publications.downloadPdf}
                  </a>
                </>
              ) : (
                <p className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  Le document complet n'est pas encore disponible en téléchargement.
                </p>
              )}
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                <Share2 className="h-4 w-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-slate prose-emerald max-w-none prose-headings:font-Montserrat prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-8">
            {article.coverImage && (
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full rounded-2xl mb-10 object-cover max-h-[500px] border border-slate-100 shadow-sm"
              />
            )}
            
            <div className="whitespace-pre-line text-slate-700 leading-8">
              {article.content}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
