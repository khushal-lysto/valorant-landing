const useCases = [
  {
    title: "DM Bot for Gamers",
    subtitle: "Players who just want to buy in DMs.",
    steps: "DM Artemis → /shop. 2) Pick title & denom. 3) Pay → code delivered instantly.",
    cta: "Open DM & start shopping",
    illustrationBg: "#e8e0d5",
  },
  {
    title: "Small Friend Servers",
    subtitle: "Squads, clans, school friends, bootcamps",
    steps:
      "Add to your private server. 2) Enable /shop + weekly drops. 3) Share squad-only deals. Group cashback, birthday gifts, and win-streak rewards.",
    cta: null,
    illustrationBg: "#e0d8f0",
  },
  {
    title: "Community Server",
    subtitle:
      "Tournament & scrim hubs, gaming communities, marketplace servers.",
    steps:
      "Add Artemis and go live. Why it wins: Monetize traffic without leaving Discord; rewards loop increases retention.",
    cta: null,
    illustrationBg: "#d8eed8",
  },
];

export default function HomeUseCases() {
  return (
    <section className="relative overflow-hidden py-24 px-8 md:px-16" style={{ background: "#f0ebe3" }}>
      {/* Faded background character hint */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(100,160,200,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ color: "#111", fontFamily: "var(--font-lexend), sans-serif" }}
        >
          Built for Every Way You Play
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "#fff" }}
            >
              {/* Illustration area */}
              <div
                className="flex items-center justify-center"
                style={{ height: 260, background: uc.illustrationBg }}
              >
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    width: "75%",
                    height: "75%",
                    background: "rgba(255,255,255,0.5)",
                    border: "1px dashed rgba(0,0,0,0.15)",
                  }}
                >
                  <span style={{ color: "#aaa", fontSize: 13 }}>Illustration</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#111", fontFamily: "var(--font-lexend), sans-serif" }}
                >
                  {uc.title}
                </h3>
                <p className="text-sm font-medium" style={{ color: "#555" }}>
                  {uc.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {uc.steps}
                </p>
                {uc.cta && (
                  <button
                    className="mt-auto self-start px-5 py-2.5 rounded-full text-white text-sm font-medium"
                    style={{ background: "#111" }}
                  >
                    {uc.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
