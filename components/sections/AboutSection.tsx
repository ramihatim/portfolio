export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">About</p>
          <h2 className="section-heading">Dubai-based Designer, Product Owner, and Developer from Sudan.</h2>
          <p>
            I’m Rami. I design and build digital products—from early concept to production. I focus on clear UI, fast delivery,
            and maintainable code.
          </p>
          <p>
            I work hands-on across discovery, design, and implementation: define the problem, map flows, prototype quickly,
            then ship and iterate. I’m comfortable owning UI systems and integrating APIs, authentication, and data.
          </p>
          <p>
            Tooling: Figma, React/Next.js, TypeScript, Tailwind, and Framer Motion—plus whatever services are needed to
            deliver a reliable product.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Principles</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <strong>Clarity.</strong> Make interfaces self-explanatory and consistent.
            </li>
            <li>
              <strong>Speed.</strong> Ship iteratively with tight feedback loops.
            </li>
            <li>
              <strong>Craft.</strong> Polish details that improve usability and performance.
            </li>
            <li>
              <strong>Impact.</strong> Prioritize outcomes: reliability, speed, and time saved.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
