"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Newspaper, Tag } from "lucide-react";
import Footer from "../../components/Footer";
import { useAdminContent } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";

const articles = {
  fr: [
    {
      title: "Evaluation, apprentissage et decisions mieux eclairees",
      date: "Avril 2026",
      category: "Analyse",
      excerpt:
        "Comment structurer un dispositif de suivi et evaluation plus utile pour les organisations et les programmes de terrain.",
    },
    {
      title: "Donner une place centrale aux communautes dans les projets",
      date: "Mars 2026",
      category: "Terrain",
      excerpt:
        "Des approches participatives plus solides pour renforcer l'appropriation locale et la qualite des resultats.",
    },
    {
      title: "Mesurer l'impact avec des indicateurs simples et credibles",
      date: "Fevrier 2026",
      category: "Methodologie",
      excerpt:
        "Une base claire pour suivre les changements, documenter les progres et soutenir les prises de decision.",
    },
  ],
  en: [
    {
      title: "Evaluation, learning and better-informed decisions",
      date: "April 2026",
      category: "Insights",
      excerpt:
        "How to build a monitoring and evaluation system that is genuinely useful for institutions and field programs.",
    },
    {
      title: "Putting communities at the center of projects",
      date: "March 2026",
      category: "Field work",
      excerpt:
        "Practical participatory approaches that strengthen local ownership and improve program quality.",
    },
    {
      title: "Measuring impact with simple, credible indicators",
      date: "February 2026",
      category: "Methodology",
      excerpt:
        "A clear foundation for tracking change, documenting progress and supporting better decisions.",
    },
  ],
  sw: [
    {
      title: "Tathmini, ujifunzaji na maamuzi yaliyo bora zaidi",
      date: "Aprili 2026",
      category: "Uchambuzi",
      excerpt:
        "Jinsi ya kujenga mfumo wa ufuatiliaji na tathmini unaosaidia taasisi na programu za uwanjani kwa kweli.",
    },
    {
      title: "Kuweka jamii katikati ya miradi",
      date: "Machi 2026",
      category: "Uwanjani",
      excerpt:
        "Mbinu shirikishi zinazoongeza umiliki wa ndani na kuboresha ubora wa matokeo ya mradi.",
    },
    {
      title: "Kupima athari kwa viashiria rahisi na vya kuaminika",
      date: "Februari 2026",
      category: "Mbinu",
      excerpt:
        "Msingi wazi wa kufuatilia mabadiliko, kurekodi maendeleo na kusaidia maamuzi bora.",
    },
  ],
};

export default function BlogActualitesPage() {
  const { locale } = useTranslation();
  const adminContent = useAdminContent();

  const copy =
    locale === "en"
      ? {
          badge: "Blog & News",
          title: "Insights, updates and field perspectives",
          intro:
            "A resource space for sharing ideas, methods and recent lessons from our work in evaluation, planning and accountability.",
          cta: "Contact our team",
        }
      : locale === "sw"
      ? {
          badge: "Blogu na Habari",
          title: "Maarifa, habari na mitazamo ya uwanjani",
          intro:
            "Nafasi ya rasilimali ya kushiriki mawazo, mbinu na mafunzo ya karibuni kutoka kazi zetu za tathmini, mipango na uwajibikaji.",
          cta: "Wasiliana na timu yetu",
        }
      : {
          badge: "Blog & Actualites",
          title: "Analyses, nouvelles et regards de terrain",
          intro:
            "Un espace de ressources pour partager idees, methodes et enseignements recents autour de l'evaluation, de la planification et de la redevabilite.",
          cta: "Contacter notre equipe",
        };

  const currentArticles = [...adminContent.articles, ...articles[locale]];

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#f4fbff_0%,#dbeeff_55%,#eef8e7_100%)] px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-800 shadow-sm border border-slate-200/40">
              <Newspaper className="h-3.5 w-3.5" />
              {copy.badge}
            </span>
            <h1 className="font-Montserrat text-4xl font-bold text-slate-900 sm:text-5xl">{copy.title}</h1>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              {copy.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {currentArticles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                  <Tag className="h-3.5 w-3.5" />
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays className="h-4 w-4" />
                  {article.date}
                </span>
              </div>
              <h2 className="font-Montserrat mt-5 text-2xl font-bold text-slate-900 leading-tight">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl justify-start">
          <Link
            href="/Contact"
            className="glass-hover interactive-lift inline-flex items-center gap-2 rounded-2xl bg-[#0d5fd6] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#0b54c0]"
          >
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
