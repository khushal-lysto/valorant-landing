"use client";
import { RiTwitterXFill, RiLinkedinFill, RiInstagramLine, RiSendPlaneLine } from "react-icons/ri";

const footerLinks = ["Home", "Guides", "Support", "404"];

export default function HomeFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() < 0.7 ? 1.5 : 2.5,
              height: Math.random() < 0.7 ? 1.5 : 2.5,
              background: "#fff",
              opacity: 0.2 + Math.random() * 0.5,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "15%", top: "20%", delay: "0s" },
          { left: "40%", top: "12%", delay: "1.4s" },
          { left: "65%", top: "35%", delay: "2.8s" },
          { left: "80%", top: "8%",  delay: "0.7s" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: s.left,
              top: s.top,
              width: 120,
              height: 1.5,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
              transform: "rotate(35deg)",
              animation: "shoot 3.5s ease-in-out infinite",
              animationDelay: s.delay,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Main tagline */}
      <div className="relative z-10 py-32 px-8 text-center">
        <p
          className="font-bold uppercase text-white"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            fontFamily: "var(--font-lexend), sans-serif",
          }}
        >
          TOP UP IN SECONDS.<br />PLAY FOR HOURS.
        </p>
      </div>

      {/* Gradient blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "80%",
          height: 300,
          background:
            "conic-gradient(from 200deg at 50% 100%, #ff6b35 0%, #f7c59f 20%, #5bc0eb 50%, #9b59b6 70%, #ff4655 90%, #ff6b35 100%)",
          filter: "blur(80px)",
          opacity: 0.35,
          transform: "translate(-50%, 30%)",
        }}
      />

      {/* Footer row */}
      <div
        className="relative z-10 flex flex-wrap items-start justify-between gap-8 px-8 md:px-16 pb-12"
        style={{ borderTop: "1px solid #1f1f1f" }}
      >
        {/* Nav links */}
        <ul className="flex flex-col gap-2 pt-8">
          {footerLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm transition-colors"
                style={{ color: "#666" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#666")}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Stay in touch */}
        <div className="flex flex-col gap-4 pt-8">
          <p className="text-sm font-medium" style={{ color: "#aaa" }}>
            Stay in touch
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="name@email.com"
              className="rounded-lg px-4 py-2.5 text-sm outline-none"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "#fff",
                width: 220,
              }}
            />
            <button
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors hover:bg-white/10"
              style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              <RiSendPlaneLine size={13} /> Subscribe
            </button>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 pt-8 self-start">
          {[
            { Icon: RiTwitterXFill, label: "Twitter" },
            { Icon: RiLinkedinFill, label: "LinkedIn" },
            { Icon: RiInstagramLine, label: "Instagram" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
              style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#888" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888";
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
  );
}
