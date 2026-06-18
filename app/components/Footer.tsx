"use client";

import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "../i18n/TranslationProvider";

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    { name: t.nav.home, href: "/accueil" },
    { name: t.nav.realisations, href: "/realisation" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/Contact" },
  ];

  return (
    <footer className="relative z-10 motion-fade-up">
      <div className="border-t border-white/10 bg-[#327cf3] px-4 py-12 text-white backdrop-blur-2xl sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-Montserrat mb-4 text-4xl font-bold text-yellow-400">C2E</h3>
            <p className="text-sm leading-relaxed opacity-85">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-Montserrat mb-4 text-[1.45rem] font-bold text-white">
              {t.footer.navigation}
            </h3>
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
            <h3 className="font-Montserrat mb-4 text-[1.45rem] font-bold text-white">
              {t.footer.contact}
            </h3>
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
                <span>{t.common.linkedin}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs opacity-50">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
