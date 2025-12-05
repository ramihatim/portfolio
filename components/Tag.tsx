import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        neutral: "border-[var(--border)] text-[var(--muted)]",
        accent: "border-[var(--accent)] text-[var(--accent)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tagVariants>;

export function Tag({ className, variant, ...props }: TagProps) {
  return <span className={cn(tagVariants({ variant }), className)} {...props} />;
}
