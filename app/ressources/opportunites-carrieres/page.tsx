"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Clock3, GraduationCap } from "lucide-react";
import Footer from "../../components/Footer";
import { useAdminContent } from "../../data/adminContent";
import { createOpportunitySlug, opportunities } from "../../data/opportunities";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function OpportunitesCarrieresPage() {
  const { locale } = useTranslation();
  const adminContent = useAdminContent();

  const copy =
    locale === "en"
      ? {
          badge: "Opportunities & Careers",
          title: "Join our network of experts and field contributors",
          intro:
            "Openings, internships, consulting calls and collaboration opportunities linked to C2E activities.",
          cta: "Apply",
          more: "See more",
        }
      : locale === "sw"
      ? {
          badge: "Fursa na Kazi",
          title: "Jiunge na mtandao wetu wa wataalamu na washirika wa uwanjani",
          intro:
            "kwenye Ukurasa pata ma kazi, mafunzo, wito wa ushauri na fursa za kushirikiana na shughuli za C2E.",
          cta: "Tuma",
          more: "Tazama zaidi",
        }
      : {
          badge: "Opportunites & Carrieres",
          title: "Rejoindre notre reseau d'experts et de collaborateurs terrain",
          intro:
            "Trouver ici nos offres, stages, consultances et opportunites de collaboration liees aux activites de C2E.",
          cta: "Postuler",
          more: "Voir plus",
        };

  const currentOpportunities = [
    ...adminContent.opportunities,
    ...opportunities[locale],
  ];

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#eef7ff_0%,#d7ebff_52%,#f5f3df_100%)] px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-800 shadow-sm border border-slate-200/40">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
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
          {currentOpportunities.map((item, index) => {
            const detailHref = `/ressources/opportunites-carrieres/${createOpportunitySlug(item, index)}`;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-600">
                    <GraduationCap className="h-4 w-4" />
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-400">
                    <Clock3 className="h-4 w-4" />
                    {item.timing}
                  </span>
                </div>
                <h2 className="font-Montserrat mt-5 text-2xl font-bold text-slate-900 leading-tight">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                <Link
                  href={detailHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  {copy.more}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
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
