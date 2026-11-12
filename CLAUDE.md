# CLAUDE.md

Site vitrine d'Univerweb (agence web, Alger). Nuxt 4 + Vue 3 + TypeScript, contenu via `@nuxt/content`, trilingue (fr / en / ar en RTL), généré en statique (`nuxt generate`) puis déployé par SCP via GitHub Actions.

## Commandes

- Gestionnaire de paquets : **pnpm** uniquement (pas de npm/yarn). Node 26 (version utilisée par le workflow de déploiement).
- `pnpm dev` : serveur de développement
- `pnpm build` : build Nuxt standard (la production utilise `generate`)
- `pnpm generate` : build statique (cible de production)
- `pnpm lint` / `pnpm lint:fix` : ESLint (lancer `pnpm lint` avant chaque commit)
- `pnpm lint:css` / `pnpm lint:css:fix` : Stylelint sur le SCSS, configuration `stylelint-config-standard-scss` (`stylelint.config.mjs`) ; à lancer aussi avant chaque commit qui touche au SCSS

## Structure

- `app/` : code Nuxt 4 (`pages/`, `components/`, `composables/`, `utils/`, `assets/scss/`)
- `content/` : contenu en YAML/Markdown, un dossier par langue (`fr/`, `en/`, `ar/`) + `content/realisations/` pour les données communes aux langues
- `content.config.ts` : collections et schémas Zod
- `i18n/locales/*.yaml` : traductions de l'interface (`fr-FR`, `en-US`, `ar-DZ`)
- `server/` : endpoints API et middlewares Nitro (vide pour l'instant ; le site est statique)
- `public/` : polices, favicons, `robots.txt`, manifest

## Conventions générales

- Style imposé par `@nuxt/eslint` avec `stylistic: true` : indentation de 2 espaces, guillemets simples, **pas de point-virgule**, virgules finales en multiligne.
- Formatage : le dépôt n’a **pas de config Prettier** ; les réglages vivent dans les paramètres VS Code de l’utilisateur (Prettier `singleQuote`, `semi: false`, et `proseWrap: always` pour le YAML). Prettier formate à l’enregistrement, sauf les fichiers `.vue` (formatage automatique désactivé : s’en remettre à ESLint, `pnpm lint:fix`). Pour formater un fichier de contenu YAML en ligne de commande : `pnpm exec prettier --single-quote --no-semi --prose-wrap always --write <fichier>`. Le YAML est replié à 80 colonnes : ne pas laisser de ligne plus longue après une édition.
- Formatage SCSS (Prettier à l’enregistrement) : **pas de virgule finale** dans les `@include` multilignes (`@include typo(` … `);`) ; dès qu’un `transition` liste plusieurs propriétés, **une par ligne** après `transition:` ; la valeur de `unicode-range` des `@font-face` commence à la ligne suivante. Ne pas écrire ces points autrement à la main : Prettier les réécrirait au prochain enregistrement.
- Espaces insécables dans le YAML : chaînes entre guillemets doubles, avec le caractère littéral ou l’échappement ` ` (équivalents). Ils évitent les retours à la ligne au milieu d’un prix (`220 000 DA HT`) ; en Markdown, utiliser `&nbsp;`.
- Ne rien importer de ce que Nuxt auto-importe (`ref`, `computed`, `useRoute`, `useFetch`, `useI18n`, `useAsyncData`, `queryCollection`, composables et composants locaux…). On n'importe explicitement que les bibliothèques externes et les types : `import type { Collections } from '@nuxt/content'`.
- Pas de type `any` explicite.
- Commits en français au format Conventional Commits : `type(portée): description` (ex. `fix(blog): corriger la hauteur de police dans le contenu du blog`). Types : `feat`, `fix`, etc.

## Vue 3

- Toujours `<script setup lang="ts">`, placé **avant** `<template>`.
- **Aucun bloc `<style>` dans les composants** : tous les styles vivent dans `app/assets/scss/`.
- Props typées avec `defineProps<{ ... }>()` (génériques TS, pas d'objet runtime). Valeurs par défaut gérées dans le template (`width || 24`) plutôt qu'avec `withDefaults`. N'assigner `const props = …` que si les props sont utilisées dans le script.
- Raccourci de binding Vue 3.4+ quand le nom est identique : `:card` plutôt que `:card="card"`.
- ESLint : max 5 attributs sur une ligne ; au-delà, un attribut par ligne. Plusieurs racines de template autorisées.
- Règle `vue/singleline-html-element-content-newline` : le contenu d'un élément sur une seule ligne va à la ligne (`<h2>` / texte / `</h2>`), sauf pour les éléments exemptés par la config ESLint.
- Titres dynamiques via une prop `titleTag` / `headlineTag` + `<component :is="titleTag">`.
- Accessibilité : `aria-labelledby` reliant les `<section>`/`<article>` à leur titre (avec `id`), `aria-label` traduits via `t('ariaLabels.…')`.
- Données structurées en RDFa (`vocab="https://schema.org/"`, `typeof`, `property`) directement dans le markup, comme dans les pages et cartes existantes.

### Composants

- Rangés par domaine dans `app/components/<domaine>/`, nommés en PascalCase sans répéter le préfixe : `realisation/Card.vue` → `<RealisationCard>`, `app/Picture.vue` → `<AppPicture>`.
- Éléments chargés sous la ligne de flottaison en `Lazy` : `<LazyAppRequest />`, `<LazyAppFooter />`, `<LazyAppNav />`.
- Icônes : composant SVG qui enveloppe `<AppIcon :width :height>` et ne contient que des `<path>`. `components/icon/` pour les icônes UI (`<IconBack>`), `components/global/` pour celles résolues dynamiquement par nom depuis le contenu ou l'i18n (`<component :is="rt(icon)" />`).
- `components/content/` : surcharges MDC/Prose pour le rendu Markdown.
- Images : passer par `<AppPicture>` (NuxtPicture, provider Cloudinary, `avif,webp`, `loading="lazy"`) avec un `sizes` basé sur les écrans de `nuxt.config.ts`.

## TypeScript

- Typage strict, pas de `any`. Préférer les unions littérales (`'thumbnail' | 'banner' | 'preview'`) et les `interface` pour les objets d'options.
- Typer les données de contenu à partir des collections générées : `Pick<Collections['article_fr' | 'article_en' | 'article_ar'], 'path' | 'title' | …>`.
- Composables : fichiers `app/composables/useXxx.ts` exportant une `function useXxx()` nommée (pas d'export par défaut), qui retournent un objet.
- Le non-null assertion (`!`) n'est toléré qu'après une garde explicite (ex. `project.value!` après le `throw createError` 404).

## Nuxt 4 / données

- Récupération du contenu avec `useAsyncData` + `queryCollection` :
  - clé **fonction** incluant la locale et le slug : `` () => `project-${locale.value}-${slug}` ``
  - `{ watch: [locale] }` pour recharger au changement de langue
  - `.select(...)` explicite des seuls champs utilisés
  - `Promise.all` pour combiner la collection traduite (`project_${locale}`) et la collection commune (`project`).
- Page introuvable : `throw createError({ status: 404, statusText: 'Page Not Found', fatal: true })`.
- SEO : chaque page appelle `useSeo({ page, title, description, ... })` avec des **getters** (`() => …`) ; ne pas appeler `useSeoMeta`/`useHead` directement dans les pages. Ajouter toute nouvelle page à `PageKey` dans `useSeo.ts`.
- URLs absolues via `useUrl()` (`baseUrl(path)`, `localeBaseUrl`) ; liens internes via `useLocalePath()` / `<NuxtLinkLocale>`.
- Variables d'environnement exposées uniquement via `runtimeConfig.public` ; toute nouvelle variable doit aussi être ajoutée aux secrets du workflow de déploiement.

## i18n et contenu

- Toute chaîne visible passe par `t()` ; aucune chaîne en dur dans les templates. Ajouter chaque clé **dans les trois fichiers** `fr-FR.yaml`, `en-US.yaml`, `ar-DZ.yaml`, en respectant les sections existantes (`site`, `navigation`, `ariaLabels`, `actions`, `headings`, `category`, `services`, `alt`, `blog`, `footer`).
- Le français est la langue par défaut (sans préfixe d'URL) ; l'arabe est en RTL : tout ajout doit être vérifié en `dir="rtl"`.
- Un nouveau contenu se crée dans les trois langues, avec les mêmes noms de fichiers (préfixe numérique d'ordre : `01.slug.yaml`). Chaque nouvelle collection se déclare en `_fr`, `_en`, `_ar` dans `content.config.ts`, avec un schéma Zod partagé.
- Frontmatter des pages datées : `createdAt` / `updatedAt` au format `AAAA-MM-JJ` ; mettre à jour `updatedAt` à chaque modification de fond.
- Typographie française : apostrophe typographique `’` dans le contenu.

## SCSS

- Architecture 7-1 simplifiée sous `app/assets/scss/`, point d'entrée unique `main.scss` (seul fichier déclaré dans `nuxt.config.ts > css`) :
  - `abstracts/` : `_variables.scss` (breakpoints), `_mixins.scss` — ne génèrent aucun CSS
  - `base/` : reset (avec les éléments HTML de base), polices, thèmes, typographie
  - `layout/` : grille (`_grid`), `main` avec `.hero` et `.error` (`_main`), header, footer
  - `components/` : un partiel par composant (`_card`, `_button`, `_slug-nav`, `_more`, `_request`…) et utilitaires
  - `pages/` : un partiel par section du site (`_blog.scss`, `_legal.scss`…)
- Fichiers partiels préfixés `_`, ajoutés dans `main.scss` avec `@use` dans le bon groupe (l'ordre compte pour la cascade).
- **Module system Sass uniquement** : `@use` / `@forward`, jamais `@import`. Importer les abstracts en tête de chaque partiel qui en a besoin :
  ```scss
  @use '../abstracts/variables' as *;
  @use '../abstracts/mixins' as *;
  ```
- **Mobile-first** : styles de base pour mobile, puis `@media (min-width: $bp-md)`, `$bp-lg`, `$bp-xl`… Utiliser les variables de breakpoint (`$bp-xs`, `$bp-sm`, `$bp-md`, `$bp-lg`, `$bp-xl`, `$bp-xxl`), jamais de valeurs en dur. Les media queries sont imbriquées dans le sélecteur concerné.
- **Variables Sass** pour ce qui est connu à la compilation (breakpoints) ; **custom properties CSS** pour tout le reste (couleurs, espacements, durées). Utiliser les tokens de `base/_themes.scss` : `--blue`, `--green`, `--night`, `--anthracite`, `--slate`, `--steel`, `--pearl`, `--mist`, `--ivory`, `--snow`, `--background-color`, `--surface-color`, `--overlay-color`, `--text-color-heading`, `--text-color-body`, `--text-color-muted`, `--text-color-on-accent`, `--text-color-on-overlay`, `--border-color`, `--shadow-color`, `--accent-color`, `--success-color`, `--gutter`, `--space`, `--gap-8`, `--gap-12`, `--gap-16`, `--gap-24`, `--gap-48`, `--gap-96`, `--header-height`, `--container-width`, `--container-width-narrow`, `--container-width-wide`, `--column-width`, `--line-height-heading`, `--radius-4`, `--radius-8`, `--radius-32`, `--radius-pill`, `--duration-base`, `--duration-slow`, `--duration-stagger`, `--transform-origin-start`, `--transform-origin-end`. Pas de nouvelle couleur en dur : ajouter un token.
- **Palette et rôles** : les couleurs de la palette (`--night`, `--blue`, `--green`…) ne s'utilisent que dans `base/_themes.scss`, pour définir les rôles. Les composants n'utilisent que les rôles (`--background-color`, `--text-color-body`, `--accent-color`…), dont les noms suivent ceux des variables Figma (`Background`, `Text/Body`, `Accent`…). Seules exceptions : le logo et la barre de chargement, en couleurs de marque.
- **Écarts** : les `gap` utilisent l'échelle fixe `--gap-8` … `--gap-96` (le nombre est la valeur en pixels à la taille de police par défaut : `--gap-16` = `1rem` ; même logique pour les rayons `--radius-4`, `--radius-8`, `--radius-32`), ou `var(--space)` quand l'écart doit suivre la zone. Pas de `gap` en dur ; ajouter un échelon à l'échelle si besoin.
- **`--space` est contextuel** : sa valeur globale (`base/_themes.scss`) est redéfinie localement par certaines zones (header, footer, main, réalisations), et `var(--space)` prend la valeur de la zone englobante. Pour adapter l'espacement d'une zone, surcharger `--space` sur son conteneur plutôt que d'ajouter un nouveau token.
- **Thème sombre** : surcharger les custom properties sous `:root.dark` (classe posée par `useColorMode`), jamais en dupliquant les règles dans les composants.
- **RTL** : préférer les propriétés logiques (`margin-block-end`, `padding-inline-start`, `inset-inline-start`…) à `left`/`right` (bannis à cause de l’arabe), pour que l'arabe fonctionne sans surcharge. Les ajustements spécifiques passent par `:root[dir='rtl']`.
- Typographie via le mixin `@include typo($size, $weight: …, $line-height: …, $letter-spacing: …, $margin-top: …, $margin-bottom: …)` (seul `$size` est positionnel ; valeurs avec leur unité : `rem` pour la taille et les marges, `em` pour `$letter-spacing`) ; grilles via `@include grid(...)` et `@include col(...)`.
- Ordre dans un bloc (règle Stylelint `order/order`, plugin `stylelint-order`) : custom properties locales, puis tous les `@include` (`typo`, `grid`, `transition`, `focus-ring`…), puis les déclarations, puis les blocs imbriqués ; une ligne vide entre chaque groupe.
- Imbrication BEM légère : `&--modificateur`, `&:hover`, `.parent + &`. Limiter la profondeur à 3 niveaux. Classes en kebab-case (`.card-group`, `.card-prestation`).
- Notation de couleur moderne : `oklch(from var(--night) l c h / 67%)` (couleurs en OKLCH, séparateurs espaces, alpha en %), `currentcolor` en minuscules.
- Transitions : `@include transition(color, transform);` (mixin qui applique `var(--duration-base) linear` à chaque propriété listée ; jamais `transition: all`).
- Focus visible systématique sur les éléments interactifs : `outline: 0.1875rem solid var(--accent-color); outline-offset: 0.3125rem;`.
- `!important` à éviter (réservé à la surcharge d'attributs inline comme le `fill` des SVG).
