"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { Send } from "lucide-react";
import Footer from "../componen/Footer";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    subject: "Demande d'évaluation",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `${formValues.subject} - ${formValues.fullName || "Nouveau contact"}`
    );
    const body = encodeURIComponent(
      `Nom: ${formValues.fullName}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`
    );

    window.location.href = `mailto:c2experteval@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      <div className="px-6 pb-4 py-8 md:px-6">
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[30%] w-[30%] rounded-full bg-blue-200/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 motion-fade-up">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-black uppercase tracking-widest text-blue-600"
            >
              Parlez nous de vos projets
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-4 font-display text-5xl font-semibold text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text md:text-[4.2rem]"
            >
              Contactez le Centre d&apos;Expertise
              <br />
              et d&apos;Évaluation (C2E)
            </motion.h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 lg:col-span-5"
            >
              <motion.div
                variants={itemVariants}
                className="interactive-lift bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Notre Siège</h3>
                    <p className="leading-relaxed text-slate-500">
                      12C Avenue des Ecoles, Quartier les Volcans,
                      <br />
                      Commune de Goma, Ville de Goma, RDC.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="interactive-lift bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Email Officiel</h3>
                    <a
                      href="mailto:c2experteval@gmail.com"
                      className="transition-colors hover:text-blue-600 text-slate-500"
                    >
                      c2experteval@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-blue-500/10"></div>
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <FaPhoneAlt size={18} className="text-blue-400" /> Lignes Directes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-sm text-slate-400">Goma (RDC)</span>
                    <span className="font-medium">+243 997 674 407</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-sm text-slate-400">International</span>
                    <span className="font-medium">+1(581) 446-1977</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Support</span>
                    <span className="font-medium">+243 997 125 196</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a
                    href="https://wa.me/243997674407"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-hover interactive-lift flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold hover:bg-green-700"
                  >
                    <FaWhatsapp size={20} /> WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-hover interactive-lift rounded-xl bg-white/10 p-3 hover:bg-blue-600"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] md:p-12">
                <h2 className="mb-8 font-display text-[2.2rem] font-semibold">
                  Envoyez-nous un message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="ml-1 text-sm font-semibold text-slate-700">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Jean Mukendi"
                        value={formValues.fullName}
                        onChange={(e) =>
                          setFormValues((current) => ({
                            ...current,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="ml-1 text-sm font-semibold text-slate-700">
                        Email Professionnel
                      </label>
                      <input
                        type="email"
                        placeholder="nom@organisation.org"
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues((current) => ({
                            ...current,
                            email: e.target.value,
                          }))
                        }
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">
                      Sujet
                    </label>
                    <select
                      value={formValues.subject}
                      onChange={(e) =>
                        setFormValues((current) => ({
                          ...current,
                          subject: e.target.value,
                        }))
                      }
                      className="w-full appearance-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition-all focus:bg-white focus:border-blue-500"
                    >
                      <option>Demande d'évaluation</option>
                      <option>Renforcement de capacités</option>
                      <option>Partenariat stratégique</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">
                      Votre Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre besoin ici..."
                      value={formValues.message}
                      onChange={(e) =>
                        setFormValues((current) => ({
                          ...current,
                          message: e.target.value,
                        }))
                      }
                      className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-hover interactive-lift flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold text-white shadow-xl shadow-blue-200 hover:bg-blue-700"
                  >
                    Envoyer le message <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-20 h-[400px] overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 animate-pulse">
              <p className="font-medium text-slate-500">
                Carte Interactive : Goma, Quartier les Volcans
              </p>
            </div>
            <iframe
              className="h-full w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.365943807357!2d29.2198!3d-1.6744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f701509939b%3A0xc0c727038165a250!2sGoma!5e0!3m2!1sfr!2scd!4v1700000000000"
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="glass-hover interactive-lift rounded-full border border-blue-200 bg-white px-8 py-4 text-sm font-semibold text-blue-700 shadow-[0_14px_30px_rgba(14,116,219,0.08)] hover:bg-blue-50"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
