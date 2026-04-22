"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const menuItems = [
  { name: "Home", link: "/accueil" },
  { name: "About", link: "/accueil#about" },
  { name: "Services", link: "/services" },
  { name: "Realisations", link: "/realisation" },
  { name: "Contact", link: "/Contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-50 bg-white">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="border-b border-slate-200"
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
              <p className="font-semibold text-slate-900">Goma, RDC</p>
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
        className="px-4 pb-4 md:px-6"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-3xl bg-blue-900/90 px-4 py-3 text-white shadow-[0_20px_40px_rgba(8,118,239,0.22)] md:px-6">
          <Link href="/accueil" className="interactive-lift flex items-center gap-3">
            <img
              src="/photos/logo ok.png"
              alt="Logo C2E"
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="text-[2rem] font-semibold leading-none text-white">
              C2E
            </p>
          </Link>

          <nav className="flex flex-wrap items-center gap-7 text-xl font-bold tracking-[0.01em]">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="interactive-lift transition hover:text-sky-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div />
        </div>
      </motion.div>
    </header>
  );
}
