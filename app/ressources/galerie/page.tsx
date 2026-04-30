"use client";

import { motion } from "framer-motion";
import { Camera, ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import Footer from "../../componen/Footer";
import { useAdminContent, type AdminGalleryItem } from "../../data/adminContent";
import { useTranslation } from "../../i18n/TranslationProvider";

const defaultGalleryItems = [
  {
    image: "/photos/Buhuru.jpg",
    title: "Equipe terrain",
    description: "Portrait d'un membre de l'equipe C2E mobilise sur les activites de terrain.",
  },
  {
    image: "/photos/Charmant.jpg",
    title: "Coordination locale",
    description: "Un temps d'echange avec les acteurs locaux pour preparer les interventions.",
  },
  {
    image: "/photos/ephaphatha.jpg",
    title: "Partenariat communautaire",
    description: "Collaboration avec les organisations partenaires au plus proche des communautes.",
  },
  {
    image: "/photos/etude de base.jpg",
    title: "Etude de base",
    description: "Collecte et analyse des donnees pour mieux comprendre les besoins prioritaires.",
  },
  {
    image: "/photos/evaluation.jpg",
    title: "Evaluation",
    description: "Mission d'evaluation pour mesurer les resultats et les effets des projets.",
  },
  {
    image: "/photos/heal.png",
    title: "Sante communautaire",
    description: "Initiative liee au bien-etre, a la prevention et a l'accompagnement social.",
  },
  {
    image: "/photos/image 03.jpg",
    title: "Action terrain",
    description: "Scene de terrain illustrant les activites menees avec les beneficiaires.",
  },
  {
    image: "/photos/logo ok.png",
    title: "Identite C2E",
    description: "Le logo C2E, symbole de l'engagement de l'organisation.",
  },
  {
    image: "/photos/Mulezi.jpeg",
    title: "Expertise",
    description: "Membre de l'equipe apportant son expertise aux missions de recherche.",
  },
  {
    image: "/photos/Patrick.jpg",
    title: "Leadership",
    description: "Acteur cle de la planification et du suivi des interventions.",
  },
  {
    image: "/photos/plant.jpg",
    title: "Environnement",
    description: "Image associee aux enjeux de developpement durable et de resilience.",
  },
  {
    image: "/photos/Prince.jpg",
    title: "Recherche appliquee",
    description: "Contribution technique aux etudes, formations et evaluations.",
  },
  {
    image: "/photos/projet.jpg",
    title: "Projet en cours",
    description: "Apercu d'une activite projet conduite avec les parties prenantes.",
  },
  {
    image: "/photos/super.png",
    title: "Impact",
    description: "Visuel representant l'energie collective autour des actions de C2E.",
  },
  {
    image: "/photos/t%C3%A9l%C3%A9charg%C3%A9%201.jpg",
    title: "Atelier",
    description: "Moment de travail collectif pendant une activite de terrain.",
  },
  {
    image: "/photos/t%C3%A9l%C3%A9charg%C3%A9%202.jpg",
    title: "Observation",
    description: "Photo documentant les realites observees lors des missions.",
  },
  {
    image: "/photos/t%C3%A9l%C3%A9charg%C3%A9%203.jpg",
    title: "Mobilisation",
    description: "Participation communautaire dans le cadre d'une intervention locale.",
  },
  {
    image: "/photos/t%C3%A9l%C3%A9charg%C3%A9%204.jpg",
    title: "Suivi de projet",
    description: "Trace visuelle d'une action de suivi et d'accompagnement.",
  },
  {
    image: "/photos/world.jpg",
    title: "Ouverture",
    description: "Illustration de la vision globale et collaborative de C2E.",
  },
];

const layoutPattern = [
  "md:col-start-1 md:row-start-1 md:row-span-1",
  "md:col-start-1 md:row-start-2 md:row-span-2",
  "md:col-start-2 md:row-start-1 md:row-span-2",
  "md:col-start-2 md:row-start-3 md:row-span-1",
  "md:col-start-3 md:row-start-1 md:row-span-1",
  "md:col-start-3 md:row-start-2 md:row-span-2",
  "md:col-start-4 md:row-start-1 md:row-span-2",
  "md:col-start-4 md:row-start-3 md:row-span-1",
];

function buildGalleryGroups(items: AdminGalleryItem[]) {
  return Array.from(
    { length: Math.ceil(items.length / layoutPattern.length) },
    (_, index) => {
      const group = items.slice(
        index * layoutPattern.length,
        (index + 1) * layoutPattern.length
      );

      if (group.length === layoutPattern.length) {
        return group;
      }

      const fallbackItems = items.filter((item) => !group.includes(item));

      return [
        ...group,
        ...fallbackItems.slice(0, layoutPattern.length - group.length),
      ];
    }
  );
}

export default function GaleriePage() {
  const { locale } = useTranslation();
  const adminContent = useAdminContent();
  const [selectedImageKey, setSelectedImageKey] = useState<string | null>(null);
  const galleryItems = [...defaultGalleryItems, ...adminContent.gallery];
  const galleryGroups = buildGalleryGroups(galleryItems);

  const copy =
    locale === "en"
      ? {
        badge: "Media gallery",
        title: "Field moments, stories and project snapshots",
        intro:
          "A living wall of images capturing our interventions, local partnerships and evaluation work across communities.",
        chipOne: "Community action",
        chipTwo: "Projects on the ground",
        chipThree: "Visual archive",
        statOne: "Images",
        statTwo: "Layout",
        sectionTitle: "Explore the gallery",
        sectionText:
          "Browse photos from our field activities, partnerships and project follow-up moments.",
      }
      : locale === "sw"
        ? {
          badge: "Galeri ya picha",
          title: "Nyakati za uwanjani, hadithi na picha za miradi",
          intro:
            "Ukuta hai wa picha unaoonyesha afua zetu, ushirikiano wa karibu na kazi ya tathmini ndani ya jamii.",
          chipOne: "Hatua za kijamii",
          chipTwo: "Miradi ya uwanjani",
          chipThree: "Kumbukumbu ya picha",
          statOne: "Picha",
          statTwo: "Mpangilio",
          sectionTitle: "Tazama galeri",
          sectionText:
            "Pitia picha za shughuli zetu za uwanjani, ushirikiano na ufuatiliaji wa miradi.",
        }
        : {
          badge: "Galerie media",
          title: "Moments de terrain, projets en images et traces d'impact",
          intro:
            "Une galerie vivante qui rassemble nos interventions, nos partenariats de proximite et les scenes clefs de nos actions sur le terrain.",
          chipOne: "Actions communautaires",
          chipTwo: "Projets terrain",
          chipThree: "Memoire visuelle",
          statOne: "Images",
          statTwo: "Disposition",
          sectionTitle: "Explorer la galerie",
          sectionText:
            "Parcourez les photos de nos activites terrain, de nos partenariats et du suivi des projets.",
        };

  return (
    <main className="bg-[#f6f7f4] text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#e9f7ef_0%,#d8ebff_52%,#fdf4d3_100%)] px-4 py-14 sm:px-6 sm:py-18">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-900">
              <Sparkles className="h-3.5 w-3.5" />
              {copy.badge}
            </span>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                {copy.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                {copy.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
              {[copy.chipOne, copy.chipTwo, copy.chipThree].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-900/8 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-[2rem] bg-white/85 p-5 shadow-[0_24px_50px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Camera className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                {copy.statOne}
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-900">
                {galleryItems.length}
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#0d5fd6] p-5 text-white shadow-[0_24px_50px_rgba(13,95,214,0.26)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                <ImageIcon className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                {copy.statTwo}
              </p>
              <p className="mt-2 text-4xl font-bold">Mosaic</p>
            </div>

            <div className="overflow-hidden rounded-[2rem] sm:col-span-2">
              <img
                src="/photos/projet.jpg"
                alt="Illustration de la galerie C2E"
                className="h-56 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {copy.sectionTitle}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                {copy.sectionText}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {galleryGroups.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[132px] lg:auto-rows-[155px]"
              >
                {group.map((item, imageIndex) => {
                  const absoluteIndex =
                    groupIndex * layoutPattern.length + imageIndex;
                  const itemKey = `${groupIndex}-${imageIndex}`;
                  const isSelected = selectedImageKey === itemKey;

                  return (
                    <motion.article
                      key={`${item.image}-${groupIndex}-${imageIndex}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: absoluteIndex * 0.03,
                      }}
                      className={`group relative overflow-hidden rounded-[0.35rem] border bg-white shadow-[0_18px_38px_rgba(15,23,42,0.08)] md:min-h-0 ${isSelected ? "border-sky-500 ring-4 ring-sky-200" : "border-slate-200"} ${layoutPattern[imageIndex]}`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedImageKey(isSelected ? null : itemKey)}
                        className="block h-full w-full text-left"
                        aria-label={`${item.title}: ${item.description}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        {isSelected ? (
                          <div className="absolute inset-x-3 bottom-3 rounded-md bg-white/95 p-3 text-slate-900 shadow-[0_14px_35px_rgba(15,23,42,0.22)]">
                            <h3 className="text-sm font-bold leading-tight">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        ) : null}
                      </button>
                    </motion.article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
