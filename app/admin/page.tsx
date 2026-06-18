"use client";

import type {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  Camera,
  FileText,
  FolderKanban,
  LockKeyhole,
  LogOut,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";
import Footer from "../components/Footer";
import {
  adminStorageKey,
  createAdminItem,
  deleteAdminItem,
  emptyAdminContent,
  fetchAdminContent,
  persistAdminContent,
  type AdminArticle,
  type AdminApplication,
  type AdminApplicationFile,
  type AdminCollectionName,
  type AdminContent,
  type AdminGalleryItem,
  type AdminOpportunity,
  type AdminPartner,
  type AdminProject,
} from "../data/adminContent";

const categories: Array<{
  value: AdminProject["categoryKey"];
  label: string;
}> = [
  { value: "planning", label: "Planification" },
  { value: "study", label: "Etude" },
  { value: "evaluation", label: "Evaluation" },
  { value: "accountability", label: "Redevabilite" },
  { value: "research", label: "Recherche" },
];

const initialGallery: AdminGalleryItem = {
  image: "",
  title: "",
  description: "",
};

const initialProject: AdminProject = {
  title: "",
  categoryKey: "study",
  client: "",
  date: "",
  description: "",
  image: "",
};

const initialArticle: AdminArticle = {
  title: "",
  date: "",
  category: "",
  excerpt: "",
};

const initialOpportunity: AdminOpportunity = {
  title: "",
  type: "",
  timing: "",
  text: "",
  deadline: "",
  location: "",
  requirements: "",
  description: "",
};

const initialPartner: AdminPartner = {
  name: "",
  logo: "",
};

const adminSessionKey = "c2e-admin-session";

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="ml-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
    />
  );
}

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
    />
  );
}

function ImagePicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onChange(await readFileAsDataUrl(file));
  };

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
      <Field label={label}>
        <TextInput
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="/photos/image.jpg ou https://..."
        />
      </Field>
      <label className="inline-flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
        <Upload className="h-4 w-4" />
        Fichier
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFile}
        />
      </label>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
      {text}
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [content, setContent] = useState<AdminContent>(emptyAdminContent);
  const [galleryForm, setGalleryForm] = useState(initialGallery);
  const [projectForm, setProjectForm] = useState(initialProject);
  const [articleForm, setArticleForm] = useState(initialArticle);
  const [opportunityForm, setOpportunityForm] = useState(initialOpportunity);
  const [partnerForm, setPartnerForm] = useState(initialPartner);

  useEffect(() => {
    const initializeAdmin = async () => {
      try {
        const response = await fetch("/api/admin/session", {
          cache: "no-store",
        });
        const session = (await response.json()) as { authenticated?: boolean };
        setIsAuthenticated(Boolean(session.authenticated));
        window.localStorage.setItem(
          adminSessionKey,
          String(Boolean(session.authenticated))
        );
      } catch {
        setIsAuthenticated(
          window.localStorage.getItem(adminSessionKey) === "true"
        );
      }

      setContent(await fetchAdminContent());
    };

    void initializeAdmin();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/admin/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });

    if (response.ok) {
      window.localStorage.setItem(adminSessionKey, "true");
      setIsAuthenticated(true);
      setLoginError("");
      setContent(await fetchAdminContent());
      return;
    }

    setLoginError("Email ou mot de passe incorrect.");
  };

  const handleLogout = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    window.localStorage.removeItem(adminSessionKey);
    setIsAuthenticated(false);
    setLoginForm({ email: "", password: "" });
  };

  const persist = async (nextContent: AdminContent) => {
    setContent(nextContent);
    setContent(await persistAdminContent(nextContent));
  };

  const addItem = async <T,>(
    event: FormEvent<HTMLFormElement>,
    collection: AdminCollectionName,
    item: T,
    reset: () => void
  ) => {
    event.preventDefault();

    const optimisticContent = {
      ...content,
      [collection]: [item, ...(content[collection] as T[])],
    } as AdminContent;

    setContent(optimisticContent);

    try {
      setContent(await createAdminItem(collection, item));
      reset();
    } catch {
      await persist(optimisticContent);
      reset();
    }
  };

  const removeItem = async (collection: AdminCollectionName, index: number) => {
    const optimisticContent = {
      ...content,
      [collection]: content[collection].filter((_, itemIndex) => itemIndex !== index),
    };

    setContent(optimisticContent);

    try {
      setContent(await deleteAdminItem(collection, index));
    } catch {
      await persist(optimisticContent);
    }
  };

  const resetAll = async () => {
    window.localStorage.removeItem(adminStorageKey);
    window.dispatchEvent(new Event("c2e-admin-content-updated"));
    await persist(emptyAdminContent);
  };

  const statCards = [
    {
      label: "Photos",
      value: content.gallery.length,
      icon: Camera,
      tone: "bg-sky-100 text-sky-700",
    },
    {
      label: "Projets",
      value: content.projects.length,
      icon: FolderKanban,
      tone: "bg-emerald-100 text-emerald-700",
    },
    {
      label: "Articles",
      value: content.articles.length,
      icon: FileText,
      tone: "bg-violet-100 text-violet-700",
    },
    {
      label: "Offres",
      value: content.opportunities.length,
      icon: BriefcaseBusiness,
      tone: "bg-amber-100 text-amber-700",
    },
    {
      label: "Partenaires",
      value: content.partners.length,
      icon: Building2,
      tone: "bg-rose-100 text-rose-700",
    },
    {
      label: "Candidatures",
      value: content.applications.length,
      icon: BriefcaseBusiness,
      tone: "bg-slate-100 text-slate-700",
    },
  ];

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#f8fafc] px-4 py-12 text-slate-900 sm:px-6">
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              Acces admin
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold">Connexion</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Entrez vos identifiants pour gerer les contenus du site.
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <Field label="Email">
                <TextInput
                  required
                  type="email"
                  value={loginForm.email}
                  onChange={(event) =>
                    setLoginForm({ ...loginForm, email: event.target.value })
                  }
                  placeholder="c2experteval@gmail.com"
                />
              </Field>
              <Field label="Mot de passe">
                <TextInput
                  required
                  type="password"
                  value={loginForm.password}
                  onChange={(event) =>
                    setLoginForm({ ...loginForm, password: event.target.value })
                  }
                  placeholder="Votre mot de passe"
                />
              </Field>

              {loginError ? (
                <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {loginError}
                </p>
              ) : null}

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 cursor-pointer">
                <LockKeyhole className="h-4 w-4" />
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      <section className="border-b border-slate-200/60 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
                Administration C2E
              </p>
              <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Ajouter du contenu au site
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                Les ajouts sont sauvegardes dans ce navigateur et apparaissent
                sur les pages publiques correspondantes.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              Deconnexion
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              Reinitialiser les ajouts
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {statCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.02)]"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-display mt-5 text-3xl font-bold">{card.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{card.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <form
            onSubmit={(event) =>
              addItem(event, "gallery", galleryForm, () =>
                setGalleryForm(initialGallery)
              )
            }
            className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Camera className="h-5 w-5 text-sky-700" />
              Galerie
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="Titre">
                <TextInput
                  required
                  value={galleryForm.title}
                  onChange={(event) =>
                    setGalleryForm({ ...galleryForm, title: event.target.value })
                  }
                  placeholder="Ex: Atelier terrain"
                />
              </Field>
              <ImagePicker
                label="Image"
                value={galleryForm.image}
                onChange={(image) => setGalleryForm({ ...galleryForm, image })}
              />
              <Field label="Description">
                <TextArea
                  required
                  value={galleryForm.description}
                  onChange={(event) =>
                    setGalleryForm({
                      ...galleryForm,
                      description: event.target.value,
                    })
                  }
                  placeholder="Petite description affichee au clic"
                />
              </Field>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800 cursor-pointer shadow-sm hover:shadow-md">
              <Plus className="h-4 w-4" />
              Ajouter la photo
            </button>
          </form>

          <form
            onSubmit={(event) =>
              addItem(event, "projects", projectForm, () =>
                setProjectForm(initialProject)
              )
            }
            className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <FolderKanban className="h-5 w-5 text-emerald-700" />
              Realisations
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="Titre du projet">
                <TextInput
                  required
                  value={projectForm.title}
                  onChange={(event) =>
                    setProjectForm({ ...projectForm, title: event.target.value })
                  }
                  placeholder="Nom du projet"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Categorie">
                  <div className="relative">
                    <select
                      value={projectForm.categoryKey}
                      onChange={(event) =>
                        setProjectForm({
                          ...projectForm,
                          categoryKey: event.target.value as AdminProject["categoryKey"],
                        })
                      }
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </Field>
                <Field label="Date">
                  <TextInput
                    required
                    value={projectForm.date}
                    onChange={(event) =>
                      setProjectForm({ ...projectForm, date: event.target.value })
                    }
                    placeholder="2026 ou Avril 2026"
                  />
                </Field>
              </div>
              <Field label="Client">
                <TextInput
                  required
                  value={projectForm.client}
                  onChange={(event) =>
                    setProjectForm({ ...projectForm, client: event.target.value })
                  }
                  placeholder="Organisation ou bailleur"
                />
              </Field>
              <ImagePicker
                label="Image"
                value={projectForm.image}
                onChange={(image) => setProjectForm({ ...projectForm, image })}
              />
              <Field label="Description">
                <TextArea
                  required
                  value={projectForm.description}
                  onChange={(event) =>
                    setProjectForm({
                      ...projectForm,
                      description: event.target.value,
                    })
                  }
                  placeholder="Resume du projet"
                />
              </Field>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 cursor-pointer shadow-sm hover:shadow-md">
              <Plus className="h-4 w-4" />
              Ajouter le projet
            </button>
          </form>

          <form
            onSubmit={(event) =>
              addItem(event, "articles", articleForm, () =>
                setArticleForm(initialArticle)
              )
            }
            className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <FileText className="h-5 w-5 text-violet-700" />
              Blog & actualites
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="Titre">
                <TextInput
                  required
                  value={articleForm.title}
                  onChange={(event) =>
                    setArticleForm({ ...articleForm, title: event.target.value })
                  }
                  placeholder="Titre de l'article"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Categorie">
                  <TextInput
                    required
                    value={articleForm.category}
                    onChange={(event) =>
                      setArticleForm({
                        ...articleForm,
                        category: event.target.value,
                      })
                    }
                    placeholder="Analyse, terrain..."
                  />
                </Field>
                <Field label="Date">
                  <TextInput
                    required
                    value={articleForm.date}
                    onChange={(event) =>
                      setArticleForm({ ...articleForm, date: event.target.value })
                    }
                    placeholder="Avril 2026"
                  />
                </Field>
              </div>
              <Field label="Extrait">
                <TextArea
                  required
                  value={articleForm.excerpt}
                  onChange={(event) =>
                    setArticleForm({
                      ...articleForm,
                      excerpt: event.target.value,
                    })
                  }
                  placeholder="Court resume de l'article"
                />
              </Field>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-800 cursor-pointer shadow-sm hover:shadow-md">
              <Plus className="h-4 w-4" />
              Ajouter l'article
            </button>
          </form>

          <form
            onSubmit={(event) =>
              addItem(event, "opportunities", opportunityForm, () =>
                setOpportunityForm(initialOpportunity)
              )
            }
            className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <BriefcaseBusiness className="h-5 w-5 text-amber-700" />
              Carrieres & opportunites
            </h2>
            <div className="mt-6 grid gap-4">
              <Field label="Titre">
                <TextInput
                  required
                  value={opportunityForm.title}
                  onChange={(event) =>
                    setOpportunityForm({
                      ...opportunityForm,
                      title: event.target.value,
                    })
                  }
                  placeholder="Consultant(e), stagiaire..."
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Type">
                  <TextInput
                    required
                    value={opportunityForm.type}
                    onChange={(event) =>
                      setOpportunityForm({
                        ...opportunityForm,
                        type: event.target.value,
                      })
                    }
                    placeholder="Emploi, stage, consultance"
                  />
                </Field>
                <Field label="Statut">
                  <TextInput
                    required
                    value={opportunityForm.timing}
                    onChange={(event) =>
                      setOpportunityForm({
                        ...opportunityForm,
                        timing: event.target.value,
                      })
                    }
                    placeholder="Ouvert, permanent..."
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Date limite">
                  <TextInput
                    required
                    value={opportunityForm.deadline}
                    onChange={(event) =>
                      setOpportunityForm({
                        ...opportunityForm,
                        deadline: event.target.value,
                      })
                    }
                    placeholder="30 mai 2026"
                  />
                </Field>
                <Field label="Lieu">
                  <TextInput
                    value={opportunityForm.location}
                    onChange={(event) =>
                      setOpportunityForm({
                        ...opportunityForm,
                        location: event.target.value,
                      })
                    }
                    placeholder="Goma, hybride, terrain..."
                  />
                </Field>
              </div>
              <Field label="Resume court">
                <TextArea
                  required
                  value={opportunityForm.text}
                  onChange={(event) =>
                    setOpportunityForm({
                      ...opportunityForm,
                      text: event.target.value,
                    })
                  }
                  placeholder="Details de l'offre"
                />
              </Field>
              <Field label="Exigences">
                <TextArea
                  required
                  value={opportunityForm.requirements}
                  onChange={(event) =>
                    setOpportunityForm({
                      ...opportunityForm,
                      requirements: event.target.value,
                    })
                  }
                  placeholder="Liste des criteres, diplomes, experience, competences..."
                />
              </Field>
              <Field label="Description complete du travail">
                <TextArea
                  required
                  value={opportunityForm.description}
                  onChange={(event) =>
                    setOpportunityForm({
                      ...opportunityForm,
                      description: event.target.value,
                    })
                  }
                  placeholder="Missions, responsabilites et livrables attendus"
                />
              </Field>
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700 cursor-pointer shadow-sm hover:shadow-md">
              <Plus className="h-4 w-4" />
              Ajouter l'offre
            </button>
          </form>

          <form
            onSubmit={(event) =>
              addItem(event, "partners", partnerForm, () =>
                setPartnerForm(initialPartner)
              )
            }
            className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8 lg:col-span-2"
          >
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Building2 className="h-5 w-5 text-rose-700" />
              Partenaires
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
              <Field label="Nom du partenaire">
                <TextInput
                  required
                  value={partnerForm.name}
                  onChange={(event) =>
                    setPartnerForm({ ...partnerForm, name: event.target.value })
                  }
                  placeholder="Nom de l'organisation"
                />
              </Field>
              <ImagePicker
                label="Logo"
                value={partnerForm.logo}
                onChange={(logo) => setPartnerForm({ ...partnerForm, logo })}
              />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-rose-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-800 cursor-pointer shadow-sm hover:shadow-md">
              <Plus className="h-4 w-4" />
              Ajouter le partenaire
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Photos ajoutees</h2>
            <div className="mt-4 space-y-3">
              {content.gallery.length ? (
                content.gallery.map((item, index) => (
                  <AdminRow
                    key={`${item.title}-${index}`}
                    title={item.title}
                    meta={item.description}
                    image={item.image}
                    onRemove={() => removeItem("gallery", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucune photo ajoutee pour le moment." />
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Projets ajoutes</h2>
            <div className="mt-4 space-y-3">
              {content.projects.length ? (
                content.projects.map((item, index) => (
                  <AdminRow
                    key={`${item.title}-${index}`}
                    title={item.title}
                    meta={`${item.client} - ${item.date}`}
                    image={item.image}
                    onRemove={() => removeItem("projects", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucun projet ajoute pour le moment." />
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Articles ajoutes</h2>
            <div className="mt-4 space-y-3">
              {content.articles.length ? (
                content.articles.map((item, index) => (
                  <AdminRow
                    key={`${item.title}-${index}`}
                    title={item.title}
                    meta={`${item.category} - ${item.date}`}
                    onRemove={() => removeItem("articles", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucun article ajoute pour le moment." />
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">Offres ajoutees</h2>
            <div className="mt-4 space-y-3">
              {content.opportunities.length ? (
                content.opportunities.map((item, index) => (
                  <AdminRow
                    key={`${item.title}-${index}`}
                    title={item.title}
                    meta={`${item.type} - ${item.deadline || item.timing}`}
                    onRemove={() => removeItem("opportunities", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucune offre ajoutee pour le moment." />
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-slate-900">Candidatures recues</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {content.applications.length ? (
                content.applications.map((item, index) => (
                  <ApplicationRow
                    key={`${item.email}-${item.submittedAt}`}
                    application={item}
                    onRemove={() => removeItem("applications", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucune candidature recue pour le moment." />
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.02)] sm:p-8 lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-slate-900">Partenaires ajoutes</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {content.partners.length ? (
                content.partners.map((item, index) => (
                  <AdminRow
                    key={`${item.name}-${index}`}
                    title={item.name}
                    meta="Partenaire"
                    image={item.logo}
                    onRemove={() => removeItem("partners", index)}
                  />
                ))
              ) : (
                <EmptyState text="Aucun partenaire ajoute pour le moment." />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ApplicationRow({
  application,
  onRemove,
}: {
  application: AdminApplication;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-5 transition-all hover:bg-slate-50">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-900">
            {application.fullName}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {application.opportunityTitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-red-600 transition hover:bg-red-50 hover:text-red-700 cursor-pointer"
          aria-label={`Supprimer la candidature de ${application.fullName}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 space-y-1 text-xs leading-relaxed text-slate-500">
        <p className="font-semibold text-slate-700">{application.email}</p>
        <p>{application.phone}</p>
        {application.portfolio ? (
          <p>
            <a
              href={application.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:underline"
            >
              {application.portfolio}
            </a>
          </p>
        ) : null}
        <p className="mt-2 line-clamp-3 rounded-xl bg-white p-3 border border-slate-100 italic text-slate-600">
          "{application.message}"
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {application.cv ? (
          <ApplicationFileLink label="CV" file={application.cv} />
        ) : null}
        {application.motivationLetter ? (
          <ApplicationFileLink
            label="Lettre de motivation"
            file={application.motivationLetter}
          />
        ) : null}
        {application.certificates?.map((file, index) => (
          <ApplicationFileLink
            key={`${file.name}-${index}`}
            label={`Certificat ${index + 1}`}
            file={file}
          />
        ))}
      </div>
    </div>
  );
}

function ApplicationFileLink({
  label,
  file,
}: {
  label: string;
  file: AdminApplicationFile;
}) {
  return (
    <a
      href={file.dataUrl}
      download={file.name}
      className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-sky-700 transition hover:bg-sky-50"
      title={file.name}
    >
      <FileText className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{label}</span>
    </a>
  );
}

function AdminRow({
  title,
  meta,
  image,
  onRemove,
}: {
  title: string;
  meta: string;
  image?: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/50 p-4 transition-all hover:bg-slate-50">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-14 w-16 shrink-0 rounded-xl object-cover"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-900">{title}</p>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {meta}
        </p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-red-600 transition hover:bg-red-50 hover:text-red-700 cursor-pointer"
        aria-label={`Supprimer ${title}`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
