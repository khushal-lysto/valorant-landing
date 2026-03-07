export default function HomeMarquee() {
  return (
    <section
      className="py-32 px-8 md:px-16"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="font-bold text-white leading-[1.15]"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontFamily: "var(--font-lexend), sans-serif",
          }}
        >
          Top titles, always fresh. We update denominations and stock in real
          time—so your players never wait.
        </p>
      </div>
    </section>
  );
}
