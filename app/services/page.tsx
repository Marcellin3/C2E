"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Compass,
  ClipboardList,
  Database,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Globe,
  Users,
} from "lucide-react";

export default function Services() {

  const services = [
    {
      icon: <Compass size={28} />,
      title: "Conception & Planification Stratégique",
      text: "Analyses stratégiques, conception de politiques publiques, élaboration de projets et études d’évaluabilité pour garantir des interventions solides dès leur genèse.",
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Suivi, Évaluation & Apprentissage (MEAL)",
      text: "Conception de systèmes MEAL complets : baseline, évaluations intermédiaires et finales, intégration de l’analyse de risques et gestion de la complexité.",
    },
    {
      icon: <Database size={28} />,
      title: "Ingénierie des Données & Digitalisation",
      text: "Mise en place de plateformes numériques (KoboCollect, REDCap) et analyse quantitative et qualitative rigoureuse.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Renforcement des Capacités & Coaching",
      text: "Formations spécialisées, coaching en gestion de projets et autonomisation des acteurs locaux.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Recherche, Innovation & Partenariats",
      text: "Méthodologies innovantes, conférences et partenariats nationaux et internationaux.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Expertise Transversale & Audit",
      text: "Interventions multisectorielles et audits financiers pour garantir transparence et redevabilité.",
    },
  ];

  const consultants = [
    {
      name: "Patrick MUTUTA",
      image: "/consultants/patrick.jpg",
      desc: "PhD en Environnement – Plus de 10 ans d’expérience en gestion et conception de projets de développement.",
    },
    {
      name: "Philemon MBARAMBARA",
      image: "/consultants/philemon.jpg",
      desc: "PhD en Santé Communautaire – Expert en conception de plans stratégiques institutionnels.",
    },
    {
      name: "Marcellin MULEZI",
      image: "/photos/Mulezi.jpeg",
      desc: "Technicien en Développement Rural|Spécialiste en conception, élaboration et Mise en oeuvre des projets de Développement|Data Analyst certifié|Web 3 Builder.",
    },
    {
      name: "Charmant MUTUTA",
      image: "/photos/Charmant.jpg",
      desc: "Spécialiste en gestion et coordination de projets.",
    },
    {
      name: "Prince BITAKI",
      image: "/consultants/charmant.jpg",
      desc: "Specialiste en logique et en gestions des Equipe.",
    },
    {
      name: "Ethienne MUKENYIRE",
      image: "/photos/Ethienne 01.jpg",
      desc: "Economiste",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section
        className="relative py-16 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* TITRE */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Nos Services
          </motion.h1>

          {/* SOUS TEXTE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-200 mb-16"
          >
            Le Centre d’Expertise et d’Évaluation (C2E) accompagne les ONG,
            institutions et partenaires techniques dans la recherche, la
            planification stratégique, l’évaluation et le suivi des projets de
            développement.
          </motion.p>

          {/* STATISTIQUES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
              <p className="text-sm mt-2">Projets réalisés</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-4xl font-bold text-yellow-400">30+</h3>
              <p className="text-sm mt-2">Organisations accompagnées</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-4xl font-bold text-yellow-400">15+</h3>
              <p className="text-sm mt-2">Experts mobilisés</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
              <p className="text-sm mt-2">Années d'expérience</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section className="relative px-8 md:px-20 py-24">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-full shadow-xl z-10">
                {service.icon}
              </div>

              <div className="bg-white w-full md:w-5/12 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
                <div className="md:hidden text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RAYON D'ACTION AVEC IMAGE ================= */}

      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* ================= MAP ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/photos/super.png"
              alt="Carte du monde"
              className="w-full opacity-80"
            />

            {/* avion animation */}
            <motion.div
              animate={{ x: [0, 80, 160, 240, 320] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[45%] left-[20%]"
            >
              ✈️
            </motion.div>
          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 leading-snug">
              Notre <span className="text-blue-700">Rayon d’Action</span>
            </h2>

            <div className="w-14 h-1 bg-yellow-400 my-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Le <strong>C2E</strong> intervient sur toute l’étendue de la
              République Démocratique du Congo et peut étendre ses activités
              à d’autres régions du monde selon les opportunités et les besoins
              des partenaires.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Nos interventions couvrent plusieurs secteurs stratégiques
              notamment la santé, l’éducation, l’environnement et la gouvernance.
              Nous accompagnons les ONG, institutions publiques et partenaires
              techniques à travers des études, évaluations et projets
              financés par des bailleurs nationaux et internationaux.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Voir nos zones d’intervention →
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= CONSULTANTS AVEC IMAGES ================= */}
      <section className="py-24 px-8 md:px-20 bg-gray-100">
        <div className="text-center mb-16">
          <Users size={40} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-4xl font-bold">Notre Equipe</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20">
          {consultants.map((consultant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={consultant.image}
                  alt={consultant.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-600 mb-3">
                  {consultant.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {consultant.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
