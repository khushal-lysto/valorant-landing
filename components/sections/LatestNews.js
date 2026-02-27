import Image from "next/image";

export default function LatestNews() {
  return (
    <section
      className="bg-cream-grid py-24 min-h-screen relative overflow-hidden flex flex-col justify-center border-b border-gray-300"
    >
      {/* Decorative slanted right panel */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: "rgba(200,200,200,0.4)",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-16 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <h2
            className="text-6xl md:text-8xl font-bold uppercase leading-none text-[#0F1923]"
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Latest <span style={{ color: "#FF4655" }}>News</span>
          </h2>
          <div className="mt-3 h-[3px] w-40 bg-[#FF4655]" />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-4 gap-5" style={{ gridTemplateRows: "288px 288px" }}>

          {/* ── Featured Hero Card (col 1–2, row 1–2) ── */}
          <div
            className="col-span-2 row-span-2 group cursor-pointer relative overflow-hidden"
            style={{ background: "#111111" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              alt="State of the Agents"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <span className="bg-[#FF4655] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-5 inline-block">
                Dev Updates
              </span>
              <h3
                className="font-bold text-5xl uppercase text-white mb-4 leading-tight group-hover:text-[#FF4655] transition-colors duration-300"
                style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                State of the Agents
              </h3>
              <p className="text-gray-300 text-base mb-6 max-w-md leading-relaxed">
                A deep dive into the balancing philosophy for Episode 8 and what
                to expect for the upcoming Agent roster changes.
              </p>
              <span className="inline-block border-b-2 border-[#FF4655] pb-1 text-sm font-bold uppercase tracking-widest text-white group-hover:text-[#FF4655] transition-colors duration-300">
                Read Article →
              </span>
            </div>
          </div>

          {/* ── Patch Notes Card (col 3, row 1) ── */}
          <div className="col-span-1 group cursor-pointer relative overflow-hidden bg-white border border-gray-200 hover:border-[#FF4655] transition-all duration-300 p-7 flex flex-col justify-between">
            <div
              className="absolute top-3 right-4 opacity-[0.07] font-bold text-[#0F1923] leading-none select-none"
              style={{ fontFamily: "var(--font-tungsten), sans-serif", fontSize: "80px" }}
            >
              02
            </div>
            <div className="w-10 h-1 bg-[#0F1923] group-hover:bg-[#FF4655] group-hover:w-20 transition-all duration-300" />
            <div>
              <p className="text-[#FF4655] font-mono text-xs uppercase tracking-widest mb-2">
                Patch Notes
              </p>
              <h4
                className="font-bold text-4xl uppercase text-[#0F1923] mb-1 leading-tight"
                style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                Patch Notes 8.04
              </h4>
              <p className="text-sm text-gray-400 font-medium">March 15, 2024</p>
            </div>
          </div>

          {/* ── Masters Madrid Card (col 4, row 1) ── */}
          <div className="col-span-1 group cursor-pointer relative overflow-hidden p-7 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300" style={{ background: "#0F1923" }}>
            <Image
              src="https://images.unsplash.com/photo-1624138784181-2999e46ef284?q=80&w=800&auto=format&fit=crop"
              alt="Masters Madrid"
              fill
              className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="text-[#FF4655] font-mono text-xs uppercase tracking-widest">
                Esports
              </span>
              <h4
                className="font-bold text-4xl uppercase text-white mt-2 leading-tight"
                style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                Masters Madrid
              </h4>
            </div>
            <div className="relative z-10">
              <span className="text-white/50 text-sm group-hover:text-white transition-colors duration-300">
                View Schedule →
              </span>
            </div>
          </div>

          {/* ── Battle Pass Wide Card (col 3–4, row 2) ── */}
          <div className="col-span-2 relative group overflow-hidden cursor-pointer" style={{ background: "#768079" }}>
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
              alt="Battle Pass"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[#FF4655]/80 mix-blend-multiply group-hover:bg-[#0F1923]/60 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-mono text-white/70 uppercase tracking-[0.3em] text-xs mb-2">
                  Act II is Live
                </p>
                <h3
                  className="font-bold text-7xl uppercase text-white leading-none mb-5"
                  style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
                >
                  Battle Pass
                </h3>
                <button className="bg-white text-[#0F1923] px-8 py-2.5 font-bold uppercase text-sm tracking-widest hover:bg-[#0F1923] hover:text-white transition-colors duration-300">
                  View Rewards
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
