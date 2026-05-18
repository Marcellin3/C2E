# C2E Website

Site Next.js pour le Centre d'Expertise et d'Evaluation (C2E).

## Structure du projet

```text
app/
  accueil/                         Page d'accueil
  admin/                           Interface d'administration locale
  components/                      Composants partages du site
    Footer.tsx
    Navbar.tsx
  Contact/                         Page de contact
  data/                            Donnees, types et contenus reutilisables
    adminContent.ts
    featuredStudies.ts
    opportunities.ts
  i18n/                            Traductions et provider de langue
    TranslationProvider.tsx
    translations.ts
  realisation/                     Page des realisations
  ressources/                      Espace ressources
    blog-actualites/
    galerie/
    opportunites-carrieres/
      [slug]/                      Detail d'une opportunite
  services/                        Page des services
  globals.css                      Styles globaux
  layout.tsx                       Layout principal
  page.tsx                         Redirection ou entree racine

public/
  photos/                          Images utilisees par le site
```

## Commandes

```bash
npm.cmd run build
npm.cmd run dev
```

Sous PowerShell, `npm.cmd` evite le blocage possible de `npm.ps1` par la politique d'execution Windows.

## Variables serveur

```env
C2E_ADMIN_EMAIL=c2experteval@gmail.com
C2E_ADMIN_PASSWORD=C2E@2026
C2E_CONTACT_EMAIL=c2experteval@gmail.com
C2E_SMTP_HOST=smtp.gmail.com
C2E_SMTP_PORT=465
C2E_SMTP_USER=c2experteval@gmail.com
C2E_SMTP_PASSWORD=mot-de-passe-application-gmail
```

Pour l'envoi direct depuis le formulaire Contact, Gmail demande un mot de passe d'application. Sans `C2E_SMTP_PASSWORD`, le site ouvre la messagerie de l'utilisateur en secours.
