# Workflowly — Design System (v1)

> Source de vérité unique. Toute décision d'implémentation référence ce fichier. Aucune valeur magique en dehors de ces tokens.

Généré par genjutsu:paint. Thèses validées le 2026-08-08.

**Visual Thesis** : Interface premium tech, fond quasi-noir dans l'esprit Vercel / Framer, avec un accent électrique ember qui prolonge l'orange chaud déjà présent chez Workflowly. Typographie Geist en grande échelle pour les titres, corps de texte discret. Espacements généreux et cinématiques. Composants anguleux, bordures fines, surfaces plates éclairées d'une légère lueur plutôt que d'une ombre portée.

**Interaction Thesis** : Révélations cinématiques au scroll (500ms, stagger 60ms) pour les entrées de section via la librairie `motion` ; micro-interactions nerveuses (140ms) avec un scale de 1.02 et une lueur au survol/focus ; aucun rebond ni élastique nulle part ; chaque entrée respecte le mode mouvement réduit en dégradant vers un simple fondu.

**3D Addendum (révisé)** : Sphère distordue par un bruit 3D animé (Three.js / React Three Fiber, shader custom), fond unique et persistant sur tout le site — pas un effet par section. Dégradé ember → dusk selon le déplacement de surface, liseré de lumière (fresnel) en ember sur les bords. Rotation lente continue + parallax souris (tilt doux). Remplace l'ancien champ de particules (v1), jugé trop discret.

Site à thème unique (dark), pas de bascule clair/sombre — c'est un choix délibéré, pas un oubli.

---

## Couleurs

| Token | Valeur | Usage | Contraste vs fond |
|---|---|---|---|
| `--ink` | `#0A0A0C` | Fond de page | — |
| `--surface` | `#131316` | Cartes, panneaux | 16.4:1 |
| `--surface-2` | `#1A1A1E` | Surfaces élevées (hover, inputs) | — |
| `--line` | `rgba(255,255,255,0.08)` | Bordures discrètes | — |
| `--line-strong` | `rgba(255,255,255,0.16)` | Bordures visibles, focus | — |
| `--paper` | `#F3F1EC` | Texte principal | 17.5:1 |
| `--haze` | `#9C9992` | Texte secondaire, meta | 6.96:1 |
| `--ember` | `#FF6B2C` | Accent primaire, CTA, focus | 6.96:1 |
| `--ember-dim` | `rgba(255,107,44,0.14)` | Fonds d'accent, glow | — |
| `--dusk` | `#263862` | Accent secondaire, dégradés | 10.2:1 |
| `--dusk-bright` | `#4E6BAE` | Points lumineux dégradés, particules profondes | — |
| `--destructive` | `#E5484D` | Erreurs (conservé du thème existant, ajusté au fond sombre) | 5.1:1 |

Toutes les valeurs ci-dessus passent AA (≥4.5:1) sur leur fond d'usage ; `paper`/`surface`/`ink` passent AAA.

## Typographie

Police unique : **Geist Variable** (`@fontsource-variable/geist`, déjà en dépendance — pas de nouvel import, remplace le chargement Google Fonts de Manrope). Une seule famille disciplinée plutôt qu'un pairing, cohérent avec le choix « anguleux et net ».

| Rôle | Taille | Poids | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display (H1 hero) | `clamp(2.75rem, 6vw, 4.5rem)` | 700 | 1.02 | -0.02em |
| H2 | `clamp(1.8rem, 3.5vw, 2.75rem)` | 700 | 1.08 | -0.015em |
| H3 | `1.25rem–1.5rem` | 600 | 1.2 | -0.01em |
| Body | `1.0625rem` (17px) | 400 | 1.6 | 0 |
| Small / meta | `0.8125rem` (13px) | 500 | 1.4 | 0 |
| Mono (labels, chiffres, prix) | `0.8125rem` | 500 | 1.4 | 0.02em |

Police mono : stack système (`ui-monospace, "SF Mono", "Cascadia Code", Menlo, monospace`), pas de nouvelle dépendance.

## Espacement

Base 8px. Échelle : `8, 16, 24, 32, 48, 64, 96, 128, 160` (px), exposée en `rem` dans Tailwind (`0.5rem` → `10rem`).

## Radii

Anguleux, pas de `rounded-full` par défaut.

