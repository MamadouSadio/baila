# Baïla Généa — Site de présentation

Site de présentation d'application réalisé avec **React**, **Vite** et **Tailwind CSS**.  
UI/UX soignée, **responsive** (mobile, tablette, desktop).

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

### Si `vite` n’est pas reconnu

1. **Installer les dépendances** : `npm install` (à lancer une fois dans le dossier du projet).
2. **Relancer** : `npm run dev`.

### Si erreur « spawn EPERM » ou « EBUSY » (Windows)

- Lancer **PowerShell ou CMD en dehors de Cursor** (clic droit → « Ouvrir dans le terminal » depuis l’explorateur, ou ouvrir PowerShell et faire `cd` vers le dossier du projet), puis exécuter `npm run dev`.
- Si le problème continue : ajouter le dossier du projet en **exclusion** dans Windows Defender (Antivirus) pour éviter le blocage d’`esbuild`.
- En dernier recours : supprimer `node_modules` et `package-lock.json`, puis relancer `npm install` et `npm run dev`.

## Structure

- `src/App.jsx` — Page principale (assemblage des sections)
- `src/components/` — Nav, Hero (logo + carousel sponsors), SponsorCarousel, Features, CTA, Footer, BackToTop
- `src/index.css` — Styles globaux + Tailwind
- **En haut de la bannière** : espace réservé au logo + carousel 6 slides pour les sponsors
- Contenu actuel : **placeholders** à remplacer par le contenu de votre PDF

## Personnaliser le contenu

Après avoir récupéré le contenu de votre PDF (copier-coller ou résumé) :

1. **Logo** — Dans `Hero.jsx`, remplacer la `<div class="logo-area">` par une balise `<img src="..." alt="Logo" />` (déposer l’image dans `public/`).
2. **Carousel sponsors** — Dans `SponsorCarousel.jsx`, remplacer les 6 placeholders par vos logos/liens sponsors (tableau de 6 éléments : image, lien, nom).
3. **Hero** (`src/components/Hero.jsx`) — Titre, sous-titre, accroche
4. **Features** (`src/components/Features.jsx`) — Tableau `features` : titres, descriptions, icônes
5. **CTA** (`src/components/CTA.jsx`) — Titre, texte, liens (email, téléchargement)
6. **Footer** (`src/components/Footer.jsx`) — Nom, liens, mentions

## Build production

```bash
npm run build
npm run preview
```

## Améliorations déjà en place

- **Nav sticky** — Barre de navigation fixe qui apparaît au scroll (Fonctionnalités, Contact) + menu mobile.
- **Skip link** — Lien « Aller au contenu » pour la navigation au clavier (focus au chargement).
- **Retour en haut** — Bouton flottant pour remonter en haut de la page.
- **SEO** — Meta description, Open Graph (partage réseaux), `theme-color`, titre explicite.
- **Accessibilité** — Focus visible sur liens/boutons, `prefers-reduced-motion` (réduction des animations), `scroll-margin-top` sur `#main`.
- **Carousel sponsors** — Pause au survol / au focus pour lire le contenu ; respect de la préférence « réduire les animations ».

## Idées d’amélioration futures

- **Favicon** — Remplacer `vite.svg` par un favicon aux couleurs de Baïla Généa (dans `public/`).
- **Images** — Lazy loading (`loading="lazy"`) pour les images des sponsors ou de la section contenu.
- **Section « À propos »** — Bloc court (ministère, contexte Sénégal) si utile.
- **Formulaire de contact** — Page ou modal avec formulaire en plus du lien `mailto:`.
- **Multilingue** — FR / autres langues si le public cible est multilingue.
- **Analytics** — Intégration légère (ex. Plausible, Matomo) pour mesurer le trafic.

## PDF

Je ne peux pas lire les PDF directement. Pour intégrer le contenu :

- Copier-coller le texte du PDF ici, ou
- Exporter/sauvegarder le contenu en .txt ou .md et le coller, ou
- Me donner les points clés (titres, paragraphes, listes) et j’adapter les composants en conséquence.
