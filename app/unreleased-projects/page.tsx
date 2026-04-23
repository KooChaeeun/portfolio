/* "use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { labItems } from "@/data/projects";

const unreleasedProjects = [
  {
    title: "Alone at the Fast Food",
    engine: "Godot",
    status: "In Development",
    statusColor: "#e17055",
    description: "A work-in-progress horror survival game set in an abandoned fast food restaurant. Navigate through dark corridors, solve puzzles, and uncover the mystery behind the restaurant's closure.",
    tags: ["Horror", "Survival", "Puzzle", "3D"],
    image: "https://augustopolonio.vercel.app/_next/image?url=%2Fgame_covers%2FAlone_at_the_fast_food.png&w=1200&q=75",
  },
];

export default function UnreleasedProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "120px 32px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--muted)", textDecoration: "none", fontSize: "0.8rem", marginBottom: "40px", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Portfolio
        </Link>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--accent2)", background: "rgba(108,92,231,0.1)", border: "1px solid rgba(108,92,231,0.25)", padding: "6px 14px", borderRadius: "20px", marginBottom: "20px" }}>
          🔬 WIP & Experiments
        </div>

        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "12px" }}>Unreleased Projects</h1>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: "56px" }}>Games in development and experimental prototypes from my laboratory.</p>

        
        <section style={{ marginBottom: "72px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "28px", color: "var(--text2)", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#e17055", boxShadow: "0 0 10px #e17055", animation: "blink 1.5s ease-in-out infinite" }} />
            In Development
          </h2>

          {unreleasedProjects.map(p => (
            <div key={p.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden", display: "flex", flexWrap: "wrap" }}>
              <div style={{ position: "relative", width: "360px", minHeight: "220px", background: "var(--bg2)", flexShrink: 0 }}>
                <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, padding: "32px", minWidth: "240px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.65rem", background: `${p.statusColor}20`, color: p.statusColor, border: `1px solid ${p.statusColor}40`, padding: "3px 10px", borderRadius: "20px", fontWeight: 600 }}>● {p.status}</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--muted)", background: "var(--bg2)", padding: "3px 10px", borderRadius: "20px" }}>{p.engine}</span>
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ color: "var(--text2)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: "20px" }}>{p.description}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: "0.65rem", color: "var(--accent2)", background: "rgba(162,155,254,0.1)", border: "1px solid rgba(162,155,254,0.2)", padding: "3px 10px", borderRadius: "20px" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        
        <section>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "28px", color: "var(--text2)" }}>🧪 Laboratory — Engine Tests & Prototypes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {labItems.map(item => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", transition: "transform 0.25s ease, border-color 0.25s, box-shadow 0.25s", cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.borderColor="var(--border2)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(108,92,231,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.boxShadow="none"; }}>
                  <div style={{ position: "relative", paddingTop: "56.25%", background: "var(--bg2)" }}>
                    <Image src={item.thumb} alt={item.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <span style={{ fontSize: "0.62rem", color: "var(--muted)", display: "block", marginBottom: "4px" }}>{item.engine}</span>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{item.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
 */
