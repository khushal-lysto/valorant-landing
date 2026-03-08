"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  RiSwordLine, RiCustomerService2Line, RiGamepadLine, RiStore2Line,
  RiGroupLine, RiMessage3Line, RiDiscordFill,
  RiBuildingLine, RiUserAddLine,
} from "react-icons/ri";

// finalRot: resting angle facing radially outward
// startX/startY: offset from final position back to phone centre (minHeight 620, centre ~310px)
const notifications = [
  { id: 1, Icon: RiSwordLine,            iconColor: "#ff4655", text: "VALORANT • 475 VP delivered to @neo",      side: "left",  top: "10%", finalRot: -24, startX:  460, startY:  248 },
  { id: 2, Icon: RiCustomerService2Line, iconColor: "#5865F2", text: "Support • Ticket #124 closed for @mira",  side: "right", top: "10%", finalRot:  24, startX: -460, startY:  248 },
  { id: 3, Icon: RiGamepadLine,          iconColor: "#ff6b35", text: "Dota 2 • Battle Pass level up for @skye", side: "left",  top: "38%", finalRot:  -4, startX:  460, startY:   74 },
  { id: 4, Icon: RiStore2Line,           iconColor: "#f7c559", text: "Scheduled Drop • Live now in #shop",      side: "right", top: "38%", finalRot:   4, startX: -460, startY:   74 },
  { id: 5, Icon: RiGroupLine,            iconColor: "#57f287", text: "Squad Bundle • Group buy unlocked",       side: "left",  top: "66%", finalRot:  18, startX:  460, startY:  -99 },
  { id: 6, Icon: RiMessage3Line,         iconColor: "#5bc0eb", text: "Lysto • DM offers enabled by @zain",      side: "right", top: "66%", finalRot: -18, startX: -460, startY:  -99 },
];

const ctaButtons = [
  { label: "Add to Discord DM",       href: "https://discord.com/users/1460236363365351562",                    Icon: RiDiscordFill  },
  { label: "Add to Friend Server",    href: null,                                                                Icon: RiUserAddLine,  comingSoon: true },
  { label: "Add to Community Server", href: "https://discord.com/oauth2/authorize?client_id=1414466801852481606", Icon: RiBuildingLine },
];

export default function HomeHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Heading shrinks + fades over first 320px of scroll
  const progress = Math.min(scrollY / 320, 1);
  const scale    = 1 - progress * 0.35;
  const opacity  = Math.max(0, 1 - progress * 1.6);

  // Notifications + glow driven by scroll (80px → 560px)
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const phoneProgress = Math.min(Math.max((scrollY - 80) / 480, 0), 1);

  const getNotifStyle = (n) => {
    const stagger = (n.id - 1) * 0.09;
    const p = easeOut(Math.min(Math.max((phoneProgress - stagger) / 0.58, 0), 1));
    // Translate radially from phone centre; rotation stays fixed at finalRot throughout
    const x = n.startX * (1 - p);
    const y = n.startY * (1 - p);
    return {
      transform: `translateY(calc(-50% + ${y}px)) translateX(${x}px) rotate(${n.finalRot}deg)`,
      opacity:   Math.min(1, p * 2.2),
      zIndex:    5,
    };
  };

  // Glow grows from 80px → 600px diameter
  const glowSize   = 80  + phoneProgress * 520;
  const glowBlur   = 40  + phoneProgress * 40;
  const glowOpacity = phoneProgress * 0.7;

  return (
    <section id="home" style={{ background: "#f5f0e8" }}>

      {/* ── Shrinking heading ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-center pt-20 md:pt-28 pb-16 px-6 pointer-events-none"
        style={{ background: "#f5f0e8" }}
      >
        <h1
          className="text-center leading-[1.05] max-w-4xl"
          style={{
            fontFamily: "var(--font-source-serif), serif",
            fontWeight: 400,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            color: "#111",
            transform: `scale(${scale})`,
            opacity,
            transformOrigin: "top center",
            transition: "transform 0.05s linear, opacity 0.05s linear",
          }}
        >
          Top up your favorite games in seconds
        </h1>
      </div>

      {/* ── Phone section ── */}
      <div className="relative px-8 pb-24" style={{ background: "#f5f0e8", zIndex: 20 }}>
        <div className="max-w-6xl mx-auto">

          {/* Phone + floating notifications */}
          <div className="relative flex justify-center" style={{ minHeight: "min(620px, 80vw)" }}>

            {/* Diffused red glow — grows with scroll, sits behind everything */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width:   glowSize,
                height:  glowSize,
                background: "radial-gradient(circle, rgba(232,0,61,0.55) 0%, rgba(232,0,61,0.2) 45%, transparent 70%)",
                filter:  `blur(${glowBlur}px)`,
                opacity: glowOpacity,
                zIndex:  1,
              }}
            />

            {notifications.map((n) => (
              <div
                key={n.id}
                className="absolute hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-md text-sm font-medium"
                style={{
                  background: "#ede8de",
                  color: "#222",
                  border: "1px solid rgba(0,0,0,0.08)",
                  top: n.top,
                  ...(n.side === "left" ? { left: 0 } : { right: 0 }),
                  whiteSpace: "nowrap",
                  ...getNotifStyle(n),
                }}
              >
                <n.Icon size={14} style={{ color: n.iconColor, flexShrink: 0 }} />
                <span>{n.text}</span>
              </div>
            ))}

            {/* Phone screenshot */}
            <div className="relative flex-shrink-0" style={{ zIndex: 10, width: 280 }}>
              <Image
                src="/device.png"
                alt="Artemis Discord bot gift card shop"
                width={560}
                height={1140}
                style={{ width: 280, height: "auto", display: "block" }}
                priority
              />
            </div>
          </div>

          {/* Glow */}
          <div
            className="-mt-16 mb-12 mx-auto rounded-full blur-3xl opacity-40"
            style={{ width: 320, height: 80, background: "radial-gradient(ellipse, rgba(255,80,80,0.5), transparent)" }}
          />

          {/* Caption */}
          <p className="text-center text-xl md:text-2xl font-medium max-w-lg mx-auto mb-10" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Instant game currency, best discounts, and no-nonsense delivery—built for gamers.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 px-4">
            {ctaButtons.map(({ label, href, Icon, comingSoon }) =>
              comingSoon ? (
                <div
                  key={label}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold w-full sm:w-auto justify-center"
                  style={{ background: "#2a2a2a", color: "#666", cursor: "not-allowed" }}
                >
                  <Icon size={16} />
                  {label}
                  <span className="ml-1 text-xs px-2 py-0.5 rounded-full" style={{ background: "#333", color: "#888" }}>Soon</span>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
                  style={{ background: "#e8003d" }}
                >
                  <Icon size={16} />
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
