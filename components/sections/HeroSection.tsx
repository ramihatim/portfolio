"use client";
import { Button } from "@/components/Button";
import { PsychedelicField } from "@/components/PsychedelicField";
import { Stat, type StatProps } from "@/components/Stat";
import { motion, useReducedMotion } from "framer-motion";

type HeroSectionProps = {
  stats: StatProps[];
};

export function HeroSection({ stats }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[80vh] w-full max-w-screen-xl flex-col items-start justify-center gap-12 overflow-hidden px-4 py-20 sm:px-6 lg:flex-row lg:items-center"
    >
      <PsychedelicField />

      <motion.div
        initial={
          prefersReducedMotion
            ? undefined
            : { opacity: 0, y: 32 }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative max-w-xl"
      >
        <p className="text-[0.68rem] font-mono uppercase tracking-[0.35em] text-[var(--muted)]/80">
          portfolio
        </p>

        <h1 className="relative mt-6 font-semibold leading-[1.02] tracking-[-0.06em] text-[clamp(3.2rem,5vw+1.2rem,4.8rem)] sm:text-[clamp(3.8rem,6vw+1.2rem,5.6rem)]">
          <span className="relative block">
            <span
              aria-hidden
              className="relative pointer-events-none absolute inset-0 select-none opacity-80 blur-[1.0px] mix-blend-screen text-[clamp(3.6rem,6vw+1.4rem,5.8rem)] sm:text-[clamp(4.2rem,6.8vw+1.4rem,6.4rem)] [text-shadow:0.08em_0_0_#ff0040,-0.08em_0_0_#00f2ff]"
            >
              Hi, I am Rami
              <br />
            </span>
            {/* main readable layer */}
            {/*<span className="relative">*/}
            {/*  interface architect ·*/}
            {/*  <br className="hidden sm:block" />*/}
            {/*  permanent beta*/}
            {/*</span>*/}
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-[0.9rem] leading-relaxed text-[var(--fg)] opacity-90 sm:text-[0.98rem]">
          I design & develop products shaping interfaces, systems, and digital
          experiences based in Dubai. I translate ideas into refined
          interaction models, design foundations, and performant builds bridging visual
          direction, UX, and engineering execution.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--muted)]/80 " >
          {[
            "ui direction",
            "design systems",
            "user experiences",
          ].map((tag) => (
            <span
              key={tag}

              className="rounded-full border text-white border-[color:rgba(255,255,255,0.14)] bg-[color:rgba(6,6,16,0.94)] px-3 py-1 shadow-[0_0_22px_rgba(0,0,0,0.6)] backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4" >
          <a href="#work">
            <Button variant="subtle" size="lg">View work</Button>
          </a>
          <a href="#contact">
            <Button variant="subtle" size="lg">
              Contact
            </Button>
          </a>


        </div>
      </motion.div>

      <motion.div
        className="relative isolate mt-6 w-full max-w-md self-stretch sm:max-w-sm lg:mt-0 lg:ml-auto"
        initial={
          prefersReducedMotion
            ? undefined
            : { opacity: 0, y: 40 }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: 1, y: 0 }
        }
        transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }}
      >
        {/* floating anaglyph frame */}
        <div className="pointer-events-none absolute -inset-10 -z-[1] rotate-3 opacity-80 blur-3xl mix-blend-screen [background:conic-gradient(from_210deg_at_50%_50%,rgba(255,0,64,0.9),rgba(0,242,255,0.8),rgba(255,0,64,0.9))]" />

        {/*<div className="relative z-10 grid items-stretch gap-3 sm:grid-cols-3">*/}
        {/*  {stats.map((stat, index) => (*/}
        {/*    <motion.div*/}
        {/*      key={stat.label}*/}
        {/*      className="group relative isolate overflow-hidden rounded-2xl border border-[color:rgba(255,255,255,0.1)] bg-[radial-gradient(circle_at_top,_rgba(255,0,64,0.25),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,242,255,0.24),transparent_60%)] p-3 backdrop-blur"*/}
        {/*      style={{*/}
        {/*        transformOrigin: index % 2 === 0 ? "left center" : "right center",*/}
        {/*      }}*/}
        {/*      initial={*/}
        {/*        prefersReducedMotion*/}
        {/*          ? undefined*/}
        {/*          : { opacity: 0, y: 24, rotateX: -14 }*/}
        {/*      }*/}
        {/*      animate={*/}
        {/*        prefersReducedMotion*/}
        {/*          ? undefined*/}
        {/*          : { opacity: 1, y: 0, rotateX: 0 }*/}
        {/*      }*/}
        {/*      transition={{ delay: 0.18 + index * 0.04, duration: 0.45, ease: "easeOut" }}*/}
        {/*    >*/}
        {/*      <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition group-hover:opacity-100 [background:linear-gradient(120deg,#ff0040,transparent_40%,#00f2ff)]" />*/}
        {/*      <div className="relative">*/}
        {/*        <Stat {...stat} />*/}
        {/*      </div>*/}
        {/*    </motion.div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </motion.div>
    </section>
  );
}
