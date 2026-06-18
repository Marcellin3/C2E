"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  LayoutGrid,
  Table as TableIcon,
  MapPin,
  Briefcase,
  User,
  Shield,
  Award,
  BookOpen,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/TranslationProvider";

// Localized Board Members data and layout translations
const boardTranslations = {
  fr: {
    hero: {
      badge: "Gouvernance",
      title: "Conseil d'Administration",
      subtitle: "Les membres qui guident la vision stratégique et les orientations éthiques du Centre d'Expertise et d'Évaluation (C2E).",
      breadcrumbHome: "Accueil",
      breadcrumbServices: "Services",
      breadcrumbCurrent: "Conseil d'Administration",
    },
    controls: {
      backLink: "Retour aux services",
      viewGrid: "Vue en Grille",
      viewTable: "Vue en Tableau",
    },
    tableHeaders: {
      number: "N°",
      name: "Nom & Post-nom",
      profession: "Profession",
      address: "Adresse",
      role: "Fonction",
    },
    members: [
      {
        number: "01",
        name: "Nicole MBAYO MAFINGE",
        profession: "Médecin",
        address: "Sud-Kivu, RDC",
        role: "Présidente du CA",
        initials: "NM",
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        number: "02",
        name: "Fabrice NURU MUGABE",
        profession: "Économiste",
        address: "Sud-Kivu, RDC",
        role: "Vice-président du CA",
        initials: "FN",
        gradient: "from-sky-500 to-blue-600",
      },
      {
        number: "03",
        name: "Etienne MUKENYIRE BUHURU",
        profession: "Économiste",
        address: "Sud-Kivu, RDC",
        role: "Secrétaire du CA",
        initials: "EM",
        gradient: "from-teal-500 to-emerald-600",
      },
      {
        number: "04",
        name: "Clotilde BIKAFULUKA MBARAMBARA",
        profession: "Religieuse",
        address: "Sud-Kivu, RDC",
        role: "Conseillère",
        initials: "CB",
        gradient: "from-violet-500 to-purple-600",
      },
      {
        number: "05",
        name: "Adolphe KAFRONGRO MUTUTA",
        profession: "Humanitaire",
        address: "Sud-Kivu, RDC",
        role: "Conseiller",
        initials: "AK",
        gradient: "from-amber-500 to-orange-600",
      },
    ],
  },
  en: {
    hero: {
      badge: "Governance",
      title: "Board of Directors",
      subtitle: "The members who guide the strategic vision and ethical directions of the Center for Expertise and Evaluation (C2E).",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      breadcrumbCurrent: "Board of Directors",
    },
    controls: {
      backLink: "Back to services",
      viewGrid: "Grid View",
      viewTable: "Table View",
    },
    tableHeaders: {
      number: "No.",
      name: "Full Name",
      profession: "Profession",
      address: "Address",
      role: "Function / Role",
    },
    members: [
      {
        number: "01",
        name: "Nicole MBAYO MAFINGE",
        profession: "Medical Doctor",
        address: "South Kivu, DRC",
        role: "Chairperson of the Board",
        initials: "NM",
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        number: "02",
        name: "Fabrice NURU MUGABE",
        profession: "Economist",
        address: "South Kivu, DRC",
        role: "Vice-Chairperson of the Board",
        initials: "FN",
        gradient: "from-sky-500 to-blue-600",
      },
      {
        number: "03",
        name: "Etienne MUKENYIRE BUHURU",
        profession: "Economist",
        address: "South Kivu, DRC",
        role: "Secretary of the Board",
        initials: "EM",
        gradient: "from-teal-500 to-emerald-600",
      },
      {
        number: "04",
        name: "Clotilde BIKAFULUKA MBARAMBARA",
        profession: "Nun",
        address: "South Kivu, DRC",
        role: "Board Member",
        initials: "CB",
        gradient: "from-violet-500 to-purple-600",
      },
      {
        number: "05",
        name: "Adolphe KAFRONGRO MUTUTA",
        profession: "Humanitarian",
        address: "South Kivu, DRC",
        role: "Board Member",
        initials: "AK",
        gradient: "from-amber-500 to-orange-600",
      },
    ],
  },
  sw: {
    hero: {
      badge: "Utawala",
      title: "Bodi ya Wakurugenzi",
      subtitle: "Wanachama wanaoongoza maono na mwelekeo wa kimkakati wa Kituo cha Utaalamu na Tathmini (C2E).",
      breadcrumbHome: "Nyumbani",
      breadcrumbServices: "Huduma",
      breadcrumbCurrent: "Bodi ya Wakurugenzi",
    },
    controls: {
      backLink: "Rudi kwenye huduma",
      viewGrid: "Mtazamo wa Gridi",
      viewTable: "Mtazamo wa Jedwali",
    },
    tableHeaders: {
      number: "Na.",
      name: "Jina Kamili",
      profession: "Kazi / Taaluma",
      address: "Anwani",
      role: "Wadhifa",
    },
    members: [
      {
        number: "01",
        name: "Nicole MBAYO MAFINGE",
        profession: "Daktari",
        address: "Kivu Kusini, DRC",
        role: "Mwenyekiti wa Bodi",
        initials: "NM",
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        number: "02",
        name: "Fabrice NURU MUGABE",
        profession: "Mwanauchumi",
        address: "Kivu Kusini, DRC",
        role: "Makamu Mwenyekiti wa Bodi",
        initials: "FN",
        gradient: "from-sky-500 to-blue-600",
      },
      {
        number: "03",
        name: "Etienne MUKENYIRE BUHURU",
        profession: "Mwanauchumi",
        address: "Kivu Kusini, DRC",
        role: "Katibu wa Bodi",
        initials: "EM",
        gradient: "from-teal-500 to-emerald-600",
      },
      {
        number: "04",
        name: "Clotilde BIKAFULUKA MBARAMBARA",
        profession: "Mtawa",
        address: "Kivu Kusini, DRC",
        role: "Mshauri wa Bodi",
        initials: "CB",
        gradient: "from-violet-500 to-purple-600",
      },
      {
        number: "05",
        name: "Adolphe KAFRONGRO MUTUTA",
        profession: "Mfanyakazi wa Kibinadamu",
        address: "Kivu Kusini, DRC",
        role: "Mshauri wa Bodi",
        initials: "AK",
        gradient: "from-amber-500 to-orange-600",
      },
    ],
  },
};

