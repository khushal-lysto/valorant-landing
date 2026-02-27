import { RiDiscordFill, RiTwitterXFill, RiInstagramLine, RiRedditFill } from "react-icons/ri";

const columns = [
  {
    heading: "Bot Features",
    links: ["Instant Delivery", "Secure Payments", "Region Support", "Rewards Program"],
  },
  {
    heading: "Game Info",
    links: ["Patch Notes", "Agent Guide", "Map Pool", "Esports"],
  },
  {
    heading: "Community",
    links: ["Discord Server", "Twitter", "Instagram", "Reddit"],
  },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Support"];

export default function Footer() {
  return (
    <footer
      className="bg-black text-gray-400 py-16 font-[var(--font-lexend)]"
      style={{ borderTop: "4px solid #0F1923" }}
    >
      <div className="max-w-[1440px] mx-auto px-16">

        {/* Top row — logo + legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 3.8L18.4 20H5.6L12 5.8z" />
            </svg>
            <span
              className="text-2xl font-bold tracking-widest text-white uppercase"
              style={{ fontFamily: "var(--font-tungsten), sans-serif" }}
            >
              V-Bot Store
            </span>
          </div>

          {/* Legal links */}
          <div className="flex gap-8 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#FF4655] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-bold uppercase mb-4 tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: RiDiscordFill, label: "Discord" },
                { Icon: RiTwitterXFill, label: "Twitter" },
                { Icon: RiInstagramLine, label: "Instagram" },
                { Icon: RiRedditFill, label: "Reddit" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded bg-white/5 text-gray-400 hover:bg-[#FF4655] hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-xs opacity-50">
          <p>
            © 2024 V-Bot Store. Not affiliated with Riot Games. VALORANT and all
            related assets are trademarks of Riot Games, Inc.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
            <div className="w-2 h-2 bg-gray-600 rounded-full" />
          </div>
        </div>

      </div>
    </footer>
  );
}
