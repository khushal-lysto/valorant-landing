"use client";
import { useState } from "react";
import { RiMenuLine, RiCloseLine, RiDiscordFill } from "react-icons/ri";

const navLinks = [
  { label: "How It Works",    href: "#how-it-works"    },
  { label: "Monthly Bundles", href: "#monthly-bundles" },
  { label: "Why Us",          href: "#why-us"          },
  { label: "Battle Pass",     href: "#battle-pass"     },
  { label: "News",            href: "#news"            },
  { label: "Arsenal",         href: "#arsenal"         },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full relative flex items-center justify-between px-8 md:px-16 py-4"
        style={{ borderBottom: "1px solid #2A5298", background: "#0B1924" }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-sm font-bold tracking-widest text-white uppercase hover:text-white/70 transition-colors shrink-0"
          style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
        >
          ValoBot
        </a>

        {/* Center nav — absolutely centered so it's unaffected by logo/CTA widths */}
        <nav className="hidden md:flex items-center gap-5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm font-bold tracking-widest text-white/70 uppercase hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors px-5 py-2"
            style={{ fontFamily: "var(--font-tungsten), sans-serif", border: "1px solid #2A5298" }}
          >
            <RiDiscordFill size={16} />
            Add to Discord
          </a>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <RiMenuLine size={24} />
          </button>
        </div>
      </header>

      {/* Sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative ml-auto h-full w-72 flex flex-col px-8 py-8 gap-8"
            style={{ background: "#0B1924", borderLeft: "1px solid #2A5298" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <RiCloseLine size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="text-xl font-bold tracking-widest text-white/70 uppercase hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="mt-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold tracking-widest text-white uppercase hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-tungsten), sans-serif", border: "1px solid #2A5298" }}
            >
              <RiDiscordFill size={16} />
              Add to Discord
            </a>
          </div>
        </div>
      )}
    </>
  );
}
