"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import HomeFooter from "@/components/home/HomeFooter";
import Image from "next/image";
import CreatorCommerceNav from "@/components/CreatorCommerceNav";
import {
  RiArrowRightLine,
  RiLayoutGridLine,
  RiBarChartLine,
  RiBellLine,
  RiCursorLine,
} from "react-icons/ri";

/* ── data ──────────────────────────────────────────────────────────────── */

/* Used for carousel — all 8 available logos, duplicated for seamless loop */
const carouselLogos = [
  { label: "BGMI",        bg: "#1a1a1a", src: "/logos/bgmi.svg",         noFilter: true  },
  { label: "Valorant",    bg: "#ff4655", src: "/logos/valorant.svg",      noFilter: false },
  { label: "Steam",       bg: "#1b2838", src: "/logos/steam.svg",         noFilter: true  },
  { label: "Genshin",     bg: "#1e4fa3", src: "/logos/genshin.svg",       noFilter: false },
  { label: "Minecraft",   bg: "#5a8a35", src: "/logos/minecraft.svg",     noFilter: true  },
  { label: "PlayStation", bg: "#003087", src: "/logos/playstation.svg",   noFilter: true  },
  { label: "Roblox",      bg: "#cc0000", src: "/logos/roblox.svg",        noFilter: false },
  { label: "Xbox",        bg: "#107c10", src: "/logos/xbox.svg",          noFilter: true  },
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
    stepType: "tap",
  },
  {
    n: "Step 2", heading: "Pay",
    body: "Checkout inside Discord with secure UPI/cards/wallets. We verify every purchase, lock fraud, and send an invoice to your DM.",
    stepType: "pay",
  },
  {
    n: "Step 3", heading: "Play",
    body: "Your code/top-up lands instantly with redeem instructions and auto-history in DM—reload and jump straight back into the match.",
    stepType: "play",
  },
];

/* ── Discord-style illustrations ────────────────────────────────────────── */

