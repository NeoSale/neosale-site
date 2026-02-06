# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**neosale-site** is a marketing landing page and institutional website for the NeoSale AI platform. It's a Next.js 15 application built with React 19, TypeScript, and Tailwind CSS 4. The site features interactive sections with animations powered by Framer Motion, a custom theme system using CSS variables, and full responsiveness.

**Key Details:**
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + custom CSS with theme variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Poppins)
- **Primary Color:** #403CCF (purple)
- **Environment:** Dark mode by default, with custom scrollbar and glassmorphism effects

## Common Development Commands

```bash
# Installation
npm install

# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build for production (creates .next/standalone)
npm start           # Run production build locally

# Code Quality
npm run lint        # ESLint check
```

## Project Structure

```
neosale-site/
├── src/
│   ├── app/
│   │   ├── (root pages)
│   │   │   ├── page.tsx              # Homepage with all sections
│   │   │   ├── layout.tsx            # Root layout with Header, Footer, WhatsAppFloat
│   │   │   └── robots.ts & sitemap.ts
│   │   ├── contato/                  # Contact page
│   │   ├── politica-de-privacidade/  # Privacy policy page
│   │   └── termos-de-uso/            # Terms of use page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Fixed navigation header with mobile menu
│   │   │   ├── Footer.tsx            # Footer section
│   │   │   ├── ThemeToggle.tsx       # Dark/light mode toggle
│   │   │   └── WhatsAppFloat.tsx     # Floating WhatsApp widget
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Main hero section with CTA
│   │   │   ├── SocialProof.tsx       # Social proof/testimonials
│   │   │   ├── Problems.tsx          # Problem statement section
│   │   │   ├── Solution.tsx          # Solution overview
│   │   │   ├── HowItWorks.tsx        # Step-by-step guide
│   │   │   ├── Benefits.tsx          # Key benefits
│   │   │   ├── Features.tsx          # Feature showcase
│   │   │   ├── Segments.tsx          # Target segments
│   │   │   ├── Pricing.tsx           # Pricing plans
│   │   │   ├── FAQ.tsx               # Frequently asked questions
│   │   │   └── CTA.tsx               # Call to action section
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx            # Button component (variants: primary, secondary, outline, ghost)
│   │       ├── Badge.tsx             # Badge component
│   │       ├── Card.tsx              # Card wrapper
│   │       ├── Accordion.tsx         # Accordion for FAQ
│   │       ├── Container.tsx         # Max-width container
│   │       ├── SectionTitle.tsx      # Section heading component
│   │       └── index.ts              # Re-exports
│   │
│   ├── lib/
│   │   └── utils.ts                  # Utility: cn() for merging class names
│   │
│   ├── styles/
│   │   └── globals.css               # Global styles with Tailwind + theme variables
│   │
│   └── public/
│       └── (static assets - images, favicon, etc.)
│
├── .next/                            # Build output (generated)
├── node_modules/                     # Dependencies
│
├── package.json                      # Project metadata and scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration (standalone output)
├── postcss.config.mjs                # PostCSS configuration (Tailwind)
├── Dockerfile                        # Multi-stage Docker build
└── README.md                         # Project documentation
```

## Architecture Patterns

### Component Structure

Components follow a consistent pattern:
- **UI Components** (`src/components/ui/`): Reusable, styled primitives (Button, Card, Badge, etc.)
- **Section Components** (`src/components/sections/`): Full-width landing page sections
- **Layout Components** (`src/components/layout/`): Header, Footer, navigation

### Styling System

- **Theme Variables:** Defined in `src/styles/globals.css` using CSS custom properties (--color-*, --font-*)
- **Tailwind Configuration:** Uses Tailwind CSS 4 with @theme directive for custom colors
- **Utility Classes:** Custom classes for glassmorphism (`.glass`), gradients (`.gradient-text`, `.gradient-bg`), and animations (`.animate-float`, `.animate-pulse-glow`)
- **Dark Mode:** Hardcoded in `<html lang="pt-BR" className="dark">` (not a toggle) - use `dark:` classes for dark styles

