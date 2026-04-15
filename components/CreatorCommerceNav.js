"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";

const navLinks = [
  { label: "Home",                href: "/"                  },
  { label: "Shop via Discord",    href: "/gamers"            },
  { label: "Launch Your Store",   href: "/creator-commerce"  },
  { label: "Monetize Your Server",href: "/artemis"           },
];

export default function CreatorCommerceNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen,  setModalOpen]  = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  const openMobile  = () => { setMobileOpen(true);  document.body.style.overflow = "hidden"; };
  const closeMobile = () => { setMobileOpen(false); document.body.style.overflow = ""; };
  const openModal   = () => { setModalOpen(true);   setSubmitted(false); document.body.style.overflow = "hidden"; };
  const closeModal  = () => { setModalOpen(false);  document.body.style.overflow = ""; };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { closeModal(); closeMobile(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Derive active link: strip basePath prefix if present
  const active = "/" + (pathname.split("/").slice(2).join("/") || "").replace(/\/$/, "") || "/";
  // Simplification: just match last segment
  const isActive = (href) => {
    const stripped = pathname.replace(/^\/valorant-landing/, "") || "/";
    return stripped === href || (href !== "/" && stripped.startsWith(href));
  };

  const strippedPath = pathname.replace(/^\/valorant-landing/, "") || "/";
  const isLightPage = strippedPath === "/" || strippedPath === "/gamers" || strippedPath === "/artemis";

  return (
    <div className={`cc-nav-root${isLightPage ? " cc-nav-light" : ""}`}>
      {/* ─── Main nav ─── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-brand" aria-label="Home">
            </Link>

            <div className="nav-links">
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href} className={isActive(href) ? "active" : ""}>
                  {label}
                </Link>
              ))}
            </div>

            <div className="nav-right">
              <button className="nav-cta" onClick={openModal}>Get started</button>
              <button className="nav-toggle" onClick={openMobile} aria-label="Open menu">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile menu ─── */}
      <div className={`mobile-menu${mobileOpen ? " is-open" : ""}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="nav-brand" onClick={closeMobile}>
          </Link>
          <button className="mobile-menu-close" onClick={closeMobile} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={isActive(href) ? "active" : ""} onClick={closeMobile}>
              {label}
            </Link>
          ))}
        </div>
        <button className="mobile-menu-cta" onClick={() => { closeMobile(); openModal(); }}>
          Get started
        </button>
      </div>

      {/* ─── Modal ─── */}
      <div
        className={`modal-overlay${modalOpen ? " is-open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="modal" role="dialog" aria-labelledby="cc-modal-title" aria-modal="true">
          <button className="modal-close" onClick={closeModal} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h3 className="modal-title" id="cc-modal-title">Get your free store</h3>
          <p className="modal-desc">Drop your details. We&apos;ll set up your branded store and reach out.</p>
          {submitted ? (
            <div style={{ textAlign:"center", padding:"32px 0" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🎉</div>
              <p style={{ fontWeight:600, fontSize:18, marginBottom:8 }}>You&apos;re on the list!</p>
              <p style={{ color:"var(--text-secondary)", fontSize:14 }}>We&apos;ll be in touch soon to set up your store.</p>
            </div>
          ) : (
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div>
                <label htmlFor="cc-m-email">Email</label>
                <input id="cc-m-email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="cc-m-link">Channel link</label>
                <input id="cc-m-link" type="url" placeholder="twitch.tv/you or youtube.com/@you" autoComplete="url" />
              </div>
              <div>
                <label htmlFor="cc-m-platform">Platform</label>
                <select id="cc-m-platform" defaultValue="">
                  <option value="" disabled>Where do you stream?</option>
                  <option>Twitch</option>
                  <option>YouTube</option>
                  <option>Kick</option>
                  <option>Instagram</option>
                  <option>Discord</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="modal-submit">Reserve My Spot</button>
              <p className="modal-note">Takes 10 seconds. We&apos;ll never spam you.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
