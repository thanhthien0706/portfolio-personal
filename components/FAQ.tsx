"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const muted = (pct: number) => `color-mix(in srgb, var(--color-text) ${pct}%, transparent)`;

export default function FAQ() {
  const { t } = useLanguage();
  const { faqs } = t;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ borderTop: "1px solid var(--color-divider)" }}>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderBottom: "1px solid var(--color-divider)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="faq-trigger"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-6)",
                width: "100%",
                padding: "var(--space-6) 2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: "var(--color-text)",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(15.5px, 1.3vw, 18px)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {item.q}
              <span
                aria-hidden
                style={{
                  flex: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "1px solid var(--color-divider)",
                  fontSize: 14,
                  color: isOpen ? "var(--color-accent-400)" : muted(55),
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.25s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0 0 var(--space-6)",
                    maxWidth: "62ch",
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: muted(72),
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