function DMChatIllustration({ compact = false }) {
  const fs = compact ? 0.85 : 1;
  return (
    <div style={{ background:"#313338", width:"100%", height:"100%", display:"flex", flexDirection:"column", fontFamily:"sans-serif", overflow:"hidden" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:8, padding:`${10*fs}px ${12*fs}px`, background:"#2b2d31", borderBottom:"1px solid rgba(255,255,255,0.06)", flexShrink:0 }}>
        <div style={{ width:26*fs, height:26*fs, borderRadius:"50%", background:"#5865F2", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11*fs, fontWeight:700, flexShrink:0 }}>A</div>
        <div>
          <div style={{ color:"#fff", fontSize:12*fs, fontWeight:600, lineHeight:1.2 }}>Artemis</div>
          <div style={{ color:"#43b581", fontSize:10*fs, display:"flex", alignItems:"center", gap:3 }}>
            <span style={{ width:5*fs, height:5*fs, borderRadius:"50%", background:"#43b581", display:"inline-block" }}/>
            Online
          </div>
        </div>
      </div>
      {/* messages */}
      <div style={{ flex:1, padding:`${10*fs}px`, display:"flex", flexDirection:"column", gap:8*fs, overflowY:"hidden" }}>
        <div style={{ display:"flex", justifyContent:"flex-end" }}>
          <div style={{ background:"#5865F2", color:"#fff", padding:`${6*fs}px ${11*fs}px`, borderRadius:"12px 12px 3px 12px", fontSize:11*fs, fontFamily:"monospace", fontWeight:600 }}>/shop</div>
        </div>
        <div style={{ display:"flex", gap:6*fs }}>
          <div style={{ width:20*fs, height:20*fs, borderRadius:"50%", background:"#5865F2", flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8*fs, color:"#fff", fontWeight:700 }}>A</div>
          <div style={{ background:"#2b2d31", borderRadius:"3px 10px 10px 10px", padding:`${8*fs}px ${10*fs}px`, flex:1, borderLeft:`3px solid #5865F2` }}>
            <div style={{ color:"#fff", fontWeight:700, fontSize:10*fs, marginBottom:6*fs }}>🎁 Gift Card Store</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4*fs }}>
              {[
                { name:"Steam",   color:"#1b2838", price:"₹500" },
                { name:"Valorant",color:"#ff4655", price:"₹399" },
                { name:"BGMI",    color:"#1a1a2a", price:"₹250" },
                { name:"Genshin", color:"#1e4fa3", price:"₹160" },
              ].map(c=>(
                <div key={c.name} style={{ background:c.color, borderRadius:6*fs, padding:`${5*fs}px ${7*fs}px` }}>
                  <div style={{ color:"#fff", fontSize:9*fs, fontWeight:700 }}>{c.name}</div>
                  <div style={{ color:"rgba(255,255,255,0.6)", fontSize:9*fs }}>{c.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:6*fs }}>
          <div style={{ width:20*fs, height:20*fs, borderRadius:"50%", background:"#5865F2", flexShrink:0, marginTop:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8*fs, color:"#fff", fontWeight:700 }}>A</div>
          <div style={{ background:"#2b2d31", borderRadius:"3px 10px 10px 10px", padding:`${8*fs}px ${10*fs}px`, borderLeft:"3px solid #43b581" }}>
            <div style={{ color:"#43b581", fontWeight:700, fontSize:10*fs, marginBottom:1 }}>✓ Code Delivered</div>
            <div style={{ color:"#888", fontSize:9*fs }}>Steam ₹500 — Check your DM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayIllustration() {
  return (
    <div style={{ background:"linear-gradient(160deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24, gap:14, fontFamily:"sans-serif" }}>
      {/* payment card */}
      <div style={{ background:"linear-gradient(135deg,#5865F2,#4752C4)", borderRadius:14, padding:"16px 20px", width:"100%", maxWidth:200, boxShadow:"0 8px 32px rgba(88,101,242,0.35)" }}>
        <div style={{ color:"rgba(255,255,255,0.55)", fontSize:9, marginBottom:4, textTransform:"uppercase", letterSpacing:"0.06em" }}>Total</div>
        <div style={{ color:"#fff", fontSize:22, fontWeight:700, marginBottom:2 }}>₹500</div>
        <div style={{ color:"rgba(255,255,255,0.65)", fontSize:10 }}>Steam Gift Card</div>
      </div>
      {/* payment method pills */}
      <div style={{ display:"flex", gap:6, width:"100%", maxWidth:200 }}>
        {["UPI","Card","Wallet"].map(m=>(
          <div key={m} style={{ flex:1, background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"7px 4px", textAlign:"center" }}>
            <div style={{ color:"#ccc", fontSize:9.5, fontWeight:600 }}>{m}</div>
          </div>
        ))}
      </div>
      {/* security badge */}
      <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(67,181,129,0.12)", border:"1px solid rgba(67,181,129,0.25)", borderRadius:20, padding:"5px 12px" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#43b581"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        <span style={{ color:"#43b581", fontSize:9, fontWeight:600 }}>Bank-grade security</span>
      </div>
      {/* pay button */}
      <div style={{ background:"#5865F2", color:"#fff", padding:"9px 28px", borderRadius:20, fontSize:12, fontWeight:700, boxShadow:"0 4px 16px rgba(88,101,242,0.4)" }}>
        Pay Now
      </div>
    </div>
  );
}

function PlayIllustration() {
  return (
    <div style={{ background:"#313338", height:"100%", display:"flex", flexDirection:"column", fontFamily:"sans-serif", overflow:"hidden" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 12px", background:"#2b2d31", flexShrink:0 }}>
        <div style={{ width:24, height:24, borderRadius:"50%", background:"#5865F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#fff", fontWeight:700, flexShrink:0 }}>A</div>
        <div style={{ color:"#fff", fontSize:11, fontWeight:600 }}>Artemis</div>
      </div>
      {/* body */}
      <div style={{ flex:1, padding:"12px", display:"flex", flexDirection:"column", gap:8, overflowY:"hidden" }}>
        {/* success embed */}
        <div style={{ background:"#2b2d31", borderRadius:"3px 10px 10px 10px", padding:"10px 12px", borderLeft:"3px solid #43b581" }}>
          <div style={{ color:"#43b581", fontWeight:700, fontSize:11, marginBottom:4 }}>✓ Order Complete!</div>
          <div style={{ color:"#ccc", fontSize:10, fontWeight:600, marginBottom:2 }}>Steam Gift Card — ₹500</div>
          <div style={{ color:"#888", fontSize:9, marginBottom:10 }}>Code has been delivered</div>
          <div style={{ background:"#1e1f22", borderRadius:7, padding:"8px 10px", border:"1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ color:"#666", fontSize:8, marginBottom:3, textTransform:"uppercase", letterSpacing:"0.05em" }}>Redeem code</div>
            <div style={{ color:"#fff", fontSize:12, fontFamily:"monospace", fontWeight:700, letterSpacing:"0.05em" }}>XXXX-XXXX-XXXX</div>
          </div>
        </div>
        {/* history */}
        <div style={{ background:"#2b2d31", borderRadius:8, padding:"8px 10px" }}>
          <div style={{ color:"#666", fontSize:8.5, marginBottom:5, textTransform:"uppercase", letterSpacing:"0.04em" }}>Purchase history</div>
          {[
            { game:"Steam ₹500",  date:"Today"      },
            { game:"BGMI ₹250",   date:"Yesterday"  },
            { game:"Valorant ₹399",date:"3 days ago" },
          ].map((h,i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"3px 0", borderTop:i>0?"1px solid rgba(255,255,255,0.05)":"none" }}>
              <span style={{ color:"#ccc", fontSize:9 }}>{h.game}</span>
              <span style={{ color:"#555", fontSize:9 }}>{h.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommunityServerIllustration({ compact = false }) {
  const fs = compact ? 0.85 : 1;
  return (
    <div style={{ background:"#313338", width:"100%", height:"100%", display:"flex", fontFamily:"sans-serif", overflow:"hidden" }}>
      <div style={{ width:46*fs, background:"#1e1f22", display:"flex", flexDirection:"column", alignItems:"center", padding:`${10*fs}px 0`, gap:6*fs, flexShrink:0 }}>
        <div style={{ width:32*fs, height:32*fs, borderRadius:12*fs, background:"#ff4655", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10*fs, color:"#fff", fontWeight:700 }}>VX</div>
        <div style={{ width:20*fs, height:1.5, background:"rgba(255,255,255,0.1)", margin:`${2*fs}px 0` }}/>
        <div style={{ width:32*fs, height:32*fs, borderRadius:"50%", background:"#3a3b3f" }}/>
        <div style={{ width:32*fs, height:32*fs, borderRadius:"50%", background:"#3a3b3f" }}/>
      </div>
      <div style={{ width:112*fs, background:"#2b2d31", padding:`${10*fs}px ${7*fs}px`, flexShrink:0, overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8.5*fs, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:5*fs }}>Community Hub</div>
        {["# announcements","# general","🛍 shop"].map((ch,i)=>(
          <div key={ch} style={{ color:i===2?"#fff":"#949ba4", fontSize:10*fs, padding:`${3*fs}px ${5*fs}px`, borderRadius:4*fs, background:i===2?"rgba(255,255,255,0.08)":"transparent", marginBottom:2*fs }}>{ch}</div>
        ))}
        <div style={{ marginTop:7*fs, background:"rgba(88,101,242,0.15)", borderRadius:6*fs, padding:`${5*fs}px ${6*fs}px` }}>
          <div style={{ color:"#5865F2", fontSize:9*fs, fontWeight:700 }}>12,400 members</div>
          <div style={{ color:"#43b581", fontSize:9*fs }}>4,200 online</div>
        </div>
      </div>
      <div style={{ flex:1, padding:`${8*fs}px`, overflowY:"hidden" }}>
        <div style={{ color:"#6d6f78", fontSize:8*fs, textAlign:"center", marginBottom:5*fs }}>🛍 shop</div>
        <div style={{ background:"#2b2d31", borderRadius:8*fs, padding:`${7*fs}px ${9*fs}px`, marginBottom:5*fs, borderLeft:"3px solid #ff4655" }}>
          <div style={{ color:"#fff", fontWeight:700, fontSize:9.5*fs, marginBottom:3*fs }}>⚡ Flash Sale</div>
          <div style={{ display:"flex", gap:3*fs, flexWrap:"wrap" }}>
            {["Valorant","Steam","BGMI"].map(g=>(
              <span key={g} style={{ background:"rgba(255,255,255,0.07)", color:"#ccc", fontSize:8.5*fs, padding:`${2*fs}px ${5*fs}px`, borderRadius:3*fs }}>{g}</span>
            ))}
          </div>
        </div>
        <div style={{ color:"#6d6f78", fontSize:8.5*fs, display:"flex", alignItems:"center", gap:3 }}>
          <span>💬</span> 800+ orders today
        </div>
      </div>
    </div>
  );
}

/* map stepType → illustration */
const stepIllustrations = {
  tap:  <DMChatIllustration />,
  pay:  <PayIllustration />,
  play: <PlayIllustration />,
};

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

/* ── infinite logo carousel ────────────────────────────────────────────── */
function LogoCarousel({ dark = false, label }) {
  /* 4 copies — animation moves exactly one set width (-25%), ensuring the
     strip always overflows the viewport on any screen size */
  const quad = [...carouselLogos, ...carouselLogos, ...carouselLogos, ...carouselLogos];
  const fadeBg = dark ? "#060606" : "#f5f0e8";
  return (
    <div style={{ position:"relative", overflow:"hidden" }}>
      {/* edge fades */}
      <div style={{ position:"absolute", left:0, top:0, bottom:0, width:64, background:`linear-gradient(to right,${fadeBg},transparent)`, zIndex:2, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", right:0, top:0, bottom:0, width:64, background:`linear-gradient(to left,${fadeBg},transparent)`, zIndex:2, pointerEvents:"none" }}/>

      {label && (
        <p style={{ textAlign:"center", marginBottom:12, fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", color: dark ? "#555" : "#999" }}>
          {label}
        </p>
      )}

      <div style={{ display:"flex", gap:10, width:"max-content", animation:"gamersMarquee 32s linear infinite", willChange:"transform" }}>
        {quad.map((g, i) => (
          <div key={i}
            className="w-[88px] h-[64px] md:w-[110px] md:h-[78px] shrink-0 flex flex-col items-center justify-center gap-[5px]"
            style={{ borderRadius:10, background:g.bg, border:`1px solid ${dark?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)"}` }}>
            <Image src={g.src} alt={g.label} width={32} height={32}
              className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
              style={g.noFilter ? {} : { filter:"brightness(0) invert(1)" }}/>
            <span className="text-[8px] md:text-[9px]"
              style={{ color:"#fff", fontWeight:600, opacity:0.85, letterSpacing:"0.03em", textTransform:"uppercase" }}>
              {g.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── page ──────────────────────────────────────────────────────────────── */
export default function GamersPage() {
  const [scrollY, setScrollY] = useState(0);
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


  return (
    <main style={{ fontFamily:"var(--font-dm-sans),sans-serif", background:"#f0eeea", minHeight:"100vh" }}>
      <CreatorCommerceNav />

      {/* ── 1. Hero ───────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 pt-10 pb-0 md:pt-16" style={{ background:"#f5f0e8" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div className="max-w-[540px] md:max-w-none mx-auto"
          style={{ borderRadius:22, overflow:"hidden", background:"#f5f0e8", boxShadow:"0 2px 24px rgba(0,0,0,0.06)" }}>

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
            <span
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#e8e8e8",
                color:"#999", padding:"13px 26px", borderRadius:100, fontSize:14,
                fontWeight:600, letterSpacing:"0.01em", cursor:"default", userSelect:"none" }}
            >
              Add to friend server
              <span style={{ fontSize:11, fontWeight:500, background:"#d0d0d0", color:"#888",
                padding:"2px 7px", borderRadius:100 }}>Coming soon</span>
            </span>
          </div>

          {/* phone + shapes */}
          <div className="flex items-end justify-center pt-2 overflow-hidden min-h-[400px] md:min-h-[560px]">
            <div style={{ alignSelf:"center", marginRight:-24, zIndex:5, transform: jackTransform }}>
              <div className="md:scale-[1.35] origin-bottom"><JackShape/></div>
            </div>
            <div className="relative z-10 w-[230px] md:w-[300px] shrink-0"
              style={{ transform: `translateY(-${phoneParallax}px)` }}>
              <Image src="/device.png" alt="Artemis Discord bot" width={560} height={1140}
                style={{ width:"100%", height:"auto", display:"block" }} priority/>
            </div>
            <div style={{ alignSelf:"center", marginLeft:-20, zIndex:5, transform: helixTransform }}>
              <div className="md:scale-[1.35] origin-bottom"><HelixShape/></div>
            </div>
          </div>
        </div>

        {/* separator */}
        <p className="text-center py-5 md:py-7 md:text-sm"
          style={{ color:"#999", fontSize:12, letterSpacing:"0.03em" }}>
          widest catalogue of gaming titles · best discounts
        </p>

        {/* ── infinite logo carousel (light) ── */}
        <div className="pb-12 md:pb-16">
          <LogoCarousel label="Available titles" />
        </div>
        </div>
      </section>

      {/* ── 2. Features text ─────────────────────────────────────── */}
      <section ref={featuresRef} style={{ background:"#f5f0e8", padding:"clamp(40px,6vw,72px) clamp(20px,5vw,64px)", ...fadeIn(featuresVis) }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
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
        </div>
      </section>

      {/* ── 3. Screenshots mosaic ────────────────────────────────── */}
      <section style={{ background:"#f5f0e8", padding:"0 clamp(16px,3vw,32px) clamp(40px,5vw,64px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div ref={mosaicRef} className="max-w-[540px] md:max-w-none mx-auto p-4 md:p-6"
          style={{ background:"#eae5dc", borderRadius:20, ...scaleIn(mosaicVis) }}>
          <div className="grid gap-2.5 md:gap-4"
            style={{ gridTemplateColumns:"1fr 1fr", gridTemplateRows:"auto auto" }}>

            {/* left tall — DM chat illustration */}
            <div style={{ gridRow:"1/3", borderRadius:14, overflow:"hidden", background:"#313338", minHeight:320 }}>
              <DMChatIllustration />
            </div>

            {/* top-right — artemis logo + small community preview */}
            <div className="min-h-[180px] md:min-h-[280px] gap-3 md:gap-5 px-3 md:px-5 py-4"
              style={{ borderRadius:14, overflow:"hidden", background:"#f8f8f8",
                display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div className="w-[72px] h-[148px] md:w-[100px] md:h-[200px] shrink-0"
                style={{ borderRadius:14, border:"2px solid #ddd", background:"#1e1f22", overflow:"hidden" }}>
                <CommunityServerIllustration compact />
              </div>
              <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] shrink-0"
                style={{ borderRadius:"50%", overflow:"hidden",
                  border:"2px solid #e8e8e8", boxShadow:"0 4px 16px rgba(0,0,0,0.12)" }}>
                <Image src="/artemis-logo.jpeg" alt="Artemis" width={80} height={80}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
            </div>

            {/* bottom-right — community server illustration */}
            <div className="min-h-[120px] md:min-h-[160px]"
              style={{ borderRadius:14, overflow:"hidden", background:"#313338" }}>
              <CommunityServerIllustration />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── 4. "Artemis helps you" cards ─────────────────────────── */}
      <section ref={cardsRef} style={{ background:"#f5f0e8", padding:"clamp(40px,5vw,72px) clamp(16px,3vw,32px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
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
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
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

            {/* ── infinite logo carousel (dark) ── */}
            <div className="rounded-2xl py-5 md:py-6 overflow-hidden" style={{ background:"#111" }}>
              <LogoCarousel dark />
            </div>
          </div>
          <div className="h-9 md:h-14"/>
        </div>
        </div>
      </section>

      {/* ── 6. How it works — Tap / Pay / Play ───────────────────── */}
      <section ref={stepsRef} style={{ background:"#ebebeb", padding:"clamp(48px,6vw,96px) clamp(16px,3vw,32px)" }}>
        {/* Section header */}
        <div style={{ maxWidth:1200, margin:"0 auto 48px" }}>
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

        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", flexDirection:"column", gap:"clamp(40px,6vw,80px)" }}>
          {steps.map((s, i)=>(
            <div key={s.n}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 items-center"
              style={{ ...fadeIn(stepsVis, i * 0.15) }}>
              {/* text */}
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
              {/* illustration card */}
              <div style={{ borderRadius:"clamp(16px,2vw,24px)", overflow:"hidden",
                background:"#1e1f22", aspectRatio:"3/4", order: i % 2 === 1 ? 1 : 2,
                position:"relative", minHeight:320 }}>
                <div style={{ position:"absolute", inset:0 }}>
                  {stepIllustrations[s.stepType]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Footer ────────────────────────────────────────────── */}
      <HomeFooter bgColor="#ebebeb" />

    </main>
  );
}
