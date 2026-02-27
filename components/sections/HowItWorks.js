import { RiDiscordFill, RiRocketFill, RiShieldCheckFill } from "react-icons/ri";
import { BsDiamondFill, BsLightningChargeFill } from "react-icons/bs";
import { TbCurrencyRupee } from "react-icons/tb";
import TechCard from "./TechCard";
import styles from "./HowItWorks.module.css";

const cards = [
  {
    step: "Step 01",
    variant: "discord",
    icon: RiDiscordFill,
    title: "Add the Bot",
    description: "Invite ValoStore Bot to your DM.",
  },
  {
    step: "Step 02",
    variant: "valorant",
    icon: BsDiamondFill,
    title: "Select Amount",
    description: "Choose from 475 VP to 11,000 VP packages.",
  },
  {
    step: "Step 03",
    variant: "delivery",
    icon: BsLightningChargeFill,
    title: "Instant Delivery",
    description: "Code is DM'd to you instantly after payment.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full min-h-screen py-24 px-16 overflow-hidden flex flex-col justify-center" style={{ background: "#0F1820" }}>
      {/* Scanlines */}
      <div className={styles.scanlines} />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4">
          {/* Subtitle with decorative lines */}
          <div
            className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#8b5cf6" }}
          >
            <span className="w-10 h-px bg-purple-500" />
            // Bot Integration
            <span className="w-10 h-px bg-purple-500" />
          </div>

          <h2
            className={`${styles.gradientText} text-7xl font-bold uppercase italic leading-none`}
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Get Valorant Points
          </h2>

          <p
            className="max-w-2xl text-base leading-relaxed mt-2"
            style={{ color: "#888899" }}
          >
            Never leave your squad. Purchase gift cards and VP codes instantly
            through our verified Discord bot. Secure, fast, and ready for your
            next Night Market pull.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <TechCard key={card.step} {...card} />
          ))}
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            { icon: TbCurrencyRupee,   label: "Highest Discounts on VP" },
            { icon: RiRocketFill,      label: "Instant Delivery in your DM" },
            { icon: RiShieldCheckFill, label: "100% Secure Payments" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={`${styles.featurePill} flex items-center gap-4 px-5 py-4 rounded-lg`}
              style={{ background: "#131C27", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className={`${styles.pillIcon} flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-shadow duration-300`}
                style={{ background: "#5865F2" }}
              >
                <Icon size={18} color="#fff" />
              </span>
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
