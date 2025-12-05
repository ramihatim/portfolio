"use client";

export function PsychedelicField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -inset-x-32 -top-32 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,0,64,0.38),transparent_60%)]" />
      <div className="absolute -inset-x-24 bottom-[-10rem] h-80 bg-[radial-gradient(circle_at_bottom,_rgba(0,242,255,0.35),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.34] [background-image:repeating-linear-gradient(120deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_6px)]" />
    </div>
  );
}
