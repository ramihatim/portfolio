"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/Button";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function Modal({ open, onClose, title, description, children, footer }: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = React.useRef<Element | null>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  const getFocusableElements = React.useCallback(() => {
    if (!modalRef.current) return [] as HTMLElement[];
    const selectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    return Array.from(modalRef.current.querySelectorAll<HTMLElement>(selectors)).filter(
      (el) => !el.hasAttribute("data-focus-guard")
    );
  }, []);

  const trapFocus = React.useCallback(
    (event: KeyboardEvent) => {
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    },
    [getFocusableElements]
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    previouslyFocusedElement.current = document.activeElement;
    const focusable = getFocusableElements();
    focusable[0]?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "Tab") {
        trapFocus(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocusedElement.current instanceof HTMLElement) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [getFocusableElements, open, onClose, trapFocus]);

  if (!open || !mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold" id={titleId}>
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm text-[var(--muted)]" id={descriptionId}>
                {description}
              </p>
            )}
          </div>
          <Button variant="ghost" size="sm" aria-label="Close modal" onClick={onClose}>
            Close
          </Button>
        </div>
        <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}
