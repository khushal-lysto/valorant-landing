import styles from "./WhyBuyFromUs.module.css";

export default function WhyBuyCard({ number, title, description, variant }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`${styles.card} relative flex flex-col justify-between p-8 min-h-[380px]`}
      style={{
        background: isDark ? "#141414" : "#F0EDE8",
        clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
      }}
    >
      {/* Number */}
      <span
        className="text-xs font-bold tracking-widest"
        style={{ color: isDark ? "#FF4655" : "#999" }}
      >
        {number}
      </span>

      {/* Title + description */}
      <div className="flex flex-col gap-3 mt-auto">
        <h3
          className="text-3xl font-bold uppercase leading-tight"
          style={{
            fontFamily: "var(--font-tungsten), sans-serif",
            color: isDark ? "#ffffff" : "#FF4655",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: isDark ? "#888899" : "#444" }}
        >
          {description}
        </p>
      </div>

      {/* Bottom rule */}
      <div
        className="mt-8 w-full h-px"
        style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.15)" }}
      />
    </div>
  );
}
