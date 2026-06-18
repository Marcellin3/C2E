"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Send } from "lucide-react";
import Footer from "../components/Footer";
import { useTranslation } from "../i18n/TranslationProvider";

const contactEmail = "c2experteval@gmail.com";

export default function Contact() {
  const { t } = useTranslation();
  const subjectOptions = useMemo(
    () => [
      t.contactPage.subjects.evaluationRequest,
      t.contactPage.subjects.capacityBuilding,
      t.contactPage.subjects.strategicPartnership,
      t.contactPage.subjects.other,
    ],
    [t]
  );

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    subject: subjectOptions[0],
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "sent" | "fallback" | "error"
  >("idle");

  useEffect(() => {
    setFormValues((current) => ({
      ...current,
      subject: subjectOptions.includes(current.subject)
        ? current.subject
        : subjectOptions[0],
    }));
  }, [subjectOptions]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(
      `${formValues.subject} - ${formValues.fullName || "Nouveau contact"}`
    );
    const body = encodeURIComponent(
      `Nom: ${formValues.fullName}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSubmitStatus("sent");
        setFormValues({
          fullName: "",
          email: "",
          subject: subjectOptions[0],
          message: "",
        });
        return;
      }

      if (response.status === 503) {
        setSubmitStatus("fallback");
        openMailClient();
        return;
      }

      setSubmitStatus("error");
    } catch {
      setSubmitStatus("fallback");
      openMailClient();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      <div className="px-4 py-8 pb-4 sm:px-6 md:px-6">
        <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[30%] w-[30%] rounded-full bg-blue-200/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 motion-fade-up">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-widest text-blue-600"
            >
              {t.contactPage.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-Montserrat mt-4 text-[2.4rem] font-bold text-slate-900 sm:text-[3rem] md:text-[4.2rem]"
            >
              {t.contactPage.title}
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
                className="interactive-lift group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all hover:border-blue-200 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-Montserrat mb-1 text-lg font-bold text-slate-900">
                      {t.contactPage.officeTitle}
                    </h3>
                    <p className="leading-relaxed text-slate-500 text-sm">
                      {t.contactPage.officeAddress}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="interactive-lift group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all hover:border-blue-200 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-Montserrat mb-1 text-lg font-bold text-slate-900">
                      {t.contactPage.officialEmail}
                    </h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-slate-500 text-sm transition-colors hover:text-blue-600"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl sm:p-8"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-blue-500/10" />
                <h3 className="font-Montserrat mb-6 flex items-center gap-2 text-xl font-bold">
                  <FaPhoneAlt size={18} className="text-blue-400" />
                  {t.contactPage.phoneTitle}
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400">
                      {t.contactPage.phoneLocal}
                    </span>
                    <span className="font-medium">+243 997 674 407</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400">
                      {t.contactPage.phoneInternational}
                    </span>
                    <span className="font-medium">+1(581) 446-1977</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">
                      {t.contactPage.phoneSupport}
                    </span>
                    <span className="font-medium">+243 997 125 196</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a
                    href="https://wa.me/243997674407"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-hover interactive-lift flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-bold hover:bg-green-700"
                  >
                    <FaWhatsapp size={20} /> {t.common.whatsapp}
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="glass-hover interactive-lift rounded-xl bg-white/10 p-3 hover:bg-blue-600"
                    aria-label={t.common.linkedin}
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
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-8 md:p-12">
                <h2 className="font-Montserrat mb-8 text-[2rem] font-bold text-slate-900">
                  {t.contactPage.formTitle}
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {t.contactPage.fullName}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.contactPage.fullNamePlaceholder}
                        value={formValues.fullName}
                        onChange={(event) =>
                          setFormValues((current) => ({
                            ...current,
                            fullName: event.target.value,
                          }))
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {t.contactPage.workEmail}
                      </label>
                      <input
                        required
                        type="email"
                        placeholder={t.contactPage.workEmailPlaceholder}
                        value={formValues.email}
                        onChange={(event) =>
                          setFormValues((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {t.contactPage.subject}
                    </label>
                    <select
                      required
                      value={formValues.subject}
                      onChange={(event) =>
                        setFormValues((current) => ({
                          ...current,
                          subject: event.target.value,
                        }))
                      }
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {t.contactPage.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={t.contactPage.messagePlaceholder}
                      value={formValues.message}
                      onChange={(event) =>
                        setFormValues((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitStatus === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="glass-hover interactive-lift flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
                  >
                    {submitStatus === "sending"
                      ? "Envoi en cours..."
                      : t.contactPage.submit}{" "}
                    <Send size={18} />
                  </motion.button>

                  {submitStatus === "sent" ? (
                    <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                      Message envoye directement a {contactEmail}.
                    </p>
                  ) : null}

                  {submitStatus === "fallback" ? (
                    <p className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                      La messagerie s'ouvre pour finaliser l'envoi a {contactEmail}.
                    </p>
                  ) : null}

                  {submitStatus === "error" ? (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      L'envoi a echoue. Veuillez reessayer ou ecrire a {contactEmail}.
                    </p>
                  ) : null}
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-16 h-[280px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:mt-20 sm:h-[400px]"
          >
            <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-slate-200">
              <p className="font-medium text-slate-500">{t.contactPage.mapLabel}</p>
            </div>
            <iframe
              className="h-full w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.365943807357!2d29.2198!3d-1.6744!2m3!1f0!2f0!3f0!2f3!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f701509939b%3A0xc0c727038165a250!2sGoma!5e0!3m2!1sfr!2scd!4v1700000000000"
              allowFullScreen
            />
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="glass-hover interactive-lift rounded-full border border-blue-200 bg-white px-8 py-4 text-sm font-semibold text-blue-700 shadow-[0_14px_30px_rgba(14,116,219,0.08)] hover:bg-blue-50"
            >
              {t.common.viewServices}
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
