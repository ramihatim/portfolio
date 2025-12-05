"use client";

import * as React from "react";

const colorTokens = [
  { name: "Background", token: "--bg" },
  { name: "Foreground", token: "--fg" },
  { name: "Muted", token: "--muted" },
  { name: "Border", token: "--border" },
  { name: "Accent", token: "--accent" },
];

const typeTokens = [
  { name: "Display", token: "--font-display" },
  { name: "XL", token: "--font-xl" },
  { name: "LG", token: "--font-lg" },
  { name: "Base", token: "--font-base" },
  { name: "SM", token: "--font-sm" },
];

export function TokensPanel() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const handleCopy = async (token: string) => {
    try {
      if (!navigator?.clipboard) {
        return;
      }
      await navigator.clipboard.writeText(`var(${token})`);
      setCopiedToken(token);
      window.setTimeout(() => setCopiedToken(null), 2000);
    } catch (error) {
      console.error("Unable to copy token", error);
    }
  };

  return (
    <div className="space-y-6 rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6">
      <div>
        <p className="text-sm font-semibold text-[var(--muted)]">Color tokens</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {colorTokens.map((token) => (
            <button
              key={token.token}
              type="button"
              onClick={() => handleCopy(token.token)}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-3 text-left transition hover:border-[var(--accent)]"
              aria-live="polite"
            >
              <span className="flex items-center gap-3">
                <span
                  className="h-8 w-8 rounded-full border border-[var(--border)]"
                  style={{ backgroundColor: `var(${token.token})` }}
                  aria-hidden
                />
                <span>
                  <p className="text-sm font-medium">{token.name}</p>
                  <p className="text-xs text-[var(--muted)]">{token.token}</p>
                </span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                {copiedToken === token.token ? "Copied" : "Copy"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-[var(--muted)]">Type scale</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {typeTokens.map((token) => (
            <div key={token.token} className="rounded-2xl border border-[var(--border)] p-4">
              <p className="text-sm font-semibold">{token.name}</p>
              <p className="text-xs text-[var(--muted)]">{token.token}</p>
              <p className="mt-3" style={{ fontSize: `var(${token.token})` }}>
                Aa
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm text-[var(--muted)]">
        Need a token elsewhere? Copy it with one tap or reference via <code>var(--token-name)</code> in CSS and tailwind inline
        styles.
      </div>
    </div>
  );
}
