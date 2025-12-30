export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  stack: string[];
  impact: string;
  metric?: string;
  image: string;
  tags: Array<"ux" | "frontend" | "systems">;
  details: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "teleiosx",
    title: "TeleiosX",
    subtitle: "Riyadh's sim platform, venue management & booking system.",
    role: "Product design + Front-end lead",
    stack: ["Next.js", "MySQL", "Tailwind", "Typescript"],
    impact: "Fully Automated Venue Management system",
    metric: "+38% repeat sessions",
    image: "/images/teleiosx.png",
    tags: ["ux", "frontend", "systems"],
    details: [
      "Problem: manual admin workflows and slow session setup",
      "Approach: CMS for managing cars, tracks, categories, players, bookings, tokens, challenges, and sessions, plus a guided QuickSession flow for rapid setup",
      "Result: staff can manage content and configure sessions in one place; guests can be added and sessions launched with fewer steps",
      "Stack: Laravel (Blade + jQuery), REST endpoints, server‑rendered UI with AJAX helpers",
    ],
    featured: true,
  },
  {
    slug: "hugo-boss-launcher",
    title: "Simulator Session Launcher",
    subtitle: "App for launching Games through any device",
    role: "Interaction design + front-end lead",
    stack: ["Vite", "TypeScript"],
    impact: "Operators spin up synchronized playlists in under ten seconds.",
    metric: "<10s launch",
    image: "/images/launcher.png",
    tags: ["ux", "systems"],
    details: [
      "Problem: backstage staff handled 14 manual steps per runway show",
      "Approach: offline-first Electron launcher with role-based presets",
      "Result: reduced launch errors by 83% across EU showcases",
      "Stack: Vite, Electron, Windows kiosk hardening",
    ],
  },
  {
    slug: "teleiosdome",
    title: "Teleios Dome",
    subtitle: "Dubai's sim platform, venue management & booking system.",
    role: "Product design + Front-end lead",
    stack: ["Next.js", "MySQL", "Tailwind", "Typescript"],
    impact: "Fully Automated Venue Management system",
    metric: "+38% repeat sessions",
    image: "/images/teleiosdome.png",
    tags: ["ux", "frontend", "systems"],
    details: [
      "Problem: Venue lacks a proper management system, bookings are done manually by the receptionists",
      "Approach: shared design tokens + multisite admin powered by feature flags",
      "Result: operators manage venues from one panel with <2 min setup",
      "Stack: Next.js App Router, real-time Supabase, custom shader overlays",
    ],
    featured: true,
  },

  {
    slug: "cms",
    title: "Customer Management System",
    subtitle: "Multi-Simulators Launcher and  System",
    role: "Service design + prototype dev",
    stack: ["Laravel", "NodeJs", "Php"],
    impact: "Mapped incentive flows for regulators and operators",
    image: "/images/cms.png",
    tags: ["ux", "frontend"],
    details: [
      "Problem: regulators needed clarity on tokenized credits",
      "Approach: dual-track flows for policy + field agents",
      "Result: secured pilot approval with transparent audit surfaces",
      "Stack: Next.js, Prisma, Azure Static Web Apps",
    ],
  },
  {
        slug: "ssk",
        title: "Customer Self Serving Kiosk System",
        subtitle: "Locally served self‑booking interface for venue slots",
        role: "Service design + prototype dev",
        stack: ["NodeJs", "Laravel", "PHP"],
        impact: "Reduced front‑desk load by shifting bookings to self‑service",
        image: "/images/kiosk.png",
        tags: ["ux", "frontend", "systems"],
        details: [
            "Problem: reception queues created friction and delayed simulator turnover",
            "Approach: offline‑first kiosk app with 1‑tap seat count, duration, and simulator selection",
            "Result: customers book, pay, confirm, and receive QR tickets without staff intervention",
            "Stack: edge‑served Next.js, native full‑screen kiosk mode, secure local fallback cache",
        ],
  },
];
