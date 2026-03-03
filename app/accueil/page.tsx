"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  BarChart3,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function Accueil() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">C2E</h1>
        <div className="flex gap-8 font-medium">
          {["Home", "About", "Objectives", "Contact"].map((item, i) => (
            <a
              key={i}
              className="hover:text-blue-600 transition duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-24 bg-gradient-to-r from-blue-50 to-white">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-6"
        >
          <h4 className="text-blue-600 font-semibold tracking-wide uppercase">
            Optimiser la performance
          </h4>

          <h1 className="text-5xl font-bold leading-tight">
            Créons des <span className="text-blue-600">solutions stratégiques durables</span>
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
            src="/photos/logo.jpg"
            alt="Hero"
            className="w-[420px] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="px-16 py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">

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
      <section className="px-16 py-24 bg-gray-100">

        <div className="text-center mb-16">
          <Target size={40} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-4xl font-bold">Nos Objectifs Stratégiques</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              icon: <BarChart3 size={32} />,
              title: "Évaluation & Analyse d'Impact",
            },
            {
              icon: <GraduationCap size={32} />,
              title: "Renforcement des Capacités",
            },
            {
              icon: <Lightbulb size={32} />,
              title: "Recherche & Innovation",
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "Plaidoyer & Redevabilité",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition"
            >
              <div className="text-blue-600 mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">
                Solutions stratégiques basées sur des données fiables et
                adaptées au contexte du développement en RDC.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-600 text-white text-center py-10 space-y-2">
        <p>
          Centre d’Expertise et d’Evaluation – Goma, RDC
        </p>
        <p>
          c2experteval@gmail.com | +243 997 674 407
        </p>
        <p>© 2026 C2E – Tous droits réservés</p>
      </footer>

    </div>
  );
}
