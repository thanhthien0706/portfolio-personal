"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";

const muted = (pct: number) => `color-mix(in srgb, var(--color-text) ${pct}%, transparent)`;

export default function Sidebar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [active, setActive] = useState("");

  useEffect(() => {
    const saved = (localStorage.getItem("ntt-theme") as "dark" | "light" | null) || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);

    const onScroll = () => {
      let current = "";
      nav.forEach((n) => {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 140) current = n.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("ntt-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <aside
      id="side"
      style={{
        position: "sticky",
        top: 0,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        padding: "clamp(20px, 2.4vw, 34px) clamp(18px, 2vw, 28px)",
        borderRight: "1px solid var(--color-divider)",
        background: "color-mix(in srgb, var(--color-bg) 92%, var(--color-surface))",
        zIndex: 20,
      }}
    >
      <div>
        <a href="#hero" style={{ display: "block", color: "var(--color-text)", textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                flex: "none",
                border: "1.5px solid var(--color-accent)",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-heading)",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.06em",
                color: "var(--color-accent)",
              }}
            >
              NT
            </span>
            <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: muted(50) }}>
              {profile.city}
              <br />
              {profile.born}
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Nguyễn<br />Thanh Thiện
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: muted(62) }}>
            {profile.role} · {profile.years}
          </div>
        </a>

        <nav style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: "var(--space-8)" }}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "7px 9px",
                borderRadius: "var(--radius-sm)",
                fontSize: 13.5,
                textDecoration: "none",
                transition: "background 0.2s ease, color 0.2s ease",
                color: active === item.id ? "var(--color-accent-400)" : muted(68),
              }}
            >
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 10.5, opacity: 0.6 }}>{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ padding: "var(--space-3) var(--space-4)", fontSize: 13.5 }}
          >
            Tải CV (PDF)
          </a>
          <button
            onClick={toggle}
            className="btn btn-ghost"
            style={{ padding: "var(--space-3) var(--space-4)", fontSize: 13.5, borderColor: "var(--color-divider)" }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "1px solid var(--color-accent)",
                background: "linear-gradient(90deg, var(--color-accent) 50%, transparent 50%)",
              }}
            />
            Chuyển sang {theme === "dark" ? "giao diện sáng" : "giao diện tối"}
          </button>
        </div>
      </div>

      <div id="side-foot" style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 12.5 }}>
        <a href={`tel:${profile.phone}`} style={{ color: muted(62), textDecoration: "none" }}>
          {profile.phonePretty}
        </a>
        <a href={`mailto:${profile.email}`} style={{ color: muted(62), textDecoration: "none", wordBreak: "break-all" }}>
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: muted(62), textDecoration: "none" }}>
          github.com/thanhthien0706
        </a>
        <span style={{ marginTop: "var(--space-3)", fontSize: 11, color: muted(38) }}>© 2026 {profile.name}</span>
      </div>
    </aside>
  );
}
