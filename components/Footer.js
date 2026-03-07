import { RiDiscordFill, RiTwitterXFill, RiInstagramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      className="w-full px-4 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
      style={{ background: "#0B1924", borderTop: "1px solid #2A5298", color: "#888899" }}
    >
      <span style={{ fontFamily: "var(--font-tungsten), sans-serif", letterSpacing: "0.05em" }}>
        © 2026 Artemis · Not affiliated with Riot Games
      </span>

      <div className="flex items-center gap-5">
        {[
          { Icon: RiDiscordFill,   label: "Discord"   },
          { Icon: RiTwitterXFill,  label: "Twitter/X" },
          { Icon: RiInstagramLine, label: "Instagram" },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-tungsten), sans-serif", letterSpacing: "0.05em" }}
          >
            <Icon size={15} />
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