| Token | Valeur | Usage |
|---|---|---|
| `--radius-none` | `0px` | Blocs pleine largeur, séparateurs |
| `--radius-sm` | `2px` | Badges, tags |
| `--radius-md` | `4px` | Boutons, inputs |
| `--radius-lg` | `6px` | Cartes |
| `--radius-full` | `9999px` | Pills uniquement (statuts, avatars) |

## Ombres / lueur

Pas d'ombre portée classique. Élévation = bordure + lueur ember au survol.

- Repos : `0 0 0 1px var(--line)`
- Survol / focus : `0 0 0 1px rgba(255,107,44,0.35), 0 0 24px 2px var(--ember-dim)`

## Motion tokens

| Token | Valeur | Usage |
|---|---|---|
| `--ease-signature` | `cubic-bezier(0.16, 1, 0.3, 1)` | Toutes les transitions — pas de bounce/elastic |
| `--dur-fast` | `140ms` | Hover, focus, micro-interactions |
| `--dur-normal` | `300ms` | Transitions d'état (menu, toggle) |
| `--dur-slow` | `500ms` | Reveals de section au scroll |
| `--stagger` | `60ms` | Délai entre éléments d'une même révélation |
| Hover scale | `1.02` | Boutons, cartes |
| Reduced motion | fallback fondu `150ms` linéaire, jamais de translation | `prefers-reduced-motion: reduce` |

## Composants de base

- **Bouton primaire** : fond `ember`, texte `ink`, `radius-md`, hover = scale 1.02 + glow + éclaircissement léger (`#FF7A3D`).
- **Bouton fantôme** : transparent, bordure `line-strong`, hover = bordure `ember` + scale 1.02.
- **Carte** : fond `surface`, bordure `line`, `radius-lg`, hover = bordure ember à 40% + `translateY(-2px)`.
- **5 états obligatoires** sur tout élément interactif : default, hover, focus (`outline: 2px solid paper`, offset 3px), active (scale 0.99), disabled (opacité 0.4, pas d'interaction).

## Fond 3D — sphère distordue

- Stack : `three` + `@react-three/fiber` (le shader est custom, `@react-three/drei` reste installé mais non utilisé par ce composant).
- Emplacement : un seul fond fixe (`position: fixed`), derrière tout le site — plus un effet localisé à quelques sections. Contenu passé en `z-10`, fond en `z-0`.
- Comportement : géométrie sphérique déplacée le long des normales par un bruit simplex 3D animé (GLSL, inliné dans `orb-shader.ts`), rotation continue lente sur Y + tilt parallax souris lissé (lerp) sur X/Z.
- Couleur : dégradé `ember` → `dusk-bright` selon le déplacement de surface, liseré fresnel `ember` sur les bords vus de face.
- Lisibilité : les sections qui avaient un fond opaque (Problem, Roi, Steps, Contact) passent en semi-transparent + `backdrop-blur-sm` pour laisser deviner la sphère sans nuire à la lecture.
- Performance : composant chargé en lazy (`React.lazy` + `Suspense`), un seul Canvas pour tout le site (pas de remount par section).
- Respecte `prefers-reduced-motion` : rotation et bruit figés (uniforme `uTime` gelé), le tilt souris reste actif car statique par nature.

**Interactions** (le fond garde `pointer-events: none` — le raycasting se fait à la main sur les events `window`, jamais sur les events du canvas, donc aucun risque de bloquer un clic sur un bouton/lien) :
- Survol continu : la surface se déforme localement sous le curseur tant qu'il est sur la sphère.
- Clic : déclenche une onde de distorsion qui part du point cliqué et se résorbe.
- Clic-glisser : fait pivoter la sphère à la main, avec inertie qui continue après relâchement (inertie coupée net si mouvement réduit).

## Fichiers générés

- `src/index.css` — tokens CSS (`:root`), remplace le thème clair existant.
- `src/lib/motion-tokens.ts` — tokens motion exposés en JS pour la lib `motion`.
- `src/components/three/SiteBackground.tsx` — wrapper fixe, lazy-load, détection mouvement réduit.
- `src/components/three/SiteBackgroundScene.tsx` — Canvas R3F + mesh de la sphère distordue.
- `src/components/three/orb-shader.ts` — vertex/fragment shaders (bruit simplex 3D inliné).
