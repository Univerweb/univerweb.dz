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
- **Commentaires** : ne jamais ajouter de commentaire dans le code (CSS/SCSS, Vue, TS) sans l'accord de Houssem ; le proposer d'abord.
- **Styles non utilisés** : un style validé pour un élément que le site n'utilise pas encore (ex. éléments Markdown) va dans la charte Figma, pas dans le code ; il entre dans le code au premier usage réel.
- Formatage : Prettier est une dépendance du projet, configuré dans `.prettierrc.yaml` (`singleQuote`, `semi: false`, `proseWrap: always` pour le YAML), que VS Code et la ligne de commande lisent tous deux. Il formate à l’enregistrement, sauf les fichiers `.vue` et `.ts` (s’en remettre à ESLint, `pnpm lint:fix`). Un hook Claude Code (`.claude/settings.json`) lance Prettier après chaque écriture d’un fichier `.scss`, `.css`, `.yaml`, `.yml`, `.md` ou `.json`. À la main : `pnpm exec prettier --write <fichier>` ; `pnpm format` / `pnpm format:check` pour tout le SCSS. **Largeur de ligne : 80 colonnes pour tous ces fichiers, SCSS compris** : au-delà, Prettier replie la ligne (un commentaire en fin de déclaration compte dans la largeur ; le placer sur la ligne précédente). Pas de ligne vide en double, ni en début de fichier.
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
- Ton des articles du blog : neutre et universel, sans promotion de l’agence dans le corps de l’article.
- Prix : toujours hors taxes, avec la mention « HT » (`220 000 DA HT`), dans les trois langues.
- Arabe : tanwin écrit « ـًا » (`دعمًا`) ; envelopper dans `<bdi>` les éléments LTR insérés dans un texte RTL (`<bdi><code>.dz</code></bdi>`) ; respecter la hamzat wasl (`امتلاك`, `استفد`).
- Ancienneté de l’agence : ne jamais l’écrire en dur. Utiliser le marqueur `{years}` dans le contenu (`content/{fr,en,ar}/agence.yaml`), remplacé par `withYears()` du composable `useYears` ; un workflow planifié régénère le site chaque année le lendemain de l’anniversaire (22 février).

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
- **Mobile-first** : styles de base pour mobile, puis `@media (min-width: $bp-md)`, `$bp-lg`, `$bp-xl`… Utiliser les variables de breakpoint (`$bp-md`, `$bp-lg`, `$bp-xl`, `$bp-xxl`), jamais de valeurs en dur. Les media queries sont imbriquées dans le sélecteur concerné.
- **Variables Sass** pour ce qui est connu à la compilation (breakpoints) ; **custom properties CSS** pour tout le reste (couleurs, espacements, durées). Utiliser les tokens de `base/_themes.scss` : `--blue`, `--green`, `--night`, `--anthracite`, `--slate`, `--steel`, `--pearl`, `--mist`, `--ivory`, `--snow`, `--background-color`, `--surface-color`, `--text-color-heading`, `--text-color-body`, `--text-color-muted`, `--text-color-on-accent`, `--border-color`, `--shadow-color`, `--accent-color`, `--success-color`, `--gutter`, `--spacing-responsive`, `--spacing-4`, `--spacing-8`, `--spacing-12`, `--spacing-16`, `--spacing-24`, `--spacing-32`, `--spacing-48`, `--spacing-72`, `--spacing-96`, `--spacing-144`, `--header-height`, `--container-width`, `--container-width-narrow`, `--container-width-wide`, `--column-width`, `--font-size-12`, `--font-size-14`, `--font-size-16`, `--font-size-20`, `--font-size-24`, `--font-size-32`, `--font-size-40`, `--font-size-56`, `--font-size-80`, `--line-height-heading`, `--line-height-snug`, `--line-height-lead`, `--line-height-body`, `--letter-spacing-tight`, `--letter-spacing-snug`, `--radius-4`, `--radius-8`, `--radius-32`, `--radius-pill`, `--duration-base`, `--duration-slow`, `--duration-stagger`, `--transform-origin-start`, `--transform-origin-end`. Pas de nouvelle couleur en dur : ajouter un token.
- **Palette et rôles** : les couleurs de la palette (`--night`, `--blue`, `--green`…) ne s'utilisent que dans `base/_themes.scss`, pour définir les rôles. Les composants n'utilisent que les rôles (`--background-color`, `--text-color-body`, `--accent-color`…), dont les noms suivent ceux des variables Figma (`Background`, `Text/Body`, `Accent`…). Seules exceptions : le symbole du logo et la barre de chargement, en couleurs de marque.
- **Couleurs de texte** : titres, liens, boutons, `strong` et icônes d'interface en `--text-color-heading` ; texte courant en `--text-color-body` ; texte secondaire (métadonnées, copyright, libellés) en `--text-color-muted`. Un titre qui ne fait qu'annoncer un contenu plus important (titre-étiquette) descend d'un cran : `--text-color-body` pour un grand titre, classe `.label` (`--text-color-muted`) pour une petite étiquette. Ne redéclarer une couleur que si elle diffère de celle héritée.
- **Bleu (`--accent-color`) jamais en couleur de texte** : 3,1:1 sur fond clair, sous le seuil de 4,5:1. Il sert de fond (boutons, liens du texte au survol, avec un texte en `--text-color-on-accent`), de trait (`.link`, menu) ou de couleur d'icône (3:1 suffit ; icônes décoratives `aria-hidden` en bleu). Seule exception en texte : les grands chiffres (`.big-count`, 40px et plus, seuil de 3:1 des grands caractères), uniquement sur `--background-color` (3,1:1 ; 2,9:1 sur `--surface-color`, insuffisant). Survol des liens : remplissage pour les liens du texte (mixin `text-link`), trait animé pour `.link` (mixin `link-line`), soulignement pour les liens texte du footer.
- **Header et logo** : logo à 24px sur tous les écrans ; le header mesure 3 × cette hauteur (72px, 88px dès `md` avant défilement) et ses marges intérieures valent au moins 24px (`max(var(--spacing-24), var(--gutter))`), pour respecter l'espace libre de la charte (égal à la hauteur du logo). Sous `md`, le logo est donc en retrait de 8px par rapport au contenu (marge de page de 16px) : c'est voulu.
- **Graisses** : 350 pour le texte courant et le chapô (graisse intermédiaire des polices variables : le 400 d'Outfit est trop dense en petite taille) ; 500 pour `.label`, `.link`, le menu et les boutons ; 600 pour tous les titres (`h1` à `h3`, `.h1` à `.h4`), les grands chiffres, `strong` et les boutons au survol et au focus. La hiérarchie des titres repose sur la taille, pas sur la graisse.
- **Tailles** : uniquement les tokens `--font-size-*`. 12px est le minimum, réservé aux libellés d'une ligne (copyright, info-bulles) ; un texte de plusieurs lignes ne descend pas sous 14px. Interlettrage selon la taille : `--letter-spacing-tight` dès 32px, `--letter-spacing-snug` de 20 à 24px, rien en dessous (`normal` en RTL).
- **Chapô (`.lead`)** : un seul par page ou par section, juste après le titre qu'il introduit. Ailleurs (descriptions, valeurs, textes de cartes), texte courant.
- **Rythme vertical** : marges des titres en `em` (relatives à leur taille) : dessous 0.3em (`h1` : il est toujours suivi de son chapô ou de ses métadonnées), 0.6em (`h2`) et 0.5em (`h3`, `.h4`) ; dans le contenu éditorial, `h2` (en `.h3`) 3em dessus et 0.5em dessous (72 / 12px), `h3` (en `.h4`) 1.6em et 0.4em (32 / 8px) : une nouvelle section est nettement plus détachée qu'une sous-section. Paragraphes espacés de `--spacing-16`. Colonne de lecture (`.container-narrow`, `--container-width-narrow` à 34rem dès `md`) : environ 75 caractères par ligne ; à recalculer si la police ou la graisse du texte change. Listes du contenu éditorial aux puces et numéros du navigateur.
- **Titres du contenu éditorial un cran en dessous** : dans le Markdown (blog, pages légales), `ProseH2.vue` et `ProseH3.vue` gardent la balise mais prennent l'apparence du niveau inférieur (`h2` en `.h3`, `h3` en `.h4`). La classe `.h4` existe pour cet usage ; l'élément `h4` n'a pas de style.
- **Pas de style pour un élément inutilisé** : `h4` à `h6` restent dans la charte Figma mais n'entrent dans le code que lorsqu'une page les utilise. Les rôles de couleur gardent les mêmes noms dans Figma (collections `Palette` et `Rôles`, couleurs en Display P3).
- **Survol sur écran tactile** : un survol qui resterait collé après un toucher (burger du menu mobile) se place dans `@media (hover: hover)`.
- **Espacements** : les `gap`, `margin` et `padding` utilisent l'échelle fixe `--spacing-4` … `--spacing-144` (le nombre est la valeur en pixels à la taille de police par défaut : `--spacing-16` = `1rem` ; même logique pour les rayons `--radius-4`, `--radius-8`, `--radius-32`), ou `var(--spacing-responsive)` quand l'espacement doit grandir avec l'écran. Pas de valeur en dur, sauf les réglages d'icône (taille d'une flèche dans un rond, padding du burger) et de positionnement (marges négatives, centrage d'un séparateur) ; ajouter un échelon à l'échelle si besoin.
- **`--spacing-responsive`** : seul espacement qui varie selon l'écran (1rem, 1.5rem dès `md`, 2rem dès `lg`, dans `base/_themes.scss`). À utiliser quand un espacement doit grandir avec l'écran (padding des cartes, `.container` en `calc(var(--spacing-responsive) * 3)`…). Ne jamais le redéfinir localement : une zone qui a besoin d'autres valeurs les écrit avec l'échelle `--spacing-*`.
- **Thème sombre** : surcharger les custom properties sous `:root.dark` (classe posée par `useColorMode`), jamais en dupliquant les règles dans les composants.
- **RTL** : préférer les propriétés logiques (`margin-block-end`, `padding-inline-start`, `inset-inline-start`…) à `left`/`right` (bannis à cause de l’arabe), pour que l'arabe fonctionne sans surcharge. Les ajustements spécifiques passent par `:root[dir='rtl']`.
- Typographie via le mixin `@include typo($size, $weight: …, $line-height: …, $letter-spacing: …, $margin-top: …, $margin-bottom: …)` (seul `$size` est positionnel ; taille en token `--font-size-*`, marges des titres en `em`, interlettrage en token `--letter-spacing-*`) ; grilles via `@include grid(...)` et `@include col(...)`.
- Ordre dans un bloc (règle Stylelint `order/order`, plugin `stylelint-order`) : custom properties locales, puis tous les `@include` (`typo`, `grid`, `transition`, `focus-ring`…), puis les déclarations, puis les blocs imbriqués ; une ligne vide entre chaque groupe.
- Imbrication BEM légère : `&--modificateur`, `&:hover`, `.parent + &`. Limiter la profondeur à 3 niveaux. Classes en kebab-case (`.card-group`, `.card-prestation`).
- Notation de couleur moderne : `oklch(from var(--night) l c h / 67%)` (couleurs en OKLCH, séparateurs espaces, alpha en %), `currentcolor` en minuscules.
- Transitions : `@include transition(color, transform);` (mixin qui applique `var(--duration-base) linear` à chaque propriété listée ; jamais `transition: all`).
- Tout élément dont une couleur change (thème clair/sombre, `:hover`, `:focus`, `.scrolled`…) a une transition sur la propriété concernée (`color`, `background-color`, `border-color`, `fill`, `box-shadow`). Un élément qui hérite sa couleur suit la transition de son parent ; un élément qui redéclare sa couleur (`color: var(--…)`) a besoin de sa propre transition, déclarée sur l'état de repos et non sur `:hover`.
- Exception volontaire : les contours de focus (`outline`) apparaissent sans transition, pour que le focus clavier soit visible immédiatement.
- Focus clavier : un seul style pour tout le site, appliqué globalement à `:focus-visible` dans `base/_reset.scss` (mixin `focus-ring` : contour de 3px en `--text-color-heading`, décalé de `--spacing-4`). Ne pas le redéclarer dans les composants ; seul ajustement : `outline-offset: 0.125rem` pour les liens du texte. L'état `:focus-visible` reprend toujours l'état `:hover` (écrire `:is(:hover, :focus-visible)`) ; quand le survol est réservé aux pointeurs (`@media (hover: hover)`), déclarer `:focus-visible` à part, hors de cette condition.
- Focus visible systématique sur les éléments interactifs : `outline: 0.1875rem solid var(--accent-color); outline-offset: 0.3125rem;`.
- `!important` à éviter (réservé à la surcharge d'attributs inline comme le `fill` des SVG).
