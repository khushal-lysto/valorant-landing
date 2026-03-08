"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pills = [
  {
    label: "Exclusive Skin Offers",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: "Battle Pass",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Valorant Points (VP)",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Monthly Bundles",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm2 0a1 1 0 10-1-1v1h1zm-6 6v4a2 2 0 002 2h6a2 2 0 002-2v-4H5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instant DM Delivery",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16}>
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function HomeDiscordCurrency() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="px-4 md:px-8 py-16"
      style={{
        background: "#f0ebe3",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
      >
        {/* Left */}
        <div className="flex flex-col gap-7">
          <h2
            style={{
              fontFamily: "var(--font-source-serif), serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              lineHeight: 1.15,
              color: "#2a2a2a",
              letterSpacing: "-0.5px",
            }}
          >
            Valorant skins &amp; VP.<br />Straight to your DMs.
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5a5a5a", maxWidth: 420, fontWeight: 400 }}>
            Browse skins, grab the Battle Pass, or snag monthly bundles — all through our Discord bot. Just DM, pick what you want, and it&apos;s yours. No hassle.
          </p>

          <div className="flex flex-col gap-2">
            {pills.map((pill) => (
              <div
                key={pill.label}
                className="inline-flex items-center gap-3"
                style={{
                  padding: "12px 18px",
                  background: pill.highlight ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: pill.highlight ? 600 : 500,
                  color: "#2a2a2a",
                  width: "fit-content",
                  minWidth: 260,
                }}
              >
                <span style={{ opacity: 0.6, display: "flex", alignItems: "center" }}>{pill.icon}</span>
                {pill.label}
              </div>
            ))}
          </div>

          <Link
            href="/valorant"
            className="inline-flex items-center gap-2 group"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              background: "#2a2a2a",
              textDecoration: "none",
              padding: "13px 28px",
              borderRadius: 10,
              width: "fit-content",
              transition: "background 0.2s",
            }}
          >
            Explore Valorant offers
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Right */}
        <div className="relative w-full" style={{ borderRadius: 20, overflow: "hidden" }}>
          <Image
            src="/discord-currency-card.jpg"
            alt="Discord currency card showing Valorant skin purchase flow"
            width={700}
            height={500}
            style={{ width: "100%", height: "auto", borderRadius: 20, display: "block", boxShadow: "0 4px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)" }}
          />
        </div>
      </div>
    </section>
  );
}
