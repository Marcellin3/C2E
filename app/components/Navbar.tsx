"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronDown,
  Globe,
  ImageIcon,
  Mail,
  MapPin,
  Menu,
  Moon,
  Newspaper,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useTranslation } from "../i18n/TranslationProvider";
import type { Locale } from "../i18n/translations";

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("c2e-theme");
    const initialTheme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("c2e-theme", nextTheme);
      return nextTheme;
    });
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
    setResourcesOpen(false);
  };

  const menuItems = [
    { name: t.nav.home, link: "/accueil" },
    { name: t.nav.about, link: "/accueil#about" },
    { name: t.nav.services, link: "/services" },
    { name: t.nav.realisations, link: "/realisation" },
  ];

  const resourceItems = [
    {
      name: t.nav.blogNews,
      description:
        locale === "fr"
          ? "Articles, analyses, publications environnementales, recherches"
          : locale === "en"
          ? "Articles, analyses, environmental publications, research"
          : "Makala, uchambuzi, machapisho ya mazingira na tafiti",
      link: "/ressources/blog-actualites",
      icon: Newspaper,
    },
    {
      name: t.nav.mediaGallery,
      description:
        locale === "fr"
          ? "Photos, videos, evenements, projets terrain"
          : locale === "en"
          ? "Photos, videos, events, field projects"
          : "Picha, video, matukio na miradi ya uwanjani",
      link: "/ressources/galerie",
      icon: ImageIcon,
    },
    {
      name: t.nav.opportunitiesCareers,
      description:
        locale === "fr"
          ? "Offres d'emploi, appels a candidatures, stages, consultances, candidatures en ligne"
          : locale === "en"
          ? "Jobs, calls for applications, internships, consultancies, online applications"
          : "Ajira, wito wa maombi, mafunzo, ushauri na maombi mtandaoni",
      link: "/ressources/opportunites-carrieres",
      icon: BriefcaseBusiness,
    },
  ];

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeButtonLabel =
    theme === "dark" ? t.common.lightMode : t.common.darkMode;

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className={`transition-all duration-300 overflow-hidden border-b border-slate-200 ${
          isScrolled ? "max-h-0 opacity-0 border-none pointer-events-none py-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-5 px-4 py-4 text-sm text-slate-600 md:px-6 lg:gap-7">
          <div className="flex flex-wrap items-center gap-5 lg:gap-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <Phone className="h-4 w-4" />
              </div>
              <p className="font-semibold text-slate-900">+243 997 674 407</p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="font-semibold text-slate-900">{t.nav.location}</p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <Mail className="h-4 w-4" />
              </div>
              <p className="font-semibold text-slate-900">
                c2experteval@gmail.com
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className={`px-4 transition-all duration-300 md:px-6 ${isScrolled ? "py-2" : "pb-4 pt-2 md:pt-4"}`}
      >
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#022762] px-4 py-3 text-white shadow-[0_12px_36px_rgba(8,118,239,0.18)] md:px-6">
          <div className="flex items-center justify-between gap-4">
          <Link
            href="/accueil"
            className="interactive-lift flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/photos/logo ok.png"
              alt="Logo C2E"
              width={52}
              height={52}
              className="object-contain md:h-[60px] md:w-[60px]"
            />
            <p className="font-Montserrat text-[1.7rem] font-bold leading-none text-white md:text-[2rem]">
              {t.common.brand}
            </p>
          </Link>

          <nav className="hidden flex-wrap items-center gap-5 text-base tracking-[0.01em] lg:flex xl:gap-7 ">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="interactive-lift transition hover:text-sky-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/ressources"
                  className="interactive-lift transition hover:text-sky-200"
                  onClick={closeMenus}
                >
                  {t.nav.resources}
                </Link>
                <button
                  type="button"
                  onClick={() => setResourcesOpen((current) => !current)}
                  aria-expanded={resourcesOpen}
                  aria-label={`Ouvrir ${t.nav.resources}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10 hover:text-sky-200"
                >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
                </button>
              </div>

              {resourcesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-4">
                  <div className="rounded-2xl border border-slate-100 bg-white p-3 text-slate-900 shadow-[0_16px_48px_rgba(15,23,42,0.12)]">
                    <div className="space-y-2">
                    {resourceItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="block rounded-2xl px-3 py-3 transition hover:bg-slate-50"
                          onClick={closeMenus}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                {item.name}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/Contact"
              className="interactive-lift transition hover:text-sky-200"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeButtonLabel}
              title={themeButtonLabel}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition hover:bg-white/18 hover:text-sky-100"
            >
              <ThemeIcon className="h-4 w-4 text-sky-100" />
            </button>

            <label className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <Globe className="h-4 w-4 text-sky-200" />
            <span className="hidden md:inline">{t.common.languageLabel}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              aria-label={t.common.languageLabel}
              className="bg-transparent text-sm text-white outline-none"
            >
              <option value="fr" className="text-slate-900">
                {t.common.languages.fr}
              </option>
              <option value="en" className="text-slate-900">
                {t.common.languages.en}
              </option>
              <option value="sw" className="text-slate-900">
                {t.common.languages.sw}
              </option>
            </select>
            </label>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>

          {mobileOpen && (
            <div className="mt-4 space-y-4 border-t border-white/10 pt-4 lg:hidden">
              <nav className="flex flex-col gap-3 text-base font-medium">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="rounded-2xl bg-white/8 px-4 py-3 transition hover:bg-white/12"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="overflow-hidden rounded-2xl bg-white/8">
                  <div className="flex items-center">
                    <Link
                      href="/ressources"
                      className="flex-1 px-4 py-3 text-left transition hover:bg-white/12"
                      onClick={closeMenus}
                    >
                      {t.nav.resources}
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileResourcesOpen((current) => !current)
                      }
                      aria-expanded={mobileResourcesOpen}
                      aria-label={`Ouvrir ${t.nav.resources}`}
                      className="flex h-[52px] w-14 items-center justify-center transition hover:bg-white/12"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileResourcesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {mobileResourcesOpen && (
                    <div className="space-y-2 px-3 pb-3">
                      {resourceItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.name}
                            href={item.link}
                            className="block rounded-2xl bg-white/8 px-4 py-3 transition hover:bg-white/12"
                            onClick={closeMenus}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-sky-200">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p>{item.name}</p>
                                <p className="mt-1 text-xs font-normal leading-5 text-sky-100/85">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href="/Contact"
                  className="rounded-2xl bg-white/8 px-4 py-3 transition hover:bg-white/12"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </nav>

              <label className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                <Globe className="h-4 w-4 text-sky-200" />
                <span>{t.common.languageLabel}</span>
                <select
                  value={locale}
                  onChange={(event) => setLocale(event.target.value as Locale)}
                  aria-label={t.common.languageLabel}
                  className="ml-auto bg-transparent text-sm text-white outline-none"
                >
                  <option value="fr" className="text-slate-900">
                    {t.common.languages.fr}
                  </option>
                  <option value="en" className="text-slate-900">
                    {t.common.languages.en}
                  </option>
                  <option value="sw" className="text-slate-900">
                    {t.common.languages.sw}
                  </option>
                </select>
              </label>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={themeButtonLabel}
                className="flex w-full items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                <ThemeIcon className="h-4 w-4 text-sky-200" />
                <span>{t.common.themeLabel}</span>
                <span className="ml-auto text-sky-100/90">
                  {themeButtonLabel}
                </span>
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </header>
  );
}
