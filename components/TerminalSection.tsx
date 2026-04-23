"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface Line { id: number; type: "input"|"output"|"error"|"info"; text: string; }

const COMMANDS: Record<string, string | (() => string)> = {
  help: `┌─────────────────────────────────────────┐
│         Available Commands              │
├─────────────────────────────────────────┤
│  about        Learn about me           │
│  skills       Technical skill set      │
│  projects     My game projects         │
│  experience   Work history             │
│  contact      Get in touch             │
│  ls           List directory           │
│  cat <file>   Read a file              │
│  whoami       Who am I?                │
│  clear        Clear terminal           │
│  date         Current date/time        │
└─────────────────────────────────────────┘`,
  about: `Augusto Polonio — Senior Software & Game Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 14+ years building scalable web & mobile apps
• JavaScript / TypeScript / C# (.NET) expert
• Remote developer since 2016
• Indie game developer since 2015 (Unity & Godot)
• Founder of Master Cat Games indie studio`,
  skills: `Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Languages:    JavaScript, TypeScript, C#, GDScript
Frontend:     React, Next.js, Vue
Backend:      Node.js, .NET, REST APIs
Game Engines: Unity (11+ yrs), Godot (recent)
Tools:        Docker, Git, GitHub Actions, Figma`,
  projects: `Featured Game Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 Alone at the Fast Food  [IN DEV] — Godot
🐙 Oliver the Octopus              — Unity
🎨 Tinturaria                      — Unity
🐱 Flappy Black Cat                — Unity
🧱 Crazy Stack Blocks              — Unity
🏃 Running Food                    — Unity`,
  experience: `Work Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2020–Present] Senior Software Engineer
[2016–2020]    Full Stack Developer
[2010–2016]    Web Developer`,
  contact: `Contact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LinkedIn: linkedin.com/in/augustopolonio
Studio:   mastercatgames.vercel.app`,
  whoami: `augustopolonio — Senior Software & Game Developer`,
  ls: `about_me.txt    skills.json    projects/
resume.pdf      contact.md     experience.md`,
  "cat about_me.txt": `Senior Web and Mobile Developer with 14+ years of experience.
Transitioning into full-time Game Development.`,
  "cat skills.json": `{"languages":["JavaScript","TypeScript","C#","GDScript"],"engines":["Unity","Godot"]}`,
  "cat contact.md": `LinkedIn: linkedin.com/in/augustopolonio`,
  "cat experience.md": `Senior Software Engineer (2020–Present)\nFull Stack Developer (2016–2020)\nWeb Developer (2010–2016)`,
  date: () => new Date().toString(),
};

let idCounter = 0;
const INIT: Line[] = [
  { id: idCounter++, type: "info",   text: "Welcome to Augusto Polonio's Portfolio Terminal v1.0" },
  { id: idCounter++, type: "info",   text: "Type 'help' for available commands." },
];

export default function TerminalSection() {
  const [lines, setLines]     = useState<Line[]>(INIT);
  const [input, setInput]     = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef             = useRef<HTMLDivElement>(null);
  const inputRef              = useRef<HTMLInputElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);

  const run = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") { setLines([]); setHistory(h => [raw.trim(), ...h]); setHistIdx(-1); setInput(""); return; }
    const handler = COMMANDS[cmd];
    const outputText = handler !== undefined
      ? (typeof handler === "function" ? handler() : handler)
      : cmd.startsWith("cat ") ? `cat: ${cmd.slice(4)}: No such file or directory`
      : `command not found: ${cmd}\nType 'help' to see available commands.`;
    const type = handler !== undefined ? "output" : "error";
    setLines(prev => [...prev, { id: idCounter++, type: "input", text: raw.trim() }, { id: idCounter++, type, text: outputText }]);
    setHistory(h => [raw.trim(), ...h]);
    setHistIdx(-1);
    setInput("");
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp")   { e.preventDefault(); const n = Math.min(histIdx+1,history.length-1); setHistIdx(n); setInput(history[n]??""); }
    if (e.key === "ArrowDown") { e.preventDefault(); const n = histIdx-1; if (n<0){setHistIdx(-1);setInput("");}else{setHistIdx(n);setInput(history[n]);} }
    if (e.key === "Tab")       { e.preventDefault(); const m = Object.keys(COMMANDS).find(c => c.startsWith(input)); if(m) setInput(m); }
  };

  return (
    <section style={{ padding: "60px 32px 80px", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="section-label">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17l6-6-6-6M12 19h8" strokeLinecap="round"/></svg>
        Developer Mode
      </div>
      <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: "10px", letterSpacing: "-0.02em" }}>Interactive Terminal</h2>
      <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: "32px" }}>
        Explore my portfolio the developer way. Type <code style={{ color: "var(--accent2)", background: "rgba(108,92,231,0.12)", padding: "2px 7px", borderRadius: "4px" }}>help</code> to get started.
      </p>

      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)", fontFamily: "'JetBrains Mono', monospace" }} onClick={() => inputRef.current?.focus()}>
        {/* Chrome */}
        <div style={{ background: "var(--bg2)", padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: "7px" }}>
            {["#ff5f57","#ffbd2e","#28c840"].map((c,i) => <div key={i} style={{ width:"12px",height:"12px",borderRadius:"50%",background:c }} />)}
          </div>
          <span style={{ color: "var(--muted)", fontSize: "0.75rem", flex: 1, textAlign: "center" }}>augustopolonio@portfolio:~</span>
          <div style={{ width: "50px" }} />
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px", minHeight: "300px", maxHeight: "420px", overflowY: "auto", fontSize: "0.825rem", lineHeight: 1.75, cursor: "text" }}>
          {lines.map(line => (
            <div key={line.id} style={{ marginBottom: "2px" }}>
              {line.type === "input" ? (
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>
                    <span style={{ color: "var(--green)" }}>augustopolonio</span>
                    <span>@portfolio:~$</span>
                  </span>
                  <span style={{ color: "var(--text)" }}>{line.text}</span>
                </div>
              ) : (
                <pre style={{ color: line.type==="error" ? "var(--red)" : line.type==="info" ? "var(--accent2)" : "var(--text2)", whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "inherit", margin: "2px 0 10px", fontSize: "0.8rem" }}>
                  {line.text}
                </pre>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={e => { e.preventDefault(); run(input); }} style={{ borderTop: "1px solid var(--border)", padding: "12px 24px", display: "flex", alignItems: "center", gap: "10px", background: "rgba(0,0,0,0.2)" }}>
          <span style={{ color: "var(--muted)", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--green)" }}>augustopolonio</span>
            <span>@portfolio:~$</span>
          </span>
          <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
            autoComplete="off" spellCheck={false} autoFocus
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--green)", fontSize: "0.825rem", fontFamily: "inherit", caretColor: "var(--green)" }} />
        </form>
      </div>

      <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "12px", display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
        💡 Try: {["ls","cat about_me.txt","skills","projects"].map(cmd => (
          <code key={cmd} onClick={() => run(cmd)} style={{ color: "var(--accent2)", background: "rgba(108,92,231,0.1)", padding: "1px 6px", borderRadius: "3px", cursor: "pointer", fontSize: "0.75rem" }}>{cmd}</code>
        ))}
      </p>
    </section>
  );
}
