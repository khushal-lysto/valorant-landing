import { RiInstagramLine, RiFacebookBoxLine, RiDiscordLine } from "react-icons/ri";

const navLinks = ["EVENTS", "MEDIA", "ABOUT US"];

const socialIcons = [
  { Icon: RiInstagramLine, label: "Instagram", href: "#" },
  { Icon: RiFacebookBoxLine, label: "Facebook", href: "#" },
  { Icon: RiDiscordLine, label: "Discord", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] px-12 py-14 font-[var(--font-lexend)]">
      <div className="flex items-stretch justify-between">

        {/* Left — Social + Email */}
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-bold tracking-widest text-white/60 uppercase"
            >
              Connect with us on
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p
              className="text-xs font-bold tracking-widest text-white/60 uppercase"
            >
              Mail us at:
            </p>
            <a
              href="mailto:esports@iitr.ac.in"
              className="text-xl font-bold tracking-widest text-white uppercase hover:text-white/80 transition-colors"
            >
              esports@iitr.ac.in
            </a>
          </div>
        </div>

        {/* Right — Nav Links */}
        <nav className="flex flex-col items-end justify-between">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xl font-bold tracking-widest text-white uppercase hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}
