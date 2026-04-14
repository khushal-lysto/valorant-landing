"use client";

/* ─── Discord-style mock illustrations ─────────────────────────────────── */

function DMChatIllustration() {
  return (
    <div style={{ background:"#313338", width:"100%", height:"100%", display:"flex", flexDirection:"column", fontFamily:"sans-serif", overflow:"hidden" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 12px", background:"#2b2d31", borderBottom:"1px solid rgba(255,255,255,0.06)", flexShrink:0 }}>
        <div style={{ width:26, height:26, borderRadius:"50%", background:"#5865F2", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700, flexShrink:0 }}>A</div>
        <div>
          <div style={{ color:"#fff", fontSize:12, fontWeight:600, lineHeight:1.2 }}>Artemis</div>
          <div style={{ color:"#43b581", fontSize:10, display:"flex", alignItems:"center", gap:3 }}>
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#43b581", display:"inline-block" }}/>
            Online
          </div>
        </div>
      </div>

      {/* messages */}
      <div style={{ flex:1, padding:"10px", display:"flex", flexDirection:"column", gap:8, overflowY:"hidden" }}>
        {/* user: /shop */}
        <div style={{ display:"flex", justifyContent:"flex-end" }}>
          <div style={{ background:"#5865F2", color:"#fff", padding:"6px 11px", borderRadius:"12px 12px 3px 12px", fontSize:11, fontFamily:"monospace", fontWeight:600 }}>/shop</div>
        </div>

        {/* bot: store embed */}
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ width:20, height:20, borderRadius:"50%", background:"#5865F2", flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, color:"#fff", fontWeight:700 }}>A</div>
          <div style={{ background:"#2b2d31", borderRadius:"3px 10px 10px 10px", padding:"8px 10px", flex:1, borderLeft:"3px solid #5865F2" }}>
            <div style={{ color:"#fff", fontWeight:700, fontSize:10, marginBottom:6 }}>🎁 Gift Card Store</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              {[
                { name:"Steam",   color:"#1b2838", price:"₹500" },
                { name:"Valorant",color:"#ff4655", price:"₹399" },
                { name:"BGMI",    color:"#1a1a2a", price:"₹250" },
                { name:"Genshin", color:"#1e4fa3", price:"₹160" },
              ].map(c=>(
                <div key={c.name} style={{ background:c.color, borderRadius:6, padding:"5px 7px" }}>
                  <div style={{ color:"#fff", fontSize:9, fontWeight:700 }}>{c.name}</div>
                  <div style={{ color:"rgba(255,255,255,0.6)", fontSize:9 }}>{c.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bot: success */}
        <div style={{ display:"flex", gap:6 }}>
          <div style={{ width:20, height:20, borderRadius:"50%", background:"#5865F2", flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, color:"#fff", fontWeight:700 }}>A</div>
          <div style={{ background:"#2b2d31", borderRadius:"3px 10px 10px 10px", padding:"8px 10px", borderLeft:"3px solid #43b581" }}>
            <div style={{ color:"#43b581", fontWeight:700, fontSize:10, marginBottom:1 }}>✓ Code Delivered</div>
            <div style={{ color:"#888", fontSize:9 }}>Steam ₹500 — Check your DM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FriendServerIllustration() {
  const pals = ["#e74c3c","#3498db","#2ecc71","#f39c12"];
  return (
    <div style={{ background:"#313338", width:"100%", height:"100%", display:"flex", fontFamily:"sans-serif", overflow:"hidden" }}>
      {/* server sidebar */}
      <div style={{ width:46, background:"#1e1f22", display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0", gap:6, flexShrink:0 }}>
        <div style={{ width:32, height:32, borderRadius:12, background:"#5865F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, color:"#fff", fontWeight:700 }}>S</div>
        <div style={{ width:20, height:1.5, background:"rgba(255,255,255,0.1)", margin:"2px 0" }}/>
        <div style={{ width:32, height:32, borderRadius:"50%", background:"#3a3b3f", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>🎮</div>
      </div>
      {/* channels + member list */}
      <div style={{ width:112, background:"#2b2d31", padding:"10px 7px", flexShrink:0, overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:5 }}>Squad HQ</div>
        {["# general","# clips","# gift-cards"].map((ch,i)=>(
          <div key={ch} style={{ color:i===2?"#fff":"#949ba4", fontSize:10, padding:"3px 5px", borderRadius:4, background:i===2?"rgba(255,255,255,0.08)":"transparent", marginBottom:2 }}>{ch}</div>
        ))}
        <div style={{ marginTop:8 }}>
          <div style={{ color:"#6d6f78", fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:4 }}>Online — 4</div>
          {pals.map((c,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"center", gap:5, marginBottom:3 }}>
              <div style={{ width:16, height:16, borderRadius:"50%", background:c, flexShrink:0 }}/>
              <div style={{ color:"#949ba4", fontSize:9 }}>Player {i+1}</div>
            </div>
          ))}
        </div>
      </div>
      {/* main pane */}
      <div style={{ flex:1, padding:"8px", overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8, textAlign:"center", marginBottom:6 }}>— # gift-cards —</div>
        <div style={{ background:"#2b2d31", borderRadius:8, padding:"7px 9px", borderLeft:"3px solid #5865F2" }}>
          <div style={{ color:"#fff", fontWeight:700, fontSize:9.5, marginBottom:3 }}>🎁 Weekly Drop!</div>
          <div style={{ color:"#888", fontSize:8.5, marginBottom:5, lineHeight:1.4 }}>Group cashback active · 3 bought this week</div>
          <div style={{ background:"#1b2838", borderRadius:5, padding:"4px 7px", display:"inline-flex", alignItems:"center", gap:4 }}>
            <span style={{ color:"#fff", fontSize:8.5, fontWeight:700 }}>Steam ₹500</span>
            <span style={{ background:"#43b581", color:"#fff", fontSize:8, padding:"1px 4px", borderRadius:3, fontWeight:700 }}>-10%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityServerIllustration() {
  return (
    <div style={{ background:"#313338", width:"100%", height:"100%", display:"flex", fontFamily:"sans-serif", overflow:"hidden" }}>
      {/* server sidebar */}
      <div style={{ width:46, background:"#1e1f22", display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0", gap:6, flexShrink:0 }}>
        <div style={{ width:32, height:32, borderRadius:12, background:"#ff4655", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:"#fff", fontWeight:700 }}>VX</div>
        <div style={{ width:20, height:1.5, background:"rgba(255,255,255,0.1)", margin:"2px 0" }}/>
        <div style={{ width:32, height:32, borderRadius:"50%", background:"#3a3b3f" }}/>
        <div style={{ width:32, height:32, borderRadius:"50%", background:"#3a3b3f" }}/>
      </div>
      {/* channels */}
      <div style={{ width:112, background:"#2b2d31", padding:"10px 7px", flexShrink:0, overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:5 }}>Community Hub</div>
        {["# announcements","# general","🛍 shop"].map((ch,i)=>(
          <div key={ch} style={{ color:i===2?"#fff":"#949ba4", fontSize:10, padding:"3px 5px", borderRadius:4, background:i===2?"rgba(255,255,255,0.08)":"transparent", marginBottom:2 }}>{ch}</div>
        ))}
        <div style={{ marginTop:7, background:"rgba(88,101,242,0.15)", borderRadius:6, padding:"5px 6px" }}>
          <div style={{ color:"#5865F2", fontSize:9, fontWeight:700 }}>12,400 members</div>
          <div style={{ color:"#43b581", fontSize:9 }}>4,200 online</div>
        </div>
      </div>
      {/* main pane */}
      <div style={{ flex:1, padding:"8px", overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8, textAlign:"center", marginBottom:5 }}>🛍 shop</div>
        <div style={{ background:"#2b2d31", borderRadius:8, padding:"7px 9px", marginBottom:5, borderLeft:"3px solid #ff4655" }}>
          <div style={{ color:"#fff", fontWeight:700, fontSize:9.5, marginBottom:3 }}>⚡ Flash Sale</div>
          <div style={{ display:"flex", gap:3, flexWrap:"wrap" }}>
            {["Valorant","Steam","BGMI"].map(g=>(
              <span key={g} style={{ background:"rgba(255,255,255,0.07)", color:"#ccc", fontSize:8.5, padding:"2px 5px", borderRadius:3 }}>{g}</span>
            ))}
          </div>
        </div>
        <div style={{ color:"#6d6f78", fontSize:8.5, display:"flex", alignItems:"center", gap:3 }}>
          <span>💬</span> 800+ orders today
        </div>
      </div>
    </div>
  );
}

/* ─── illustration map ──────────────────────────────────────────────────── */
const illustrations = {
  dm:        <DMChatIllustration />,
  friend:    <FriendServerIllustration />,
  community: <CommunityServerIllustration />,
};

/* ─── data ──────────────────────────────────────────────────────────────── */
const useCases = [
  {
    tag:        "Personal",
    title:      "DM Bot for Gamers",
    subtitle:   "Players who just want to buy in DMs.",
    steps:      "DM Artemis → /shop. Pick title & denomination. Pay → code delivered instantly.",
    cta:        "Open DM & start shopping",
    href:       "https://discord.com/users/1460236363365351562",
    illus:      "dm",
    external:   true,
  },
  {
    tag:        "Private",
    title:      "Small Friend Servers",
    subtitle:   "Squads, clans, school friends, bootcamps.",
    steps:      "Add to your private server. Enable /shop + weekly drops. Group cashback, birthday gifts, and win-streak rewards for scrim nights.",
    cta:        "Coming Soon",
    href:       null,
    comingSoon: true,
    illus:      "friend",
  },
  {
    tag:        "Community",
    title:      "Community Server",
    subtitle:   "Tournament & scrim hubs, gaming communities.",
    steps:      "Add Artemis and go live. Monetize traffic without leaving Discord — rewards loop increases retention.",
    cta:        "Partner my server",
    href:       "https://discord.com/oauth2/authorize?client_id=1414466801852481606",
    illus:      "community",
    external:   true,
  },
];

/* ─── component ─────────────────────────────────────────────────────────── */
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
              display:       "inline-flex",
              alignItems:    "center",
              gap:           6,
              background:    "rgba(0,0,0,0.05)",
              borderRadius:  100,
              padding:       "5px 14px",
              fontSize:      11,
              fontWeight:    700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:         "#666",
              fontFamily:    "var(--font-dm-sans), sans-serif",
              marginBottom:  20,
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
                background:    "#fff",
                borderRadius:  20,
                overflow:      "hidden",
                display:       "flex",
                flexDirection: "column",
                boxShadow:     "0 1px 4px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)",
                border:        "1px solid rgba(0,0,0,0.05)",
                transition:    "transform 0.25s ease, box-shadow 0.25s ease",
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
              {/* Illustration */}
              <div style={{ height: 220, overflow: "hidden", background: "#1e1f22", flexShrink: 0 }}>
                {illustrations[uc.illus]}
              </div>

              {/* Content */}
              <div style={{ padding: "clamp(20px,2.5vw,28px)", display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
                {/* Tag */}
                <span
                  style={{
                    fontSize:      11,
                    fontWeight:    700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color:         "#888",
                    fontFamily:    "var(--font-dm-sans), sans-serif",
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
