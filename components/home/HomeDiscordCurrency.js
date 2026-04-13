"use client";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    label:     "Exclusive Skin Offers",
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
      </svg>
    ),
    label: "Battle Pass",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
      </svg>
    ),
    label: "Valorant Points (VP)",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm2 0a1 1 0 10-1-1v1h1zm-6 6v4a2 2 0 002 2h6a2 2 0 002-2v-4H5z" clipRule="evenodd" />
      </svg>
    ),
    label: "Monthly Bundles",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
    label: "Instant DM Delivery",
  },
];

export default function HomeDiscordCurrency() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#f0ebe3",
        padding:    "clamp(48px,6vw,80px) clamp(16px,3vw,32px)",
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(48px)",
        transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        style={{
          maxWidth:             1160,
          margin:               "0 auto",
          display:              "grid",
          gridTemplateColumns:  "1fr",
          gap:                  "clamp(40px,5vw,72px)",
          alignItems:           "center",
        }}
        className="md:grid-cols-2"
      >
        {/* Left column */}
        <div>
          {/* Section tag */}
          <div
            style={{
              display:      "inline-flex",
              alignItems:   "center",
              gap:          6,
              background:   "rgba(0,0,0,0.06)",
              borderRadius: 100,
              padding:      "5px 14px",
              fontSize:     11,
              fontWeight:   700,
              letterSpacing:"0.08em",
              textTransform:"uppercase",
              color:        "#555",
              fontFamily:   "var(--font-dm-sans), sans-serif",
              marginBottom: 24,
            }}
          >
            Valorant
          </div>

          <h2
            style={{
              fontFamily:    "var(--font-source-serif), serif",
              fontWeight:    400,
              fontSize:      "clamp(1.7rem,3.5vw,2.6rem)",
              lineHeight:    1.15,
              color:         "#111",
              letterSpacing: "-0.02em",
              marginBottom:  "clamp(16px,2.5vw,24px)",
            }}
          >
            Valorant skins &amp; VP.<br />
            Straight to your DMs.
          </h2>

          <p
            style={{
              fontSize:     "clamp(14px,1.5vw,16px)",
              lineHeight:   1.7,
              color:        "#666",
              maxWidth:     400,
              fontFamily:   "var(--font-dm-sans), sans-serif",
              marginBottom: "clamp(24px,3vw,36px)",
            }}
          >
            Browse skins, grab the Battle Pass, or snag monthly bundles — all through our Discord bot. Just DM, pick what you want, and it&apos;s yours.
          </p>

          {/* Feature pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "clamp(28px,3.5vw,40px)" }}>
            {features.map((f) => (
              <div
                key={f.label}
                style={{
                  display:      "inline-flex",
                  alignItems:   "center",
                  gap:          12,
                  padding:      "11px 18px",
                  background:   f.highlight ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)",
                  borderRadius: 12,
                  fontSize:     14,
                  fontWeight:   f.highlight ? 600 : 500,
                  color:        "#1a1a1a",
                  width:        "fit-content",
                  minWidth:     240,
                  fontFamily:   "var(--font-dm-sans), sans-serif",
                  border:       f.highlight ? "1px solid rgba(0,0,0,0.1)" : "1px solid transparent",
                }}
              >
                <span style={{ opacity: 0.5, display: "flex", alignItems: "center" }}>{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>

          <Link
            href="/valorant"
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
              letterSpacing:  "0.01em",
              transition:     "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Explore Valorant offers
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Right column — image */}
        <div style={{ borderRadius: 20, overflow: "hidden" }}>
          <Image
            src="/discord-currency-card.jpg"
            alt="Discord currency card showing Valorant skin purchase flow"
            width={700} height={500}
            style={{
              width:     "100%",
              height:    "auto",
              display:   "block",
              boxShadow: "0 8px 48px rgba(0,0,0,0.1), 0 1px 0 rgba(0,0,0,0.04)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
