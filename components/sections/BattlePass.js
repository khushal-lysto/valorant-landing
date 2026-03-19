import Image from "next/image";
import { RiDiscordFill } from "react-icons/ri";

const bottomCards = [
  { src: "/bp-sprays.png",  alt: "Sprays"    },
  { src: "/bp-skins.png",   alt: "Skinlines" },
  { src: "/bp-buddies.png", alt: "Buddies"   },
];

export default function BattlePass() {
  return (
    <section id="battle-pass" className="bg-cream-grid w-full py-16 border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full">

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-5xl md:text-7xl font-bold uppercase leading-none text-[#0F1923]"
              style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
            >
              Battle <span style={{ color: "#FF4655" }}>Pass</span>
            </h2>
            <div className="mt-2 h-[3px] w-32 bg-[#FF4655]" />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p
                className="text-base font-bold tracking-widest uppercase"
                style={{ color: "#FF4655", fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                Premium
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: "#0F1923", fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                1000 VP
              </p>
            </div>
            <a
              href="https://discord.com/users/1460236363365351562"
              target="_blank"
              rel="noopener noreferrer"
              className="val-btn flex items-center gap-2 text-sm md:text-base font-bold uppercase px-5 md:px-8 py-2.5 text-white whitespace-nowrap"
              style={{
                fontFamily: "var(--font-tungsten), sans-serif",
                backgroundColor: "#FF4655",
                letterSpacing: "0.1em",
              }}
            >
              <RiDiscordFill size={16} />
              Purchase Now
            </a>
          </div>
        </div>

        {/* Hero banner */}
        <div className="w-full mb-5">
          <Image
            src="/bp-banner.png"
            alt="Valorant Battle Pass Season 2026 Act I"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* 3-column grid — scale on hover */}
        <div className="grid grid-cols-3 gap-4">
          {bottomCards.map(({ src, alt }) => (
            <div
              key={alt}
              className="relative w-full overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.04]"
              style={{ transformOrigin: "center" }}
            >
              <Image
                src={src}
                alt={alt}
                width={600}
                height={720}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
