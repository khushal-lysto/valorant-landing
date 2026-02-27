export default function UpgradeArsenal() {
  return (
    <section className="bg-cream-grid py-24 min-h-screen relative flex flex-col justify-center border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-16 w-full">

        {/* Dark card with chamfered bottom-right */}
        <div
          className="relative overflow-hidden p-12 md:p-24"
          style={{
            background: "#0F1923",
            clipPath: "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)",
          }}
        >
          {/* Red skew overlay */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
            style={{
              background: "rgba(255,70,85,0.15)",
              transform: "skewX(12deg) translateX(48px)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2
              className="font-bold uppercase leading-none mb-6"
              style={{
                fontFamily: "var(--font-tungsten), sans-serif",
                fontSize: "clamp(48px, 6vw, 96px)",
                color: "#fff",
              }}
            >
              Upgrade Your <br />
              <span style={{ color: "#FF4655" }}>Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Don&apos;t miss out on the Night Market or the new Battle Pass. Our
              Discord bot allows you to purchase VP gift cards instantly, safely,
              and seamlessly directly from your server.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#"
                className="inline-block text-xl font-bold uppercase tracking-widest px-8 py-4 text-white transition-colors hover:bg-white hover:text-[#FF4655] min-w-[200px] text-center"
                style={{
                  fontFamily: "var(--font-tungsten), sans-serif",
                  background: "#FF4655",
                }}
              >
                Add Bot
              </a>
              <a
                href="#"
                className="inline-block text-xl font-bold uppercase tracking-widest px-8 py-4 text-white border border-white/30 transition-colors hover:bg-white hover:text-[#0F1923] min-w-[200px] text-center"
                style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
              >
                View Commands
              </a>
            </div>
          </div>

          {/* Decorative diamond */}
          <div className="hidden lg:flex absolute right-24 top-1/2 -translate-y-1/2 items-center justify-center w-64 h-64 border-4 border-[#FF4655] rotate-45">
            <svg
              className="w-32 h-32 text-[#FF4655] -rotate-45"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
