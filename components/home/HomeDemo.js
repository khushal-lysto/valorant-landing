"use client";
import {
  RiSwordLine,
  RiCustomerService2Line,
  RiGamepadLine,
  RiStore2Line,
  RiGroupLine,
  RiMessage3Line,
  RiDiscordFill,
  RiGiftLine,
  RiSettings4Line,
  RiBuildingLine,
  RiUserAddLine,
} from "react-icons/ri";

const giftCards = [
  { name: "BGMI", discount: "8% off", sub: "Unknown Cash" },
  { name: "Genshin Impact", discount: "15% off", sub: "Genesis Crystals" },
  { name: "Minecraft", discount: "3% off", sub: "Minecoins" },
  { name: "Roblox", discount: "7.5% off", sub: "USD Credits" },
  { name: "Steam", discount: "3.5% off", sub: "Steam Wallet Balance (INR)" },
  { name: "Valorant", discount: "15% off", sub: "Valorant Points" },
];

const notifications = [
  { id: 1, Icon: RiSwordLine,            iconColor: "#ff4655", text: "VALORANT • 475 VP delivered to @neo",       side: "left",  top: "10%" },
  { id: 2, Icon: RiCustomerService2Line, iconColor: "#5865F2", text: "Support • Ticket #124 closed for @mira",   side: "right", top: "10%" },
  { id: 3, Icon: RiGamepadLine,          iconColor: "#ff6b35", text: "Dota 2 • Battle Pass level up for @skye",  side: "left",  top: "38%" },
  { id: 4, Icon: RiStore2Line,           iconColor: "#f7c559", text: "Scheduled Drop • Live now in #shop",       side: "right", top: "38%" },
  { id: 5, Icon: RiGroupLine,            iconColor: "#57f287", text: "Squad Bundle • Group buy unlocked",        side: "left",  top: "66%" },
  { id: 6, Icon: RiMessage3Line,         iconColor: "#5bc0eb", text: "Lysto • DM offers enabled by @zain",       side: "right", top: "66%" },
];

const ctaButtons = [
  { label: "Add to Discord DM",       Icon: RiDiscordFill   },
  { label: "Add to Friend Server",    Icon: RiUserAddLine   },
  { label: "Add to Community Server", Icon: RiBuildingLine  },
];

