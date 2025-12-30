export type PersonalProjects = {
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

export const personalProjects: PersonalProjects[] = [
    {
        slug: "uaepay",
        title: "UAE Pay",
        subtitle: "Riyadh's sim platform, venue management & booking system.",
        role: "Product design + Front-end lead",
        stack: ["Next.js", "MySQL", "Tailwind", "Typescript"],
        impact: "Fully Automated Venue Management system",
        image: "/images/loop.png",
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
        slug: "hugo-boss-launcher",
        title: "Simulator Session Launcher",
        subtitle: "App for launching Games through any device",
        role: "Interaction design + front-end lead",
        stack: ["Vite", "TypeScript"],

        impact: "Operators spin up synchronized playlists in under ten seconds.",
        image: "/images/hugo-boss.svg",
        tags: ["ux", "systems"],
        details: [
            "Problem: backstage staff handled 14 manual steps per runway show",
            "Approach: offline-first Electron launcher with role-based presets",
            "Result: reduced launch errors by 83% across EU showcases",
            "Stack: Vite, Electron, Windows kiosk hardening",
        ],
    },
    {
        slug: "locanda",
        title: "Locanda",
        subtitle: "Property-management SaaS for boutique hotels",
        role: "Product strategy + design system",
        stack: ["Next.js", "GraphQL", "Postgres"],
        impact: "Faster onboarding with guided flows and shared inventory",
        metric: "-40% setup time",
        image: "/images/laconda.png",
        tags: ["ux", "frontend"],
        details: [
            "Problem: each property launched with bespoke templates and debt",
            "Approach: component library with policy-aware templates and audit logs",
            "Result: revenue ops onboarded properties in days instead of weeks",
            "Stack: Next.js, Hasura GraphQL, background jobs for accounting",
        ],
    },
    {
        slug: "qee",
        title: "Quantum Exposure Engine",
        subtitle: "Dashboard guiding enterprises on quantum readiness",
        role: "Design ops + visualization",
        stack: ["Remix", "D3", "Tailwind"],
        impact: "Surface exposure scenarios for CTO briefings",
        image: "/images/qee.svg",
        tags: ["ux", "systems"],
        details: [
            "Problem: executives could not interpret exposure scoring",
            "Approach: narrative-first flows with double-entry assumptions",
            "Result: board-ready dossiers generated in minutes",
            "Stack: Remix, D3.js visualizations, MDX knowledge base",
        ],
    },
    {
        slug: "eac",
        title: "Energy-as-a-Coin Pilot",
        subtitle: "UX for energy credit models",
        role: "Service design + prototype dev",
        stack: ["Next.js", "Prisma", "Azure"],
        impact: "Mapped incentive flows for regulators and operators",
        image: "/images/eac.svg",
        tags: ["ux", "frontend"],
        details: [
            "Problem: regulators needed clarity on tokenized credits",
            "Approach: dual-track flows for policy + field agents",
            "Result: secured pilot approval with transparent audit surfaces",
            "Stack: Next.js, Prisma, Azure Static Web Apps",
        ],
    },
];