export default function ConseilAdministration() {
  const { locale } = useTranslation();
  
  // Guard localized data selection
  const lang: "fr" | "en" | "sw" = (locale === "en" || locale === "sw" || locale === "fr") ? locale : "fr";
  const content = boardTranslations[lang];

  // State to toggle between grid and table layout
  const [layoutMode, setLayoutMode] = useState<"grid" | "table">("grid");

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen dark:bg-slate-950 dark:text-slate-200">
      
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-20 text-white md:px-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.04),transparent_30rem)]" />
        
        {/* Glow ambient background lights */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/accueil" className="hover:text-white transition">{content.hero.breadcrumbHome}</Link>
              <ChevronIcon />
              <Link href="/services" className="hover:text-white transition">{content.hero.breadcrumbServices}</Link>
              <ChevronIcon />
              <span className="text-yellow-400">{content.hero.breadcrumbCurrent}</span>
            </nav>

            {/* Governance Badge */}
            <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-blue-400 shadow-sm">
              {content.hero.badge}
            </span>

            {/* Main title */}
            <h1 className="font-Montserrat text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight text-white max-w-4xl">
              {content.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="font-display text-lg sm:text-xl text-slate-300 font-light tracking-wide max-w-3xl">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Control bar / Layout switches */}
      <div className="border-b border-slate-200/60 bg-white/70 py-4 backdrop-blur-md sticky top-[64px] z-30 dark:bg-slate-900/70 dark:border-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
          
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft size={14} /> {content.controls.backLink}
          </Link>

          {/* Toggle buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setLayoutMode("grid")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                layoutMode === "grid"
                  ? "bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <LayoutGrid size={14} />
              {content.controls.viewGrid}
            </button>
            <button
              onClick={() => setLayoutMode("table")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                layoutMode === "table"
                  ? "bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <TableIcon size={14} />
              {content.controls.viewTable}
            </button>
          </div>

        </div>
      </div>

      {/* Main Members Display Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 min-h-[450px]">
        <AnimatePresence mode="wait">
          {layoutMode === "grid" ? (
            
            /* 1. GRID CARDS MODE */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
            >
              {content.members.map((member, idx) => {
                const isPresident = member.role.toLowerCase().includes("président") || member.role.toLowerCase().includes("chair");
                
                return (
                  <motion.div
                    key={member.number}
                    whileHover={{ y: -6 }}
                    className={`relative rounded-3xl bg-white p-6 dark:bg-slate-900 border transition-all duration-300 shadow-[0_8px_30px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.04)] flex flex-col items-center text-center ${
                      isPresident
                        ? "border-yellow-200 dark:border-yellow-950/40 bg-gradient-to-b from-yellow-50/5 via-white to-white dark:from-yellow-950/5"
                        : "border-slate-200/60 dark:border-slate-800/60"
                    }`}
                  >
                    {/* Position Number Badge */}
                    <span className="absolute top-4 left-4 h-6 px-2.5 rounded-lg bg-slate-100 text-[10px] font-black text-slate-500 flex items-center justify-center dark:bg-slate-800 dark:text-slate-400">
                      #{member.number}
                    </span>

                    {/* Styled Initials Avatar */}
                    <div className={`mt-4 mb-5 h-20 w-20 rounded-full bg-gradient-to-br ${member.gradient} text-white font-Montserrat text-2xl font-black flex items-center justify-center shadow-lg relative group overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                      {member.initials}
                    </div>

                    {/* Member Name */}
                    <h3 className="font-Montserrat text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2">
                      {member.name}
                    </h3>

                    {/* Member Role / Function Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-6 ${
                      isPresident
                        ? "bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 dark:text-yellow-400"
                        : "bg-blue-50 border border-blue-100 text-blue-600 dark:bg-blue-950/30 dark:border-blue-900/30 dark:text-blue-400"
                    }`}>
                      {member.role}
                    </span>

                    {/* Properties Info */}
                    <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-500 dark:text-slate-400">
                      
                      {/* Profession */}
                      <div className="flex items-center justify-center gap-2">
                        <Briefcase size={13} className="text-slate-400" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{member.profession}</span>
                      </div>

                      {/* Location / Address */}
                      <div className="flex items-center justify-center gap-2">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{member.address}</span>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            
            /* 2. TABLE MODE */
            <motion.div
              key="table-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-md"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-b border-slate-200/60 dark:border-slate-800/60">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-center w-16">
                      {content.tableHeaders.number}
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider">
                      {content.tableHeaders.name}
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider">
                      {content.tableHeaders.role}
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider">
                      {content.tableHeaders.profession}
                    </th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider">
                      {content.tableHeaders.address}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {content.members.map((member) => {
                    const isPresident = member.role.toLowerCase().includes("président") || member.role.toLowerCase().includes("chair");
                    
                    return (
                      <tr
                        key={member.number}
                        className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/35 transition-colors ${
                          isPresident ? "bg-yellow-50/5 dark:bg-yellow-950/2" : ""
                        }`}
                      >
                        <td className="px-6 py-4.5 font-Montserrat text-xs font-bold text-center text-slate-500">
                          {member.number}
                        </td>
                        <td className="px-6 py-4.5">
                          <div className="flex items-center gap-3">
                            {/* Small circular avatar */}
                            <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${member.gradient} text-[10px] font-bold text-white flex items-center justify-center`}>
                              {member.initials}
                            </div>
                            <span className="font-Montserrat text-[14px] font-bold text-slate-900 dark:text-white">
                              {member.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4.5">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                            isPresident
                              ? "bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 dark:text-yellow-400"
                              : "bg-blue-50 border border-blue-100 text-blue-600 dark:bg-blue-950/30 dark:border-blue-900/30 dark:text-blue-400"
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {member.profession}
                        </td>
                        <td className="px-6 py-4.5 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-slate-400" />
                            <span>{member.address}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>

          )}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}

// Simple breadcrumb Chevron icon
function ChevronIcon() {
  return (
    <span className="text-slate-500 flex items-center">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}
