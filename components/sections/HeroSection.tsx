"use client";
import { Button } from "@/components/Button";
import { PsychedelicField } from "@/components/PsychedelicField";
import { Stat } from "@/components/Stat";
import type { StatProps } from "@/components/Stat";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type HeroSectionProps = {
  stats: StatProps[];
};

export function HeroSection({ stats }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.92, 0.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.96, 0.5]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-svh w-full overflow-hidden"
    >
      <PsychedelicField />

      {/* Inner layout: full-height flex row */}
      <div className="flex w-full flex-col lg:flex-row lg:items-stretch">
        <motion.div
          className="relative z-10 flex shrink-0 flex-col items-center justify-center px-6 pb-4 pt-10 text-center sm:px-10 lg:flex-1 lg:items-start lg:pl-16 lg:pr-10 lg:py-20 lg:text-left"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: textY,
                  opacity: textOpacity,
                }
          }
        >
          <h1 className="relative mt-5 font-semibold leading-[1.02] tracking-[-0.06em] text-[clamp(2.8rem,4vw+1rem,4.4rem)]">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 select-none opacity-80 blur-[1px] mix-blend-screen [text-shadow:0.07em_0_0_#ff0040,-0.07em_0_0_#00f2ff]"
            >
              Hi, I&apos;m Rami
            </span>
            <span className="relative">Hi, I&apos;m Rami</span>
          </h1>

          <p className="mt-5 max-w-lg text-[0.9rem] leading-relaxed text-[var(--fg)] opacity-90 sm:text-[0.98rem]">
            I design &amp; develop products shaping interfaces, systems, and digital
            experiences based in Dubai. I translate ideas into refined interaction models,
            design foundations, and performant builds bridging visual direction, UX, and
            engineering execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#work">
              <Button variant="subtle" size="lg">View work</Button>
            </a>
            <a href="#contact">
              <Button variant="subtle" size="lg">Contact</Button>
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        {/* Photo: fills remaining height on mobile, bleeds to edges on desktop */}
        <div className="relative z-10 flex min-h-0 flex-1 items-stretch justify-center lg:flex-none lg:flex-shrink-0 lg:items-end lg:justify-end lg:p-0">
          {/* Static 3D glow */}
          <div aria-hidden className="pointer-events-none absolute -inset-20">
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#ff0040",
                opacity: 0.45,
                filter: "blur(90px)",
                transform: "translateX(-56px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#00f2ff",
                opacity: 0.4,
                filter: "blur(90px)",
                transform: "translateX(56px)",
              }}
            />
          </div>

          <motion.div
            className="relative w-full overflow-hidden rounded-t-3xl rounded-b-none lg:h-full lg:w-auto lg:rounded-none lg:rounded-tl-3xl"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    y: imageY,
                    opacity: imageOpacity,
                  }
            }
          >
            <Image
              src="/rami-chair.webp"
              alt="Rami Hassan"
              width={460}
              height={720}
              className="h-full w-full object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
