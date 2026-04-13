"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  RiShieldCheckLine, RiDiscountPercentLine, RiBellLine, RiNotification2Line,
  RiDiscordFill,
} from "react-icons/ri";

const gameLogos = [
  { label: "PlayStation", bg: "#003087", src: "/logos/playstation.svg" },
  { label: "Xbox",        bg: "#107C10", src: "/logos/xbox.svg",       noFilter: true },
  { label: "Steam",       bg: "#1b2838", src: "/logos/steam.svg",      noFilter: true },
  { label: "Valorant",    bg: "#ff4655", src: "/logos/valorant.svg" },
  { label: "BGMI",        bg: "#1a1a1a", src: "/logos/bgmi.svg",       noFilter: true },
  { label: "Genshin",     bg: "#1e4fa3", src: "/logos/genshin.svg" },
  { label: "Roblox",      bg: "#1a1a1a", src: "/logos/roblox.svg",     noFilter: true },
  { label: "Minecraft",   bg: "#5a8a35", src: "/logos/minecraft.svg",  noFilter: true },
];

function GameLogoIcon({ game, size = 28 }) {
  return (
    <Image
      src={game.src}
      alt={game.label}
      width={size} height={size}
      style={game.noFilter ? {} : { filter: "brightness(0) invert(1)" }}
    />
  );
}

const carouselItems = [...gameLogos, ...gameLogos, ...gameLogos];

