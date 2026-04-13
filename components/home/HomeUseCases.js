"use client";
import Image from "next/image";

const useCases = [
  {
    tag:      "Personal",
    title:    "DM Bot for Gamers",
    subtitle: "Players who just want to buy in DMs.",
    steps:    "DM Artemis → /shop. Pick title & denomination. Pay → code delivered instantly.",
    cta:      "Open DM & start shopping",
    href:     "https://discord.com/users/1460236363365351562",
    img:      "/usecase-dm-bot.png",
    external: true,
  },
  {
    tag:      "Private",
    title:    "Small Friend Servers",
    subtitle: "Squads, clans, school friends, bootcamps.",
    steps:    "Add to your private server. Enable /shop + weekly drops. Group cashback, birthday gifts, and win-streak rewards for scrim nights.",
    cta:      "Coming Soon",
    href:     null,
    comingSoon: true,
    img:      "/usecase-friend-server.png",
  },
  {
    tag:      "Community",
    title:    "Community Server",
    subtitle: "Tournament & scrim hubs, gaming communities.",
    steps:    "Add Artemis and go live. Monetize traffic without leaving Discord — rewards loop increases retention.",
    cta:      "Partner my server",
    href:     "https://discord.com/oauth2/authorize?client_id=1414466801852481606",
    img:      "/usecase-community-server.png",
    external: true,
  },
];

export default function HomeUseCases() {
  return (
    <section
      id="use-cases"
      style={{
        background: "#f5f0e8",
        padding:    "clamp(56px,7vw,96px) clamp(16px,3vw,32px)",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(100,160,200,0.08) 0%, transparent 60%)" }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,64px)" }}>
          <div
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          6,
              background:   "rgba(0,0,0,0.05)",
              borderRadius: 100,
              padding:      "5px 14px",
              fontSize:     11,
              fontWeight:   700,
              letterSpacing:"0.08em",
              textTransform:"uppercase",
              color:        "#666",
              fontFamily:   "var(--font-dm-sans), sans-serif",
              marginBottom: 20,
            }}
          >
            Use cases
          </div>
          <h2
            style={{
              fontFamily:    "var(--font-source-serif), serif",
              fontWeight:    400,
              fontSize:      "clamp(2rem,5vw,3.5rem)",
              lineHeight:    1.1,
              color:         "#111",
              letterSpacing: "-0.02em",
            }}
          >
            Built for Every Way You Play
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "clamp(14px,1.5vw,20px)",
          }}
          className="md:grid-cols-3"
        >
          {useCases.map((uc) => (
            <div
              key={uc.title}
              style={{
                background:   "#fff",
                borderRadius: 20,
                overflow:     "hidden",
                display:      "flex",
                flexDirection:"column",
                boxShadow:    "0 1px 4px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)",
                border:       "1px solid rgba(0,0,0,0.05)",
                transition:   "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)";
              }}
            >
              {/* Image */}
              <div style={{ height: 220, overflow: "hidden", background: "#f0ede8" }}>
                <Image
                  src={uc.img}
                  alt={uc.title}
                  width={600} height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "clamp(20px,2.5vw,28px)", display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
                {/* Tag */}
                <span
                  style={{
                    fontSize:     11,
                    fontWeight:   700,
                    letterSpacing:"0.08em",
                    textTransform:"uppercase",
                    color:        "#888",
                    fontFamily:   "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {uc.tag}
                </span>

                <h3
                  style={{
                    fontSize:   "clamp(15px,1.5vw,17px)",
                    fontWeight: 700,
                    color:      "#111",
                    fontFamily: "var(--font-lexend), sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {uc.title}
                </h3>

                <p style={{ fontSize: 13, fontWeight: 600, color: "#555", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {uc.subtitle}
                </p>

                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#888", fontFamily: "var(--font-dm-sans), sans-serif", marginTop: 2 }}>
                  {uc.steps}
                </p>

                <div style={{ marginTop: "auto", paddingTop: 16 }}>
                  {uc.comingSoon ? (
                    <span
                      style={{
                        display:      "inline-flex",
                        alignItems:   "center",
                        gap:          6,
                        background:   "#f5f5f5",
                        color:        "#bbb",
                        padding:      "10px 20px",
                        borderRadius: 100,
                        fontSize:     13,
                        fontWeight:   600,
                        fontFamily:   "var(--font-dm-sans), sans-serif",
                        cursor:       "not-allowed",
                      }}
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={uc.href}
                      {...(uc.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{
                        display:        "inline-flex",
                        alignItems:     "center",
                        gap:            6,
                        background:     "#111",
                        color:          "#fff",
                        padding:        "10px 20px",
                        borderRadius:   100,
                        fontSize:       13,
                        fontWeight:     600,
                        textDecoration: "none",
                        fontFamily:     "var(--font-dm-sans), sans-serif",
                        transition:     "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {uc.cta}
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
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
