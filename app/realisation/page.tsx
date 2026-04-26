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
import Footer from "../componen/Footer";
import { getProjectsWithFeaturedStudies } from "../data/featuredStudies";
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

export default function Realisation() {
  const { t, locale } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t.realisation.allCategories);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("recent");

  const projects = getProjectsWithFeaturedStudies(
    locale,
    t.realisation.projects
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

  const leftImpactStats = [t.realisation.impactStats[0], t.realisation.impactStats[2]];
  const rightImpactStats = [t.realisation.impactStats[1], t.realisation.impactStats[3]];

  const impactCardClass =
    "group flex min-h-[155px] flex-col items-center justify-center rounded-sm border border-black/5 bg-white px-5 py-6 text-center text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] md:min-h-[170px] md:px-6";

  return (
    <main className="bg-[#f6f8ff] font-sans text-slate-900">
      <section className="bg-gradient-to-br from-[#f2f3f3] to-blue-400 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-900">
                {t.realisation.eyebrow}
              </h4>
              <h1 className="text-[2.35rem] font-bold leading-tight sm:text-[3rem] md:text-6xl">
                {t.realisation.title}
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-blue-50/90">
                {t.realisation.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/realisation#projects-section"
                className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#1965b5]"
              >
                {t.realisation.projectsCta}
              </Link>
              <Link
                href="/Contact"
                className="rounded-2xl border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:border-white"
              >
                {t.realisation.talkCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex w-full max-w-[420px] items-start gap-4 md:mx-0 md:gap-6"
          >
            <div className="flex flex-1 flex-col gap-5 md:-translate-y-6 md:gap-6">
              {leftImpactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className={impactCardClass}
                >
                  <div className="space-y-2">
                    <div className="text-3xl font-bold tracking-tight text-blue-900 md:text-[2.1rem]">
                      <AnimatedStatValue value={stat.value} />
                    </div>
                    <p className="max-w-[10rem] text-sm leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-1 flex-col gap-5 md:translate-y-6 md:gap-6">
              {rightImpactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className={impactCardClass}
                >
                  <div className="space-y-2">
                    <div className="text-3xl font-bold tracking-tight text-blue-900 md:text-[2.1rem]">
                      <AnimatedStatValue value={stat.value} />
                    </div>
                    <p className="max-w-[10rem] text-sm leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects-section" className="scroll-mt-32 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="mb-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder={t.realisation.searchPlaceholder}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>

                <div className="flex self-start rounded-xl bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "grid"
                        ? "bg-white text-blue-600 shadow"
                        : "text-gray-500"
                    }`}
                  >
                    <LayoutGrid size={16} /> {t.realisation.grid}
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "list"
                        ? "bg-white text-blue-600 shadow"
                        : "text-gray-500"
                    }`}
                  >
                    <List size={16} /> {t.realisation.list}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-50 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Filter size={16} /> {t.realisation.filters}
                  </div>

                  <select
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
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
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                  >
                    <option value="recent">{t.realisation.recent}</option>
                    <option value="oldest">{t.realisation.oldest}</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-sm font-medium text-gray-500 hover:text-blue-600"
                  >
                    {t.realisation.reset}
                  </button>
                </div>

                <div className="text-sm font-medium text-gray-400">
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
                    className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md ${
                      viewMode === "list" ? "flex flex-col sm:h-32 sm:flex-row sm:items-center" : ""
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
                    <div className="flex-1 p-4">
                      <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>
                      <h3
                        className={`mt-1 font-bold leading-tight text-gray-900 ${
                          viewMode === "list" ? "text-base" : "text-lg"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {viewMode === "grid" && (
                        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                          {project.description}
                        </p>
                      )}
                      <div className="mt-3 text-xs text-gray-400">
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
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                <Zap className="text-white" fill="white" size={20} />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                {t.realisation.sideTitleOne}
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-orange-800">
                {t.realisation.sideTextOne}
              </p>
              <Link
                href="/services"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600"
              >
                {t.realisation.sideCtaOne} <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-[#F4F7FF] p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Users className="text-white" size={20} />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                {t.realisation.sideTitleTwo}
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-blue-800">
                {t.realisation.sideTextTwo}
              </p>
              <div className="space-y-3">
                <Link
                  href="/Contact"
                  className="block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
                >
                  {t.realisation.sideCtaTwo}
                </Link>
                <a
                  href="tel:+243997674407"
                  className="block w-full rounded-xl border-2 border-blue-900 bg-transparent px-4 py-3 text-center font-bold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  {t.realisation.appointmentCta}
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-blue-900/90 p-4 text-white shadow">
              <h4 className="mb-3 font-semibold">{t.realisation.statsTitle}</h4>
              <p>
                {t.realisation.statsProjects} : {projects.length}
              </p>
              <p>
                {t.realisation.statsCountry} : RDC
              </p>
              <p>
                {t.realisation.statsYears} : 2023 - 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
