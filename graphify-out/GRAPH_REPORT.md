# Graph Report - .  (2026-05-12)

## Corpus Check
- 28 files · ~63,984 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 90 nodes · 87 edges · 20 communities (10 shown, 10 thin omitted)
- Extraction: 78% EXTRACTED · 20% INFERRED · 2% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.8)
- Token cost: 0 input · 92,374 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Business Services & Clients|Business Services & Clients]]
- [[_COMMUNITY_Page & Component Composition|Page & Component Composition]]
- [[_COMMUNITY_Next.js Project Setup|Next.js Project Setup]]
- [[_COMMUNITY_App Layout Components|App Layout Components]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Root Layout & Fonts|Root Layout & Fonts]]
- [[_COMMUNITY_Contact Form Validation|Contact Form Validation]]
- [[_COMMUNITY_Hero Section Assets|Hero Section Assets]]
- [[_COMMUNITY_Brand Icon Assets|Brand Icon Assets]]
- [[_COMMUNITY_PNP Metadata|PNP Metadata]]
- [[_COMMUNITY_Next.js Config AST|Next.js Config AST]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Adani Logo Pair|Adani Logo Pair]]
- [[_COMMUNITY_CPT Logo Pair|CPT Logo Pair]]
- [[_COMMUNITY_NextVercel Branding|Next/Vercel Branding]]
- [[_COMMUNITY_Tailwind PostCSS Pipeline|Tailwind PostCSS Pipeline]]
- [[_COMMUNITY_Generic File Icon|Generic File Icon]]
- [[_COMMUNITY_HPL Logo|HPL Logo]]
- [[_COMMUNITY_IOCL Logo|IOCL Logo]]
- [[_COMMUNITY_Window Icon|Window Icon]]

## God Nodes (most connected - your core abstractions)
1. `Services Component` - 9 edges
2. `Footer Component` - 8 edges
3. `TrustBanner Component` - 7 edges
4. `Home Page Component` - 6 edges
5. `Hero Component` - 6 edges
6. `ESLint Configuration` - 4 edges
7. `Next.js` - 4 edges
8. `ContactForm Component` - 4 edges
9. `README` - 3 edges
10. `RootLayout` - 3 edges

## Surprising Connections (you probably didn't know these)
- `ESLint Configuration` --conceptually_related_to--> `Next.js`  [INFERRED]
  eslint.config.mjs → README.md
- `PnP App Icon - Factory` --conceptually_related_to--> `IOCL Logo`  [AMBIGUOUS]
  src/app/icon.svg → public/logo-iocl.jpg
- `PnP App Icon - Factory` --conceptually_related_to--> `Reliance Logo`  [AMBIGUOUS]
  src/app/icon.svg → public/logo-reliance.png
- `Next.js Configuration` --implements--> `Next.js`  [EXTRACTED]
  next.config.ts → README.md
- `Footer Component` --conceptually_related_to--> `Oil Storage Tanks Service`  [INFERRED]
  src/components/Footer.tsx → src/components/Services.tsx

## Hyperedges (group relationships)
- **Client Logo Assets** — public_logo_adani_svg, public_logo_cpt_svg, public_logo_hpl_png, public_logo_iocl_gif, public_logo_adani_jpg, public_logo_cpt_png [EXTRACTED 1.00]
- **Hero Section Visual Assets** — public_hero_background_png, public_hero_welder_png, public_globe_svg [INFERRED 0.75]
- **Project Branding Assets** — public_next.svg_entity, public_vercel.svg_entity, public_logo-iocl.jpg_entity, public_logo-reliance.png_entity, public_window.svg_entity, src_app_icon.svg_entity [EXTRACTED 1.00]
- **Next.js Project Initialization** — readme, nextjs, create_next_app [EXTRACTED 1.00]
- **Next.js TypeScript Linting Stack** — eslint_config, flat_compat, next_core_web_vitals, next_typescript [EXTRACTED 1.00]
- **Tailwind CSS PostCSS Pipeline** — postcss_config, tailwindcss_postcss [EXTRACTED 1.00]
- **Next.js Image Remote Patterns** — next_config, remote_patterns, nextjs [EXTRACTED 1.00]
- **Homepage Composition** — page_Home, component_Hero, component_TrustBanner, component_Services, component_ContactForm, component_Footer [EXTRACTED 1.00]
- **Form Validation Pipeline** — contactformschema_entity, contactformvalues_entity, contactform_entity [EXTRACTED 1.00]
- **Form Field Bindings** — contactform_entity, contactformvalues_entity [EXTRACTED 1.00]
- **Landing Page Component Cluster** — hero_entity, services_entity, trustbanner_entity, footer_entity [INFERRED 0.75]
- **Core Sector Client Network** — iocl_client, hpl_client, reliance_client, cpt_client, adani_client, pnp_engineering_works_entity [EXTRACTED 1.00]
- **Services Portfolio** — pnp_engineering_works_entity, oil_storage_tanks_service, industrial_piping_service, structural_engineering_service, mechanical_equipment_service, shutdown_turnaround_service, surface_treatment_service [EXTRACTED 1.00]

