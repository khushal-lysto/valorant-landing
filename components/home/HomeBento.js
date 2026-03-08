"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  RiShieldCheckLine, RiDiscountPercentLine, RiBellLine,
  RiDiscordFill, RiGamepadLine,
} from "react-icons/ri";
const gameLogos = [
  { label: "PlayStation", bg: "#003087", src: "/logos/playstation.svg" },
  { label: "Xbox",        bg: "#107C10", src: "/logos/xbox.svg" },
  { label: "Steam",       bg: "#1b2838", src: "/logos/steam.svg" },
  { label: "Valorant",    bg: "#ff4655", src: "/logos/valorant.svg" },
  { label: "BGMI",        bg: "#1a1a1a", src: "/logos/bgmi.svg",     noFilter: true },
  { label: "Genshin",     bg: "#1e4fa3", src: "/logos/genshin.svg" },
  { label: "Roblox",      bg: "#1a1a1a", src: "/logos/roblox.svg",   noFilter: true },
  { label: "Minecraft",   bg: "#5a8a35", src: "/logos/minecraft.svg" },
];

function GameLogoIcon({ game, size = 28 }) {
  return (
    <Image
      src={game.src}
      alt={game.label}
      width={size}
      height={size}
      style={game.noFilter ? {} : { filter: "brightness(0) invert(1)" }}
    />
  );
}

