# Kevin Tongue — Portfolio

Portfolio bilingue (français / anglais) consacré à mes parcours en ingénierie mécanique, simulation numérique et recherche appliquée.

- **Site** : [tiffank1802.github.io](https://tiffank1802.github.io)
- **E-mail** : tonguekevin00@gmail.com
- **LinkedIn** : [tongue-kevin-52b100330](https://www.linkedin.com/in/tongue-kevin-52b100330)
- **GitHub** : [tiffank1802](https://github.com/tiffank1802)
- **Hugging Face** : [ktongue](https://huggingface.co/ktongue)

## Organisation du portfolio

Le site distingue deux parcours, ainsi qu'une page indépendante pour les CV téléchargeables :

- `/parcours/ingenieur` — conception mécanique, fabrication, maintenance industrielle, calcul et simulation appliquée. Inclut notamment l’expérience chez EP MECA, les stages et les projets de conception.
- `/parcours/master` — formation en mécanique numérique, expériences de recherche, PINNs, réduction d’ordre, fatigue, jumeau numérique et travaux académiques. Les rapports disponibles sont consultables depuis leurs cartes.
- `/cv` — accès aux CV PDF « Ingénierie mécanique » et « Master & recherche ».

Les anciennes pages `/experience`, `/projects`, `/academic` et `/skills` restent accessibles comme vues transversales du portfolio.

## Architecture technique

- **Frontend** : React 18, Vite, React Router, Framer Motion.
- **Interface** : CSS responsive et composants réutilisables, avec prise en charge FR/EN.
- **Données** : contenu descriptif dans `src/data.jsx`; sélection et regroupement des contenus par parcours dans `src/data/pathways.js`; traductions dans `src/i18n/translations.js`.
- **CV** : deux sources LaTeX dans `cv/cv.tex` (ingénierie) et `cv/cv-research.tex` (master/recherche), avec le modèle Awesome-CV local.

## Développement local

```bash
npm ci
npm run dev
```

Construire le site :

```bash
npm run build
```

## Génération des CV PDF

Le workflow GitHub Actions `.github/workflows/build-cv.yml` compile les deux documents avec XeLaTeX à chaque modification des sources, puis publie :

- `cv/cv.pdf` et `public/cv.pdf` — CV ingénierie mécanique (copié aussi à la racine sous `cv.pdf` pour compatibilité) ;
- `public/cv-recherche.pdf` — CV master et recherche.

Pour compiler localement, installer XeLaTeX et les dépendances TeX Live utilisées par le workflow, puis exécuter :

```bash
cd cv
xelatex -interaction=nonstopmode -halt-on-error cv.tex
xelatex -interaction=nonstopmode -halt-on-error cv.tex
xelatex -interaction=nonstopmode -halt-on-error cv-research.tex
xelatex -interaction=nonstopmode -halt-on-error cv-research.tex
```

## Déploiement

Le site est construit avec `npm run build` et déployé sur GitHub Pages par `.github/workflows/deploy.yml`. Le projet reste également compatible avec Cloudflare Pages : preset Vite, commande `npm run build`, répertoire de sortie `dist`.
