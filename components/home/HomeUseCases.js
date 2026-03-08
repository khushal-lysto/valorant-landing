const useCases = [
  {
    title:    "DM Bot for Gamers",
    subtitle: "Players who just want to buy in DMs.",
    steps:    "DM Artemis → /shop. Pick title & denomination. Pay → code delivered instantly.",
    cta:      "Open DM & start shopping",
    href:     "https://discord.com/users/1460236363365351562",
    img:      "/usecase-dm-bot.png",
  },
  {
    title:    "Small Friend Servers",
    subtitle: "Squads, clans, school friends, bootcamps.",
    steps:    "Add to your private server. Enable /shop + weekly drops. Share squad-only deals. Group cashback, birthday gifts, and win-streak rewards for scrim nights.",
    cta:      "Coming Soon",
    href:     null,
    comingSoon: true,
    img:      "/usecase-friend-server.png",
  },
  {
    title:    "Community Server",
    subtitle: "Tournament & scrim hubs, gaming communities, marketplace servers.",
    steps:    "Add Artemis and go live. Monetize traffic without leaving Discord — rewards loop increases retention.",
    cta:      "Partner my server",
    href:     "https://discord.com/oauth2/authorize?client_id=1414466801852481606",
    img:      "/usecase-community-server.png",
  },
];

import Image from "next/image";

export default function HomeUseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden py-24 px-8 md:px-16" style={{ background: "#f0ebe3" }}>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(100,160,200,0.5) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl text-center mb-16"
          style={{ color: "#111", fontFamily: "var(--font-source-serif), serif", fontWeight: 400 }}
        >
          Built for Every Way You Play
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              {/* Illustration */}
              <div className="overflow-hidden" style={{ height: 260 }}>
                <Image
                  src={uc.img}
                  alt={uc.title}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Content — flex-1 + flex col so button always sits at bottom */}
              <div className="p-6 flex flex-col flex-1 gap-2">
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "#111", fontFamily: "var(--font-lexend), sans-serif" }}
                >
                  {uc.title}
                </h3>
                <p className="text-sm font-semibold" style={{ color: "#444", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {uc.subtitle}
                </p>
                <p className="text-sm leading-relaxed mt-1" style={{ color: "#777", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {uc.steps}
                </p>

                {/* Button pushed to bottom */}
                <div className="mt-auto pt-4">
                  {uc.comingSoon ? (
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                      style={{ background: "#f0f0f0", color: "#aaa", cursor: "not-allowed" }}
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={uc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                      style={{ background: "#111" }}
                    >
                      {uc.cta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
