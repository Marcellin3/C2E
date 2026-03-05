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
      image: "/consultants/charmant.jpg",
      desc: "Spécialiste en gestion et coordination de projets.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Nos Services
        </motion.h1>
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

      {/* ================= RAYON D'ACTION AVEC IMAGE ================= 
      <section
        className="relative py-28 bg-cover bg-center bg-blue-600 text-white text-center"
        style={{ backgroundImage: "url('/images/world-map.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-2">
          <Globe size={40} className="mx-auto mb-2" />
          <h2 className="text-4xl font-bold mb-6">Rayon d’Action</h2>
          <p className="max-w-2xl mx-auto text-justify leading-relaxed text-gray-200">
            Le C2E mène des actions sur toute l’étendue de la RDC et peut s’étendre à d’autres pays
            (Africains, Américains, Européens et Asiatiques) selon les opportunités et les besoins
            exprimés par les collaborateurs/partenaires et bénéficiaires.
            dans des secteurs clés comme la santé, l’éducation l'Environnementet la gouvernance.
            Il accompagne institutions publiques, ONG et partenaires techniques
            via des projets financés par des bailleurs nationaux et mondiaux.
          </p>
        </div>
      </section>*/}

      {/* ================= SECTION RAYON D'ACTION - DESIGN RÉFÉRENCE ================= */}
      <section
        className="relative py-28 bg-blue-600 text-white"
        style={{
          background: "linear-gradient(135deg, #0f3c8a 0%, #1e5ed6 60%, #ffffff 130%)",
        }}
      >
        {/* Superposition floue et sombre sur l'image de fond isolée (la carte du monde choisie) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 backdrop-blur-sm"
          style={{ backgroundImage: "url('/images/world-map-action.jpg')" }} // Carte du monde gm2157640320-578316598
        ></div>
        
        {/* Superposition sombre et floue pour le fond pour améliorer le contraste du texte */}
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          
          {/* COLONNE GAUCHE : LA CARTE INTERACTIVE (RDC) */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative w-full max-w-md aspect-square rounded-full border-4 border-yellow-400 p-8 bg-blue-700 shadow-2xl overflow-hidden transform hover:scale-105 transition-all">
              {/* <Image 
                src="/photos/bon.png"
                alt="Carte du rayon d'action - RDC"
                fill
                className="object-contain p-4 filter brightness-110 drop-shadow-xl"
              />*/}
              
              {/* Icônes de zoom et de sécurité (style référence) */}
              <div className="absolute top-1/4 right-1/4 bg-white/20 p-2 rounded-full backdrop-blur-md">
                <ShieldCheck className="text-yellow-400" size={16} />
              </div>
              <div className="absolute bottom-1/3 left-1/3 bg-yellow-400/20 p-3 rounded-full backdrop-blur-md">
                <Globe className="text-white" size={20} />
              </div>

              {/* Texte du Département (style référence) */}
              <p className="absolute bottom-10 left-10 text-xs font-semibold opacity-70">République Démocratique du</p>
              <p className="absolute bottom-4 left-10 text-2xl font-bold">Congo</p>
            </div>
          </div>

          {/* COLONNE DROITE : LE TEXTE */}
          <div className="text-left">
            <div className="flex items-center gap-4 mb-3">
              <Globe size={40} className="text-yellow-400" />
              <h2 className="text-5xl font-bold">Rayon d’Action</h2>
            </div>
            
            {/* Ligne de titre style référence */}
            <div className="w-24 h-1 bg-yellow-400 mb-8 rounded-full"></div>

            <p className="text-lg leading-relaxed text-gray-100 mb-8 max-w-xl">
              Le C2E mène des actions sur toute l’étendue de la RDC et peut
              s’étendre à d’autres pays (Africains, Américains, Européens et Asiatiques)
              selon les opportunités et les besoins exprimés par les
              collaborateurs/partenaires et bénéficiaires.
            </p>
            
            <p className="text-base leading-relaxed text-gray-200 opacity-90 mb-10 max-w-xl">
              Intervenant dans des secteurs clés comme la santé, l’éducation,
              l’Environnement et la gouvernance, il accompagne institutions publiques,
              ONG et partenaires techniques via des projets financés par des
              bailleurs nationaux et mondiaux.
            </p>

            {/* Bouton "En savoir plus" style référence */}
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 flex items-center gap-3">
              En savoir plus
              <ShieldCheck size={20} />
            </button>
          </div>

        </div>
      </section>

      {/* ================= CONSULTANTS AVEC IMAGES ================= */}
      <section className="py-24 px-8 md:px-20 bg-gray-100">
        <div className="text-center mb-16">
          <Users size={40} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-4xl font-bold">Notre Equipe</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
