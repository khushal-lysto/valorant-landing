import Image from "next/image";

export default function BattlePass() {
  return (
    <section className="bg-cream-grid w-full min-h-screen py-24 px-0 flex flex-col justify-center border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto px-16 w-full">

        {/* Header row */}
        <div className="mb-6">
          <h2
            className="text-6xl md:text-8xl font-bold uppercase leading-none text-[#0F1923]"
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Battle <span style={{ color: "#FF4655" }}>Pass</span>
          </h2>
          <div className="mt-3 h-[3px] w-40 bg-[#FF4655]" />
        </div>

        {/* Purchase button row */}
        <div
          className="flex justify-end items-center mb-16 pb-8"
          style={{ borderBottom: "2px solid rgba(15,25,35,0.1)" }}
        >
          <a
            href="#"
            className="hidden md:inline-block text-2xl font-bold uppercase px-8 py-2 border-2 border-[#0F1923] text-[#0F1923] hover:bg-[#0F1923] hover:text-[#ECE8E1] transition-colors"
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            Purchase Now
          </a>
        </div>

        {/* Full-width battlepass image */}
        <div className="w-full relative">
          <Image
            src="/battlepass.jpg"
            alt="Battle Pass"
            width={2000}
            height={1112}
            className="w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
