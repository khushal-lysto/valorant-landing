"use client";
import { useState, useEffect, useRef } from "react";
import CreatorCommerceNav from "@/components/CreatorCommerceNav";

export default function CreatorCommercePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timelineRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
    setSubmitted(false);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    const items = Array.from(tl.querySelectorAll(".tl-item"));
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-visible"));
      tl.setAttribute("data-progress", String(items.length));
      return;
    }

    const sectionObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          items[0].classList.add("is-visible");
          tl.setAttribute("data-progress", "1");
          sectionObs.unobserve(tl);
        }
      },
      { threshold: 0.2 }
    );
    sectionObs.observe(tl);

    const itemObservers = items.slice(1).map((item, i) => {
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            item.classList.add("is-visible");
            tl.setAttribute("data-progress", String(i + 2));
            obs.unobserve(item);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(item);
      return obs;
    });

    return () => {
      sectionObs.disconnect();
      itemObservers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="cc-page-root">
      <CreatorCommerceNav />

      {/* HERO */}
      <div className="container">
        <div id="hero-v1">
          <div className="hero-v1">
            <div className="hero-text-col">
              <h1>Your fans already buy game codes. <span className="accent">Now you earn from it.</span></h1>
              <button className="hero-btn" onClick={openModal}>Get your free store</button>
              <div className="hero-points">
                <div className="hero-point">
                  <div className="hero-point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div><strong>Commission on every sale</strong><span>Passive income from your audience</span></div>
                </div>
                <div className="hero-point">
                  <div className="hero-point-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div><strong>100% official codes</strong><span>Xbox, PlayStation, Steam &amp; more</span></div>
                </div>
              </div>
            </div>
            <div className="hero-image-placeholder">
              <div className="mock-browser">
                <div className="mock-bar">
                  <div className="mock-dots">
                    <span className="mock-dot r"></span>
                    <span className="mock-dot y"></span>
                    <span className="mock-dot g"></span>
                  </div>
                  <div className="mock-url">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                    YOUR_BRAND.GG
                  </div>
                  <div className="mock-bar-icons">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 11-6.219-8.56" />
                    </svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                </div>
                <div className="mock-body">
                  <div className="mock-store">
                    <div className="mock-avatar-row">
                      <div className="mock-av">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="mock-av-name">Your Influencer Store</div>
                      <div className="mock-av-edit">Customize</div>
                    </div>
                    <div className="mock-tabs">
                      <span>Game Codes</span>
                      <span className="va">View all</span>
                      <span>Gift Cards</span>
                    </div>
                    <div className="mock-grid">
                      <div className="mock-card">
                        <div className="mock-card-img" style={{background:"#1B2838"}}>
                          <img src="https://cdn.simpleicons.org/steam/fff" alt="Steam" width="32" height="32" />
                        </div>
                        <div className="mock-card-info">
                          <div className="mock-card-name">Steam Card</div>
                          <div className="mock-card-sub">Gift Card</div>
                          <div className="mock-card-price">&#8377;500</div>
                        </div>
                      </div>
                      <div className="mock-card">
                        <div className="mock-card-img" style={{background:"#003087"}}>
                          <img src="https://cdn.simpleicons.org/playstation/fff" alt="PlayStation" width="32" height="32" />
                        </div>
                        <div className="mock-card-info">
                          <div className="mock-card-name">PS Plus</div>
                          <div className="mock-card-sub">Gift Card</div>
                          <div className="mock-card-price">&#8377;799</div>
                        </div>
                      </div>
                      <div className="mock-card">
                        <div className="mock-card-img" style={{background:"#FD4556"}}>
                          <img src="https://cdn.simpleicons.org/valorant/fff" alt="Valorant" width="32" height="32" />
                        </div>
                        <div className="mock-card-info">
                          <div className="mock-card-name">Valorant</div>
                          <div className="mock-card-sub">Gift Card</div>
                          <div className="mock-card-price">&#8377;399</div>
                        </div>
                      </div>
                      <div className="mock-card">
                        <div className="mock-card-img" style={{background:"#DB3236"}}>
                          <img src="https://cdn.simpleicons.org/ea/fff" alt="EA" width="32" height="32" />
                        </div>
                        <div className="mock-card-info">
                          <div className="mock-card-name">EA Play</div>
                          <div className="mock-card-sub">Gift Card</div>
                          <div className="mock-card-price">&#8377;499</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo carousel */}
        <div className="logo-marquee">
          <div className="logo-marquee-label">Official partners</div>
          <div className="logo-track">
            <span className="logo-item"><img src="https://cdn.simpleicons.org/steam/8A8A9A" alt="Steam" width="20" height="20" />Steam</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/playstation/8A8A9A" alt="PlayStation" width="20" height="20" />PlayStation</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/roblox/8A8A9A" alt="Roblox" width="20" height="20" />Roblox</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/ea/8A8A9A" alt="EA" width="20" height="20" />EA</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/googleplay/8A8A9A" alt="Google Play" width="20" height="20" />Google Play</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/valorant/8A8A9A" alt="Valorant" width="20" height="20" />Valorant</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/epicgames/8A8A9A" alt="Epic Games" width="20" height="20" />Epic Games</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/riotgames/8A8A9A" alt="Riot Games" width="20" height="20" />Riot Games</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/ubisoft/8A8A9A" alt="Ubisoft" width="20" height="20" />Ubisoft</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/activision/8A8A9A" alt="Activision" width="20" height="20" />Activision</span>
            {/* Duplicate for seamless loop */}
            <span className="logo-item"><img src="https://cdn.simpleicons.org/steam/8A8A9A" alt="Steam" width="20" height="20" />Steam</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/playstation/8A8A9A" alt="PlayStation" width="20" height="20" />PlayStation</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/roblox/8A8A9A" alt="Roblox" width="20" height="20" />Roblox</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/ea/8A8A9A" alt="EA" width="20" height="20" />EA</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/googleplay/8A8A9A" alt="Google Play" width="20" height="20" />Google Play</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/valorant/8A8A9A" alt="Valorant" width="20" height="20" />Valorant</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/epicgames/8A8A9A" alt="Epic Games" width="20" height="20" />Epic Games</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/riotgames/8A8A9A" alt="Riot Games" width="20" height="20" />Riot Games</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/ubisoft/8A8A9A" alt="Ubisoft" width="20" height="20" />Ubisoft</span>
            <span className="logo-item"><img src="https://cdn.simpleicons.org/activision/8A8A9A" alt="Activision" width="20" height="20" />Activision</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="intro" aria-labelledby="intro-heading">
        <div className="container">
          <div className="intro-grid">
            <div>
              <h2 className="intro-heading" id="intro-heading">Everything you need to earn as a creator, in one place.</h2>
            </div>
            <div>
              <p className="intro-desc">Your own branded store, pre-loaded with gaming products your fans already buy. We handle fulfillment, support, and payments.</p>
            </div>
          </div>
          <div className="features-row">
            <div className="dark-card">
              <h3>Sell official game codes</h3>
              <p>Partner with Xbox, Nintendo, EA and more to sell codes straight from source.</p>
            </div>
            <div className="dark-card">
              <h3>Personalised storefront</h3>
              <p>Get your own branded domain that represents you and your brand.</p>
            </div>
            <div className="dark-card">
              <h3>Dedicated manager</h3>
              <p>Work with a dedicated team member who supports you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS + TESTIMONIAL */}
      <section className="sec">
        <div className="container">
          <div className="proof-inner">
            <div className="proof-metrics">
              <div className="proof-metric">
                <div className="proof-metric-value">$850K+</div>
                <div className="proof-metric-label">Gaming content sold</div>
              </div>
              <div className="proof-metric">
                <div className="proof-metric-value">$50K+</div>
                <div className="proof-metric-label">Earned by creators</div>
              </div>
              <div className="proof-metric">
                <div className="proof-metric-value">10+</div>
                <div className="proof-metric-label">Stores built</div>
              </div>
            </div>
            <div className="proof-quote">
              <blockquote>&quot;I dropped my store link in one stream and woke up to ₹14,000 in commission. My fans were buying gift cards they&apos;d buy anyway — now I earn from it.&quot;</blockquote>
              <div className="proof-author">
                <div className="proof-avatar">H</div>
                <div>
                  <div className="proof-author-name">Harsh Banaraav</div>
                  <div className="proof-author-role">Gaming Creator, 120K followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec" id="features" aria-labelledby="features-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-label">Features</div>
            <h2 className="sec-title" id="features-heading">Everything managed for you.</h2>
          </div>
          <div className="feat-grid">
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Sell official game codes</h3>
              <p>Partner with Xbox, Nintendo, EA and more to sell codes straight from source.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                </svg>
              </div>
              <h3>Personalised domain</h3>
              <p>Get your own branded domain that represents you and your brand.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Merchant of record</h3>
              <p>We handle payments, taxes, and compliance. You just share the link.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Real time dashboard</h3>
              <p>Measure your success with easy to understand consumer insights.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Dedicated manager</h3>
              <p>Work with a dedicated team member who supports you every step of the way.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Commission on every sale</h3>
              <p>Earn on every transaction. No caps, no delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec" id="how-it-works" aria-labelledby="steps-heading">
        <div className="container">
          <div className="sec-header">
            <div className="sec-label">How it works</div>
            <h2 className="sec-title" id="steps-heading">Go live in four simple steps.</h2>
          </div>
          <div className="timeline" ref={timelineRef}>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-number">Step 01</div>
              <div className="tl-body">
                <h3>Join &amp; get approved</h3>
                <p>Tell us about your channel, audience, and platform. Early creators get priority access.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-number">Step 02</div>
              <div className="tl-body">
                <h3>Launch your storefront</h3>
                <p>We help you get your branded storefront live without any operational lift.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-number">Step 03</div>
              <div className="tl-body">
                <h3>Share it everywhere</h3>
                <p>Drop your link in bios, stream panels, video descriptions, stories, and Discord.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot"></div>
              <div className="tl-number">Step 04</div>
              <div className="tl-body">
                <h3>Earn from every sale</h3>
                <p>Fans buy. You earn commission. The loop keeps compounding with your audience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FANS */}
      <section className="sec" id="fans" aria-labelledby="fans-heading">
        <div className="container">
          <div className="fan-grid">
            <div>
              <div className="sec-label">For your fans</div>
              <h2 className="sec-title" id="fans-heading">They already buy gaming products. Now they buy through you.</h2>
              <p className="sec-desc">No new behavior. Same products. Just from a creator they trust.</p>
            </div>
            <div className="fan-list">
              <div className="fan-item"><span className="fan-num">01</span>Gaming gift cards and digital goods they already want</div>
              <div className="fan-item"><span className="fan-num">02</span>Smooth checkout built for digital purchases</div>
              <div className="fan-item"><span className="fan-num">03</span>A trusted store tied to their favorite creator</div>
              <div className="fan-item"><span className="fan-num">04</span>Support creators without changing buying behavior</div>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY ACCESS CTA */}
      <section className="sec" id="waitlist" aria-labelledby="waitlist-heading">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-inner">
              <div className="cta-label">Get started</div>
              <h2 className="cta-title" id="waitlist-heading">Join the hype and get your free branded store fully managed by us.</h2>
              <button className="cta-submit" onClick={openModal}>Get your free store</button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <div
        className={`modal-overlay${modalOpen ? " is-open" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
          <button className="modal-close" onClick={closeModal} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h3 className="modal-title" id="modal-title">Get your free store</h3>
          <p className="modal-desc">Drop your details. We&apos;ll set up your branded store and reach out.</p>
          {submitted ? (
            <div style={{ textAlign:"center", padding:"32px 0" }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🎉</div>
              <p style={{ fontWeight:600, fontSize:18, marginBottom:8, color:"var(--text)" }}>You&apos;re on the list!</p>
              <p style={{ color:"var(--text-secondary)", fontSize:14 }}>We&apos;ll be in touch soon to set up your store.</p>
            </div>
          ) : (
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="form-group">
                <label htmlFor="m-email">Email</label>
                <input id="m-email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="m-link">Channel link</label>
                <input id="m-link" type="url" placeholder="twitch.tv/you or youtube.com/@you" autoComplete="url" />
              </div>
              <div className="form-group">
                <label htmlFor="m-platform">Platform</label>
                <select id="m-platform" defaultValue="">
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