export default function HomeDemo() {
  return (
    <section className="py-24 px-8" style={{ background: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Phone + floating notifications */}
        <div className="relative flex justify-center" style={{ minHeight: 620 }}>
          {/* Notification pills */}
          {notifications.map((n) => (
            <div
              key={n.id}
              className="absolute flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-md text-sm font-medium"
              style={{
                background: "#ede8de",
                color: "#222",
                border: "1px solid rgba(0,0,0,0.08)",
                top: n.top,
                ...(n.side === "left"
                  ? { left: 0, transform: "translateY(-50%) rotate(-2deg)" }
                  : { right: 0, transform: "translateY(-50%) rotate(1deg)" }),
                whiteSpace: "nowrap",
                animation: `float${n.id} 4s ease-in-out infinite`,
                animationDelay: `${(n.id - 1) * 0.6}s`,
              }}
            >
              <n.Icon size={14} style={{ color: n.iconColor, flexShrink: 0 }} />
              <span>{n.text}</span>
            </div>
          ))}

          {/* Phone frame */}
          <div
            className="relative z-10 flex-shrink-0"
            style={{
              width: 280,
              borderRadius: 40,
              background: "#111",
              padding: "14px 8px 20px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.35)",
            }}
          >
            {/* Notch */}
            <div
              className="mx-auto mb-2"
              style={{ width: 80, height: 6, background: "#333", borderRadius: 10 }}
            />

            {/* Screen */}
            <div
              className="overflow-hidden"
              style={{ borderRadius: 28, background: "#1e1f22", minHeight: 520 }}
            >
              {/* Discord top bar */}
              <div
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold"
                style={{ background: "#2b2d31", color: "#fff", borderBottom: "1px solid #3a3c41" }}
              >
                <RiGiftLine size={12} style={{ color: "#b5bac1" }} />
                Gift Card Shop
              </div>

              {/* Available label */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold mb-2" style={{ color: "#b5bac1" }}>
                  Available Gift Cards
                </p>
                <div className="space-y-1">
                  {giftCards.map((card) => (
                    <div key={card.name}>
                      <div className="text-xs font-bold" style={{ color: "#fff" }}>
                        {card.name}{" "}
                        <span style={{ color: "#57f287" }}>({card.discount})</span>
                      </div>
                      <div className="text-xs" style={{ color: "#888" }}>
                        {card.sub}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3 mb-2" style={{ color: "#888" }}>
                  Select a title from the dropdown below to view available denominations.
                </p>
                <div
                  className="flex items-center justify-between px-3 py-2 rounded-md mb-2"
                  style={{ background: "#2b2d31", border: "1px solid #444" }}
                >
                  <span className="text-xs" style={{ color: "#aaa" }}>Choose a title</span>
                  <span style={{ color: "#aaa" }}>›</span>
                </div>
                <button
                  className="w-full py-2 rounded-md text-xs font-semibold"
                  style={{ background: "#2b2d31", color: "#fff" }}
                >
                  Need Help?
                </button>
              </div>

              {/* Bottom bar */}
              <div
                className="flex items-center gap-2 px-3 py-2 mt-2"
                style={{ background: "#1e1f22", borderTop: "1px solid #2a2a2a" }}
              >
                <span style={{ color: "#aaa", fontSize: 18, lineHeight: 1 }}>+</span>
                <RiSettings4Line size={16} style={{ color: "#aaa" }} />
                <RiGiftLine size={16} style={{ color: "#aaa" }} />
                <div
                  className="flex-1 rounded-md px-2 py-1 text-xs"
                  style={{ background: "#2b2d31", color: "#aaa" }}
                >
                  Message #gift-shop...
                </div>
              </div>
            </div>

            {/* Home bar */}
            <div
              className="mx-auto mt-2"
              style={{ width: 60, height: 4, background: "#444", borderRadius: 10 }}
            />
          </div>
        </div>

        {/* Glow under phone */}
        <div
          className="-mt-16 mb-12 mx-auto rounded-full blur-3xl opacity-40"
          style={{
            width: 320,
            height: 80,
            background: "radial-gradient(ellipse, rgba(255,80,80,0.5), transparent)",
          }}
        />

        {/* Caption */}
        <p
          className="text-center text-xl md:text-2xl font-medium max-w-lg mx-auto mb-10"
          style={{ color: "#333", fontFamily: "var(--font-lexend), sans-serif" }}
        >
          Instant game currency, best discounts, and no-nonsense delivery—built for gamers.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {ctaButtons.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#5865F2" }}
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 { 0%,100% { transform: translateY(-50%) rotate(-2deg) translateX(0); } 50% { transform: translateY(-52%) rotate(-2deg) translateX(-4px); } }
        @keyframes float2 { 0%,100% { transform: translateY(-50%) rotate(1deg) translateX(0); } 50% { transform: translateY(-52%) rotate(1deg) translateX(4px); } }
        @keyframes float3 { 0%,100% { transform: translateY(-50%) rotate(-2deg) translateX(0); } 50% { transform: translateY(-48%) rotate(-2deg) translateX(-3px); } }
        @keyframes float4 { 0%,100% { transform: translateY(-50%) rotate(1deg) translateX(0); } 50% { transform: translateY(-48%) rotate(1deg) translateX(3px); } }
        @keyframes float5 { 0%,100% { transform: translateY(-50%) rotate(-2deg) translateX(0); } 50% { transform: translateY(-52%) rotate(-1deg) translateX(-5px); } }
        @keyframes float6 { 0%,100% { transform: translateY(-50%) rotate(1deg) translateX(0); } 50% { transform: translateY(-52%) rotate(2deg) translateX(5px); } }
      `}</style>
    </section>
  );
}
