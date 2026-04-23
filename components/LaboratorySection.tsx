"use client";
import Image from "next/image";
import Link from "next/link";
import { labItems } from "@/data/projects";

function LabCard({ item }: { item: { title: string; engine: string; thumb: string; href: string } }) {
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flexShrink: 0 }}>
      <div style={{ width: "230px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease", cursor: "pointer" }}
        onMouseEnter={e => { const el = e.currentTarget; el.style.transform="scale(1.04) translateY(-4px)"; el.style.borderColor="var(--border2)"; el.style.boxShadow="0 12px 40px rgba(108,92,231,0.25)"; }}
        onMouseLeave={e => { const el = e.currentTarget; el.style.transform="scale(1) translateY(0)"; el.style.borderColor="var(--border)"; el.style.boxShadow="none"; }}>
        <div style={{ position: "relative", paddingTop: "56.25%", background: "var(--bg2)" }}>
          <Image src={item.thumb} alt={item.title} fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ padding: "10px 14px" }}>
          <span style={{ fontSize: "0.62rem", color: "var(--muted)", display: "block", marginBottom: "4px" }}>{item.engine}</span>
          <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>{item.title}</p>
        </div>
      </div>
    </a>
  );
}

export default function LaboratorySection() {
  const doubled = [...labItems, ...labItems];
  return (
    <section style={{ padding: "60px 0 80px" }}>
      <div style={{ padding: "0 32px", maxWidth: "1100px", margin: "0 auto 32px" }}>
        <div className="section-label">🧪 Experiments</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "8px" }}>Laboratory</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>A quick strip of experimental prototypes and engine tests.</p>
          </div>
          <Link href="/unreleased-projects" style={{ color: "var(--accent2)", textDecoration: "none", fontSize: "0.8rem", whiteSpace: "nowrap" }}>View all →</Link>
        </div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--bg), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--bg), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div className="lab-strip" style={{ display: "flex", gap: "16px", padding: "12px 32px", width: "max-content" }}>
          {doubled.map((item, i) => <LabCard key={`${item.title}-${i}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}
