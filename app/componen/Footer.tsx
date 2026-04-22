"use client";

import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { name: "Accueil", href: "/accueil" },
  { name: "Réalisations", href: "/realisation" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 motion-fade-up">
      <div className="border-t border-white/10 bg-blue-900/90 px-10 py-12 text-white backdrop-blur-2xl">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-4xl font-semibold text-yellow-400">C2E</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Centre d&apos;Expertise et d&apos;Évaluation basé à Goma. Experts en
              planification, évaluation et recherche appliquée pour un impact
              durable en RDC.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[1.7rem] font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="interactive-lift w-fit transition-colors hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[1.7rem] font-semibold">Contact</h3>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:c2experteval@gmail.com"
                className="interactive-lift flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <MdEmail className="text-yellow-400" size={20} />
                <span>c2experteval@gmail.com</span>
              </a>
              <a
                href="https://wa.me/243997674407"
                target="_blank"
                rel="noreferrer"
                className="interactive-lift flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <FaWhatsapp className="text-yellow-400" size={20} />
                <span>+243 997 674 407</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="interactive-lift flex items-center gap-3 transition-colors hover:text-yellow-400"
              >
                <FaLinkedin className="text-yellow-400" size={20} />
                <span>LinkedIn / C2E</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs opacity-50">
          © 2026 Centre d&apos;Expertise et d&apos;Évaluation - Excellence &
          Rigueur
        </div>
      </div>
    </footer>
  );
}
