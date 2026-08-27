"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/portfolio";

const muted = (pct: number) => `color-mix(in srgb, var(--color-text) ${pct}%, transparent)`;
const kicker: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: muted(50),
};

const PAGE_SIZE = 3;

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const goTo = (next: number) => setPage(((next % totalPages) + totalPages) % totalPages);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className="projects-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}
      >
        {visible.map((p) => (
          <div
            key={p.id}
            onClick={() => setOpen(p)}
            className="card-lift"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-sm)",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", ...kicker }}>
              <span>{p.period}</span>
              <span style={{ width: 12, height: 1, background: "var(--color-divider)" }} />
              <span>{p.kind}</span>
            </div>
            <h3 style={{ margin: 0, fontSize: 21, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.name}</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: muted(72) }}>{p.short}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "var(--space-2)" }}>
              {p.stack.map((s) => (
                <span key={s} className="tag tag-accent" style={{ fontSize: 10.5 }}>
                  {s}
                </span>
              ))}
            </div>
            <span style={{ marginTop: "var(--space-3)", fontSize: 12.5, color: "var(--color-accent-400)" }}>
              Xem chi tiết →
            </span>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-4)",
            marginTop: "var(--space-6)",
          }}
        >
          <button
            onClick={() => goTo(page - 1)}
            className="btn btn-ghost"
            aria-label="Dự án trước"
            style={{ borderColor: "var(--color-divider)", padding: "var(--space-2) var(--space-4)" }}
          >
            ←
          </button>
          <div style={{ display: "flex", gap: 6 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Trang ${i + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: i === page ? "var(--color-accent-400)" : "var(--color-divider)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(page + 1)}
            className="btn btn-ghost"
            aria-label="Dự án tiếp theo"
            style={{ borderColor: "var(--color-divider)", padding: "var(--space-2) var(--space-4)" }}
          >
            →
          </button>
        </div>
      )}

      {open && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(16px, 4vw, 48px)",
            background: "rgba(0, 0, 0, 0.62)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(720px, 100%)",
              maxHeight: "86vh",
              overflowY: "auto",
              padding: "clamp(24px, 3vw, 40px)",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-6)" }}>
              <div>
                <div style={kicker}>
                  {open.period} · {open.kind}
                </div>
                <h3 style={{ margin: "var(--space-3) 0 0", fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 500, letterSpacing: "-0.025em" }}>
                  {open.name}
                </h3>
                <div style={{ marginTop: 4, fontSize: 14, color: muted(60) }}>{open.company}</div>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="btn btn-ghost"
                style={{ borderColor: "var(--color-divider)", padding: "var(--space-2) var(--space-4)" }}
              >
                Đóng
              </button>
            </div>
            <p style={{ margin: "var(--space-8) 0 0", fontSize: 15, lineHeight: 1.75, color: muted(78) }}>{open.detail}</p>
            <div style={{ marginTop: "var(--space-8)" }}>
              <div style={{ ...kicker, marginBottom: "var(--space-3)" }}>Việc tôi làm</div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.8, color: muted(76) }}>
                {open.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: "var(--space-8)",
                paddingTop: "var(--space-6)",
                borderTop: "1px solid var(--color-divider)",
              }}
            >
              {open.stack.map((s) => (
                <span key={s} className="tag tag-accent" style={{ fontSize: 10.5 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
