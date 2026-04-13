import Image from "next/image";
import { RiDiscordFill } from "react-icons/ri";

const gridItems = [
  { src: "/mb-1.png", label: "WEAPONS : 1,775VP"   },
  { src: "/mb-2.png", label: "MELEE : 1,775VP"      },
  { src: "/mb-3.png", label: "PLAYERCARD : 1,775VP" },
  { src: "/mb-4.png", label: null                    },
];

export default function MonthlyBundles() {
  return (
    <section
      id="monthly-bundles"
      className="w-full py-16"
      style={{ background: "#0F1923" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full">

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-5xl md:text-7xl font-bold uppercase leading-none"
              style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
            >
              <span className="text-white">Monthly </span>
              <span style={{ color: "#FF4655" }}>Bundles</span>
            </h2>
            <div className="mt-2 h-[3px] w-32" style={{ background: "#FF4655" }} />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p
                className="text-2xl font-bold"
                style={{ color: "#FF4655", fontFamily: "var(--font-tungsten), sans-serif", letterSpacing: "0.05em" }}
              >
                3233 VP
              </p>
              <p
                className="text-lg line-through"
                style={{ color: "#888899", fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                4000 VP
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

        {/* Hero card — group: image scales, CTA slides in */}
        <div className="group relative w-full mb-3 overflow-hidden cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02]">
          <Image
            src="/mb-hero.png"
            alt="Solar Stride Bundle"
            width={1200}
            height={675}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            priority
          />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 p-5 md:p-7">
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 mb-2"
              style={{
                background: "#FF4655",
                color: "#fff",
                fontFamily: "var(--font-tungsten), sans-serif",
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
                paddingRight: "28px",
              }}
            >
              Bundle Price : 5,795 VP
            </span>
            <h3
              className="text-2xl md:text-4xl font-bold uppercase text-white leading-none mb-3"
              style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
            >
              Solar Stride Bundle
            </h3>

            {/* CTA — hidden until card hovered */}
            <a
              href="https://discord.com/users/1460236363365351562"
              target="_blank"
              rel="noopener noreferrer"
              className="val-btn inline-flex items-center gap-2 text-sm font-bold uppercase px-6 py-2.5 text-white
                         translate-y-3 opacity-0
                         group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-300 ease-out"
              style={{
                fontFamily: "var(--font-tungsten), sans-serif",
                background: "#FF4655",
                letterSpacing: "0.1em",
              }}
            >
              View Bundle →
            </a>
          </div>
        </div>

        {/* 4-column grid — scale on hover */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {gridItems.map(({ src, label }, i) => (
            <div
              key={i}
              className="relative transition-transform duration-300 ease-out hover:scale-[1.05]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={label ?? "Bundle item"}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
                {label && (
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white"
                      style={{
                        fontFamily: "var(--font-tungsten), sans-serif",
                        border: "1.5px solid rgba(255,255,255,0.75)",
                        background: "rgba(0,0,0,0.35)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
