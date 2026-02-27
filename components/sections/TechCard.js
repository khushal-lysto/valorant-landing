import styles from "./HowItWorks.module.css";

const glowColors = {
  discord:  "#5865F2",
  valorant: "#ff4655",
  delivery: "#ffffff",
};

const floatClass = {
  discord:  styles.floating,
  valorant: styles.floatingDelay1,
  delivery: styles.floatingDelay2,
};

export default function TechCard({ step, icon: Icon, iconSvg, title, description, variant, actionLabel }) {
  const glowColor = glowColors[variant];

  return (
    <div
      className={`${styles.techCard} relative flex flex-col items-center justify-between h-[500px] px-6 py-12 backdrop-blur-sm`}
      style={{ background: "rgba(14, 14, 20, 0.6)" }}
    >
      {/* Step number */}
      <span
        className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl tracking-widest uppercase opacity-40"
        style={{ fontFamily: "var(--font-tungsten), sans-serif", color: "#888899" }}
      >
        {step}
      </span>

      {/* Icon */}
      <div className="flex-1 flex items-center justify-center w-full relative">
        {/* Glow blob */}
        <div
          className={`${styles.visualGlow} absolute w-36 h-36 rounded-full blur-3xl z-0`}
          style={{ background: glowColor, opacity: 0.4 }}
        />

        {/* Icon — react-icons or custom SVG */}
        {Icon ? (
          <Icon
            className={`${floatClass[variant]} relative z-10`}
            size={120}
            color="#fff"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}
          />
        ) : (
          <svg
            className={`${floatClass[variant]} relative z-10`}
            viewBox="0 0 24 24"
            style={{ width: 120, height: 120, fill: "#fff", filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))" }}
          >
            {iconSvg}
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="text-center w-full z-10">
        <h3
          className="text-5xl font-bold uppercase italic leading-none mb-2 text-white"
          style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed px-4" style={{ color: "#888899" }}>
          {description}
        </p>

        {actionLabel && (
          <button
            className={`${styles.actionBtn} mt-6 w-full py-4 bg-transparent border border-white/20 text-white text-xs font-bold tracking-widest uppercase`}
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
