"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  RiSwordLine, RiCustomerService2Line, RiGamepadLine, RiStore2Line,
  RiGroupLine, RiMessage3Line, RiDiscordFill,
  RiBuildingLine, RiUserAddLine,
} from "react-icons/ri";

const notifications = [
  { id: 1, Icon: RiSwordLine,            iconColor: "#ff4655", text: "VALORANT • 475 VP delivered to @neo",      side: "left",  top: "10%", finalRot: -24, startX:  460, startY:  248 },
  { id: 2, Icon: RiCustomerService2Line, iconColor: "#5865F2", text: "Support • Ticket #124 closed for @mira",  side: "right", top: "10%", finalRot:  24, startX: -460, startY:  248 },
  { id: 3, Icon: RiGamepadLine,          iconColor: "#ff6b35", text: "Dota 2 • Battle Pass level up for @skye", side: "left",  top: "38%", finalRot:  -4, startX:  460, startY:   74 },
  { id: 4, Icon: RiStore2Line,           iconColor: "#f7c559", text: "Scheduled Drop • Live now in #shop",      side: "right", top: "38%", finalRot:   4, startX: -460, startY:   74 },
  { id: 5, Icon: RiGroupLine,            iconColor: "#57f287", text: "Squad Bundle • Group buy unlocked",       side: "left",  top: "66%", finalRot:  18, startX:  460, startY:  -99 },
  { id: 6, Icon: RiMessage3Line,         iconColor: "#5bc0eb", text: "Lysto • DM offers enabled by @zain",      side: "right", top: "66%", finalRot: -18, startX: -460, startY:  -99 },
];

const ctaButtons = [
  { label: "Add to Discord DM",       href: "https://discord.com/users/1460236363365351562",                     Icon: RiDiscordFill,   primary: true  },
  { label: "Add to Community Server", href: "https://discord.com/oauth2/authorize?client_id=1414466801852481606", Icon: RiBuildingLine,  primary: false },
  { label: "Add to Friend Server",    href: null,                                                                  Icon: RiUserAddLine,   comingSoon: true },
];

export default function HomeHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress     = Math.min(scrollY / 320, 1);
  const scale        = 1 - progress * 0.35;
  const opacity      = Math.max(0, 1 - progress * 1.6);
  const easeOut      = (t) => 1 - Math.pow(1 - t, 3);
  const phoneProgress = Math.min(Math.max((scrollY - 80) / 480, 0), 1);

  const getNotifStyle = (n) => {
    const stagger = (n.id - 1) * 0.09;
    const p = easeOut(Math.min(Math.max((phoneProgress - stagger) / 0.58, 0), 1));
    return {
      transform: `translateY(calc(-50% + ${n.startY * (1 - p)}px)) translateX(${n.startX * (1 - p)}px) rotate(${n.finalRot}deg)`,
      opacity:   Math.min(1, p * 2.2),
      zIndex:    5,
    };
  };

  const glowSize    = 80  + phoneProgress * 520;
  const glowBlur    = 40  + phoneProgress * 40;
  const glowOpacity = phoneProgress * 0.65;

  return (
    <section id="home" style={{ background: "#f5f0e8" }}>

      {/* ── Sticky shrinking heading ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-center pointer-events-none"
        style={{ background: "#f5f0e8", paddingTop: "clamp(64px, 8vw, 112px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}
      >
        <div style={{ width: "100%", maxWidth: 1200, paddingLeft: 24, paddingRight: 24, display: "flex", justifyContent: "center" }}>
        <h1
          className="text-center max-w-4xl"
          style={{
            fontFamily:    "var(--font-source-serif), serif",
            fontWeight:    400,
            fontSize:      "clamp(2.4rem, 7vw, 6.5rem)",
            lineHeight:    1.05,
            letterSpacing: "-0.01em",
            color:         "#0f0f0f",
            transform:     `scale(${scale})`,
            opacity,
            transformOrigin: "top center",
            transition:    "transform 0.05s linear, opacity 0.05s linear",
          }}
        >
          Top up your favorite games in seconds
        </h1>
        </div>
      </div>

      {/* ── Phone + notifications ── */}
      <div className="relative px-4 md:px-8 pb-20 md:pb-28" style={{ background: "#f5f0e8", zIndex: 20 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div className="relative flex justify-center" style={{ minHeight: "min(620px, 80vw)" }}>

            {/* Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width:   glowSize, height: glowSize,
                background: "radial-gradient(circle, rgba(232,0,61,0.5) 0%, rgba(232,0,61,0.15) 50%, transparent 70%)",
                filter:  `blur(${glowBlur}px)`,
                opacity: glowOpacity,
                zIndex:  1,
              }}
            />

            {notifications.map((n) => (
              <div
                key={n.id}
                className="absolute hidden md:flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium"
                style={{
                  background:   "#fff",
                  color:        "#1a1a1a",
                  border:       "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 100,
                  top:          n.top,
                  ...(n.side === "left" ? { left: 0 } : { right: 0 }),
                  whiteSpace:   "nowrap",
                  boxShadow:    "0 2px 12px rgba(0,0,0,0.06)",
                  fontFamily:   "var(--font-dm-sans), sans-serif",
                  ...getNotifStyle(n),
                }}
              >
                <n.Icon size={13} style={{ color: n.iconColor, flexShrink: 0 }} />
                <span style={{ fontSize: 13 }}>{n.text}</span>
              </div>
            ))}

            {/* Phone */}
            <div className="relative flex-shrink-0" style={{ zIndex: 10, width: "min(280px, 56vw)" }}>
              <Image
                src="/device.png"
                alt="Artemis Discord bot gift card shop"
                width={560} height={1140}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>

          {/* Subtle glow bar */}
          <div
            className="mx-auto rounded-full"
            style={{ width: 280, height: 1, background: "linear-gradient(90deg, transparent, rgba(232,0,61,0.3), transparent)", marginTop: -48, marginBottom: 40 }}
          />

          {/* Caption */}
          <p
            className="text-center max-w-md mx-auto mb-10"
            style={{
              fontSize:   "clamp(15px, 2.5vw, 18px)",
              lineHeight: 1.65,
              color:      "#5a5a5a",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 400,
            }}
          >
            Instant game currency, best discounts, and no-nonsense delivery — built for gamers.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            {ctaButtons.map(({ label, href, Icon, primary, comingSoon }) =>
              comingSoon ? (
                <div
                  key={label}
                  className="flex items-center gap-2 w-full sm:w-auto justify-center"
                  style={{
                    background:   "#fff",
                    color:        "#bbb",
                    padding:      "12px 24px",
                    borderRadius: 100,
                    fontSize:     14,
                    fontWeight:   600,
                    cursor:       "not-allowed",
                    fontFamily:   "var(--font-dm-sans), sans-serif",
                    border:       "1px solid #e0ddd8",
                  }}
                >
                  <Icon size={15} />
                  {label}
                  <span style={{ fontSize: 11, padding: "2px 8px", background: "#f3f0eb", borderRadius: 100, color: "#bbb", marginLeft: 4, border: "1px solid #e8e4de" }}>Soon</span>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full sm:w-auto justify-center transition-opacity hover:opacity-80"
                  style={{
                    background:   primary ? "#5865F2" : "#111",
                    color:        "#fff",
                    padding:      "13px 24px",
                    borderRadius: 100,
                    fontSize:     14,
                    fontWeight:   600,
                    textDecoration: "none",
                    fontFamily:   "var(--font-dm-sans), sans-serif",
                    letterSpacing: "0.01em",
                  }}
                >
                  <Icon size={15} />
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
