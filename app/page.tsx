"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const muted = (pct: number) => `color-mix(in srgb, var(--color-text) ${pct}%, transparent)`;

const section: React.CSSProperties = {
  padding: "clamp(40px, 5vw, 80px) clamp(20px, 4vw, 72px)",
  borderTop: "1px solid var(--color-divider)",
};

const label: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: muted(50),
};

const kicker: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: muted(50),
};

export default function Home() {
  const { t } = useLanguage();
  const { profile, jobs, posts, skills, personalProjects, ui } = t;
  return (
    <div
      id="shell"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 310px) minmax(0, 1fr)",
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      <Sidebar />

      <main style={{ minWidth: 0 }}>
        <section
          id="hero"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 0.8fr)",
            gap: "clamp(24px, 3.5vw, 56px)",
            alignItems: "center",
            padding: "clamp(44px, 6vw, 96px) clamp(20px, 4vw, 72px) clamp(36px, 4vw, 64px)",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "clamp(34px, 4.6vw, 66px)", lineHeight: 1.04, fontWeight: 500, letterSpacing: "-0.03em" }}>
              {profile.headline[0]}
              <br />
              {profile.headline[1]}
              <br />
              {profile.headline[2]}
            </h1>
            <p style={{ margin: "var(--space-8) 0 0", maxWidth: "52ch", fontSize: "clamp(15px, 1.1vw, 18px)", lineHeight: 1.65, color: muted(78) }}>
              {profile.intro}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, max-content))",
                gap: "var(--space-6)",
                marginTop: "var(--space-8)",
              }}
            >
              <div>
                <div style={kicker}>{ui.experienceKicker}</div>
                <div style={{ marginTop: 3, fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500 }}>{profile.years}</div>
              </div>
              <div>
                <div style={kicker}>{ui.roleKicker}</div>
                <div style={{ marginTop: 3, fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500 }}>{ui.fullstack}</div>
              </div>
            </div>
          </div>
          <div
            id="portrait"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                paddingBottom: "var(--space-6)",
                borderBottom: "1px solid var(--color-divider)",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 46,
                  height: 46,
                  flex: "none",
                  border: "1.5px solid var(--color-accent)",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "var(--font-heading)",
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: "-0.06em",
                  color: "var(--color-accent)",
                }}
              >
                NT
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.5, color: muted(72) }}>
                {ui.openTo[0]}
                <br />
                {ui.openTo[1]}
              </span>
            </div>
            <div>
              <div style={kicker}>{ui.currentKicker}</div>
              <div style={{ marginTop: 4, fontSize: 14.5, lineHeight: 1.5 }}>{ui.currentRole}</div>
            </div>
            <div>
              <div style={kicker}>{ui.strongestKicker}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "var(--space-3)" }}>
                {["NodeJS", "NestJS", ".NET / C#", "ReactJS / NextJS", "SQL Server", "ExpressJS"].map((s) => (
                  <span key={s} className="tag tag-accent" style={{ fontSize: 10.5 }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div style={kicker}>{ui.quickContactKicker}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: "var(--space-3)", fontSize: 14 }}>
                <a href={`tel:${profile.phone}`} style={{ textDecoration: "none" }}>
                  {profile.phonePretty}
                </a>
                <a href={profile.zalo} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  {ui.zaloMessage}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Reveal id="gioi-thieu" style={section}>
          <h2 style={{ ...label, marginBottom: "var(--space-8)" }}>{ui.sectionAbout}</h2>
          <p
            style={{
              margin: 0,
              maxWidth: "56ch",
              fontSize: "clamp(18px, 1.7vw, 26px)",
              lineHeight: 1.45,
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.aboutLead}
          </p>
          <p style={{ margin: "var(--space-6) 0 0", maxWidth: "64ch", fontSize: 15, lineHeight: 1.75, color: muted(72) }}>
            {profile.aboutBody}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-8)",
              marginTop: "var(--space-8)",
            }}
          >
            {skills.map((g) => (
              <div key={g.group}>
                <div style={{ ...kicker, marginBottom: "var(--space-4)" }}>{g.group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {g.items.map((s) => (
                    <span key={s} className={`tag ${g.tag}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "var(--space-8)",
              paddingTop: "var(--space-8)",
              borderTop: "1px solid var(--color-divider)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--space-8)",
            }}
          >
            <div>
              <div style={{ ...kicker, marginBottom: "var(--space-3)" }}>{ui.educationKicker}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 500 }}>{profile.education.school}</div>
              <div style={{ marginTop: 4, fontSize: 14, color: muted(65) }}>{profile.education.detail}</div>
            </div>
            <div>
              <div style={{ ...kicker, marginBottom: "var(--space-3)" }}>{ui.languagesKicker}</div>
              <div style={{ fontSize: 14, lineHeight: 1.9, color: muted(72) }}>
                {ui.languageNative}
                <br />
                {ui.languageTechnical}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="kinh-nghiem" style={section}>
          <h2 style={{ ...label, marginBottom: "var(--space-8)" }}>{ui.sectionExperience}</h2>
          <div
            style={{
              position: "relative",
              paddingLeft: 28,
              background:
                "linear-gradient(to bottom, var(--color-divider), var(--color-divider) calc(100% - 48px), transparent) left / 1px 100% no-repeat",
            }}
          >
            {jobs.map((job) => (
              <div key={job.company} style={{ position: "relative", paddingBottom: "var(--space-8)" }}>
                <span
                  style={{
                    position: "absolute",
                    left: -33,
                    top: 7,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "var(--color-bg)",
                    border: "2px solid var(--color-accent)",
                  }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", fontSize: 12, letterSpacing: "0.06em", color: "var(--color-accent-400)" }}>
                  {job.period}
                  <span className="tag tag-outline" style={{ fontSize: 10 }}>
                    {job.type}
                  </span>
                </div>
                <h3 style={{ margin: "var(--space-3) 0 2px", fontSize: "clamp(19px, 1.6vw, 25px)", fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {job.role}
                </h3>
                <div style={{ fontSize: 14, color: muted(60) }}>
                  {job.company} · {job.place}
                </div>
                <ul style={{ margin: "var(--space-4) 0 0", paddingLeft: 18, maxWidth: "62ch", fontSize: 14.5, lineHeight: 1.8, color: muted(74) }}>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="du-an" style={section}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap", marginBottom: "var(--space-8)" }}>
            <h2 style={label}>{ui.sectionWorkProjects}</h2>
            <p style={{ margin: 0, maxWidth: "42ch", fontSize: 14, lineHeight: 1.7, color: muted(65) }}>
              {ui.workProjectsHint}
            </p>
          </div>
          <Projects />
        </Reveal>

        <Reveal id="ca-nhan" style={section}>
          <h2 style={{ ...label, marginBottom: "var(--space-8)" }}>{ui.sectionPersonalProjects}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {personalProjects.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="surface-lift"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.7fr)",
                  gap: "clamp(20px, 3vw, 44px)",
                  alignItems: "center",
                  padding: "var(--space-8)",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--color-surface)",
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--color-text)",
                  textDecoration: "none",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", ...kicker }}>
                    <span>{p.badge1}</span>
                    <span style={{ width: 12, height: 1, background: "var(--color-divider)" }} />
                    <span>{p.badge2}</span>
                  </div>
                  <h3 style={{ margin: "var(--space-3) 0 var(--space-2)", fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 500, letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                  <p style={{ margin: 0, maxWidth: "52ch", fontSize: 15, lineHeight: 1.7, color: muted(72) }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "var(--space-6)" }}>
                    {p.tags.map((s) => (
                      <span key={s} className="tag tag-neutral">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span style={{ display: "inline-block", marginTop: "var(--space-6)", fontSize: 13, color: "var(--color-accent-400)" }}>
                    {p.cta}
                  </span>
                </div>
                <div style={{ position: "relative", aspectRatio: "16 / 11", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 720px) 100vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "top left" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal id="blog" style={section}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
            <h2 style={label}>{ui.sectionBlog}</h2>
            <p style={{ margin: 0, fontSize: 12, color: muted(42) }}>{ui.blogNote}</p>
          </div>
          <div style={{ borderTop: "1px solid var(--color-divider)" }}>
            {posts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="post-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "92px minmax(0, 1fr) auto",
                  gap: "var(--space-6)",
                  alignItems: "baseline",
                  padding: "var(--space-8) 2px",
                  borderBottom: "1px solid var(--color-divider)",
                  color: "var(--color-text)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: 12, fontFamily: "ui-monospace, monospace", color: muted(45) }}>{post.date}</span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em" }}>
                    {post.title}
                  </span>
                  <span style={{ display: "block", marginTop: 5, maxWidth: "60ch", fontSize: 14, lineHeight: 1.65, color: muted(65) }}>
                    {post.excerpt}
                  </span>
                </span>
                <span style={{ fontSize: 12, color: muted(45) }}>{post.read}</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal id="faq" style={section}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap", marginBottom: "var(--space-8)" }}>
            <h2 style={label}>{ui.sectionFaq}</h2>
            <p style={{ margin: 0, maxWidth: "42ch", fontSize: 14, lineHeight: 1.7, color: muted(65) }}>
              {ui.faqHint}
            </p>
          </div>
          <FAQ />
        </Reveal>

        <Reveal id="lien-he" style={{ ...section, padding: "clamp(44px, 5.5vw, 88px) clamp(20px, 4vw, 72px)" }}>
          <h2 style={{ ...label, marginBottom: "var(--space-4)" }}>{ui.sectionContact}</h2>
          <p
            style={{
              margin: 0,
              maxWidth: "32ch",
              fontSize: "clamp(24px, 3vw, 42px)",
              lineHeight: 1.15,
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            {ui.contactHeadline}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "var(--space-6)",
              marginTop: "var(--space-8)",
            }}
          >
            {[
              { k: ui.contactPhone, v: profile.phonePretty, href: `tel:${profile.phone}`, size: 18 },
              { k: ui.contactZalo, v: "zalo.me/0373245002", href: profile.zalo, size: 18 },
              { k: ui.contactFacebook, v: "nguyenthanhthien0706", href: profile.facebook, size: 18 },
              { k: ui.contactEmail, v: profile.email, href: `mailto:${profile.email}`, size: 15 },
            ].map((c) => (
              <a
                key={c.k}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-lift"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: "var(--space-8)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--color-text)",
                  textDecoration: "none",
                }}
              >
                <span style={kicker}>{c.k}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: c.size, fontWeight: 500, wordBreak: "break-all" }}>{c.v}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </main>
    </div>
  );
}
