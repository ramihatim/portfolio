export type TimelineItemProps = {
  title: string;
  period: string;
  description: string;
};

export function TimelineItem({ title, period, description }: TimelineItemProps) {
  return (
    <div className="space-y-1 rounded-2xl border border-[var(--border)] p-4">
      <div className="flex items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <span>{period}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
      </div>
      <p className="text-base font-semibold">{title}</p>
      <p className="text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}
