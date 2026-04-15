"use client";
import { useState, useMemo } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

export default function HomeFooter({ bgColor = "#ebebeb" }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const stars = useMemo(() =>
    Array.from({ length: 55 }).map(() => ({
      w:       Math.random() < 0.7 ? 1.5 : 2.5,
      opacity: 0.15 + Math.random() * 0.45,
      top:     `${Math.random() * 80}%`,
      left:    `${Math.random() * 100}%`,
    }))
  , []);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <div style={{ background: bgColor, padding: "0 clamp(16px,3vw,32px) clamp(16px,2vw,32px)" }}>
      <footer style={{ background: "#0a0a0a", borderRadius: 24, overflow: "hidden", position: "relative" }}>

        {/* Starfield */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {stars.map((s, i) => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%",
              width: s.w, height: s.w, background: "#fff",
              opacity: s.opacity, top: s.top, left: s.left }} />
          ))}
        </div>

        {/* Shooting stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { left: "15%", top: "20%", delay: "0s"   },
            { left: "40%", top: "12%", delay: "1.4s" },
            { left: "65%", top: "35%", delay: "2.8s" },
            { left: "80%", top: "8%",  delay: "0.7s" },
          ].map((s, i) => (
            <div key={i} className="absolute"
              style={{ left: s.left, top: s.top, width: 120, height: 1.5,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                transform: "rotate(35deg)",
                animation: "shoot 3.5s ease-in-out infinite",
                animationDelay: s.delay, opacity: 0 }} />
          ))}
        </div>

        {/* Tagline */}
        <div className="relative z-10 w-full pt-20 pb-12 text-center md:pt-28 md:pb-16">
          <p style={{ fontSize: "clamp(2.4rem,8vw,5.5rem)", lineHeight: 1.05,
            color: "#fff", fontWeight: 700, letterSpacing: "-0.01em",
            fontFamily: "var(--font-lexend),sans-serif", textTransform: "uppercase" }}>
            TOP UP IN SECONDS.<br />PLAY FOR HOURS.
          </p>
        </div>

        {/* Conic blob */}
        <div style={{ position: "absolute", bottom: 0, left: "50%",
          width: "80%", height: 240,
          background: "conic-gradient(from 200deg at 50% 100%, #ff6b35 0%, #f7c59f 20%, #5bc0eb 50%, #9b59b6 70%, #ff4655 90%, #ff6b35 100%)",
          filter: "blur(70px)", opacity: 0.35,
          transform: "translate(-50%,30%)", pointerEvents: "none" }} />

        {/* Bottom row */}
        <div className="relative z-10 px-8 py-8 md:px-16 md:py-12" style={{ borderTop: "1px solid #1f1f1f" }}>
          <div className="flex flex-wrap items-start justify-between gap-6">

            {/* Nav links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Home",    href: "/"  },
                { label: "Guides",  href: "#"  },
                { label: "Support", href: "#"  },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="text-[13px] md:text-sm"
                  style={{ color: "#666", textDecoration: "none", fontFamily: "var(--font-dm-sans),sans-serif" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "#666"}>
                  {label}
                </a>
              ))}
            </nav>

            {/* Email subscribe */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p className="text-[13px] md:text-sm"
                style={{ color: "#aaa", margin: 0, fontFamily: "var(--font-dm-sans),sans-serif" }}>
                Stay in touch
              </p>
              {subscribed ? (
                <p className="text-[13px] md:text-sm"
                  style={{ color: "#4ade80", margin: 0, fontFamily: "var(--font-dm-sans),sans-serif" }}>
                  Thanks! You&apos;re on the list.
                </p>
              ) : (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input type="email" placeholder="name@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") handleSubscribe(); }}
                    className="w-full sm:w-[200px] md:w-[240px] text-[13px] md:text-sm"
                    style={{ background: "#1a1a1a", border: "1px solid #2a2a2a",
                      color: "#fff", borderRadius: 10, padding: "10px 14px", outline: "none" }} />
                  <button type="button" onClick={handleSubscribe}
                    className="flex items-center justify-center gap-[6px] text-[13px] md:text-sm"
                    style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#fff",
                      borderRadius: 10, padding: "10px 14px", fontWeight: 500, cursor: "pointer" }}>
                    <RiSendPlaneLine size={13} /> Subscribe
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </footer>
    </div>
  );
}
