"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Users,
  Search,
  Filter,
  LayoutGrid,
  List,
} from "lucide-react";
import Footer from "../componen/Footer";

const impactStats = [
  { value: "+10", label: "Projets réalisés dans la communauté" },
  { value: "+6", label: "Organisations accompagnées dans leurs actions" },
  { value: "20", label: "Provinces couvertes par nos projets en RDC" },
  { value: "+500", label: "Bénéficiaires indirects par nos action" },
];

const projects = [
  {
    title: "Plan stratégique ONG Action Solidaire pour la Paix",
    category: "Planification",
    client: "ONG ASP",
    date: "Mars 2023",
    description: "Élaboration du plan stratégique 2023-2027.",
    image: "/photos/plant.jpg",
  },
  {
    title: "Étude de base PNUD Kinshasa",
    category: "Étude",
    client: "PNUD",
    date: "Décembre 2023",
    description: "Programme de substitution partielle au bois énergie en RDC.",
    image: "/photos/etude de base.jpg",
  },
  {
    title: "Évaluation Heal Africa & Ephphatha",
    category: "Évaluation",
    client: "WorldShare",
    date: "Février 2024",
    description:
      "Évaluation organisationnelle et formation en gestion de projet.",
    image: "/photos/evaluation.jpg",
  },
  {
    title: "Plan stratégique CR-OLK",
    category: "Planification",
    client: "CR-OLK",
    date: "2024",
    description: "Plan stratégique 2024-2028 du centre de recherche lacustre.",
    image: "/photos/evaluation.jpg",
  },
  {
    title: "Meta-évaluation CVA",
    category: "Évaluation",
    client: "World Vision",
    date: "2024",
    description: "Analyse de l’approche Citizen Voice and Action en RDC.",
    image: "/photos/téléchargé 1.jpg",
  },
  {
    title: "Projet Empowered 2 Protect",
    category: "Évaluation",
    client: "Help a Child",
    date: "2024",
    description:
      "Évaluation finale du projet de lutte contre les violences basées sur le genre.",
    image: "/photos/image 03.jpg",
  },
  {
    title: "Projet GPSA - Cordaid",
    category: "Redevabilité",
    client: "Cordaid",
    date: "2024",
    description: "Évaluation du projet de redevabilité sociale au Sud-Kivu.",
    image: "/photos/projet.jpg",
  },
  {
    title: "Caravane interreligieuse",
    category: "Recherche",
    client: "Faith to Action",
    date: "2024",
    description:
      "Étude de cas sur un projet d’apprentissage interreligieux.",
    image: "/photos/téléchargé 2.jpg",
  },
];

export default function Realisation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les catégories"
  );
  const [viewMode, setViewMode] = useState("grille");
  const [sortOrder, setSortOrder] = useState("recent");

  const categories = [
    "Toutes les catégories",
    ...new Set(projects.map((project) => project.category)),
  ];

  const leftImpactStats = [impactStats[0], impactStats[2]];
  const rightImpactStats = [impactStats[1], impactStats[3]];

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("Toutes les catégories");
    setSortOrder("recent");
    setViewMode("grille");
  };

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "Toutes les catégories" ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "ancien") {
        return a.date.localeCompare(b.date);
      }

      return b.date.localeCompare(a.date);
    });

  const impactCardClass =
    "group flex min-h-[155px] flex-col items-center justify-center rounded-sm border border-black/5 bg-white px-5 py-6 text-center text-slate-900 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] md:min-h-[170px] md:px-6";

  return (
    <main className="bg-[#f6f8ff] font-sans text-slate-900">
      <section className="bg-gradient-to-br from-[#f2f3f3] to-blue-400 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-900">
                Solutions en Action
              </h4>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Acquérez une expertise avec C2E
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-blue-50/90">
                Des missions concrètes au service du développement durable en
                RDC. Profitez d&apos;un accompagnement rigoureux pour transformer
                vos visions en impacts mesurables.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/realisation#projects-section"
                className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-white hover:text-[#1965b5]"
              >
                Explorer nos projets
              </Link>
              <Link
                href="/Contact"
                className="rounded-2xl border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:border-white"
              >
                Parlons-en
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex max-w-[420px] items-start gap-5 md:mx-0 md:gap-6"
          >
            <div className="flex flex-1 flex-col gap-5 md:-translate-y-6 md:gap-6">
              {leftImpactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className={impactCardClass}
                >
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-900 tracking-tight md:text-[2.1rem]">
                      {stat.value}
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
                    <div className="text-3xl font-bold text-blue-900 tracking-tight md:text-[2.1rem]">
                      {stat.value}
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

      <section id="projects-section" className="scroll-mt-32 px-6 py-16">
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
                    placeholder="Rechercher un projet, une catégorie ou un créateur..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex self-start rounded-xl bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grille")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "grille"
                        ? "bg-white text-blue-600 shadow"
                        : "text-gray-500"
                    }`}
                  >
                    <LayoutGrid size={16} /> Grille
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("liste")}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      viewMode === "liste"
                        ? "bg-white text-blue-600 shadow"
                        : "text-gray-500"
                    }`}
                  >
                    <List size={16} /> Liste
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-50 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Filter size={16} /> Filtres :
                  </div>

                  <select
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
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
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="recent">Plus récents</option>
                    <option value="ancien">Plus anciens</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-sm font-medium text-gray-500 hover:text-blue-600"
                  >
                    Réinitialiser
                  </button>
                </div>

                <div className="text-sm font-medium text-gray-400">
                  {filteredProjects.length}{" "}
                  {filteredProjects.length > 1
                    ? "projets trouvés"
                    : "projet trouvé"}
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === "grille"
                  ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-4"
              }
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project.title}
                    className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md ${
                      viewMode === "liste" ? "flex h-32 items-center" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={
                        viewMode === "liste"
                          ? "h-full w-48 object-cover"
                          : "h-40 w-full object-cover"
                      }
                    />
                    <div className="flex-1 p-4">
                      <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>
                      <h3
                        className={`mt-1 font-bold leading-tight text-gray-900 ${
                          viewMode === "liste" ? "text-base" : "text-lg"
                        }`}
                      >
                        {project.title}
                      </h3>
                      {viewMode === "grille" && (
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
                  <p className="text-gray-400">
                    Aucun projet ne correspond à votre recherche.
                  </p>
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
                Vous avez un projet ?
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-orange-800">
                Nous sommes là pour vous accompagner et toucher plus de
                communautés, avec des impacts bien mesurables.
              </p>
              <Link
                href="/services"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 font-bold text-white transition-colors hover:bg-orange-600"
              >
                Découvrez ce que nous pouvons faire pour vous{" "}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-[#F4F7FF] p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Users className="text-white" size={20} />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Parlez à nos experts !
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-blue-800">
                Laissez-nous un message pour prendre un rendez-vous avec nous.
              </p>
              <div className="space-y-3">
                <Link
                  href="/Contact"
                  className="block w-full rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Parler de votre besoin
                </Link>
                <a
                  href="tel:+243997674407"
                  className="block w-full rounded-xl border-2 border-blue-900 bg-transparent px-4 py-3 text-center font-bold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-blue-900 p-4 text-white shadow">
              <h4 className="mb-3 font-semibold">Statistiques</h4>
              <p>Projets : {projects.length}</p>
              <p>Pays : RDC</p>
              <p>Années : 2023 - 2024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
