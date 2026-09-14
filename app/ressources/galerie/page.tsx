"use client";

import { motion } from "framer-motion";
import { ImageOff, Sparkles } from "lucide-react";
import Footer from "../../components/Footer";
import { motionTokens } from "../../components/motion";

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f4] text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e9f7ef_0%,#d8ebff_52%,#fdf4d3_100%)] px-4 py-16 sm:px-6 sm:py-24">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-2xl border border-emerald-800/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900">
            <Sparkles className="h-3.5 w-3.5" />
            Galerie média
          </span>

          <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/80 bg-white/80 text-emerald-700 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
            <ImageOff className="h-9 w-9" />
          </div>

          <h1 className="font-Montserrat mt-7 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Galerie en cours de mise à jour
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Nous préparons actuellement une sélection d’images présentant nos
            projets, nos activités et nos réalisations.
          </p>

          <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/80 bg-white/70 px-6 py-4 text-sm font-bold leading-6 text-emerald-900 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:text-base">
            La galerie sera bientôt disponible. Merci de votre patience.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
