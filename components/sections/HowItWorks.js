import { RiDiscordFill, RiRocketFill, RiShieldCheckFill } from "react-icons/ri";
import { BsDiamondFill, BsLightningChargeFill } from "react-icons/bs";
import { TbCurrencyRupee } from "react-icons/tb";
import TechCard from "./TechCard";
import styles from "./HowItWorks.module.css";

const items = [
  {
    card: { step: "Step 01", variant: "discord",  icon: RiDiscordFill,        title: "Add the Bot",       description: "Invite ValoStore Bot to your DM." },
    pill: { Icon: TbCurrencyRupee,   label: "Highest Discounts on VP" },
  },
  {
    card: { step: "Step 02", variant: "valorant", icon: BsDiamondFill,         title: "Select Amount",     description: "Choose from 475 VP to 11,000 VP packages." },
    pill: { Icon: RiRocketFill,      label: "Instant Delivery in your DM" },
  },
  {
    card: { step: "Step 03", variant: "delivery", icon: BsLightningChargeFill, title: "Instant Delivery",  description: "Code is DM'd to you instantly after payment." },
    pill: { Icon: RiShieldCheckFill, label: "100% Secure Payments" },
  },
];

function FeaturePill({ Icon, label }) {
  return (
    <div
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
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full min-h-screen py-24 px-16 overflow-hidden flex flex-col justify-center" style={{ background: "rgba(14, 14, 20, 0.6)" }}>
      {/* Scanlines */}
      <div className={styles.scanlines} />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col gap-16">

        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4">
          <div
            className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#8b5cf6" }}
          >
            <span className="w-10 h-px bg-purple-500" />
            // let the games begin
            <span className="w-10 h-px bg-purple-500" />
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-none"
            style={{ fontFamily: "var(--font-tungsten), sans-serif", color: "#fff" }}
          >
            VP, Skins, Bundles, Battlepass
          </h2>

          <h2
            className={`${styles.gradientText} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase italic leading-none`}
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Instantly on Discord
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

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://discord.com/users/1460236363365351562"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.featurePill} flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase rounded-lg`}
            style={{
              fontFamily: "var(--font-tungsten), sans-serif",
              backgroundColor: "#5865F2",
              border: "1px solid #5865F2",
            }}
          >
            <RiDiscordFill size={20} />
            Add to Discord DM
          </a>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1414466801852481606"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.featurePill} flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-lg`}
            style={{
              fontFamily: "var(--font-tungsten), sans-serif",
              backgroundColor: "#E8E8F0",
              color: "#5865F2",
              border: "1px solid #E8E8F0",
            }}
          >
            Invite bot to server
          </a>
        </div>

        {/* ── Mobile / tablet: single scroll container, card + pill paired ── */}
        <div className="lg:hidden flex overflow-x-auto gap-6 snap-x snap-mandatory pb-2 no-scrollbar">
          {items.map(({ card, pill }) => (
            <div key={card.step} className="snap-start shrink-0 w-[78vw] md:w-[45vw] flex flex-col gap-4">
              <TechCard {...card} />
              <FeaturePill {...pill} />
            </div>
          ))}
        </div>

        {/* ── Desktop: separate rows ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {items.map(({ card }) => (
            <TechCard key={card.step} {...card} />
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {items.map(({ pill }) => (
            <FeaturePill key={pill.label} {...pill} />
          ))}
        </div>

      </div>
    </section>
  );
}
