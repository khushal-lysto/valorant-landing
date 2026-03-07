"use client";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home",      section: "home"      },
  { label: "Features",  section: "features"  },
  { label: "Use Cases", section: "use-cases" },
];

export default function HomeNav() {
  const [active, setActive]       = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [ready, setReady]         = useState(false);
  const linkRefs = useRef([]);

  const updatePill = (section) => {
    const idx = navLinks.findIndex((l) => l.section === section);
    const el  = linkRefs.current[idx];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  };

  // Initialize pill position after mount
  useEffect(() => {
    updatePill("home");
    setReady(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-position pill whenever active section changes
  useEffect(() => {
    if (ready) updatePill(active);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, ready]);

  // Scroll-based section detection via IntersectionObserver
  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(section); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (section, e) => {
    e.preventDefault();
    setActive(section);
    updatePill(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max">
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full shadow-2xl"
        style={{ background: "#111111", border: "1px solid #2a2a2a" }}
      >
        {/* Logo */}
        <div
          className="w-7 h-7 rounded-full flex-shrink-0"
          style={{
            background:
              "conic-gradient(from 0deg, #ff6b35 0%, #f7c59f 20%, #a8e6cf 40%, #5bc0eb 60%, #9b59b6 80%, #ff6b35 100%)",
          }}
        />

        {/* Nav links with sliding pill */}
        <div className="relative flex items-center ml-1">
          {/* Animated white pill */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left:       pillStyle.left,
              width:      pillStyle.width,
              top:        0,
              bottom:     0,
              background: "#ffffff",
              transition: ready
                ? "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)"
                : "none",
            }}
          />

          {navLinks.map(({ label, section }, i) => (
            <a
              key={section}
              ref={(el) => { linkRefs.current[i] = el; }}
              href={`#${section}`}
              onClick={(e) => handleClick(section, e)}
              className="relative z-10 text-sm px-4 py-1.5 rounded-full"
              style={{
                color:      active === section ? "#000" : "#888",
                transition: "color 0.2s",
                userSelect: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
