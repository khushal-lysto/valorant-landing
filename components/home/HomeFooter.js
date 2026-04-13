"use client";
import { useState } from "react";
import { RiTwitterXFill, RiLinkedinFill, RiInstagramLine, RiSendPlaneLine } from "react-icons/ri";

export default function HomeFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    /* Outer wrapper gives the footer a floating card feel with all 4 corners visible */
    <div className="px-4 md:px-8 pb-4" style={{ background: "#f0ebe3" }}>
      <footer
        className="relative overflow-hidden"
        style={{ background: "#0a0a0a", borderRadius: 24 }}
      >
        {/* Starfield */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width:   Math.random() < 0.7 ? 1.5 : 2.5,
                height:  Math.random() < 0.7 ? 1.5 : 2.5,
                background: "#fff",
                opacity: 0.2 + Math.random() * 0.5,
                top:     `${Math.random() * 80}%`,
                left:    `${Math.random() * 100}%`,
              }}
            />
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
            <div
              key={i}
              className="absolute"
              style={{
                left:      s.left,
                top:       s.top,
                width:     120,
                height:    1.5,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                transform:  "rotate(35deg)",
                animation:  "shoot 3.5s ease-in-out infinite",
                animationDelay: s.delay,
                opacity:    0,
              }}
            />
          ))}
        </div>

        {/* Main tagline */}
        <div className="relative z-10 py-32 px-8 text-center">
          <p
            className="uppercase text-white"
            style={{
              fontSize:    "clamp(3rem, 9vw, 8rem)",
              lineHeight:  1.05,
              letterSpacing: "-0.01em",
              fontFamily:  "var(--font-lexend), sans-serif",
            }}
          >
            TOP UP IN SECONDS.<br />PLAY FOR HOURS.
          </p>
        </div>

        {/* Gradient blob */}
        <div
          className="absolute bottom-0 left-1/2 pointer-events-none"
          style={{
            width:    "80%",
            height:   300,
            background:
              "conic-gradient(from 200deg at 50% 100%, #ff6b35 0%, #f7c59f 20%, #5bc0eb 50%, #9b59b6 70%, #ff4655 90%, #ff6b35 100%)",
            filter:    "blur(80px)",
            opacity:   0.35,
            transform: "translate(-50%, 30%)",
          }}
        />

        {/* Footer bottom row */}
        <div
          className="relative z-10 flex flex-wrap items-start justify-between gap-8 px-8 md:px-16 pb-12"
          style={{ borderTop: "1px solid #1f1f1f" }}
        >
          {/* Stay in touch */}
          <div className="flex flex-col gap-4 pt-8">
            <p className="text-sm font-medium" style={{ color: "#aaa", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Stay in touch
            </p>
            {subscribed ? (
              <p className="text-sm" style={{ color: "#4ade80", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Thanks! You&apos;re on the list.
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
                  className="rounded-lg px-4 py-2.5 text-sm outline-none w-full sm:w-[200px]"
                  style={{
                    background: "#1a1a1a",
                    border:     "1px solid #2a2a2a",
                    color:      "#fff",
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white"
                  style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", cursor: "pointer" }}
                >
                  <RiSendPlaneLine size={13} /> Subscribe
                </button>
              </div>
            )}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-8 self-start">
            {[
              { Icon: RiTwitterXFill,  label: "Twitter"   },
              { Icon: RiLinkedinFill,  label: "LinkedIn"  },
              { Icon: RiInstagramLine, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#888" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color       = "#fff";
                  e.currentTarget.style.borderColor = "#444";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color       = "#888";
                  e.currentTarget.style.borderColor = "#2a2a2a";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes shoot {
            0%   { opacity: 0; transform: rotate(35deg) translateX(-40px); }
            20%  { opacity: 0.8; }
            60%  { opacity: 0.8; }
            100% { opacity: 0; transform: rotate(35deg) translateX(160px); }
          }
        `}</style>
      </footer>
    </div>
  );
}
