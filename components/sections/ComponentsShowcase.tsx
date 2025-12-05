import { Button } from "@/components/Button";
import { Stat } from "@/components/Stat";
import { Tag } from "@/components/Tag";
import { TimelineItem } from "@/components/TimelineItem";
import { TokensPanel } from "@/components/TokensPanel";

export function ComponentsShowcase() {
  return (
    <section id="components" className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">Components</p>
        <h2 className="section-heading">Mini design system, production backed.</h2>
        <p className="section-description">
          These are the primitives I reach for when building fast and keeping polish high. Each example includes the
          intended usage and edge cases covered by default states, focus styles, and theming.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="primary" isLoading disabled>
              Loading
            </Button>
          </div>
          <p className="text-sm text-[var(--muted)]">
            Primary handles commit actions, ghost is for surface-level toggles, and subtle is safe for secondary CTAs. All
            states ship with focus rings and disabled handling.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Tags & badges</h3>
          <div className="flex flex-wrap gap-2">
            <Tag>Neutral</Tag>
            <Tag variant="accent">Accent</Tag>
          </div>
          <p className="text-sm text-[var(--muted)]">
            Used for filters and metadata. Accent variant doubles as a status badge with guaranteed contrast.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Cards</h3>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-[var(--border)] p-4 shadow-sm">
              Default surface with consistent padding.
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              Hover elevation + motion.
            </div>
            <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
              <div className="h-20 bg-gradient-to-r from-sky-300/40 to-indigo-400/50" />
              <div className="p-4">Media-first card for galleries.</div>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)]">Two elevation levels keep depth manageable and readable.</p>
        </div>

        <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
          <h3 className="text-lg font-semibold">Stats & timeline</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Stat label="Activation" value="73%" />
            <TimelineItem title="Pilots" period="2022—Now" description="Paired research with delivery for fintech, infra, and retail ops." />
          </div>
          <p className="text-sm text-[var(--muted)]">Stats lock in metric structure, timeline blocks capture context + links.</p>
        </div>

        <div className="lg:col-span-2">
          <TokensPanel />
        </div>
      </div>
    </section>
  );
}
