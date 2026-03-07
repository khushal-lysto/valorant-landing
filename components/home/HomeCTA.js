export default function HomeCTA() {
  return (
    <section
      className="py-16 px-8 flex flex-wrap items-center justify-center gap-4"
      style={{ background: "#f5f0e8" }}
    >
      <a
        href="#"
        className="px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
        style={{ background: "#111" }}
      >
        Add to my friend server
      </a>
      <a
        href="#"
        className="px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
        style={{ background: "#111" }}
      >
        Partner my server
      </a>
    </section>
  );
}
