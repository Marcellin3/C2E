"use client";

import { useState, useEffect, useCallback } from "react"; // Ajout de useEffect et useCallback
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Realisation() {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // État pour mettre en pause l'auto-scroll

    const projets = [
        {
            titre: "Plan stratégique – Action Solidaire pour la Paix",
            description: "Élaboration du plan stratégique (2023-2027) pour renforcer les actions de paix et de développement.",
            date: "Mars 2023",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
        },
        {
            titre: "Étude de base – Programme Bois Énergie (PNUD)",
            description: "Étude de base pour le programme de substitution partielle au bois énergie à Kinshasa.",
            date: "Décembre 2023",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        {
            titre: "Évaluation – Heal Africa & Ephphatha",
            description: "Évaluation organisationnelle et formation en gestion de projets et mobilisation des ressources.",
            date: "Février 2024",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        },
        {
            titre: "Plan stratégique – CR-OLK",
            description: "Plan stratégique 2024-2028 du Centre de Recherche des Écosystèmes Lacustres du Kivu.",
            date: "2024",
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        },
        {
            titre: "Méta-évaluation – World Vision",
            description: "Analyse de l’approche 'Voix et Action Citoyennes' en RDC.",
            date: "2024",
            image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        }
    ];

    // Fonction "Suivant" mémorisée pour l'intervalle
    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % projets.length);
    }, [projets.length]);

    const prev = () => {
        setIndex((prev) => (prev - 1 + projets.length) % projets.length);
    };

    // 1️⃣ LOGIQUE AUTO-SCROLL (Style Apple)
    useEffect(() => {
        if (isPaused) return; // Stop si l'utilisateur survole

        const interval = setInterval(() => {
            next();
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage
    }, [next, isPaused]);

    return (
        <div
            className="min-h-screen flex flex-col justify-between text-white relative overflow-x-hidden"
            style={{ background: "linear-gradient(135deg,#0f3c8a 0%,#1e5ed6 50%,#ffffff 100%)" }}
        >
            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"></div>

            <main className="flex flex-col items-center justify-center flex-1 z-10 px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Nos Réalisations
                </h1>

                {/* ================= SLIDER 3D ================= */}
                <div
                    className="relative w-full flex items-center justify-center perspective-[2000px]"
                    onMouseEnter={() => setIsPaused(true)}  // Pause au survol
                    onMouseLeave={() => setIsPaused(false)} // Reprise
                >
                    <button
                        onClick={prev}
                        className="absolute left-4 md:left-10 z-20 bg-white/20 hover:bg-yellow-400 text-white p-4 rounded-full backdrop-blur-md transition-colors"
                    >
                        ←
                    </button>

                    <div className="flex items-center justify-center w-full h-[520px] relative">
                        {projets.map((projet, i) => {
                            const position =
                                i === index
                                    ? "center"
                                    : i === (index - 1 + projets.length) % projets.length
                                        ? "left"
                                        : i === (index + 1) % projets.length
                                            ? "right"
                                            : "hidden";

                            if (position === "hidden") return null;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: position === "center" ? 1 : 0.75,
                                        x: position === "left" ? -350 : position === "right" ? 350 : 0,
                                        rotateY: position === "left" ? 30 : position === "right" ? -30 : 0,
                                        zIndex: position === "center" ? 10 : 5,
                                    }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="absolute w-[300px] md:w-[420px] h-[520px] bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20"
                                >
                                    <img src={projet.image} className="h-64 w-full object-cover" alt={projet.titre} />
                                    <div className="p-6 text-white">
                                        <h2 className="text-xl font-semibold mb-2">{projet.titre}</h2>
                                        <p className="text-sm opacity-90 mb-4 line-clamp-3">{projet.description}</p>
                                        <p className="text-xs font-bold text-yellow-400 mb-4 uppercase tracking-wider">{projet.date}</p>
                                        <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105">
                                            Voir les détails
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <button
                        onClick={next}
                        className="absolute right-4 md:right-10 z-20 bg-white/20 hover:bg-yellow-400 text-white p-4 rounded-full backdrop-blur-md transition-colors"
                    >
                        →
                    </button>
                </div>

                {/* ================= INDICATEURS (Points) ================= */}
                <div className="flex gap-2 mt-8 z-20">
                    {projets.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-yellow-400" : "w-2 bg-white/30"}`}
                        />
                    ))}
                </div>

                {/* ================= PARTENAIRES ================= */}
                <section className="w-full mt-32">
                    <h2 className="text-3xl font-bold text-center mb-16">Ils nous ont fait confiance</h2>
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
                        {["World Vision", "Heal Africa", "Ephphatha", "CR-OLK", "Action Solidaire", "PNUD"].map((org, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center border border-white/10"
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center font-bold text-xl">
                                    {org[0]}
                                </div>
                                <p className="text-white font-semibold text-center">{org}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

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
