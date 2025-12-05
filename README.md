# Rami Hassan — Portfolio

Minimal, production-grade portfolio for Rami Hassan (UI/UX designer & developer). Built with Next.js App Router, TypeScript, Tailwind CSS, next-themes, shadcn-inspired primitives, and Framer Motion.

## Tech stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS (v4) with custom tokens
- next-themes for dark/light persistence
- Framer Motion for micro-interactions
- Reusable components (Button, Tag, Stat, Modal, Tokens Panel, etc.)

## Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).
3. **Lint**
   ```bash
   npm run lint
   ```
4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview production build**
   ```bash
   npm run start
   ```

## Deployment
Deploy to Vercel (recommended) or any Node.js host that supports Next.js 16. Ensure the `public/rami-hassan-cv.pdf` file ships with the build since the header link references it.

## Content updates
- Featured projects live in `data/projects.ts` (shared source of truth for future `/projects/[slug]`).
- Hero stats and contact links reside in `data/site.ts`.
- Reusable UI primitives live inside `components/` and power both the live site and the Components section.

## Accessibility & perf commitments
- Skip-to-content link, focus-visible rings, WCAG AA contrast.
- Theme toggle respects system preferences and persists.
- Motion reduced automatically for users preferring reduced motion.
- All images use `next/image` with intrinsic sizes to avoid layout shift.
