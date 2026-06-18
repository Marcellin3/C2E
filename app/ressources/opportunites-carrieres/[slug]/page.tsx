"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { type ChangeEvent, type FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
  Upload,
} from "lucide-react";
import Footer from "../../../components/Footer";
import {
  loadAdminContent,
  saveAdminContent,
  submitApplication,
  type AdminApplicationFile,
  useAdminContent,
} from "../../../data/adminContent";
import { createOpportunitySlug, opportunities } from "../../../data/opportunities";
import { useTranslation } from "../../../i18n/TranslationProvider";

const emptyApplicationForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  portfolio: "",
};

function readFileAsApplicationFile(file: File) {
  return new Promise<AdminApplicationFile>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        type: file.type,
        dataUrl: String(reader.result),
      });
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function OpportunityDetailPage() {
  const params = useParams<{ slug: string }>();
  const { locale } = useTranslation();
  const adminContent = useAdminContent();
  const applicationRef = useRef<HTMLDivElement | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationForm, setApplicationForm] = useState(emptyApplicationForm);
  const [cv, setCv] = useState<AdminApplicationFile | null>(null);
  const [motivationLetter, setMotivationLetter] =
    useState<AdminApplicationFile | null>(null);
  const [certificates, setCertificates] = useState<AdminApplicationFile[]>([]);
  const [applicationMessage, setApplicationMessage] = useState("");

  const copy =
    locale === "en"
      ? {
          back: "Back to opportunities",
          badge: "Opportunity detail",
          deadline: "Deadline",
          location: "Location",
          status: "Status",
          requirements: "Requirements",
          description: "Detailed description",
          apply: "Apply",
          formTitle: "Submit your application",
          fullName: "Full identity",
          email: "Email",
          phone: "Phone",
          message: "Profile",
          portfolio: "Portfolio or LinkedIn link",
          cv: "CV",
          motivationLetter: "Motivation letter",
          certificates: "Certificates",
          chooseFile: "Choose file",
          selectedFiles: "Selected files",
          submit: "Send application",
          success: "Your application has been saved successfully.",
          notFoundTitle: "Opportunity not found",
          notFoundText:
            "This opportunity may have been removed or is not available in the current language.",
          fallbackRequirements:
            "A motivated profile, strong professional ethics and availability for C2E assignments are expected.",
          fallbackDescription:
            "This opportunity is part of C2E's collaboration network. The final scope, responsibilities and timeline are confirmed according to the needs of each assignment.",
        }
      : locale === "sw"
      ? {
          back: "Rudi kwenye fursa",
          badge: "Maelezo ya fursa",
          deadline: "Mwisho wa maombi",
          location: "Mahali",
          status: "Hali",
          requirements: "Vigezo",
          description: "Maelezo kamili",
          apply: "Tuma",
          formTitle: "Tuma ombi lako",
          fullName: "Utambulisho kamili",
          email: "Barua pepe",
          phone: "Simu",
          message: "Wasifu",
          portfolio: "Kiungo cha portfolio au LinkedIn",
          cv: "CV",
          motivationLetter: "Barua ya motisha",
          certificates: "Vyeti",
          chooseFile: "Chagua faili",
          selectedFiles: "Faili zilizochaguliwa",
          submit: "Tuma ombi",
          success: "Ombi lako limehifadhiwa vizuri.",
          notFoundTitle: "Fursa haijapatikana",
          notFoundText:
            "Fursa hii inaweza kuwa imeondolewa au haipatikani katika lugha ya sasa.",
          fallbackRequirements:
            "Wasifu wenye motisha, maadili ya kazi na upatikanaji kwa kazi za C2E unatarajiwa.",
          fallbackDescription:
            "Fursa hii ni sehemu ya mtandao wa ushirikiano wa C2E. Majukumu, muda na eneo la kazi huthibitishwa kulingana na mahitaji ya kila kazi.",
        }
      : {
          back: "Retour aux opportunites",
          badge: "Detail de l'opportunite",
          deadline: "Date limite",
          location: "Lieu",
          status: "Statut",
          requirements: "Exigences",
          description: "Description detaillee",
          apply: "Postuler",
          formTitle: "Envoyer votre candidature",
          fullName: "Identite complete",
          email: "Email",
          phone: "Telephone",
          message: "Profil",
          portfolio: "Lien portfolio ou LinkedIn",
          cv: "CV",
          motivationLetter: "Lettre de motivation",
          certificates: "Certificats",
          chooseFile: "Joindre un fichier",
          selectedFiles: "Fichiers selectionnes",
          submit: "Envoyer la candidature",
          success: "Votre candidature a bien ete enregistree.",
          notFoundTitle: "Opportunite introuvable",
          notFoundText:
            "Cette opportunite a peut-etre ete retiree ou n'est pas disponible dans la langue actuelle.",
          fallbackRequirements:
            "Un profil motive, une bonne ethique professionnelle et une disponibilite pour les missions de C2E sont attendus.",
          fallbackDescription:
            "Cette opportunite fait partie du reseau de collaboration de C2E. Le perimetre, les responsabilites et le calendrier final sont confirmes selon les besoins de chaque mission.",
        };

  const currentOpportunities = [
    ...adminContent.opportunities,
    ...opportunities[locale],
  ];

  const opportunity = currentOpportunities.find(
    (item, index) => createOpportunitySlug(item, index) === params.slug
  );

  if (!opportunity) {
    return (
      <main className="bg-[#f8fafc] text-slate-900">
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/ressources/opportunites-carrieres"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900"
            >
              <ArrowLeft className="h-4 w-4" />
              {copy.back}
            </Link>
            <div className="mt-10 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
              <h1 className="text-3xl font-bold">{copy.notFoundTitle}</h1>
              <p className="mt-3 leading-7 text-slate-600">{copy.notFoundText}</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const detailItems = [
    {
      label: copy.deadline,
      value: opportunity.deadline || opportunity.timing,
      icon: CalendarDays,
    },
    {
      label: copy.location,
      value: opportunity.location,
      icon: MapPin,
    },
    {
      label: copy.status,
      value: opportunity.timing,
      icon: Clock3,
    },
  ].filter((item) => item.value);

  const revealApplicationForm = () => {
    setShowApplicationForm(true);
    window.requestAnimationFrame(() => {
      applicationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleSingleFile =
    (setter: (file: AdminApplicationFile | null) => void) =>
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      setter(file ? await readFileAsApplicationFile(file) : null);
    };

  const handleCertificates = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    setCertificates(await Promise.all(files.map(readFileAsApplicationFile)));
  };

  const handleApplicationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const application = {
      opportunityTitle: opportunity.title,
      ...applicationForm,
      cv: cv ?? undefined,
      motivationLetter: motivationLetter ?? undefined,
      certificates,
      submittedAt: new Date().toISOString(),
    };

    try {
      await submitApplication(application);
    } catch {
      const currentContent = loadAdminContent();
      saveAdminContent({
        ...currentContent,
        applications: [application, ...currentContent.applications],
      });
    }

    setApplicationForm(emptyApplicationForm);
    setCv(null);
    setMotivationLetter(null);
    setCertificates([]);
    setApplicationMessage(copy.success);
  };

  return (
    <main className="bg-[#f8fafc] text-slate-900">
      <section className="bg-[linear-gradient(135deg,#eef7ff_0%,#d7ebff_52%,#f5f3df_100%)] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/ressources/opportunites-carrieres"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-850 hover:text-sky-950"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-850 border border-slate-200/40 shadow-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              {copy.badge}
            </span>
            <h1 className="font-display mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              {opportunity.title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-650">
              {opportunity.text}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                <GraduationCap className="h-4 w-4" />
                {opportunity.type}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                <Clock3 className="h-4 w-4" />
                {opportunity.timing}
              </span>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold text-slate-900">{copy.description}</h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
                {opportunity.description || copy.fallbackDescription}
              </p>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-8">
              <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                {copy.requirements}
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
                {opportunity.requirements || copy.fallbackRequirements}
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
            <h2 className="font-display text-xl font-bold text-slate-900">{copy.badge}</h2>
            <div className="mt-5 grid gap-4">
              {detailItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <Icon className="h-4 w-4 text-sky-700" />
                      {item.label}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={revealApplicationForm}
              className="glass-hover interactive-lift mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0d5fd6] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#0b54c0]"
            >
              {copy.apply}
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>
        </div>
      </section>

      {showApplicationForm ? (
        <section ref={applicationRef} className="px-4 pb-16 sm:px-6">
          <form
            onSubmit={handleApplicationSubmit}
            className="mx-auto max-w-7xl rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:p-8"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <FileText className="h-5 w-5 text-blue-600" />
              {copy.formTitle}
            </h2>
            <p className="mt-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {opportunity.title}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {copy.fullName}
                  <span className="text-red-600"> *</span>
                </span>
                <input
                  required
                  value={applicationForm.fullName}
                  onChange={(event) =>
                    setApplicationForm({
                      ...applicationForm,
                      fullName: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {copy.email}
                  <span className="text-red-600"> *</span>
                </span>
                <input
                  required
                  type="email"
                  value={applicationForm.email}
                  onChange={(event) =>
                    setApplicationForm({
                      ...applicationForm,
                      email: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {copy.phone}
                  <span className="text-red-600"> *</span>
                </span>
                <input
                  required
                  value={applicationForm.phone}
                  onChange={(event) =>
                    setApplicationForm({
                      ...applicationForm,
                      phone: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {copy.portfolio}
                  <span className="text-red-600"> *</span>
                </span>
                <input
                  required
                  value={applicationForm.portfolio}
                  onChange={(event) =>
                    setApplicationForm({
                      ...applicationForm,
                      portfolio: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {copy.message}
                <span className="text-red-600"> *</span>
              </span>
              <textarea
                required
                value={applicationForm.message}
                onChange={(event) =>
                  setApplicationForm({
                    ...applicationForm,
                    message: event.target.value,
                  })
                }
                className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ApplicationFileInput
                label={copy.cv}
                buttonLabel={copy.chooseFile}
                fileNames={cv ? [cv.name] : []}
                required
                onChange={handleSingleFile(setCv)}
              />
              <ApplicationFileInput
                label={copy.motivationLetter}
                buttonLabel={copy.chooseFile}
                fileNames={motivationLetter ? [motivationLetter.name] : []}
                required
                onChange={handleSingleFile(setMotivationLetter)}
              />
              <ApplicationFileInput
                label={copy.certificates}
                buttonLabel={copy.chooseFile}
                fileNames={certificates.map((file) => file.name)}
                multiple
                required
                onChange={handleCertificates}
              />
            </div>

            {applicationMessage ? (
              <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 border border-emerald-100">
                {applicationMessage}
              </p>
            ) : null}

            <button className="glass-hover interactive-lift mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0d5fd6] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#0b54c0]">
              {copy.submit}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}

function ApplicationFileInput({
  label,
  buttonLabel,
  fileNames,
  multiple,
  required,
  onChange,
}: {
  label: string;
  buttonLabel: string;
  fileNames: string[];
  multiple?: boolean;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </p>
      <label className="mt-3 inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-250 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
        <Upload className="h-4 w-4" />
        {buttonLabel}
        <input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          multiple={multiple}
          required={required}
          className="sr-only"
          onChange={onChange}
        />
      </label>
      {fileNames.length ? (
        <div className="mt-3 space-y-1 text-xs leading-5 text-slate-500">
          {fileNames.map((name) => (
            <p key={name} className="truncate">
              {name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
