const navLinks = ["Section 1", "Section 2", "Section 3"];

export default function Header() {
  return (
    <header
      className="w-full grid items-center px-16 py-4"
      style={{
        borderBottom: "1px solid #2A5298",
        gridTemplateColumns: "1fr auto 1fr",
      }}
    >
      {/* Left — Home */}
      <a
        href="#"
        className="text-sm font-bold tracking-widest text-white uppercase hover:text-white/70 transition-colors justify-self-start"
        style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
      >
        Home
      </a>

      {/* Center — Nav Links (always truly centered) */}
      <nav className="flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-bold tracking-widest text-white uppercase hover:text-white/70 transition-colors"
            style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right — CTA */}
      <a
        href="#"
        className="text-sm font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors px-5 py-2 justify-self-end"
        style={{
          fontFamily: "var(--font-tungsten), sans-serif",
          border: "1px solid #2A5298",
        }}
      >
        Add to Discord
      </a>
    </header>
  );
}