## Communities (20 total, 10 thin omitted)

### Community 0 - "Business Services & Clients"
Cohesion: 0.19
Nodes (17): Adani Ports & SEZ Haldia Terminal, Syama Prasad Mookerjee Port Kolkata, Footer Component, Haldia Refinery, Hero Component, Haldia Petrochemicals Ltd, Industrial Piping Service, Indian Oil Corporation Ltd (+9 more)

### Community 1 - "Page & Component Composition"
Cohesion: 0.2
Nodes (7): ContactForm(), ContactFormValues, contactSchema, Footer(), Hero(), services, TrustBanner()

### Community 2 - "Next.js Project Setup"
Cohesion: 0.22
Nodes (10): create-next-app, ESLint Configuration, FlatCompat, Next.js Configuration, next/core-web-vitals ESLint config, next/typescript ESLint config, Next.js, README (+2 more)

### Community 3 - "App Layout Components"
Cohesion: 0.22
Nodes (9): ContactForm Component, Footer Component, Hero Component, Services Component, TrustBanner Component, Geist Mono Font, Geist Sans Font, RootLayout (+1 more)

### Community 4 - "ESLint Configuration"
Cohesion: 0.4
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 5 - "Root Layout & Fonts"
Cohesion: 0.4
Nodes (3): geistMono, geistSans, metadata

### Community 6 - "Contact Form Validation"
Cohesion: 0.5
Nodes (5): Consultation Section, ContactForm Component, contactSchema Zod Schema, ContactFormValues Type, Inquiry Submission Service

### Community 7 - "Hero Section Assets"
Cohesion: 0.67
Nodes (3): Globe Icon, Hero Background Image, Hero Welder Image

### Community 8 - "Brand Icon Assets"
Cohesion: 0.67
Nodes (3): IOCL Logo, Reliance Logo, PnP App Icon - Factory

### Community 9 - "PNP Metadata"
Cohesion: 0.67
Nodes (3): API Storage Tanks, PNP Engineering Works (P) Ltd, PNP Engineering Works Metadata

## Ambiguous Edges - Review These
- `IOCL Logo` → `PnP App Icon - Factory`  [AMBIGUOUS]
  src/app/icon.svg · relation: conceptually_related_to
- `Reliance Logo` → `PnP App Icon - Factory`  [AMBIGUOUS]
  src/app/icon.svg · relation: conceptually_related_to

## Knowledge Gaps
- **48 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `IOCL Logo` and `PnP App Icon - Factory`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Reliance Logo` and `PnP App Icon - Factory`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Are the 2 inferred relationships involving `Services Component` (e.g. with `Footer Component` and `Hero Component`) actually correct?**
  _`Services Component` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Footer Component` (e.g. with `Services Component` and `TrustBanner Component`) actually correct?**
  _`Footer Component` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `TrustBanner Component` (e.g. with `Footer Component` and `Hero Component`) actually correct?**
  _`TrustBanner Component` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `Hero Component` (e.g. with `Services Component` and `Haldia Refinery`) actually correct?**
  _`Hero Component` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _48 weakly-connected nodes found - possible documentation gaps or missing edges._