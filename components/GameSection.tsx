"use client";
import { useState } from "react";

export default function GameSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ padding: "60px 32px 80px", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="section-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM11 13H9v2H7v-2H5v-2h2V9h2v2h2v2zm4-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
        Interactive Experience
      </div>
      <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: "10px", letterSpacing: "-0.02em" }}>
        Explore playing a game
      </h2>
      <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: "32px" }}>
        Navigate through my portfolio game and interact with objects to discover my work.
      </p>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open("https://augustopolonio.vercel.app/video/AugustoPolonio_PortfolioGame2D_Preview.mp4", "_blank")}
        style={{ position: "relative", background: "var(--surface)", border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`, borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", maxHeight: "520px", cursor: "pointer", transition: "border-color 0.3s" }}
      >
        {/* Pixel grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(108,92,231,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Scanlines */}
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)", pointerEvents: "none" }} />
        {/* Glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(108,92,231,0.15) 0%, transparent 65%)", opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s" }} />

        {/* Center content */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <div style={{ fontSize: "4.5rem", filter: `drop-shadow(0 0 ${hovered ? "30px" : "15px"} var(--accent))`, transition: "filter 0.3s, transform 0.3s", transform: hovered ? "scale(1.1)" : "scale(1)" }}>🕹️</div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "8px" }}>── PORTFOLIO ADVENTURE ──</p>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "clamp(0.8rem,2vw,1.1rem)", color: hovered ? "var(--accent2)" : "var(--green)", letterSpacing: "0.2em", fontWeight: 700, animation: "blink 1.2s step-end infinite" }}>▶ PLAY NOW!</p>
          </div>
        </div>

        {/* Fullscreen btn */}
        <button onClick={e => { e.stopPropagation(); e.currentTarget.parentElement?.requestFullscreen?.(); }}
          style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(0,0,0,0.6)", border: "1px solid var(--border2)", color: "var(--text2)", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "0.7rem", fontFamily: "inherit", backdropFilter: "blur(8px)", transition: "color 0.2s, border-color 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border2)"; }}>
          ⛶ Fullscreen
        </button>

        {/* Corner decorations */}
        {(["top-left","top-right","bottom-left","bottom-right"] as const).map(pos => (
          <div key={pos} style={{ position: "absolute", width: "20px", height: "20px", ...(pos.includes("top") ? { top: "10px" } : { bottom: "10px" }), ...(pos.includes("left") ? { left: "10px" } : { right: "10px" }), borderTop: pos.includes("top") ? "2px solid var(--accent)" : "none", borderBottom: pos.includes("bottom") ? "2px solid var(--accent)" : "none", borderLeft: pos.includes("left") ? "2px solid var(--accent)" : "none", borderRight: pos.includes("right") ? "2px solid var(--accent)" : "none", opacity: 0.5 }} />
        ))}
      </div>
    </section>
  );
}