### Layout & Responsive Design

- **Container:** `Container` component sets max-width (defined in `src/components/ui/Container.tsx`)
- **Mobile Menu:** Header has responsive navigation with Framer Motion animations
- **Mobile-First:** Use Tailwind's responsive prefixes (`sm:`, `lg:`, etc.)
- **Font:** Poppins (loaded from Google Fonts in layout.tsx)

### Interactive Elements

- **Animations:** All animated sections use Framer Motion (import from "framer-motion")
- **State Management:** Minimal state - mostly in Header (scroll detection, mobile menu toggle)
- **Event Handlers:** Use standard React event handlers with `"use client"` directive where needed

## TypeScript Configuration

- **Target:** ES2017
- **Strict Mode:** Enabled
- **Path Aliases:** `@/*` resolves to `src/*`
- **Lib Includes:** DOM, ESNext
- **Module Resolution:** Bundler (for Next.js)

## Key Integration Points

### External Links
- **NeoCRM App:** Links point to `https://crm.neosaleai.com.br` (in Header and some CTA buttons)
- **Demo Booking:** Links point to `https://lp.neosaleai.com.br`
- **WhatsApp:** Floating widget links to WhatsApp support

### SEO & Metadata

- **Root Layout Metadata:** Defined in `src/app/layout.tsx` using Next.js `Metadata` API
- **OG Tags:** Configured for social media sharing
- **Robots & Sitemap:** Generated via `robots.ts` and `sitemap.ts`
- **Language:** Page lang is `pt-BR` (Portuguese - Brazil)

### Static Pages

- Contact form page (`/contato`)
- Privacy policy (`/politica-de-privacidade`)
- Terms of use (`/termos-de-uso`)

## Development Tips

### Adding a New Section

1. Create component in `src/components/sections/{NewSection}.tsx`
2. Use "use client" if it has interactivity
3. Import sections in `src/components/sections/index.ts`
4. Add to homepage in `src/app/page.tsx`

### Adding a New UI Component

1. Create in `src/components/ui/{ComponentName}.tsx`
2. Use `forwardRef` if it wraps HTML elements
3. Export type interfaces (e.g., `export type ButtonProps`)
4. Re-export from `src/components/ui/index.ts`
5. Use `cn()` utility for merging class names

### Styling with CSS Variables

Reference theme variables in components:
```tsx
className="bg-primary text-text-light hover:bg-primary-light"
```

All color variables are defined in `globals.css`:
- `--color-primary`, `--color-primary-light`, `--color-primary-dark`
- `--color-bg-light`, `--color-bg-dark`, `--color-bg-card-light`, `--color-bg-card-dark`
- `--color-text-dark`, `--color-text-light`, `--color-text-muted-light`, `--color-text-muted-dark`
- `--color-accent-*` (green, red, yellow)
- `--color-border-*`

### Debugging TypeScript

```bash
npm run build       # Full type checking before deployment
```

## Deployment

### Docker Build

The `Dockerfile` uses a multi-stage build:
1. **base:** Node 20 Alpine
2. **deps:** Install dependencies
3. **builder:** Run `npm run build`
4. **runner:** Production image (non-root user, health checks)

### Environment Variables

**No required environment variables for local development.**

For production, the app is configured for standalone output (`output: "standalone"` in next.config.ts).

### Build Output

- **Standalone Mode:** Creates `.next/standalone/` with bundled app and dependencies
- **Static Assets:** `.next/static/` copied separately
- **Server Startup:** `node server.js` on port 3000

## Git & Monorepo Context

This project is part of the **NeoSale monorepo** - a loosely-coupled collection of 10 independent subprojects. neosale-site is independent and doesn't depend on other local packages (no `file:` references).

Related projects:
- **neosale-ui:** Shared component library (not used by this project directly)
- **neosale-crm:** CRM dashboard (linked from header)
- **neosale-lp-maya:** Interactive landing page with chat
