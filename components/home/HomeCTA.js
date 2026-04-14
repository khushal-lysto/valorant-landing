"use client";

export default function HomeCTA() {
  return (
    <section style={{ background: "#f5f0e8", padding: "40px 16px" }}>
      <div
        style={{
          maxWidth:       1160,
          margin:         "0 auto",
          display:        "flex",
          flexWrap:       "wrap",
          alignItems:     "center",
          justifyContent: "center",
          gap:            12,
        }}
      >
        <a
          href="https://discord.com/users/1460236363365351562"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            8,
            background:     "#111",
            color:          "#fff",
            padding:        "13px 28px",
            borderRadius:   100,
            fontSize:       14,
            fontWeight:     600,
            textDecoration: "none",
            fontFamily:     "var(--font-dm-sans), sans-serif",
            transition:     "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Add to Discord DM
        </a>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1414466801852481606"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            8,
            background:     "#111",
            color:          "#fff",
            padding:        "13px 28px",
            borderRadius:   100,
            fontSize:       14,
            fontWeight:     600,
            textDecoration: "none",
            fontFamily:     "var(--font-dm-sans), sans-serif",
            transition:     "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Partner my server
        </a>
      </div>
    </section>
  );
}
