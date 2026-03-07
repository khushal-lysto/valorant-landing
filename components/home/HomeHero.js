import {
  RiShieldCheckLine,
  RiDiscountPercentLine,
  RiBellLine,
  RiPlug2Line,
  RiGamepadLine,
} from "react-icons/ri";

const gameLogos = [
  { label: "PS",      bg: "#003087", text: "#fff" },
  { label: "Xbox",    bg: "#107C10", text: "#fff" },
  { label: "Steam",   bg: "#1b2838", text: "#c6d4df" },
  { label: "Steam",   bg: "#1b2838", text: "#c6d4df" },
  { label: "VALO",    bg: "#ff4655", text: "#fff" },
  { label: "BGMI",    bg: "#e8a020", text: "#000" },
  { label: "Genshin", bg: "#1e4fa3", text: "#fff" },
  { label: "Roblox",  bg: "#cc0000", text: "#fff" },
  { label: "BGMI",    bg: "#e8a020", text: "#000" },
  { label: "Roblox",  bg: "#cc0000", text: "#fff" },
  { label: "Roblox",  bg: "#cc0000", text: "#fff" },
  { label: "MC",      bg: "#5a8a35", text: "#fff" },
];

export default function HomeHero() {
  return (
    <section
      className="min-h-screen px-8 md:px-16 pt-28 pb-6"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-col headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-lexend), sans-serif" }}
          >
            Your all-in-one game top-up engine. Built for gamers, ready for scale.
          </h1>
          <div className="flex flex-col justify-center gap-6 md:pt-2">
            <p className="text-[#888] text-lg leading-relaxed">
              Instant delivery, smart promos, and fraud-safe checkout with zero extra ops.
            </p>
            <button
              className="self-start px-6 py-3 rounded-full text-white text-sm font-medium transition-colors hover:bg-white/10"
              style={{ border: "1px solid #333" }}
            >
              Add to Discord DM
            </button>
          </div>
        </div>

        {/* 2×2 bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Card 1 — Instant Delivery */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div
              className="flex items-center justify-center py-10 px-6"
              style={{ minHeight: 300 }}
            >
              <div
                className="w-60 rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "#2b2d31" }}
              >
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #ff6b35, #f7c59f, #5bc0eb, #9b59b6, #ff6b35)",
                      }}
                    >
                      A
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Artemis</div>
                      <div className="text-xs" style={{ color: "#888" }}>Welcome</div>
                    </div>
                  </div>
                  <div className="text-xs mb-3" style={{ color: "#aaa" }}>
                    to Artemis by Athena
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {[
                      "Trusted & secure",
                      "Instant delivery",
                      "Official gift cards sourced directly from Athena.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs" style={{ color: "#ccc" }}>
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full py-2 rounded text-white text-xs font-medium"
                    style={{ background: "#5865F2" }}
                  >
                    <RiGamepadLine size={12} className="inline mr-1" /> Buy a Gift Card
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <RiShieldCheckLine size={24} className="mb-2" style={{ color: "#888" }} />
              <h3 className="text-white text-lg font-semibold mb-1">Instant Delivery:</h3>
              <p className="text-sm" style={{ color: "#888" }}>Codes arrive in DM in seconds</p>
            </div>
          </div>

          {/* Card 2 — Lowest prices */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div
              className="flex items-center justify-center relative overflow-hidden"
              style={{ minHeight: 300 }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,180,0,0.25) 0%, transparent 65%)",
                }}
              />
              <div
                className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 38% 32%, #ffe066, #d4860a)",
                  boxShadow:
                    "0 0 60px rgba(255,180,0,0.45), inset 0 2px 6px rgba(255,255,255,0.25)",
                }}
              >
                <span className="text-4xl font-bold" style={{ color: "#7a4400" }}>
                  ₹
                </span>
              </div>
            </div>
            <div className="p-6">
              <RiDiscountPercentLine size={24} className="mb-2" style={{ color: "#888" }} />
              <h3 className="text-white text-lg font-semibold mb-1">Lowest prices, highest perks:</h3>
              <p className="text-sm" style={{ color: "#888" }}>Best in-game discounts & rewards</p>
            </div>
          </div>

          {/* Card 3 — Smart Promotions */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div className="p-6" style={{ minHeight: 300 }}>
              <div className="grid grid-cols-4 gap-2">
                {gameLogos.map((g, i) => (
                  <div
                    key={i}
                    className="rounded-xl flex items-center justify-center text-[9px] font-bold aspect-square"
                    style={{ background: g.bg, color: g.text }}
                  >
                    {g.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 pt-2">
              <RiBellLine size={24} className="mb-2" style={{ color: "#888" }} />
              <h3 className="text-white text-lg font-semibold mb-1">Smart Promotions:</h3>
              <p className="text-sm" style={{ color: "#888" }}>
                Scheduled drops, XP-based perks, and first-purchase boosts.
              </p>
            </div>
          </div>

          {/* Card 4 — Plug & Play */}
          <div className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "#1a1a1a" }}>
            <div
              className="flex items-center justify-center relative overflow-hidden"
              style={{ minHeight: 300 }}
            >
              <div
                className="absolute right-0 top-0 bottom-0 w-2/3"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)",
                }}
              />
              <div
                className="relative z-10 bg-white rounded-2xl p-5 shadow-2xl w-52"
                style={{ transform: "rotate(3deg)" }}
              >
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
                <button className="w-full py-1.5 rounded text-white text-xs font-bold" style={{ background: "#111" }}>
                  SELL
                </button>
              </div>
            </div>
            <div className="p-6 pt-2">
              <RiPlug2Line size={24} className="mb-2" style={{ color: "#888" }} />
              <h3 className="text-white text-lg font-semibold mb-1">Plug & Play:</h3>
              <p className="text-sm" style={{ color: "#888" }}>Go live in minutes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