// 3× repetition so one copy (24 × 136px = 3264px) always exceeds any viewport width
const carouselItems = [...gameLogos, ...gameLogos, ...gameLogos];

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
            className="text-3xl md:text-4xl leading-snug text-white"
            style={{ fontFamily: "var(--font-source-serif), serif", fontWeight: 400 }}
          >
            Your all-in-one game top-up engine. Built for gamers, ready for scale.
          </h2>
          <div className="flex flex-col gap-4 md:pt-1">
            <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "var(--font-dm-sans), sans-serif" }}>
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
            <div className="flex flex-col justify-center px-5 py-6 gap-2" style={{ height: 300, background: "#1e1f22" }}>
              {/* Channel header */}
              <div className="flex items-center gap-2 pb-2 mb-1" style={{ borderBottom: "1px solid #2e2e2e" }}>
                <span style={{ color: "#72767d", fontSize: 15 }}>#</span>
                <span className="text-xs font-semibold" style={{ color: "#c8cbcf" }}>artemis-shop</span>
              </div>
              {/* User command */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full flex-shrink-0" style={{ background: "#5865F2" }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold">U</div>
                </div>
                <div>
                  <span className="text-xs font-semibold" style={{ color: "#fff" }}>you </span>
                  <span className="text-xs" style={{ color: "#72767d" }}>Today at 4:20 PM</span>
                  <p className="text-xs mt-0.5" style={{ color: "#dcddde" }}>/shop <span style={{ color: "#5865F2" }}>valorant</span> 475VP</p>
                </div>
              </div>
              {/* Bot response — embed */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden">
                  <Image src="/artemis-logo.jpeg" alt="Artemis" width={28} height={28} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-semibold" style={{ color: "#fff" }}>Artemis</span>
                    <span className="text-xs px-1 rounded" style={{ background: "#5865F2", color: "#fff", fontSize: 9 }}>APP</span>
                    <span className="text-xs" style={{ color: "#72767d" }}>4:20 PM</span>
                  </div>
                  {/* Embed */}
                  <div className="rounded-md p-2.5" style={{ background: "#2b2d31", borderLeft: "3px solid #57f287" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#57f287" }}>✅ Gift Card Delivered!</p>
                    <p className="text-xs mb-1.5" style={{ color: "#b5bac1" }}>Valorant — 475 VP</p>
                    <div className="rounded px-2 py-1 text-center text-xs font-mono font-bold tracking-widest" style={{ background: "#1e1f22", color: "#fff" }}>
                      XXXX-XXXX-XXXX
                    </div>
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "#72767d" }}>
                      <span>⚡</span> Delivered in 1.4s
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiShieldCheckLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Instant Delivery:</h3>
              <p className="text-sm" style={{ color: "#666", fontFamily: "var(--font-dm-sans), sans-serif" }}>Codes arrive in DM in seconds</p>
            </div>
          </div>

          {/* Card 2 — Lowest prices */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="flex flex-col justify-center px-5 py-5" style={{ height: 300, background: "#1e1f22" }}>
              {/* Bot message header */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden">
                  <Image src="/artemis-logo.jpeg" alt="Artemis" width={28} height={28} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold" style={{ color: "#fff" }}>Artemis</span>
                  <span className="text-xs px-1 rounded" style={{ background: "#5865F2", color: "#fff", fontSize: 9 }}>APP</span>
                </div>
              </div>
              {/* Embed */}
              <div className="rounded-md p-3" style={{ background: "#2b2d31", borderLeft: "3px solid #f7c559" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#f7c559" }}>🏷️ Best Deals Today</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { game: "Valorant",       off: "15% off", orig: "₹470",  price: "₹399"  },
                    { game: "Genshin Impact", off: "15% off", orig: "₹800",  price: "₹680"  },
                    { game: "BGMI",           off: "8% off",  orig: "₹350",  price: "₹322"  },
                    { game: "Roblox",         off: "7.5% off",orig: "₹650",  price: "₹601"  },
                  ].map((d) => (
                    <div key={d.game} className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#b5bac1" }}>{d.game}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs line-through" style={{ color: "#4f545c" }}>{d.orig}</span>
                        <span className="text-xs font-semibold" style={{ color: "#57f287" }}>{d.price}</span>
                        <span className="text-xs px-1 rounded" style={{ background: "#1e3a2e", color: "#57f287", fontSize: 9 }}>{d.off}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiDiscountPercentLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Lowest prices, highest perks:</h3>
              <p className="text-sm" style={{ color: "#666", fontFamily: "var(--font-dm-sans), sans-serif" }}>Best in-game discounts & rewards</p>
            </div>
          </div>

          {/* Card 3 — Smart Promotions */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="p-6 overflow-hidden" style={{ height: 300 }}>
              <div className="grid grid-cols-4 gap-2 h-full">
                {gameLogos.map((g, i) => (
                  <div
                    key={i}
                    className="rounded-xl flex flex-col items-center justify-center gap-1.5"
                    style={{ background: g.bg }}
                  >
                    <GameLogoIcon game={g} size={24} />
                    <span className="text-white text-[9px] font-semibold leading-none opacity-80">
                      {g.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiBellLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Smart Promotions:</h3>
              <p className="text-sm" style={{ color: "#666", fontFamily: "var(--font-dm-sans), sans-serif" }}>Scheduled drops, XP-based perks, and first-purchase boosts.</p>
            </div>
          </div>

          {/* Card 4 — Push Notifications */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="flex flex-col items-center justify-center gap-2.5 px-6 py-8 relative overflow-hidden" style={{ height: 300 }}>
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(88,101,242,0.15) 0%, transparent 65%)" }} />
              {[
                { icon: "⚡", label: "Artemis", tag: "APP", text: "475 VP delivered to @neo", sub: "Payment confirmed • ₹399", dot: "#57f287" },
                { icon: "🔔", label: "Artemis", tag: "APP", text: "Scheduled drop is live in #shop", sub: "Squad bundle unlocked", dot: "#f7c559" },
                { icon: "✅", label: "Artemis", tag: "APP", text: "Ticket #88 closed for @mira", sub: "Support resolved instantly", dot: "#5bc0eb" },
              ].map((n, i) => (
                <div
                  key={i}
                  className="relative z-10 w-full rounded-xl px-3 py-2.5 flex items-start gap-3"
                  style={{ background: "#242424", border: "1px solid #2e2e2e" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                    style={{ background: "#5865F2" }}
                  >{n.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-white text-xs font-semibold">{n.label}</span>
                      <span className="text-xs px-1 rounded" style={{ background: "#5865F2", color: "#fff", fontSize: 9 }}>{n.tag}</span>
                    </div>
                    <p className="text-xs truncate" style={{ color: "#ccc" }}>{n.text}</p>
                    <p className="text-xs" style={{ color: "#555" }}>{n.sub}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: n.dot }} />
                </div>
              ))}
            </div>
            <div className="p-6" style={{ height: 170 }}>
              <RiBellLine size={20} className="mb-2" style={{ color: "#555" }} />
              <h3 className="text-white text-base font-semibold mb-1">Push Notifications:</h3>
              <p className="text-sm" style={{ color: "#666", fontFamily: "var(--font-dm-sans), sans-serif" }}>Stay on top of your activity with instant alerts for all transactions.</p>
            </div>
          </div>

        </div>

        {/* ── Marquee text ── */}
        <div className="px-8 md:px-16 pt-24 pb-12">
          <p
            className="text-white text-center leading-[1.15] max-w-4xl mx-auto"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontFamily: "var(--font-source-serif), serif",
              fontWeight: 400,
            }}
          >
            Top titles, always fresh. We update denominations and stock in real time—so your players never wait.
          </p>
        </div>

        {/* ── Icon carousel ── */}
        <div className="relative overflow-hidden pb-12" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
          <div
            className="flex gap-4 w-max"
            style={{ animation: "scrollIcons 77s linear infinite" }}
          >
            {/* First copy */}
            {carouselItems.map((g, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  width: 120,
                  height: 120,
                  background: g.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <GameLogoIcon game={g} size={40} />
                <span className="text-white text-xs font-semibold opacity-80">{g.label}</span>
              </div>
            ))}
            {/* Second copy — identical, for seamless loop */}
            {carouselItems.map((g, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  width: 120,
                  height: 120,
                  background: g.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <GameLogoIcon game={g} size={40} />
                <span className="text-white text-xs font-semibold opacity-80">{g.label}</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollIcons {
            from { transform: translateX(0); }
            to   { transform: translateX(-3264px); }
          }
        `}</style>

      </div>
    </section>
  );
}
