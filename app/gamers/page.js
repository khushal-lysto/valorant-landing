"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import CreatorCommerceNav from "@/components/CreatorCommerceNav";
import {
  RiArrowRightLine,
  RiLayoutGridLine,
  RiBarChartLine,
  RiBellLine,
  RiCursorLine,
  RiTwitterXFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiSendPlaneLine,
} from "react-icons/ri";

/* ── data ──────────────────────────────────────────────────────────────── */
const gameLogos = [
  { label: "BGMI",      bg: "#1a1a1a", src: "/logos/bgmi.svg",      noFilter: true },
  { label: "Valorant",  bg: "#ff4655", src: "/logos/valorant.svg"                   },
  { label: "Steam",     bg: "#1b2838", src: "/logos/steam.svg",      noFilter: true },
  { label: "Genshin",   bg: "#1e4fa3", src: "/logos/genshin.svg"                    },
  { label: "Minecraft", bg: "#5a8a35", src: "/logos/minecraft.svg",  noFilter: true },
];

const helpCards = [
  { Icon: RiLayoutGridLine, title: "/shop in your DMs",   desc: "Type /shop to browse titles, pick a denom, and pay—no servers or forms."    },
  { Icon: RiBarChartLine,   title: "Instant delivery",    desc: "Codes land in seconds; UC/VP top-ups auto-apply where supported."           },
  { Icon: RiBellLine,       title: "Deals & rewards",     desc: "Flash discounts, promo alerts, and cashback coins every time you buy."      },
  { Icon: RiCursorLine,     title: "Protected checkout",  desc: "Secure payments, receipts in thread, easy refunds, and full order history." },
];

const pillars = [
  { title: "Tap, pick, play",         desc: "Pick a title & denom, checkout, code lands instantly."                   },
  { title: "Promos, bundles & drops", desc: "Smart alerts for price cuts, season passes, crates, and event bundles"   },
  { title: "Bank-grade safety",       desc: "Protected checkout, consented DMs, optional 2FA/OTP, refund support"     },
];

const steps = [
  {
    n: "Step 1", heading: "Tap",
    body: "Open DM and type /shop. Pick your game and denomination in a couple taps—no alt-tab, no forms.",
    img: "/usecase-dm-bot.png",
  },
  {
    n: "Step 2", heading: "Pay",
    body: "Checkout inside Discord with secure UPI/cards/wallets. We verify every purchase, lock fraud, and send an invoice to your DM.",
    img: "/usecase-community-server.png",
  },
  {
    n: "Step 3", heading: "Play",
    body: "Your code/top-up lands instantly with redeem instructions and auto-history in DM—reload and jump straight back into the match.",
    img: "/usecase-friend-server.png",
  },
];

