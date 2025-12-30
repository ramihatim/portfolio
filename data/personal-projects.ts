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
        slug: "simsar",
        title: "Simsar",
        subtitle: "AI-powered real estate meta-search across UAE listing sites.",
        role: "Product concept + full-stack prototype",
        stack: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
        impact: "Unified search, deduplication, and ranking for faster property decisions",
        metric: "-70% time-to-shortlist",
        image: "/images/simsar.png",
        tags: ["ux", "frontend", "systems"],
        details: [
            "Problem: buyers and renters waste hours jumping between portals with duplicated and outdated listings",
            "Approach: normalized listing schema + entity resolution (dedupe) + ranking based on preferences and freshness",
            "Result: one search that compares sources, flags duplicates, and explains why a listing is recommended",
            "Stack: Next.js App Router, ingestion pipeline, Postgres + search index, rule-based + ML ranking layer",
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
