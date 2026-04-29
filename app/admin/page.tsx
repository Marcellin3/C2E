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
import Footer from "../componen/Footer";
import {
  adminStorageKey,
  emptyAdminContent,
  loadAdminContent,
  saveAdminContent,
  type AdminArticle,
  type AdminApplication,
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

type CollectionName = keyof AdminContent;

const adminSessionKey = "c2e-admin-session";
const adminCredentials = {
  email: "admin@c2e.org",
  password: "C2E@2026",
};

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
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
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
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
    />
  );
}

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
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
      <label className="inline-flex h-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
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
    <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
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
    setIsAuthenticated(window.localStorage.getItem(adminSessionKey) === "true");
    setContent(loadAdminContent());
  }, []);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      loginForm.email.trim().toLowerCase() === adminCredentials.email &&
      loginForm.password === adminCredentials.password
    ) {
      window.localStorage.setItem(adminSessionKey, "true");
      setIsAuthenticated(true);
      setLoginError("");
      return;
    }

    setLoginError("Email ou mot de passe incorrect.");
  };

  const handleLogout = () => {
    window.localStorage.removeItem(adminSessionKey);
    setIsAuthenticated(false);
    setLoginForm({ email: "", password: "" });
  };

  const persist = (nextContent: AdminContent) => {
    setContent(nextContent);
    saveAdminContent(nextContent);
  };

  const addItem = <T,>(
    event: FormEvent<HTMLFormElement>,
    collection: CollectionName,
    item: T,
    reset: () => void
  ) => {
    event.preventDefault();

    persist({
      ...content,
      [collection]: [item, ...(content[collection] as T[])],
    } as AdminContent);
    reset();
  };

  const removeItem = (collection: CollectionName, index: number) => {
    persist({
      ...content,
      [collection]: content[collection].filter((_, itemIndex) => itemIndex !== index),
    });
  };

  const resetAll = () => {
    window.localStorage.removeItem(adminStorageKey);
    window.dispatchEvent(new Event("c2e-admin-content-updated"));
    setContent(emptyAdminContent);
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
      <main className="min-h-screen bg-[#f6f8fb] px-4 py-12 text-slate-900 sm:px-6">
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Acces admin
            </p>
            <h1 className="mt-3 text-3xl font-bold">Connexion</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
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
                  placeholder="admin@c2e.org"
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
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {loginError}
                </p>
              ) : null}

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
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
    <main className="bg-[#f6f8fb] text-slate-900">
      <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-700">
                Administration C2E
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Ajouter du contenu au site
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Les ajouts sont sauvegardes dans ce navigateur et apparaissent
                sur les pages publiques correspondantes.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <LogOut className="h-4 w-4" />
              Deconnexion
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50"
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
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${card.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-3xl font-bold">{card.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{card.label}</p>
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
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
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
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800">
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
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
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
                  <select
                    value={projectForm.categoryKey}
                    onChange={(event) =>
                      setProjectForm({
                        ...projectForm,
                        categoryKey: event.target.value as AdminProject["categoryKey"],
                      })
                    }
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
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
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
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
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
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
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-violet-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-800">
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
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
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
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700">
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
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
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
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-rose-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-800">
              <Plus className="h-4 w-4" />
              Ajouter le partenaire
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Photos ajoutees</h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Projets ajoutes</h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Articles ajoutes</h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Offres ajoutees</h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold">Candidatures recues</h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold">Partenaires ajoutes</h2>
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
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-900">
            {application.fullName}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {application.opportunityTitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50"
          aria-label={`Supprimer la candidature de ${application.fullName}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 space-y-1 text-xs leading-5 text-slate-600">
        <p>{application.email}</p>
        <p>{application.phone}</p>
        {application.portfolio ? <p>{application.portfolio}</p> : null}
        <p className="line-clamp-3">{application.message}</p>
      </div>
    </div>
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
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-14 w-16 shrink-0 rounded-md object-cover"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-900">{title}</p>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
          {meta}
        </p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50"
        aria-label={`Supprimer ${title}`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
