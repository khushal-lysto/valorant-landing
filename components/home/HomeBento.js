"use client";
import { useEffect, useRef, useState } from "react";
import {
  RiShieldCheckLine, RiDiscountPercentLine, RiBellLine, RiPlug2Line,
  RiDiscordFill, RiGamepadLine,
} from "react-icons/ri";

const gameLogos = [
  { label: "PS",      bg: "#003087", text: "#fff"    },
  { label: "Xbox",    bg: "#107C10", text: "#fff"    },
  { label: "Steam",   bg: "#1b2838", text: "#c6d4df" },
  { label: "VALO",    bg: "#ff4655", text: "#fff"    },
  { label: "BGMI",    bg: "#e8a020", text: "#000"    },
  { label: "Genshin", bg: "#1e4fa3", text: "#fff"    },
  { label: "Roblox",  bg: "#cc0000", text: "#fff"    },
  { label: "MC",      bg: "#5a8a35", text: "#fff"    },
];

export default function HomeBento() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* Light wrapper so rounded card floats above it */
    <section id="features" className="px-4 md:px-8 py-16" style={{ background: "#f0ebe3" }}>
      <div
        ref={ref}
        style={{
          background: "#111",
          borderRadius: 24,
          overflow: "hidden",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.88) translateY(60px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1), opacity 0.75s ease-out",
        }}
      >
        {/* ── Header row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-12 pt-12 pb-10 items-start">
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug text-white"
            style={{ fontFamily: "var(--font-lexend), sans-serif" }}
          >
            Your all-in-one game top-up engine. Built for gamers, ready for scale.
          </h2>
          <div className="flex flex-col gap-4 md:pt-1">
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              Instant delivery, smart promos, and fraud-safe checkout with zero extra ops.
            </p>
            <a
              href="https://discord.com/users/1460236363365351562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-colors"
              style={{ border: "1px solid #333" }}
            >
              <RiDiscordFill size={13} />
              Add to Discord DM
            </a>
          </div>
        </div>

        {/* ── 2×2 bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-6 pb-6">

          {/* Card 1 — Instant Delivery */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="flex items-center justify-center py-10 px-6" style={{ height: 300 }}>
              <div className="w-52 rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#2b2d31" }}>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: "conic-gradient(from 0deg, #ff6b35, #f7c59f, #5bc0eb, #9b59b6, #ff6b35)" }}
                    >A</div>
                    <div>
                      <div className="text-white text-xs font-semibold">Artemis</div>
                      <div className="text-xs" style={{ color: "#888" }}>Welcome</div>
                    </div>
                  </div>
                  <div className="text-xs mb-3" style={{ color: "#aaa" }}>to Artemis by Athena</div>
                  <div className="space-y-1.5 mb-4">
                    {["Trusted & secure", "Instant delivery", "Official gift cards sourced directly from Athena."].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs" style={{ color: "#ccc" }}>
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2 rounded text-white text-xs font-medium" style={{ background: "#5865F2" }}>
                    <RiGamepadLine size={12} className="inline mr-1" /> Buy a Gift Card
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiShieldCheckLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Instant Delivery:</h3>
              <p className="text-sm" style={{ color: "#666" }}>Codes arrive in DM in seconds</p>
            </div>
          </div>

          {/* Card 2 — Lowest prices */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="flex items-center justify-center relative overflow-hidden" style={{ height: 300 }}>
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,180,0,0.2) 0%, transparent 65%)" }} />
              <div
                className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 38% 32%, #ffe066, #d4860a)",
                  boxShadow: "0 0 60px rgba(255,180,0,0.4), inset 0 2px 6px rgba(255,255,255,0.25)",
                }}
              >
                <span className="text-5xl font-bold" style={{ color: "#7a4400" }}>₹</span>
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiDiscountPercentLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Lowest prices, highest perks:</h3>
              <p className="text-sm" style={{ color: "#666" }}>Best in-game discounts & rewards</p>
            </div>
          </div>

          {/* Card 3 — Smart Promotions */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="p-6 overflow-hidden" style={{ height: 300 }}>
              <div className="grid grid-cols-4 gap-2 h-full">
                {gameLogos.map((g, i) => (
                  <div
                    key={i}
                    className="rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{ background: g.bg, color: g.text }}
                  >
                    {g.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiBellLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Smart Promotions:</h3>
              <p className="text-sm" style={{ color: "#666" }}>Scheduled drops, XP-based perks, and first-purchase boosts.</p>
            </div>
          </div>

          {/* Card 4 — Plug & Play */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="flex items-center justify-center relative overflow-hidden" style={{ height: 300 }}>
              <div className="absolute right-0 top-0 bottom-0 w-2/3" style={{ background: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />
              <div className="relative z-10 bg-white rounded-2xl p-5 shadow-2xl w-48" style={{ transform: "rotate(3deg)" }}>
                <div className="text-black text-xs font-semibold mb-3">Server</div>
                <div className="space-y-1.5 mb-3">
                  <div className="h-2 rounded" style={{ background: "#e5e5e5" }} />
                  <div className="h-2 rounded w-3/4" style={{ background: "#e5e5e5" }} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs" style={{ color: "#666" }}>$</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full" style={{ background: "#e0e0e0" }} />
                    <div className="w-4 h-4 rounded-full opacity-50" style={{ background: "#e0e0e0" }} />
                  </div>
                </div>
                <button className="w-full py-1.5 rounded text-white text-xs font-bold" style={{ background: "#111" }}>SELL</button>
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiPlug2Line size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Plug & Play:</h3>
              <p className="text-sm" style={{ color: "#666" }}>Go live in minutes.</p>
            </div>
          </div>

        </div>

        {/* ── Marquee text ── */}
        <div className="px-8 md:px-16 pt-24 pb-12">
          <p
            className="text-white text-center leading-[1.15] max-w-4xl mx-auto"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontFamily: "var(--font-lexend), sans-serif",
            }}
          >
            Top titles, always fresh. We update denominations and stock in real time—so your players never wait.
          </p>
        </div>

        {/* ── Icon carousel ── */}
        <div className="relative overflow-hidden pb-12" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
          <div
            className="flex gap-4 w-max"
            style={{ animation: "scrollIcons 32s linear infinite" }}
          >
            {/* First copy */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  width: 120,
                  height: 120,
                  background: "#1e1e1e",
                  border: "1px solid #2a2a2a",
                }}
              >
                <div
                  className="rounded-xl"
                  style={{ width: 64, height: 64, background: "#2e2e2e" }}
                />
                <div
                  className="rounded"
                  style={{ width: 60, height: 8, background: "#2e2e2e" }}
                />
              </div>
            ))}
            {/* Second copy — identical, for seamless loop */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  width: 120,
                  height: 120,
                  background: "#1e1e1e",
                  border: "1px solid #2a2a2a",
                }}
              >
                <div
                  className="rounded-xl"
                  style={{ width: 64, height: 64, background: "#2e2e2e" }}
                />
                <div
                  className="rounded"
                  style={{ width: 60, height: 8, background: "#2e2e2e" }}
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollIcons {
            from { transform: translateX(0); }
            to   { transform: translateX(-1360px); }
          }
        `}</style>

      </div>
    </section>
  );
}
