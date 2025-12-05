export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">About</p>
          <h2 className="section-heading">From Dubai to Sudan, balancing clarity with craft.</h2>
          <p>
            I grew up between Dubai and Khartoum, splitting time between racing sims and sketching interfaces. That mix of
            hardware tinkering and interface obsession pushes me toward products that feel inevitable.
          </p>
          <p>
            My process moves from research → prototypes → shippable systems. I pair product discovery with strong front-end
            engineering so the same person driving the narrative can also polish the final frame.
          </p>
          <p>
            Tool stack: Figma for exploration, React/Next + TypeScript + Tailwind for builds, Framer Motion for nuance, and
            a reliable analytics stack to validate decisions.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Principles</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <strong>Clarity.</strong> Every screen communicates why it exists and what happens next.
            </li>
            <li>
              <strong>Speed.</strong> Ship learnings quickly with components that handle the edge cases.
            </li>
            <li>
              <strong>Craft.</strong> Typography, rhythm, and micro-interactions are deliberate, not ornamental.
            </li>
            <li>
              <strong>Measurable impact.</strong> Define success upfront—conversion, time saved, or reliability.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
