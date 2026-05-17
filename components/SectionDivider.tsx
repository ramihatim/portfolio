"use client";
import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ─────────────────────────────────────────────
// 1. GLITCH BARS  (after Hero)
// ─────────────────────────────────────────────
const BARS = [
  { top: "8%",  w: "78%", l: "4%",  h: 7,  d: 0.00, o: 0.70 },
  { top: "22%", w: "48%", l: "42%", h: 3,  d: 0.07, o: 0.45 },
  { top: "36%", w: "94%", l: "0%",  h: 11, d: 0.03, o: 0.80 },
  { top: "50%", w: "62%", l: "22%", h: 5,  d: 0.10, o: 0.55 },
  { top: "63%", w: "33%", l: "58%", h: 3,  d: 0.15, o: 0.40 },
  { top: "76%", w: "82%", l: "8%",  h: 8,  d: 0.05, o: 0.68 },
];

function useRangeTransform(
  progress: MotionValue<number>,
  input: [number, number],
  output: [number, number],
) {
  return useTransform(progress, input, output);
}

function GlitchBar({
  bar,
  progress,
  prefersReducedMotion,
}: {
  bar: typeof BARS[number];
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const end = Math.min(bar.d + 0.22, 1);
  const scaleX = useRangeTransform(progress, [bar.d, end], [0, 1]);
  const opacity = useRangeTransform(progress, [bar.d, end], [0, bar.o]);

  return (
    <motion.div
      style={
        prefersReducedMotion
          ? { position: "absolute", top: bar.top, left: bar.l, width: bar.w, height: bar.h, opacity: bar.o }
          : {
              position: "absolute",
              top: bar.top,
              left: bar.l,
              width: bar.w,
              height: bar.h,
              scaleX,
              opacity,
            }
      }
      className="origin-left"
    >
      <div style={{ position:"absolute", inset:0, left:"-5px", background:"#ff0040", opacity:0.8, filter:"blur(1px)" }} />
      <div style={{ position:"absolute", inset:0, background:"rgba(255,255,255,0.55)" }} />
      <div style={{ position:"absolute", inset:0, left:"5px", background:"#00f2ff", opacity:0.75, filter:"blur(1px)" }} />
    </motion.div>
  );
}

export function GlitchDivider() {
  const ref = useRef(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 110 }}>
      {/* bars */}
      {BARS.map((b, i) => (
        <GlitchBar key={i} bar={b} progress={scrollYProgress} prefersReducedMotion={prefersReducedMotion} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// 2. CHEVRON  (after Work)
// ─────────────────────────────────────────────
const CV  = "M0,10 L720,110 L1440,10";
const CVR = "M0,4  L720,104 L1440,4";
const CVC = "M0,16 L720,116 L1440,16";

export function ChevronDivider() {
  const ref = useRef(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const redGlowLength = useRangeTransform(scrollYProgress, [0.05, 0.34], [0, 1]);
  const redGlowOpacity = useRangeTransform(scrollYProgress, [0.05, 0.34], [0, 0.55]);
  const redLineOpacity = useRangeTransform(scrollYProgress, [0.05, 0.34], [0, 0.9]);
  const cyanGlowLength = useRangeTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const cyanGlowOpacity = useRangeTransform(scrollYProgress, [0.1, 0.4], [0, 0.5]);
  const cyanLineOpacity = useRangeTransform(scrollYProgress, [0.1, 0.4], [0, 0.9]);
  const whiteGlowLength = useRangeTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const whiteGlowOpacity = useRangeTransform(scrollYProgress, [0, 0.3], [0, 0.65]);
  const whiteLineOpacity = useRangeTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const diamondOpacity = useRangeTransform(scrollYProgress, [0.3, 0.42], [0, 1]);
  const diamondScale = useRangeTransform(scrollYProgress, [0.3, 0.42], [0, 1]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 130 }}>
      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 1440 130" preserveAspectRatio="none">
        <defs>
          <filter id="cv-gr" x="-5%" y="-100%" width="110%" height="400%">
            <feGaussianBlur stdDeviation="4"/>
          </filter>
          <filter id="cv-gc" x="-5%" y="-100%" width="110%" height="400%">
            <feGaussianBlur stdDeviation="4"/>
          </filter>
          <filter id="cv-gw" x="-5%" y="-100%" width="110%" height="400%">
            <feGaussianBlur stdDeviation="2.5"/>
          </filter>
        </defs>

        {/* red glow */}
        <motion.path d={CVR} stroke="#ff0040" strokeWidth="6" fill="none" filter="url(#cv-gr)" style={prefersReducedMotion ? { opacity: 0.55 } : { pathLength: redGlowLength, opacity: redGlowOpacity }} />
        <motion.path d={CVR} stroke="#ff0040" strokeWidth="1.5" fill="none" style={prefersReducedMotion ? { opacity: 0.9 } : { pathLength: redGlowLength, opacity: redLineOpacity }} />

        {/* cyan glow */}
        <motion.path d={CVC} stroke="#00f2ff" strokeWidth="6" fill="none" filter="url(#cv-gc)" style={prefersReducedMotion ? { opacity: 0.5 } : { pathLength: cyanGlowLength, opacity: cyanGlowOpacity }} />
        <motion.path d={CVC} stroke="#00f2ff" strokeWidth="1.5" fill="none" style={prefersReducedMotion ? { opacity: 0.9 } : { pathLength: cyanGlowLength, opacity: cyanLineOpacity }} />

        {/* white center glow */}
        <motion.path d={CV} stroke="rgba(255,255,255,0.95)" strokeWidth="5" fill="none" filter="url(#cv-gw)" style={prefersReducedMotion ? { opacity: 0.65 } : { pathLength: whiteGlowLength, opacity: whiteGlowOpacity }} />
        <motion.path d={CV} stroke="white" strokeWidth="1" fill="none" style={prefersReducedMotion ? { opacity: 1 } : { pathLength: whiteGlowLength, opacity: whiteLineOpacity }} />

        {/* center diamond at the tip */}
        <motion.polygon
          points="720,104 727,111 720,118 713,111"
          fill="white"
          style={{
            opacity: prefersReducedMotion ? 1 : diamondOpacity,
            scale: prefersReducedMotion ? 1 : diamondScale,
            transformOrigin: "720px 111px",
            filter:"drop-shadow(0 0 6px white) drop-shadow(-4px 0 6px #ff0040) drop-shadow(4px 0 6px #00f2ff)"
          }}
        />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. SCAN BAND  (after Personal)
// ─────────────────────────────────────────────
const COLS = 18;
const ROWS = 4;
const dots = Array.from({ length: COLS * ROWS }, (_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
}));

function dotColor(col: number) {
  const t = col / (COLS - 1); // 0 → 1
  if (t < 0.5) {
    // red → white
    const s = t * 2;
    const r = 255;
    const g = Math.round(s * 255);
    const b = Math.round(s * 255);
    return `rgb(${r},${g},${b})`;
  } else {
    // white → cyan
    const s = (t - 0.5) * 2;
    const r = Math.round((1 - s) * 255);
    const g = 255;
    const b = 255;
    return `rgb(${r},${g},${b})`;
  }
}

function ScanDot({
  col,
  row,
  progress,
  prefersReducedMotion,
}: {
  col: number;
  row: number;
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const start = col * 0.025 + row * 0.02;
  const end = Math.min(start + 0.18, 1);
  const opacity = useRangeTransform(progress, [start, end], [0, 0.65]);
  const scale = useRangeTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      className="mx-auto h-1 w-1 rounded-full"
      style={
        prefersReducedMotion
          ? { background: dotColor(col), opacity: 0.65, scale: 1 }
          : { background: dotColor(col), opacity, scale }
      }
    />
  );
}

export function ScanBandDivider() {
  const ref = useRef(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="relative w-full overflow-hidden py-6">
      <div className="mx-auto grid max-w-screen-xl gap-x-0 gap-y-3 px-4 sm:px-6"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {dots.map(({ col, row }, i) => (
          <ScanDot key={i} col={col} row={row} progress={scrollYProgress} prefersReducedMotion={prefersReducedMotion} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 4. WAVE  (above Contact — keep as requested)
// ─────────────────────────────────────────────
const W  = "M0,90 C200,40 400,140 600,90 C800,40 1000,140 1200,90 C1300,65 1380,105 1440,90";
const WR = "M0,83 C200,33 400,133 600,83 C800,33 1000,133 1200,83 C1300,58 1380,98  1440,83";
const WC = "M0,97 C200,47 400,147 600,97 C800,47 1000,147 1200,97 C1300,72 1380,112 1440,97";

function WaveTick({
  x,
  y,
  index,
  progress,
  prefersReducedMotion,
}: {
  x: number;
  y: number;
  index: number;
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}) {
  const start = 0.34 + index * 0.02;
  const end = 0.5 + index * 0.02;
  const opacity = useRangeTransform(progress, [start, end], [0, 0.5]);
  const scaleY = useRangeTransform(progress, [start, end], [0, 1]);

  return (
    <motion.line
      x1={x}
      y1={y - 8}
      x2={x}
      y2={y + 8}
      stroke="white"
      strokeWidth="1"
      style={{
        opacity: prefersReducedMotion ? 0.5 : opacity,
        scaleY: prefersReducedMotion ? 1 : scaleY,
        transformOrigin: `${x}px ${y}px`,
      }}
    />
  );
}

export function WaveDivider() {
  const ref = useRef(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const redGlowLength = useRangeTransform(scrollYProgress, [0.06, 0.42], [0, 1]);
  const redGlowOpacity = useRangeTransform(scrollYProgress, [0.06, 0.42], [0, 0.6]);
  const redLineOpacity = useRangeTransform(scrollYProgress, [0.06, 0.42], [0, 0.9]);
  const cyanGlowLength = useRangeTransform(scrollYProgress, [0.1, 0.46], [0, 1]);
  const cyanGlowOpacity = useRangeTransform(scrollYProgress, [0.1, 0.46], [0, 0.55]);
  const cyanLineOpacity = useRangeTransform(scrollYProgress, [0.1, 0.46], [0, 0.9]);
  const whiteGlowLength = useRangeTransform(scrollYProgress, [0, 0.36], [0, 1]);
  const whiteGlowOpacity = useRangeTransform(scrollYProgress, [0, 0.36], [0, 0.7]);
  const whiteLineOpacity = useRangeTransform(scrollYProgress, [0, 0.36], [0, 1]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 160 }}>
      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <defs>
          <filter id="wd-gr" x="-10%" y="-200%" width="120%" height="500%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="wd-gc" x="-10%" y="-200%" width="120%" height="500%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="wd-gw" x="-10%" y="-200%" width="120%" height="500%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <motion.path d={WR} stroke="#ff0040" strokeWidth="5" fill="none" filter="url(#wd-gr)" style={prefersReducedMotion ? { opacity: 0.6 } : { pathLength: redGlowLength, opacity: redGlowOpacity }} />
        <motion.path d={WR} stroke="#ff0040" strokeWidth="1.5" fill="none" style={prefersReducedMotion ? { opacity: 0.9 } : { pathLength: redGlowLength, opacity: redLineOpacity }} />
        <motion.path d={WC} stroke="#00f2ff" strokeWidth="5" fill="none" filter="url(#wd-gc)" style={prefersReducedMotion ? { opacity: 0.55 } : { pathLength: cyanGlowLength, opacity: cyanGlowOpacity }} />
        <motion.path d={WC} stroke="#00f2ff" strokeWidth="1.5" fill="none" style={prefersReducedMotion ? { opacity: 0.9 } : { pathLength: cyanGlowLength, opacity: cyanLineOpacity }} />
        <motion.path d={W} stroke="rgba(255,255,255,0.95)" strokeWidth="4" fill="none" filter="url(#wd-gw)" style={prefersReducedMotion ? { opacity: 0.7 } : { pathLength: whiteGlowLength, opacity: whiteGlowOpacity }} />
        <motion.path d={W} stroke="white" strokeWidth="1" fill="none" style={prefersReducedMotion ? { opacity: 1 } : { pathLength: whiteGlowLength, opacity: whiteLineOpacity }} />
        {[{x:0,y:90},{x:360,y:40},{x:600,y:90},{x:840,y:140},{x:1080,y:90},{x:1260,y:65},{x:1440,y:90}].map(({x,y},i) => (
          <WaveTick key={i} x={x} y={y} index={i} progress={scrollYProgress} prefersReducedMotion={prefersReducedMotion} />
        ))}
      </svg>
    </div>
  );
}
