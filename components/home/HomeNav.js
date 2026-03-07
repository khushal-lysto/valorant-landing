"use client";
import { useEffect, useRef, useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { label: "Home",      section: "home"      },
  { label: "Features",  section: "features"  },
  { label: "Use Cases", section: "use-cases" },
];

export default function HomeNav() {
  const [active, setActive]       = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [ready, setReady]         = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const linkRefs = useRef([]);

  const updatePill = (section) => {
    const idx = navLinks.findIndex((l) => l.section === section);
    const el  = linkRefs.current[idx];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  };

  useEffect(() => {
    updatePill("home");
    setReady(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ready) updatePill(active);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, ready]);

  // Scroll-based detection
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.4;
      let current = navLinks[0].section;
      for (const { section } of navLinks) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= trigger) current = section;
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = (section, e) => {
    e.preventDefault();
    setActive(section);
    updatePill(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max hidden md:block">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-full shadow-2xl"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <div
            className="w-7 h-7 rounded-full flex-shrink-0"
            style={{ background: "conic-gradient(from 0deg, #ff6b35 0%, #f7c59f 20%, #a8e6cf 40%, #5bc0eb 60%, #9b59b6 80%, #ff6b35 100%)" }}
          />
          <div className="relative flex items-center ml-1">
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                left: pillStyle.left, width: pillStyle.width,
                top: 0, bottom: 0, background: "#ffffff",
                transition: ready ? "left 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)" : "none",
              }}
            />
            {navLinks.map(({ label, section }, i) => (
              <a
                key={section}
                ref={(el) => { linkRefs.current[i] = el; }}
                href={`#${section}`}
                onClick={(e) => handleClick(section, e)}
                className="relative z-10 text-sm px-4 py-1.5 rounded-full"
                style={{ color: active === section ? "#000" : "#888", transition: "color 0.2s", userSelect: "none" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Mobile: logo left + hamburger right ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:hidden"
        style={{ background: "rgba(17,17,17,0.95)", borderBottom: "1px solid #1e1e1e", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full"
            style={{ background: "conic-gradient(from 0deg, #ff6b35 0%, #f7c59f 20%, #a8e6cf 40%, #5bc0eb 60%, #9b59b6 80%, #ff6b35 100%)" }}
          />
          <span className="text-white text-sm font-semibold">Artemis</span>
        </div>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ background: "#1e1e1e", border: "1px solid #2a2a2a", color: "#fff" }}
        >
          {menuOpen ? <RiCloseLine size={18} /> : <RiMenuLine size={18} />}
        </button>
      </div>

      {/* ── Mobile sidebar overlay ── */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.55)",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className="absolute right-0 top-0 bottom-0 w-64 flex flex-col pt-16 pb-8 px-4"
          style={{
            background: "#111",
            borderLeft: "1px solid #2a2a2a",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <p className="text-xs uppercase tracking-widest mb-4 px-3" style={{ color: "#555" }}>Navigation</p>
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, section }) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleClick(section, e)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: active === section ? "#1e1e1e" : "transparent",
                  color:      active === section ? "#fff"     : "#777",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
