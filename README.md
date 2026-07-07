# tiffank1802.github.io

Portfolio personnel developpe avec React, Vite et Framer Motion.
Effet Liquid Glass inspire du design Apple.

## Structure

```
├── .github/workflows/
│   ├── deploy.yml      # Build + Deploy vers GitHub Pages
│   └── build-cv.yml    # Compilation automatique du CV LaTeX
├── cv/
│   └── cv.tex          # Source LaTeX du CV (modifiez ici)
├── public/
│   └── cv.pdf          # PDF genere automatiquement
├── src/
│   └── App.jsx         # Composant principal
├── index.html
├── package.json
└── vite.config.js
```

## Installation

```bash
npm install
npm run dev
```

## CV automatique

Le CV est ecrit en LaTeX (`cv/cv.tex`). A chaque `push` modifiant ce fichier,
GitHub Actions compile automatiquement le PDF et le commit dans :
- `public/cv.pdf` (inclus dans le build du site)
- `cv.pdf` (racine)

Il suffit donc de modifier `cv/cv.tex` pour que le CV se mette a jour
automatiquement sur le site.

## Deploiement

Tout push sur `main` declenche le workflow GitHub Actions qui :
1. Installe les dependances
2. Build l'application
3. Deploie sur GitHub Pages

Le site est accessible sur : https://tiffank1802.github.io

## Personnalisation

- Modifiez `src/App.jsx` pour changer les competences, projets et informations
- Modifiez `cv/cv.tex` pour mettre a jour le CV
- Les workflows sont dans `.github/workflows/`
