"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Clock3, GraduationCap } from "lucide-react";
import Footer from "../../componen/Footer";
import { useAdminContent } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";

const opportunities = {
  fr: [
    {
      title: "Consultant(e) en suivi et evaluation",
      type: "Consultance",
      timing: "Ouvert",
      text: "Appui aux missions d'etudes, d'evaluation et de structuration des dispositifs de suivi.",
    },
    {
      title: "Stagiaire en recherche et analyse",
      type: "Stage",
      timing: "Candidatures en cours",
      text: "Participation a la collecte, a l'analyse des donnees et a la production de notes techniques.",
    },
    {
      title: "Reserve de talents terrain",
      type: "Opportunite",
      timing: "Permanent",
      text: "Profils mobilisables pour des missions communautaires, enquetes et accompagnement de projets.",
    },
  ],
  en: [
    {
      title: "Monitoring and evaluation consultant",
      type: "Consultancy",
      timing: "Open",
      text: "Support for studies, evaluations and the design of monitoring systems.",
    },
    {
      title: "Research and analysis intern",
      type: "Internship",
      timing: "Applications open",
      text: "Contribute to data collection, analysis and the drafting of technical notes.",
    },
    {
      title: "Field talent pool",
      type: "Opportunity",
      timing: "Ongoing",
      text: "Deployable profiles for community missions, surveys and project support.",
    },
  ],
  sw: [
    {
      title: "Mshauri wa ufuatiliaji na tathmini",
      type: "Ushauri",
      timing: "Wazi",
      text: "Msaada kwa tafiti, tathmini na uundaji wa mifumo ya ufuatiliaji.",
    },
    {
      title: "Mwanafunzi wa utafiti na uchambuzi",
      type: "Mafunzo",
      timing: "Maombi yanaendelea",
      text: "Kushiriki katika ukusanyaji wa data, uchambuzi na uandishi wa nyaraka za kiufundi.",
    },
    {
      title: "Hifadhi ya vipaji vya uwanjani",
      type: "Fursa",
      timing: "Muda wote",
      text: "Wasifu wa kuhamasishwa kwa kazi za jamii, tafiti na usaidizi wa miradi.",
    },
  ],
};

export default function OpportunitesCarrieresPage() {
  const { locale } = useTranslation();
  const adminContent = useAdminContent();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const copy =
    locale === "en"
      ? {
          badge: "Opportunities & Careers",
          title: "Join our network of experts and field contributors",
          intro:
            "Openings, internships, consulting calls and collaboration opportunities linked to C2E activities.",
          cta: "Apply",
          more: "See more",
          less: "Show less",
        }
      : locale === "sw"
      ? {
          badge: "Fursa na Kazi",
          title: "Jiunge na mtandao wetu wa wataalamu na washirika wa uwanjani",
          intro:
            "kwenye Ukurasa pata ma kazi, mafunzo, wito wa ushauri na fursa za kushirikiana na shughuli za C2E.",
          cta: "Tuma",
          more: "Tazama zaidi",
          less: "Ficha",
        }
      : {
          badge: "Opportunites & Carrieres",
          title: "Rejoindre notre reseau d'experts et de collaborateurs terrain",
          intro:
            "Trouver ici nos offres, stages, consultances et opportunites de collaboration liees aux activites de C2E.",
          cta: "Postuler",
          more: "Voir plus",
          less: "Voir moins",
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800 shadow-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              {copy.badge}
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">{copy.title}</h1>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              {copy.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {currentOpportunities.map((item, index) => {
            const isExpanded = expandedCard === index;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 font-semibold text-sky-700">
                    <GraduationCap className="h-4 w-4" />
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-2 text-slate-500">
                    <Clock3 className="h-4 w-4" />
                    {item.timing}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                {isExpanded ? (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    {"deadline" in item && item.deadline ? (
                      <p>
                        <span className="font-bold text-slate-900">
                          Date limite :
                        </span>{" "}
                        {item.deadline}
                      </p>
                    ) : null}
                    {"location" in item && item.location ? (
                      <p>
                        <span className="font-bold text-slate-900">Lieu :</span>{" "}
                        {item.location}
                      </p>
                    ) : null}
                    {"requirements" in item && item.requirements ? (
                      <p className="mt-2">
                        <span className="font-bold text-slate-900">
                          Exigences :
                        </span>{" "}
                        {item.requirements}
                      </p>
                    ) : null}
                    {"description" in item && item.description ? (
                      <p className="mt-2">
                        <span className="font-bold text-slate-900">
                          Description :
                        </span>{" "}
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-5 py-2.5 text-sm font-bold text-sky-700 transition hover:bg-sky-100"
                >
                  {isExpanded ? copy.less : copy.more}
                  <ArrowRight
                    className={`h-4 w-4 transition ${isExpanded ? "rotate-90" : ""}`}
                  />
                </button>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl justify-start">
          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0d5fd6] px-6 py-3 font-semibold text-white shadow-[0_16px_36px_rgba(13,95,214,0.22)] hover:bg-[#0b54c0]"
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