/* ── useFadeIn ─────────────────────────────────────────────────────────── */
function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── decorative shapes ─────────────────────────────────────────────────── */
function JackShape() {
  const arm = (r) => ({
    position: "absolute", width: 38, height: 136,
    background: "linear-gradient(160deg, #88aaff 0%, #4466ee 35%, #2244cc 70%, #112299 100%)",
    borderRadius: 19, top: "50%", left: "50%",
    transform: `translate(-50%, -50%) rotate(${r}deg)`,
    boxShadow: "3px 7px 20px rgba(30,60,200,0.55), inset 3px 3px 10px rgba(255,255,255,0.22)",
  });
  return (
    <div style={{ position: "relative", width: 140, height: 160, flexShrink: 0 }}>
      <div style={arm(0)} /><div style={arm(60)} /><div style={arm(-60)} />
      <div style={{ position:"absolute", width:44, height:44, borderRadius:"50%",
        background:"radial-gradient(circle at 36% 34%, #99bbff, #3355dd 55%, #112299 100%)",
        top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        boxShadow:"2px 5px 14px rgba(30,60,200,0.6)" }} />
    </div>
  );
}
function HelixShape() {
  return (
    <div style={{ width:90, height:170, flexShrink:0, display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", gap:6 }}>
      {Array.from({length:6}).map((_,i)=>(
        <div key={i} style={{
          width: 68+(i%2===0?0:10), height:20, borderRadius:"50%",
          background:"linear-gradient(135deg,#77aaff 0%,#3366ee 45%,#1133cc 100%)",
          boxShadow:"2px 5px 12px rgba(30,60,200,0.55), inset 2px 2px 7px rgba(255,255,255,0.22)",
          transform:`rotate(${i%2===0?-12:12}deg) translateX(${i%2===0?-6:6}px)`,
        }}/>
      ))}
    </div>
  );
}

/* ── page ──────────────────────────────────────────────────────────────── */
export default function GamersPage() {
  const [scrollY, setScrollY] = useState(0);
  const [subEmail, setSubEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!subEmail.trim()) return;
    setSubscribed(true);
  };
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── scroll-driven hero values ── */
  const heroProgress  = Math.min(scrollY / 360, 1);
  const phoneParallax = scrollY * 0.07;
  const jackTransform  = `rotate(-15deg) translateY(${10 + heroProgress * 26}px) translateX(${-heroProgress * 34}px)`;
  const helixTransform = `rotate(10deg) translateY(${-8 - heroProgress * 26}px) translateX(${heroProgress * 34}px)`;

  /* ── section fade-ins ── */
  const [featuresRef, featuresVis] = useFadeIn(0.1);
  const [mosaicRef,   mosaicVis]   = useFadeIn(0.08);
  const [cardsRef,    cardsVis]    = useFadeIn(0.08);
  const [darkRef,     darkVis]     = useFadeIn(0.08);
  const [stepsRef,    stepsVis]    = useFadeIn(0.06);

  /* ── animation helpers ── */
  const fadeIn = (vis, delay = 0) => ({
    opacity:    vis ? 1 : 0,
    transform:  vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });
  const scaleIn = (vis) => ({
    opacity:    vis ? 1 : 0,
    transform:  vis ? "scale(1) translateY(0)" : "scale(0.92) translateY(50px)",
    transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1), opacity 0.75s ease-out",
  });

  /* ── stable star positions (memoized so scroll re-renders don't re-randomize) ── */
  const stars = useMemo(() =>
    Array.from({length: 55}).map(() => ({
      w:       Math.random() < 0.7 ? 1.5 : 2.5,
      opacity: 0.15 + Math.random() * 0.45,
      top:     `${Math.random() * 80}%`,
      left:    `${Math.random() * 100}%`,
    }))
  , []);

  return (
    <main style={{ fontFamily:"var(--font-dm-sans),sans-serif", background:"#f0eeea", minHeight:"100vh" }}>
      <CreatorCommerceNav />

      {/* ── 1. Hero ───────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 pt-10 pb-0 md:pt-16" style={{ background:"#f5f0e8" }}>
        <div className="max-w-[540px] md:max-w-none mx-auto"
          style={{ border:"1.5px solid rgba(58,111,248,0.5)", borderRadius:22, overflow:"hidden", background:"#f5f0e8", boxShadow:"0 2px 24px rgba(58,111,248,0.06)" }}>

          {/* copy */}
          <div className="px-8 pt-11 pb-7 text-center md:px-20 md:pt-16 md:pb-10">
            <h1 style={{ fontSize:"clamp(1.9rem,5.5vw,3.75rem)", fontWeight:700, lineHeight:1.1,
              color:"#0a0a0a", fontFamily:"var(--font-lexend),sans-serif", marginBottom:18 }}>
              Top-up your games, right from your Discord DM
            </h1>
            <p className="md:text-base md:max-w-lg md:mx-auto"
              style={{ color:"#666", fontSize:14, lineHeight:1.65, maxWidth:360, margin:"0 auto 28px" }}>
              Artemis is a Discord DM bot that lets you buy official gift codes and wallet
              top-ups in seconds—no server required, no alt-tab
            </p>
            <a href="https://discord.com/users/1460236363365351562"
              target="_blank" rel="noopener noreferrer"
              className="md:text-base md:px-8 md:py-4"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#5865F2",
                color:"#fff", padding:"13px 26px", borderRadius:100, fontSize:14,
                fontWeight:600, textDecoration:"none", letterSpacing:"0.01em" }}>
              Add to my Discord DM <RiArrowRightLine size={14}/>
            </a>
          </div>

          {/* phone + shapes — scroll-driven */}
          <div className="flex items-end justify-center pt-2 overflow-hidden min-h-[400px] md:min-h-[560px]">
            <div style={{ alignSelf:"center", marginRight:-24, zIndex:5, transform: jackTransform }}>
              <div className="md:scale-[1.35] origin-bottom">
                <JackShape/>
              </div>
            </div>
            <div className="relative z-10 w-[230px] md:w-[300px] shrink-0"
              style={{ transform: `translateY(-${phoneParallax}px)` }}>
              <Image src="/device.png" alt="Artemis Discord bot" width={560} height={1140}
                style={{ width:"100%", height:"auto", display:"block" }} priority/>
            </div>
            <div style={{ alignSelf:"center", marginLeft:-20, zIndex:5, transform: helixTransform }}>
              <div className="md:scale-[1.35] origin-bottom">
                <HelixShape/>
              </div>
            </div>
          </div>
        </div>

        {/* separator */}
        <p className="text-center py-5 md:py-7 md:text-sm"
          style={{ color:"#999", fontSize:12, letterSpacing:"0.03em" }}>
          widest catalogue of gaming titles · best discounts
        </p>

        {/* logo row */}
        <div className="flex items-center justify-center gap-3 md:gap-4 px-5 pb-12 md:pb-16 flex-wrap">
          {gameLogos.map(g=>(
            <div key={g.label}
              className="w-20 h-[60px] md:w-28 md:h-20 shrink-0 flex flex-col items-center justify-center gap-[5px]"
              style={{ borderRadius:10, background:g.bg, border:"1px solid rgba(0,0,0,0.08)" }}>
              <Image src={g.src} alt={g.label} width={36} height={36}
                className="w-[26px] h-[26px] md:w-9 md:h-9"
                style={g.noFilter?{}:{filter:"brightness(0) invert(1)"}}/>
              <span className="text-[8px] md:text-[10px]"
                style={{ color:"#fff", fontWeight:600, opacity:0.85, letterSpacing:"0.02em" }}>
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Features text ─────────────────────────────────────── */}
      <section ref={featuresRef} style={{ background:"#f5f0e8", padding:"clamp(40px,6vw,72px) clamp(20px,5vw,64px)", ...fadeIn(featuresVis) }}>
        <div style={{ maxWidth:680 }}>
          <p style={{ fontSize:"clamp(1.25rem,3.5vw,2.25rem)", color:"#111",
            lineHeight:1.45, fontFamily:"var(--font-lexend),sans-serif", marginBottom:"clamp(24px,3vw,40px)" }}>
            <strong>Tap, pay, play.</strong> Buy from your DMs — no apps, no
            forms — just instant codes that work.
          </p>
          <p style={{ fontSize:"clamp(1.25rem,3.5vw,2.25rem)", color:"#444",
            lineHeight:1.45, fontFamily:"var(--font-lexend),sans-serif" }}>
            <strong style={{color:"#111"}}>Stacked with tools.</strong> Price drops &amp; bundles,
            protected checkout, purchase history, one-click support, and loyalty rewards.
          </p>
        </div>
      </section>

      {/* ── 3. Screenshots mosaic ────────────────────────────────── */}
      <section style={{ background:"#f5f0e8", padding:"0 clamp(16px,3vw,32px) clamp(40px,5vw,64px)" }}>
        <div ref={mosaicRef} className="max-w-[540px] md:max-w-none mx-auto p-4 md:p-6"
          style={{ background:"#eae5dc", borderRadius:20, ...scaleIn(mosaicVis) }}>
          <div className="grid gap-2.5 md:gap-4"
            style={{ gridTemplateColumns:"1fr 1fr", gridTemplateRows:"auto auto" }}>
            {/* left tall */}
            <div style={{ gridRow:"1/3", borderRadius:14, overflow:"hidden", background:"#1e1f22" }}>
              <Image src="/usecase-dm-bot.png" alt="DM bot shop" width={600} height={900}
                style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            {/* top-right */}
            <div className="min-h-[180px] md:min-h-[280px] gap-3 md:gap-5 px-3 md:px-5 py-4"
              style={{ borderRadius:14, overflow:"hidden", background:"#f8f8f8",
                display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div className="w-[72px] h-[148px] md:w-[100px] md:h-[200px] shrink-0"
                style={{ borderRadius:14, border:"2px solid #ddd", background:"#1a1a1a", overflow:"hidden" }}>
                <Image src="/usecase-community-server.png" alt="screenshot"
                  width={300} height={500}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
              <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] shrink-0"
                style={{ borderRadius:"50%", overflow:"hidden",
                  border:"2px solid #e8e8e8", boxShadow:"0 4px 16px rgba(0,0,0,0.12)" }}>
                <Image src="/artemis-logo.jpeg" alt="Artemis" width={80} height={80}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
            </div>
            {/* bottom-right */}
            <div className="min-h-[120px] md:min-h-[160px]"
              style={{ borderRadius:14, overflow:"hidden", background:"#1e1f22" }}>
              <Image src="/usecase-friend-server.png" alt="friend server"
                width={600} height={400}
                style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. "Artemis helps you" cards ─────────────────────────── */}
      <section ref={cardsRef} style={{ background:"#f5f0e8", padding:"clamp(40px,5vw,72px) clamp(16px,3vw,32px)" }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <h2 style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,48px)",
            fontSize:"clamp(1.5rem,3.5vw,2.25rem)", fontWeight:400, color:"#111",
            fontFamily:"var(--font-source-serif),serif", letterSpacing:"-0.01em" }}>
            Artemis helps you...
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {helpCards.map(({Icon,title,desc}, i)=>(
              <div key={title}
                style={{ display:"flex", flexDirection:"column", gap:12, padding:"clamp(16px,2vw,28px)",
                  background:"#fff", borderRadius:16, border:"1px solid rgba(0,0,0,0.05)",
                  boxShadow:"0 1px 4px rgba(0,0,0,0.04)", ...fadeIn(cardsVis, i * 0.08) }}>
                <div style={{ width:40, height:40, borderRadius:10, display:"flex", alignItems:"center",
                  justifyContent:"center", background:"rgba(88,101,242,0.1)", flexShrink:0 }}>
                  <Icon size={18} style={{ color:"#5865F2" }}/>
                </div>
                <p style={{ fontWeight:700, color:"#111", lineHeight:1.3, margin:0,
                  fontFamily:"var(--font-lexend),sans-serif", fontSize:"clamp(12px,1.5vw,15px)" }}>
                  {title}
                </p>
                <p style={{ color:"#888", lineHeight:1.6, margin:0, fontSize:"clamp(11px,1.2vw,13px)",
                  fontFamily:"var(--font-dm-sans),sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Dark "pocket game shop" section ───────────────────── */}
      <section style={{ background:"#f0eeea", padding:"clamp(32px,4vw,56px) clamp(16px,3vw,32px)" }}>
        <div ref={darkRef} className="max-w-[540px] md:max-w-none mx-auto"
          style={{ background:"#060606", borderRadius:24, overflow:"hidden", ...scaleIn(darkVis) }}>
          <div className="px-7 pt-12 pb-0 md:px-16 md:pt-16">
            <h2 className="mb-9 md:mb-14"
              style={{ fontSize:"clamp(2rem,6vw,3.5rem)", fontWeight:700,
                color:"#fff", lineHeight:1.15,
                fontFamily:"var(--font-lexend),sans-serif", maxWidth:420 }}>
              Your pocket game shop—fast, safe, always open
            </h2>

            {/* three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-5 mb-7 md:mb-10">
              {pillars.map((p,i)=>(
                <div key={p.title} className="px-[14px] py-[18px] md:p-6"
                  style={{ background: i===0 ? "#1e1e1e" : "transparent", borderRadius:14 }}>
                  <p className="text-[13px] md:text-base mb-2"
                    style={{ fontWeight:700, color: i===0 ? "#fff" : "#777",
                      lineHeight:1.3, fontFamily:"var(--font-lexend),sans-serif" }}>{p.title}</p>
                  <p className="text-[11px] md:text-sm"
                    style={{ color: i===0 ? "#aaa" : "#555", lineHeight:1.6, margin:0 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* game art strip */}
            <div className="rounded-2xl p-5 md:p-6 flex gap-2.5 md:gap-4 overflow-x-auto no-scrollbar"
              style={{ background:"#111" }}>
              {gameLogos.map(g=>(
                <div key={g.label}
                  className="w-[100px] h-[72px] md:w-[130px] md:h-[90px] shrink-0 overflow-hidden flex flex-col items-center justify-center gap-[6px]"
                  style={{ borderRadius:10, background:g.bg, border:"1px solid rgba(255,255,255,0.07)" }}>
                  <Image src={g.src} alt={g.label} width={36} height={36}
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={g.noFilter?{}:{filter:"brightness(0) invert(1)"}}/>
                  <span className="text-[9px] md:text-[11px]"
                    style={{ color:"#fff", fontWeight:600, opacity:0.8, letterSpacing:"0.02em" }}>
                    {g.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-9 md:h-14"/>
        </div>
      </section>

      {/* ── 6. How it works — Tap / Pay / Play ───────────────────── */}
      <section ref={stepsRef} style={{ background:"#ebebeb", padding:"clamp(48px,6vw,96px) clamp(16px,3vw,32px)" }}>
        {/* Section header */}
        <div style={{ maxWidth:1160, margin:"0 auto 48px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6,
            background:"rgba(0,0,0,0.06)", borderRadius:100, padding:"5px 14px",
            fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase",
            color:"#666", fontFamily:"var(--font-dm-sans),sans-serif", marginBottom:16 }}>
            How it works
          </div>
          <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.5rem)", fontWeight:400, color:"#111",
            fontFamily:"var(--font-source-serif),serif", letterSpacing:"-0.01em", lineHeight:1.2 }}>
            Three steps to your next top-up
          </h2>
        </div>

        <div style={{ maxWidth:1160, margin:"0 auto", display:"flex", flexDirection:"column", gap:"clamp(40px,6vw,80px)" }}>
          {steps.map((s, i)=>(
            <div key={s.n}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 items-center"
              style={{ ...fadeIn(stepsVis, i * 0.15) }}>
              {/* text — flip order on alternate rows on desktop */}
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <p style={{ fontWeight:700, color:"#5865F2", fontFamily:"var(--font-lexend),sans-serif",
                  fontSize:13, letterSpacing:"0.04em", textTransform:"uppercase", marginBottom:12 }}>
                  {s.n}
                </p>
                <h3 style={{ fontSize:"clamp(2rem,6vw,4rem)", fontWeight:700, color:"#111",
                  lineHeight:1, fontFamily:"var(--font-lexend),sans-serif", marginBottom:"clamp(12px,2vw,24px)" }}>
                  {s.heading}
                </h3>
                <p style={{ color:"#666", lineHeight:1.7, margin:0, fontSize:"clamp(13px,1.3vw,15px)",
                  fontFamily:"var(--font-dm-sans),sans-serif", maxWidth:400 }}>
                  {s.body.split("/shop").map((part,j,arr)=>
                    j < arr.length-1
                      ? <span key={j}>{part}<strong style={{color:"#333"}}>/shop</strong></span>
                      : <span key={j}>{part}</span>
                  )}
                </p>
              </div>
              {/* screenshot card */}
              <div style={{ borderRadius:"clamp(16px,2vw,24px)", overflow:"hidden", position:"relative",
                background:"#e0ddd8", aspectRatio:"3/4", order: i % 2 === 1 ? 1 : 2 }}>
                <Image src={s.img} alt={s.heading} fill
                  style={{ objectFit:"cover", objectPosition:"top" }}/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Footer ────────────────────────────────────────────── */}
      <div style={{ background:"#ebebeb", padding:"0 clamp(16px,3vw,32px) clamp(16px,2vw,32px)" }}>
        <footer style={{ background:"#0a0a0a", borderRadius:24, overflow:"hidden", position:"relative" }}>

          {/* starfield */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
            {stars.map((s, i)=>(
              <div key={i} style={{ position:"absolute", borderRadius:"50%",
                width:s.w, height:s.w, background:"#fff",
                opacity:s.opacity, top:s.top, left:s.left }}/>
            ))}
          </div>

          {/* shooting stars */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { left:"15%", top:"20%", delay:"0s"   },
              { left:"40%", top:"12%", delay:"1.4s" },
              { left:"65%", top:"35%", delay:"2.8s" },
              { left:"80%", top:"8%",  delay:"0.7s" },
            ].map((s, i)=>(
              <div key={i} className="absolute"
                style={{ left:s.left, top:s.top, width:120, height:1.5,
                  background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                  transform:"rotate(35deg)",
                  animation:"shoot 3.5s ease-in-out infinite",
                  animationDelay:s.delay, opacity:0 }}/>
            ))}
          </div>

          {/* tagline */}
          <div className="relative z-10 px-8 pt-20 pb-12 text-center md:px-16 md:pt-28 md:pb-16">
            <p style={{ fontSize:"clamp(2.4rem,8vw,5.5rem)", lineHeight:1.05,
              color:"#fff", fontWeight:700, letterSpacing:"-0.01em",
              fontFamily:"var(--font-lexend),sans-serif", textTransform:"uppercase" }}>
              TOP UP IN SECONDS.<br/>PLAY FOR HOURS.
            </p>
          </div>

          {/* conic blob */}
          <div style={{ position:"absolute", bottom:0, left:"50%",
            width:"80%", height:240,
            background:"conic-gradient(from 200deg at 50% 100%, #ff6b35 0%, #f7c59f 20%, #5bc0eb 50%, #9b59b6 70%, #ff4655 90%, #ff6b35 100%)",
            filter:"blur(70px)", opacity:0.35,
            transform:"translate(-50%,30%)", pointerEvents:"none" }}/>

          {/* bottom row */}
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-6 px-7 py-8 md:px-16 md:py-12"
            style={{ borderTop:"1px solid #1f1f1f" }}>

            {/* nav links */}
            <nav style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {[
                { label:"Home",    href:"/"    },
                { label:"Guides",  href:"#"    },
                { label:"Support", href:"#"    },
              ].map(({label,href})=>(
                <a key={label} href={href} className="text-[13px] md:text-sm"
                  style={{ color:"#666", textDecoration:"none", fontFamily:"var(--font-dm-sans),sans-serif" }}
                  onMouseEnter={e=>e.currentTarget.style.color="#fff"}
                  onMouseLeave={e=>e.currentTarget.style.color="#666"}>
                  {label}
                </a>
              ))}
            </nav>

            {/* email */}
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <p className="text-[13px] md:text-sm"
                style={{ color:"#aaa", margin:0, fontFamily:"var(--font-dm-sans),sans-serif" }}>
                Stay in touch
              </p>
              {subscribed ? (
                <p className="text-[13px] md:text-sm"
                  style={{ color:"#4ade80", margin:0, fontFamily:"var(--font-dm-sans),sans-serif" }}>
                  Thanks! You&apos;re on the list.
                </p>
              ) : (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input type="email" placeholder="name@email.com"
                    value={subEmail}
                    onChange={e=>setSubEmail(e.target.value)}
                    onKeyDown={e=>{ if(e.key==="Enter") handleSubscribe(); }}
                    className="w-full sm:w-[200px] md:w-[240px] text-[13px] md:text-sm"
                    style={{ background:"#1a1a1a", border:"1px solid #2a2a2a",
                      color:"#fff", borderRadius:10, padding:"10px 14px", outline:"none" }}/>
                  <button onClick={handleSubscribe}
                    className="flex items-center justify-center gap-[6px] text-[13px] md:text-sm"
                    style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", color:"#fff",
                      borderRadius:10, padding:"10px 14px",
                      fontWeight:500, cursor:"pointer" }}>
                    <RiSendPlaneLine size={13}/> Subscribe
                  </button>
                </div>
              )}
            </div>

            {/* social */}
            <div style={{ display:"flex", alignItems:"center", gap:10, alignSelf:"flex-end", paddingBottom:4 }}>
              {[
                {Icon:RiTwitterXFill,  label:"Twitter"  },
                {Icon:RiLinkedinFill,  label:"LinkedIn" },
                {Icon:RiInstagramLine, label:"Instagram"},
              ].map(({Icon,label})=>(
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center"
                  style={{ borderRadius:"50%", background:"#1a1a1a", border:"1px solid #2a2a2a",
                    color:"#888", textDecoration:"none" }}
                  onMouseEnter={e=>{e.currentTarget.style.color="#fff";e.currentTarget.style.borderColor="#444"}}
                  onMouseLeave={e=>{e.currentTarget.style.color="#888";e.currentTarget.style.borderColor="#2a2a2a"}}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes shoot {
              0%   { opacity:0; transform:rotate(35deg) translateX(-40px); }
              20%  { opacity:0.8; }
              60%  { opacity:0.8; }
              100% { opacity:0; transform:rotate(35deg) translateX(160px); }
            }
          `}</style>
        </footer>
      </div>

    </main>
  );
}
