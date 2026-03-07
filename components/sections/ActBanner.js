import Image from "next/image";

export default function ActBanner() {
  return (
    <section
      className="w-full pt-16"
      style={{ background: "rgba(14, 14, 20, 0.6)" }}
    >
      {/* Text */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 mb-8 text-center">
        <h2
          className="text-5xl md:text-7xl font-bold uppercase leading-none text-white"
          style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
        >
          Act I just Landed
        </h2>
        <p
          className="text-2xl md:text-4xl font-bold uppercase leading-none mt-1"
          style={{ fontFamily: "var(--font-tungsten), sans-serif", color: "#FF4655" }}
        >
          Don&apos;t Load in Looking Basic
        </p>
      </div>

      {/* Banner image — full width, no padding, flush to bottom */}
      <Image
        src="/valo-banner.png"
        alt="Valorant Season 2026 Act I"
        width={1440}
        height={600}
        className="w-full h-auto block"
        priority
      />
    </section>
  );
}
