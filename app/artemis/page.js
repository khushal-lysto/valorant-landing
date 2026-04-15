"use client";
import { useEffect, useState } from "react";
import CreatorCommerceNav from "@/components/CreatorCommerceNav";

const PDF_URL = `${process.env.NEXT_PUBLIC_BASEPATH || ""}/artemis_setup_guide.pdf`;

function PdfModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "860px",
          height: "88vh",
          background: "#1e1f22",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#fff", fontWeight: 600, fontSize: "15px" }}>
            Artemis Setup Guide
          </span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href={PDF_URL}
              download="artemis_setup_guide.pdf"
              style={{
                color: "#a78bfa",
                fontSize: "13px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.5)",
                cursor: "pointer",
                fontSize: "22px",
                lineHeight: 1,
                padding: "2px 6px",
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
        {/* PDF viewer */}
        <iframe
          src={`${PDF_URL}#toolbar=0&navpanes=0`}
          style={{ flex: 1, border: "none", width: "100%" }}
          title="Artemis Setup Guide"
        />
      </div>
    </div>
  );
}

export default function ArtemisPage() {
  const [pdfOpen, setPdfOpen] = useState(false);

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(
        ".feature-card, .setup-step, .metric-card, .testimonial, .demo-card"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="artemis-page-root">
      {pdfOpen && <PdfModal onClose={() => setPdfOpen(false)} />}
      <CreatorCommerceNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero__glow"></div>
        <div className="container hero__inner">
          <h1 className="hero__title">
            Turn Your Community Into a{" "}
            <span className="gradient-text">Gift Card Marketplace</span>
          </h1>
          <p className="hero__subtitle">
            Artemis lets your members buy game gift cards directly inside Discord.
            You earn on every sale — zero setup friction, instant revenue.
          </p>
          <div className="hero__actions">
            <a href="https://discord.com/oauth2/authorize?client_id=1414466801852481606" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              <svg width="20" height="16" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Add to Discord
            </a>
            <a href="#demo" className="btn btn--ghost btn--lg">Watch Demo →</a>
          </div>
          <div className="hero__proof">
            <div className="hero__avatars">
              <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-spiritx.png`} alt="SpiritX Esports" />
              <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-ascend.png`} alt="Mach Esports" />
              <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-maniac.png`} alt="Maniac Esports" />
              <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-rvnc.png`} alt="RVNC" />
            </div>
            <p>Trusted by <strong>200+</strong> community owners</p>
          </div>
        </div>

        {/* Hero visual — mock Discord UI */}
        <div className="container">
          <div className="hero__visual">
            <div className="discord-mock">
              <div className="discord-mock__sidebar">
                <div className="sidebar-icon sidebar-icon--active">A</div>
                <div className="sidebar-divider"></div>
                <div className="sidebar-icon">🎮</div>
                <div className="sidebar-icon">⚔️</div>
                <div className="sidebar-icon">🏆</div>
              </div>
              <div className="discord-mock__channels">
                <div className="channel-header">GAMING HUB</div>
                <div className="channel"># general</div>
                <div className="channel"># looking-for-group</div>
                <div className="channel channel--active"># gift-cards</div>
                <div className="channel"># clips</div>
                <div className="channel-header">VOICE</div>
                <div className="channel">🔊 Game Night</div>
              </div>
              <div className="discord-mock__chat">
                <div className="chat-msg">
                  <div className="chat-avatar bot-avatar">A</div>
                  <div className="chat-content">
                    <span className="chat-name">Artemis <span className="bot-tag">BOT</span></span>
                    <div className="chat-embed">
                      <div className="embed-accent"></div>
                      <div className="embed-body">
                        <div className="embed-title">🎁 Gift Card Store</div>
                        <p className="embed-desc">Browse and buy game gift cards instantly.</p>
                        <div className="gift-cards-grid">
                          <div className="gift-card-item">
                            <div className="gc-icon" style={{background:"#1b2838"}}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                              </svg>
                            </div>
                            <span>Steam — ₹500</span>
                          </div>
                          <div className="gift-card-item">
                            <div className="gc-icon" style={{background:"#FD4556"}}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                <path d="M23.792 2.152a.252.252 0 0 0-.098.083c-3.384 4.23-6.769 8.46-10.15 12.69-.107.093-.025.288.119.265 2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25c.774-.967 1.55-1.934 2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205.002 3.074.001 6.15.001 9.225a.679.679 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247 2.455 0 4.91.003 7.365 0 .142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z" />
                              </svg>
                            </div>
                            <span>Valorant — ₹400</span>
                          </div>
                          <div className="gift-card-item">
                            <div className="gc-icon" style={{background:"#107c10"}}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.002 17.48 24 14.861 24 12.004c0-3.34-1.365-6.362-3.57-8.536 0 0-.027-.022-.082-.042-.063-.022-.152-.045-.281-.045-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042C1.365 5.642 0 8.664 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.813-4.216-3.245-4.806-3.245-.131 0-.223.021-.281.046v-.002zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.068-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.545v.006z" />
                              </svg>
                            </div>
                            <span>Xbox — ₹1,000</span>
                          </div>
                          <div className="gift-card-item">
                            <div className="gc-icon" style={{background:"#006FCD"}}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                <path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z" />
                              </svg>
                            </div>
                            <span>PlayStation — ₹500</span>
                          </div>
                        </div>
                        <button className="embed-btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-msg">
                  <div className="chat-avatar" style={{background:"#f59e0b"}}>M</div>
                  <div className="chat-content">
                    <span className="chat-name">MaxGamer99</span>
                    <p>Just grabbed a Steam card in 10 seconds 🔥</p>
                  </div>
                </div>
                <div className="chat-msg">
                  <div className="chat-avatar bot-avatar">A</div>
                  <div className="chat-content">
                    <span className="chat-name">Artemis <span className="bot-tag">BOT</span></span>
                    <div className="chat-embed chat-embed--success">
                      <div className="embed-accent embed-accent--green"></div>
                      <div className="embed-body">
                        <div className="embed-title">Purchase Confirmed</div>
                        <p className="embed-desc">Steam ₹500 gift card delivered to MaxGamer99. Code sent via DM.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-msg">
                  <div className="chat-avatar" style={{background:"#06b6d4"}}>R</div>
                  <div className="chat-content">
                    <span className="chat-name">RavenX</span>
                    <p>wait there&apos;s Xbox cards too?? 👀 let me grab one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BENTO */}
      <section className="section" id="features">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Why Artemis</span>
            <h2 className="section__title">Everything Your Community Needs to <span className="gradient-text">Level Up</span></h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 11h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
                  <path d="M14 11h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
                  <path d="M6 7h4a2 2 0 0 0 2-2V4" />
                  <path d="M14 7h4a2 2 0 0 1 2 2" />
                </svg>
              </div>
              <h3>Built for Gamers</h3>
              <p>Your members are already in Discord every day. Artemis meets them right where they are — no external links, no app switching, just instant access to 150+ gift cards inside their favourite channels.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Monetise Your Channel</h3>
              <p>Earn a commission on every gift card sold through your server. Zero upfront cost, no inventory to manage — just passive revenue that grows with your community.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Drive Engagement</h3>
              <p>Flash drops, streak rewards, and giveaway raffles keep your community buzzing 24/7. Members come back daily when there&apos;s something to win.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP PROCESS */}
      <section className="section section--dark" id="setup">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">3-Step Setup</span>
            <h2 className="section__title">Up and Running in <span className="gradient-text">Under 2 Minutes</span></h2>
            <p className="section__subtitle">Just click, configure, and go live.</p>
          </div>

          <div className="setup-steps">
            <div className="setup-step">
              <div className="setup-step__number">01</div>
              <div className="setup-step__visual">
                <div className="setup-visual setup-visual--add">
                  <div className="sv-browser">
                    <div className="sv-browser__dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="sv-browser__content">
                      <div className="sv-discord-auth">
                        <div className="sv-bot-icon">A</div>
                        <p className="sv-bot-name">Artemis wants to join</p>
                        <p className="sv-server-name">🎮 Your Server</p>
                        <div className="sv-permissions">
                          <div className="sv-perm"><span className="checkmark">&#10003;</span> Send Messages</div>
                          <div className="sv-perm"><span className="checkmark">&#10003;</span> Manage Channels</div>
                          <div className="sv-perm"><span className="checkmark">&#10003;</span> Use Slash Commands</div>
                        </div>
                        <button className="sv-authorize-btn">Authorize</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setup-step__info">
                <h3>Add to Discord</h3>
                <p>Click &quot;Add to Discord&quot; and authorize Artemis for your server. It takes one click and requires no technical knowledge.</p>
              </div>
            </div>

            <div className="setup-connector">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 5 L20 35 M10 25 L20 35 L30 25" stroke="url(#connGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="connGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="setup-step">
              <div className="setup-step__number">02</div>
              <div className="setup-step__visual">
                <div className="setup-visual setup-visual--config">
                  <div className="config-panel">
                    <div className="config-header">
                      <span className="config-icon">⚙️</span> Configure Artemis
                    </div>
                    <div className="config-option">
                      <label>Gift Card Channel</label>
                      <div className="config-select"># gift-cards</div>
                    </div>
                    <div className="config-option">
                      <label>Commission Rate</label>
                      <div className="config-fixed-rate">
                        <span className="fixed-rate-value">Fixed %</span>
                        <span className="fixed-rate-label">commission on every sale</span>
                      </div>
                    </div>
                    <div className="config-option">
                      <label>Enabled Cards</label>
                      <div className="config-tags">
                        <span className="config-tag config-tag--on">Steam</span>
                        <span className="config-tag config-tag--on">Xbox</span>
                        <span className="config-tag config-tag--on">PS</span>
                        <span className="config-tag">Nintendo</span>
                        <span className="config-tag">Roblox</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setup-step__info">
                <h3>Configure Your Store</h3>
                <p>Pick which gift cards to offer, choose your channel, and you&apos;re set. You earn a fixed % commission on every sale — no dashboard needed.</p>
              </div>
            </div>

            <div className="setup-connector">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 5 L20 35 M10 25 L20 35 L30 25" stroke="url(#connGrad2)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="connGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="setup-step">
              <div className="setup-step__number">03</div>
              <div className="setup-step__visual">
                <div className="setup-visual setup-visual--live">
                  <div className="live-mock">
                    <div className="live-header">
                      <span className="live-dot"></span> LIVE — #gift-cards
                    </div>
                    <div className="live-activity">
                      <div className="live-event">
                        <span className="le-time">now</span>
                        <span className="le-text"><strong>Alex</strong> purchased Steam ₹500</span>
                        <span className="le-badge le-badge--green">+₹60</span>
                      </div>
                      <div className="live-event">
                        <span className="le-time">2m</span>
                        <span className="le-text"><strong>Jordan</strong> purchased Xbox ₹1,000</span>
                        <span className="le-badge le-badge--green">+₹120</span>
                      </div>
                      <div className="live-event">
                        <span className="le-time">5m</span>
                        <span className="le-text"><strong>Sam</strong> purchased PS ₹500</span>
                        <span className="le-badge le-badge--green">+₹60</span>
                      </div>
                    </div>
                    <div className="live-total">
                      <span>Today&apos;s earnings</span>
                      <strong className="gradient-text">₹3,840</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setup-step__info">
                <h3>Go Live &amp; Earn</h3>
                <p>That&apos;s it. Your members can start buying gift cards immediately. Watch transactions roll in and track your earnings in real time.</p>
              </div>
            </div>
          </div>

          <div className="setup-cta">
            <button onClick={() => setPdfOpen(true)} className="btn btn--ghost btn--lg">See Documentation →</button>
          </div>
        </div>
      </section>

      {/* WATCH IN ACTION */}
      <section className="section" id="demo">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">See It Live</span>
            <h2 className="section__title">Watch Artemis <span className="gradient-text">In Action</span></h2>
            <p className="section__subtitle">See how a real community uses Artemis to sell gift cards and drive engagement.</p>
          </div>

          <div className="demo-card">
            <div className="demo-card__video">
              <video
                src={`${process.env.NEXT_PUBLIC_BASEPATH || ""}/artemis-demo.mp4`}
                controls
                playsInline
                preload="metadata"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
            <div className="demo-card__info">
              <div className="demo-stat">
                <strong>12,400</strong>
                <span>Members</span>
              </div>
              <div className="demo-stat">
                <strong>$220K</strong>
                <span>Sales from Server</span>
              </div>
              <div className="demo-stat">
                <strong>800+</strong>
                <span>Daily Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & TESTIMONIALS */}
      <section className="section section--dark" id="metrics">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Proven Results</span>
            <h2 className="section__title">Numbers That <span className="gradient-text">Speak for Themselves</span></h2>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">50+</div>
              <div className="metric-label">Active Servers</div>
              <div className="metric-bar"><div className="metric-fill" style={{width:"85%"}}></div></div>
            </div>
            <div className="metric-card">
              <div className="metric-value">$8.6M</div>
              <div className="metric-label">Gift Cards Sold</div>
              <div className="metric-bar"><div className="metric-fill" style={{width:"92%"}}></div></div>
            </div>
            <div className="metric-card">
              <div className="metric-value">3.4x</div>
              <div className="metric-label">Avg. Engagement Increase</div>
              <div className="metric-bar"><div className="metric-fill" style={{width:"78%"}}></div></div>
            </div>
            <div className="metric-card">
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Uptime Reliability</div>
              <div className="metric-bar"><div className="metric-fill" style={{width:"99%"}}></div></div>
            </div>
          </div>

          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial__stars">★★★★★</div>
              <p>&quot;Members grab gift cards in a few clicks right inside Discord — no redirects, no hassle. The loyalty wallet and reward drops keep them coming back, and our repeat purchase rate is over 50%. Artemis just fits naturally into how our community runs.&quot;</p>
              <div className="testimonial__author">
                <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-ascend.png`} alt="Ascend" />
                <div>
                  <strong>Ascend</strong>
                  <span>Gaming Community — Valorant</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__stars">★★★★★</div>
              <p>&quot;We have members across Valorant, Roblox, and Steam — Artemis covers gift cards for all of them in one place. The engagement features and reward drops turned our store channel into one of the most active spots on the server.&quot;</p>
              <div className="testimonial__author">
                <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-maniac.png`} alt="Maniac Esports" />
                <div>
                  <strong>Maniac Esports</strong>
                  <span>Chill Gaming Community — Valorant, Roblox &amp; Steam</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__stars">★★★★★</div>
              <p>&quot;Artemis helped us monetize our server from the very first month. Our BGMI players love the discounted gift cards and the random rewards keep the community buzzing. Now we&apos;re focused on growing it further for more revenue share.&quot;</p>
              <div className="testimonial__author">
                <img className="avatar avatar--img" src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-rvnc.png`} alt="RVNC Esports" />
                <div>
                  <strong>RVNC Esports</strong>
                  <span>Gaming Community — BGMI</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial__stars">★★★★★</div>
              <p>&quot;Setting up Artemis took under two minutes and immediately gave our community a reason to stay active. The gift card drops and cashback system have made our server one of the most engaged gaming hubs we&apos;ve seen — members love the rewards.&quot;</p>
              <div className="testimonial__author">
                {/* Replace with <img className="avatar avatar--img" src=".../harsh.png" alt="Harsh" /> when image is available */}
                <div className="avatar" style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 18, color: "#fff", flexShrink: 0,
                }}>H</div>
                <div>
                  <strong>Harsh</strong>
                  <span>Community Owner — Gaming Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE PARTNERS */}
      <section className="partners-strip">
        <div className="container partners-strip__inner">
          <span className="partners-strip__label">Exclusive Partners</span>
          <div className="partners-strip__items">
            <div className="partner-item">
              <img src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-ascend.png`} alt="Ascend Play" className="partner-item__logo" />
              <div className="partner-item__info">
                <strong>Ascend Play</strong>
                <span>Valorant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO INSTALL / CTA */}
      <section className="section" id="install">
        <div className="container">
          <div className="install-card">
            <div className="install-card__content">
              <h2>Ready to Monetise<br />Your Community?</h2>
              <p>Join 50+ server owners earning passive income through Artemis. Free to add, takes under 2 minutes.</p>
              <div className="install-steps-mini">
                <div className="mini-step">
                  <span className="mini-num">1</span>
                  <span>Click &quot;Add to Discord&quot;</span>
                </div>
                <div className="mini-step">
                  <span className="mini-num">2</span>
                  <span>Authorize &amp; configure</span>
                </div>
                <div className="mini-step">
                  <span className="mini-num">3</span>
                  <span>Start earning</span>
                </div>
              </div>
              <a href="https://discord.com/oauth2/authorize?client_id=1414466801852481606" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                <svg width="20" height="16" viewBox="0 0 127.14 96.36" fill="#111111">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
                Add Artemis to Discord — It&apos;s Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="/" className="navbar__logo">
              <img src={`${process.env.NEXT_PUBLIC_BASEPATH || ''}/logo-artemis.png`} alt="Artemis" className="logo-img" /> Artemis
            </a>
            <p>The Discord bot that turns gaming communities into gift card marketplaces.</p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#setup">Setup</a>
              <a href="#demo">Demo</a>
              <a href="#metrics">Metrics</a>
            </div>
            <div className="footer__col">
              <h4>Resources</h4>
              <button onClick={() => setPdfOpen(true)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "inherit", font: "inherit", textAlign: "left" }}>Documentation</button>
              <span className="coming-soon-wrap"><a href="#" onClick={e=>e.preventDefault()}>Support Server</a><span className="coming-soon-tip">Coming soon</span></span>
              <span className="coming-soon-wrap"><a href="#" onClick={e=>e.preventDefault()}>Status Page</a><span className="coming-soon-tip">Coming soon</span></span>
            </div>
            <div className="footer__col">
              <h4>Legal</h4>
              <span className="coming-soon-wrap"><a href="#" onClick={e=>e.preventDefault()}>Privacy Policy</a><span className="coming-soon-tip">Coming soon</span></span>
              <span className="coming-soon-wrap"><a href="#" onClick={e=>e.preventDefault()}>Terms of Service</a><span className="coming-soon-tip">Coming soon</span></span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer__bottom">
            <p>&copy; 2026 Artemis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
