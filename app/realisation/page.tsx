"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Filter,
  LayoutGrid,
  List,
  Search,
  Users,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";
import { getProjectsWithFeaturedStudies } from "../data/featuredStudies";
import { useAdminContent } from "../data/adminContent";
import { useTranslation } from "../i18n/TranslationProvider";

function AnimatedStatValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const numericValue = Number.parseInt(value.replace(/\D/g, ""), 10);

    if (Number.isNaN(numericValue)) {
      setDisplayValue(0);
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(numericValue * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [value]);

  const prefix = value.startsWith("+") ? "+" : "";

  return <>{`${prefix}${displayValue}`}</>;
}

function CircularStat({
  label,
  value,
  sublabel,
  progress,
  colorClass,
}: {
  label: string;
  value: string;
  sublabel?: string;
  progress: number;
  colorClass: string;
}) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const safeProgress = Math.max(0, Math.min(progress, 100));
  const dashOffset = circumference - (safeProgress / 100) * circumference;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="9"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className={colorClass}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <p className="text-lg font-bold text-white">{value}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            {label}
          </p>
          {sublabel ? (
            <p className="mt-2 text-sm leading-6 text-white/85">{sublabel}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Realisation() {
  const { t, locale } = useTranslation();
  const adminContent = useAdminContent();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t.realisation.allCategories);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("recent");

  const projects = getProjectsWithFeaturedStudies(
    locale,
    [...adminContent.projects, ...t.realisation.projects]
  ).map((project) => ({
    ...project,
    category: t.realisation.categories[project.categoryKey],
  }));

  const categories = [
    t.realisation.allCategories,
    ...new Set(projects.map((project) => project.category)),
  ];

  useEffect(() => {
    setSelectedCategory((current) =>
      categories.includes(current) ? current : t.realisation.allCategories
    );
  }, [categories, t.realisation.allCategories]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory(t.realisation.allCategories);
    setSortOrder("recent");
    setViewMode("grid");
  };

  const filteredProjects = projects
    .filter((project) => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === t.realisation.allCategories ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "oldest") {
        return a.date.localeCompare(b.date);
      }

      return b.date.localeCompare(a.date);
    });

  const projectYears = projects
    .map((project) => {
      const match = project.date.match(/\d{4}/);
      return match ? Number.parseInt(match[0], 10) : null;
    })
    .filter((year): year is number => year !== null);
  const minYear = projectYears.length ? Math.min(...projectYears) : 2023;
  const maxYear = projectYears.length ? Math.max(...projectYears) : 2024;
  const yearSpan = maxYear - minYear + 1;
  const countryLabel = locale === "fr" ? "RDC" : "DRC";

  return (
    <main className="bg-[#f6f8ff] font-sans text-slate-900">
      <section 
        className="relative px-4 py-20 text-white sm:px-6 sm:py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photos/plant.jpg')" }}
      >
        {/* Dark blue/indigo overlay to provide contrast for white text and fit the blue/yellow graphic charter */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/90 to-slate-900/80" />

        {/* Ambient glow effects for a high-end feel */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pl-6 py-8 md:pl-10 md:py-10 max-w-4xl"
          >
            {/* Custom open bracket border (yellow) as in the user's mockup image */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-yellow-500 rounded-r" />
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-yellow-500 rounded-r" />
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-yellow-500 rounded-b rounded-t" />

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                {t.realisation.eyebrow}
              </span>
              <h1 className="font-Montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                {t.realisation.title}
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                {t.realisation.intro}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/realisation#projects-section"
                className="interactive-lift flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3.5 font-bold text-slate-950 shadow-[0_4px_20px_rgba(234,179,8,0.3)] transition-all hover:bg-yellow-400 hover:shadow-[0_6px_24px_rgba(234,179,8,0.5)]"
              >
                {t.realisation.projectsCta}
              </Link>
              <Link
                href="/Contact"
                className="interactive-lift rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                {t.realisation.talkCta}
              </Link>
            </div>

            {/* Impact stats directly under the content, matching the layout of the user's mockup */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
              {t.realisation.impactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/10 bg-slate-950/45 p-5 backdrop-blur-md hover:bg-slate-950/60 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold tracking-tight text-yellow-400">
                    <AnimatedStatValue value={stat.value} />
                  </div>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects-section" className="scroll-mt-32 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="mb-8 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder={t.realisation.searchPlaceholder}
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>

                <div className="flex self-start rounded-2xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${viewMode === "grid"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                      }`}
                  >
                    <LayoutGrid size={16} /> {t.realisation.grid}
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${viewMode === "list"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                      }`}
                  >
                    <List size={16} /> {t.realisation.list}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <Filter size={16} /> {t.realisation.filters}
                  </div>

                  <select
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <select
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                  >
                    <option value="recent">{t.realisation.recent}</option>
                    <option value="oldest">{t.realisation.oldest}</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-sm font-semibold text-slate-500 hover:text-blue-600"
                  >
                    {t.realisation.reset}
                  </button>
                </div>

                <div className="text-sm font-semibold text-slate-400">
                  {filteredProjects.length}{" "}
                  {filteredProjects.length > 1
                    ? t.realisation.projectsFoundPlural
                    : t.realisation.projectsFoundSingular}
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-4"
              }
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project.title}
                    className={`overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] ${viewMode === "list" ? "flex flex-col sm:h-32 sm:flex-row sm:items-center" : ""
                      }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={
                        viewMode === "list"
                          ? "h-40 w-full object-cover sm:h-full sm:w-48"
                          : "h-40 w-full object-cover"
                      }
                    />
                    <div className="flex-1 p-5">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>
                      <h3
                        className={`font-Montserrat mt-2.5 font-bold leading-tight text-slate-900 ${viewMode === "list" ? "text-base" : "text-lg"
                          }`}
                      >
                        {project.title}
                      </h3>
                      {viewMode === "grid" && (
                        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                          {project.description}
                        </p>
                      )}
                      <div className="mt-3 text-xs text-slate-400">
                        {project.date} • {project.client}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-xl border border-dashed border-gray-200 bg-white py-20 text-center">
                  <p className="text-gray-400">{t.realisation.noResults}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-orange-100 bg-[#FFFBF0] p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500">
                <Zap className="text-white" fill="white" size={20} />
              </div>
              <h4 className="font-Montserrat mb-2 text-xl font-bold text-slate-900">
                {t.realisation.sideTitleOne}
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-orange-800">
                {t.realisation.sideTextOne}
              </p>
              <Link
                href="/services"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-4 py-3 font-bold text-white transition-colors hover:bg-yellow-600"
              >
                {t.realisation.sideCtaOne} <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-[#F4F7FF] p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Users className="text-white" size={20} />
              </div>
              <h4 className="font-Montserrat mb-2 text-xl font-bold text-slate-900">
                {t.realisation.sideTitleTwo}
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-blue-800">
                {t.realisation.sideTextTwo}
              </p>
              <div className="space-y-3">
                <Link
                  href="/Contact"
                  className="block w-full rounded-2xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
                >
                  {t.realisation.sideCtaTwo}
                </Link>
                <a
                  href="tel:+243997674407"
                  className="block w-full rounded-2xl border border-blue-900 bg-transparent px-4 py-3 text-center font-bold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  {t.realisation.appointmentCta}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0c66f7] p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)]">
              <h4 className="mb-4 text-lg font-semibold">{t.realisation.statsTitle}</h4>
              <div className="space-y-4">
                <CircularStat
                  label={t.realisation.statsProjects}
                  value={String(projects.length)}
                  sublabel={`${projects.length} ${projects.length > 1 ? t.realisation.projectsFoundPlural : t.realisation.projectsFoundSingular}`}
                  progress={Math.min((projects.length / 20) * 100, 100)}
                  colorClass="text-cyan-300"
                />
                <CircularStat
                  label={t.realisation.statsCountry}
                  value={countryLabel}
                  sublabel={countryLabel}
                  progress={100}
                  colorClass="text-yellow-300"
                />
                <CircularStat
                  label={t.realisation.statsYears}
                  value={`${minYear}-${maxYear}`}
                  sublabel={`${yearSpan} ${locale === "fr" ? "ans de couverture" : locale === "en" ? "years covered" : "miaka ya utekelezaji"}`}
                  progress={Math.min((yearSpan / 5) * 100, 100)}
                  colorClass="text-emerald-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
