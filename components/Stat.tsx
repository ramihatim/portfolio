export type StatProps = {
  label: string;
  value: string;
  suffix?: string;
};

export function Stat({ label, value, suffix }: StatProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)]/95 p-4 text-center">
      <p className="text-3xl font-semibold leading-tight">
        {value}
        {suffix && <span className="text-base text-[var(--muted)]">{suffix}</span>}
      </p>
      <p className="mt-3 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)] leading-[1.3]">
        {label}
      </p>
    </div>
  );
}
