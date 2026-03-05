"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Target,
  Eye,
  Rocket,
  BarChart3,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function accueil() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-24 bg-gradient-to-r from-blue-50 to-white">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 space-y-8"
        >
          <h4 className="text-blue-600 font-semibold tracking-wide uppercase">
            Optimiser la performance de votre Organisation avec C2E
          </h4>

          <h1 className="text-5xl font-bold leading-tight">
            Nous Créons des <span className="text-blue-600">solutions stratégiques durables pour les Organisations</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Nous accompagnons les institutions publiques et privées dans le
            suivi-évaluation, la recherche et la gestion axée sur les résultats.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-xl hover:bg-blue-700 transition"
          >
            Commencer
          </motion.button>
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Expertise & Évaluation en RDC
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src="/photos/logo ok.png"
            alt="logo"
            className="w-[420px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="px-16 py-24 bg-gradient-to-r from-blue-600 to-blue-800 leading-relaxed font-light text-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Vision & Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
          >
            <Eye size={40} className="text-amber-300 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-amber-300">
              Notre Vision
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Faire une différence dans la conduite responsable de la recherche
              et des évaluations afin que chaque projet en RDC produise un
              impact significatif sur la qualité de vie des communautés.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
          >
            <Rocket size={40} className="text-amber-300 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-amber-300">
              Notre Mission
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Fournir des solutions innovantes et adaptées aux institutions
              publiques et privées dans la conception, la mise en œuvre
              et l’évaluation des politiques de développement.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= OBJECTIFS ================= */}
      <section className="px-6 md:px-24 py-32 bg-white">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Nos Objectifs Strategique</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
            Des piliers solides pour une croissance durable.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Carte Large */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex flex-col justify-between hover:border-blue-200 transition-colors"
          >
            <BarChart3 size={40} className="text-blue-600 mb-8" />
            <div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">Évaluation & Analyse d'Impact</h4>
              <p className="text-slate-600 leading-relaxed">
                Réaliser des études de faisabilité et des évaluations d’impact afin de mesurer l’efficacité des politiques publiques dans la santé, l'économie et l’environnement.
              </p>
            </div>
          </motion.div>

          {/* Carte Haute */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-blue-50 p-10 rounded-[2rem] border border-blue-100 hover:bg-blue-100/50 transition-colors"
          >
            <GraduationCap size={40} className="text-blue-600 mb-8" />
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Capacités</h4>
            <p className="text-slate-600 leading-relaxed">
              Formations spécialisées en suivi-évaluation, avec un focus sur le leadership des jeunes chercheurs.
            </p>
          </motion.div>

          {/* Deux autres petites cartes */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <Lightbulb size={40} className="text-blue-600 mb-8" />
            <h4 className="text-xl font-bold mb-2">Innovation</h4>
            <p className="text-slate-500 text-sm">Produire des recherches indépendantes et intégrer les nouvelles technologies.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-10 rounded-[2rem] text-white md:col-span-2 flex items-center gap-8"
          >
            <ShieldCheck size={50} className="text-blue-400 shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-2">Plaidoyer & Redevabilité</h4>
              <p className="text-slate-400">Garantir une gestion axée sur les résultats et la transparence au service de la population.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10">
        <div className="bg-blue-900/90 backdrop-blur-2xl border-t border-white/10 text-white px-10 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">C2E</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Centre d’Expertise et d’Évaluation basé à Goma. Experts en planification,
                évaluation et recherche appliquée pour un impact durable en RDC.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm opacity-90">
                {["Accueil", "Réalisations", "Services", "Contact"].map((item) => (
                  <li key={item} className="hover:text-yellow-400 cursor-pointer transition-colors w-fit">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><MdEmail className="text-yellow-400" size={20} /><span>c2experteval@gmail.com</span></div>
                <div className="flex items-center gap-3"><FaWhatsapp className="text-yellow-400" size={20} /><span>+243 997 674 407</span></div>
                <div className="flex items-center gap-3"><FaLinkedin className="text-yellow-400" size={20} /><span>LinkedIn / C2E</span></div>
              </div>
            </div>
          </div>
          <div className="text-center text-xs opacity-50 mt-12 pt-6 border-t border-white/5">
            © 2026 Centre d’Expertise et d’Évaluation – Excellence & Rigueur
          </div>
        </div>
      </footer>

    </div>
  );
}
