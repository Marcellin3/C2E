"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { Send } from "lucide-react";
import { MdEmail } from "react-icons/md";

export default function Contact () {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 py-20 px-6 md:px-24 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-widest text-sm"
          >
            Parles Nous de vos projets
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900"
          >
            Contactez le Centre d’Expertise <br /> et d’Évaluation (C2E)
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* ================= COLONNE GAUCHE : INFOS ================= */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6"
          >
            {/* Carte Adresse */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Notre Siège</h3>
                  <p className="text-slate-500 leading-relaxed">
                    12C Avenue des Ecoles, Quartier les Volcans,<br />
                    Commune de Goma, Ville de Goma, RDC.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Carte E-mail */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Officiel</h3>
                  <a href="mailto:c2experteval@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                    c2experteval@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Carte Téléphones (Bento Style) */}
            <motion.div variants={itemVariants} className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full translate-x-10 -translate-y-10"></div>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <FaPhoneAlt size={18} className="text-blue-400" /> Lignes Directes
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-slate-400 text-sm">Goma (RDC)</span>
                  <span className="font-medium">+243 997 674 407</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-slate-400 text-sm">International</span>
                  <span className="font-medium">+1(581) 446-1977</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Support</span>
                  <span className="font-medium">+243 997 125 196</span>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl flex items-center justify-center gap-2 transition-all font-bold">
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
                <button className="p-3 bg-white/10 hover:bg-blue-600 rounded-xl transition-all">
                  <FaLinkedin size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= COLONNE DROITE : FORMULAIRE ================= */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nom Complet</label>
                    <input type="text" placeholder="Ex: Jean Mukendi" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Professionnel</label>
                    <input type="email" placeholder="nom@organisation.org" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Sujet</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 outline-none transition-all appearance-none">
                    <option>Demande d'évaluation</option>
                    <option>Renforcement de capacités</option>
                    <option>Partenariat stratégique</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Votre Message</label>
                  <textarea rows={5} placeholder="Décrivez votre besoin ici..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 flex items-center justify-center gap-3 transition-all"
                >
                  Envoyer le message <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Google Maps Placeholder (Modern Style) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white relative"
        >
          {/* Remplacer l'iframe par votre vrai lien Google Maps Embed */}
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
             <p className="text-slate-500 font-medium">Carte Interactive : Goma, Quartier les Volcans</p>
          </div>
          <iframe 
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.365943807357!2d29.2198!3d-1.6744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f701509939b%3A0xc0c727038165a250!2sGoma!5e0!3m2!1sfr!2scd!4v1700000000000"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>

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