export default function HomeBento() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bentoCards = [
    {
      visual: (
        <div className="flex flex-col justify-center px-5 py-6 gap-3" style={{ height: 300, background: "#1e1f22" }}>
          <div className="flex items-center gap-2 pb-2 mb-1" style={{ borderBottom: "1px solid #2e2e2e" }}>
            <span style={{ color: "#72767d", fontSize: 15 }}>#</span>
            <span className="text-xs font-semibold" style={{ color: "#c8cbcf" }}>artemis-shop</span>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: "#5865F2" }}>U</div>
            <div>
              <span className="text-xs font-semibold" style={{ color: "#fff" }}>you </span>
              <span className="text-xs" style={{ color: "#72767d" }}>Today at 4:20 PM</span>
              <p className="text-xs mt-0.5" style={{ color: "#dcddde" }}>/shop <span style={{ color: "#5865F2" }}>valorant</span> 475VP</p>
            </div>
          </div>
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
      ),
      Icon:  RiShieldCheckLine,
      title: "Instant Delivery",
      desc:  "Codes arrive in DM in seconds",
    },
    {
      visual: (
        <div className="flex flex-col justify-center px-5 py-5" style={{ height: 300, background: "#1e1f22" }}>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden">
              <Image src="/artemis-logo.jpeg" alt="Artemis" width={28} height={28} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold" style={{ color: "#fff" }}>Artemis</span>
              <span className="text-xs px-1 rounded" style={{ background: "#5865F2", color: "#fff", fontSize: 9 }}>APP</span>
            </div>
          </div>
          <div className="rounded-md p-3" style={{ background: "#2b2d31", borderLeft: "3px solid #f7c559" }}>
            <p className="text-xs font-semibold mb-2" style={{ color: "#f7c559" }}>🏷️ Best Deals Today</p>
            <div className="flex flex-col gap-1.5">
              {[
                { game: "Valorant",       off: "15% off", orig: "₹470", price: "₹399" },
                { game: "Genshin Impact", off: "15% off", orig: "₹800", price: "₹680" },
                { game: "BGMI",           off: "8% off",  orig: "₹350", price: "₹322" },
                { game: "Roblox",         off: "7.5% off",orig: "₹650", price: "₹601" },
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
      ),
      Icon:  RiDiscountPercentLine,
      title: "Lowest Prices, Highest Perks",
      desc:  "Best in-game discounts & rewards",
    },
    {
      visual: (
        <div className="p-6 overflow-hidden" style={{ height: 300 }}>
          <div className="grid grid-cols-4 gap-2 h-full">
            {gameLogos.map((g, i) => (
              <div key={i} className="rounded-xl flex flex-col items-center justify-center gap-1.5" style={{ background: g.bg }}>
                <GameLogoIcon game={g} size={24} />
                <span className="text-white text-[9px] font-semibold leading-none opacity-80">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      Icon:  RiBellLine,
      title: "Smart Promotions",
      desc:  "Scheduled drops, XP-based perks, and first-purchase boosts",
    },
    {
      visual: (
        <div className="flex flex-col items-center justify-center gap-2.5 px-6 py-8 relative overflow-hidden" style={{ height: 300 }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(88,101,242,0.15) 0%, transparent 65%)" }} />
          {[
            { icon: "⚡", text: "475 VP delivered to @neo",           sub: "Payment confirmed • ₹399", dot: "#57f287" },
            { icon: "🔔", text: "Scheduled drop is live in #shop",     sub: "Squad bundle unlocked",    dot: "#f7c559" },
            { icon: "✅", text: "Ticket #88 closed for @mira",         sub: "Support resolved instantly",dot: "#5bc0eb" },
          ].map((n, i) => (
            <div key={i} className="relative z-10 w-full rounded-xl px-3 py-2.5 flex items-start gap-3" style={{ background: "#242424", border: "1px solid #2e2e2e" }}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "#5865F2" }}>{n.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-white text-xs font-semibold">Artemis</span>
                  <span className="text-xs px-1 rounded" style={{ background: "#5865F2", color: "#fff", fontSize: 9 }}>APP</span>
                </div>
                <p className="text-xs truncate" style={{ color: "#ccc" }}>{n.text}</p>
                <p className="text-xs" style={{ color: "#555" }}>{n.sub}</p>
              </div>
              <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: n.dot }} />
            </div>
          ))}
        </div>
      ),
      Icon:  RiNotification2Line,
      title: "Push Notifications",
      desc:  "Instant alerts for every transaction and drop",
    },
  ];

  return (
    <section id="features" style={{ background: "#ece7df", padding: "clamp(48px,6vw,80px) 16px" }}>
      <div
        ref={ref}
        style={{
          background:  "#111",
          borderRadius: 24,
          overflow:    "hidden",
          maxWidth:    1200,
          margin:      "0 auto",
          transform:   visible ? "scale(1) translateY(0)" : "scale(0.9) translateY(56px)",
          opacity:     visible ? 1 : 0,
          transition:  "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease-out",
        }}
      >
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start" style={{ padding: "clamp(32px,4vw,56px) clamp(20px,3vw,48px) clamp(24px,3vw,40px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-source-serif), serif",
              fontWeight: 400,
              fontSize:   "clamp(1.5rem,3.5vw,2.25rem)",
              lineHeight: 1.3,
              color:      "#fff",
            }}
          >
            Your all-in-one game top-up engine. Built for gamers, ready for scale.
          </h2>
          <div className="flex flex-col gap-4">
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#777", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Instant delivery, smart promos, and fraud-safe checkout with zero extra ops.
            </p>
            <a
              href="https://discord.com/users/1460236363365351562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start transition-opacity hover:opacity-80"
              style={{
                background:   "#1a1a1a",
                border:       "1px solid #2a2a2a",
                color:        "#fff",
                padding:      "10px 20px",
                borderRadius: 100,
                fontSize:     13,
                fontWeight:   600,
                textDecoration: "none",
                fontFamily:   "var(--font-dm-sans), sans-serif",
              }}
            >
              <RiDiscordFill size={13} />
              Add to Discord DM
            </a>
          </div>
        </div>

        {/* 2×2 bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ padding: "0 clamp(12px,2vw,24px) clamp(12px,2vw,24px)" }}>
          {bentoCards.map(({ visual, Icon, title, desc }) => (
            <div key={title} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
              {visual}
              <div style={{ padding: "20px 24px", borderTop: "1px solid #222" }}>
                <Icon size={18} style={{ color: "#444", marginBottom: 10 }} />
                <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#666", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee text */}
        <div style={{ padding: "clamp(48px,6vw,80px) clamp(20px,4vw,64px) clamp(32px,4vw,56px)" }}>
          <p
            className="text-center"
            style={{
              fontSize:   "clamp(1.8rem,4.5vw,3.5rem)",
              fontFamily: "var(--font-source-serif), serif",
              fontWeight: 400,
              color:      "#fff",
              lineHeight: 1.2,
              maxWidth:   800,
              margin:     "0 auto",
            }}
          >
            Top titles, always fresh. We update denominations and stock in real time — so your players never wait.
          </p>
        </div>

        {/* Icon carousel */}
        <div
          className="relative overflow-hidden pb-12"
          style={{
            maskImage:       "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-4 w-max" style={{ animation: "scrollIcons 77s linear infinite" }}>
            {[...carouselItems, ...carouselItems].map((g, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{ width: 110, height: 110, background: g.bg, border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <GameLogoIcon game={g} size={36} />
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
