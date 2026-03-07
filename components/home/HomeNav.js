"use client";

export default function HomeNav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max">
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-2xl"
        style={{ background: "#111111", border: "1px solid #2a2a2a" }}
      >
        {/* Logo */}
        <div
          className="w-8 h-8 rounded-full flex-shrink-0"
          style={{
            background:
              "conic-gradient(from 0deg, #ff6b35 0%, #f7c59f 20%, #a8e6cf 40%, #5bc0eb 60%, #9b59b6 80%, #ff6b35 100%)",
          }}
        />

        <div className="flex items-center gap-1 ml-2">
          <a
            href="#"
            className="text-sm px-3 py-1.5 rounded-full transition-colors"
            style={{ color: "#888" }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#888")}
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm px-3 py-1.5 rounded-full transition-colors"
            style={{ color: "#888" }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#888")}
          >
            Product
          </a>
          <a
            href="#"
            className="text-sm px-4 py-1.5 rounded-full font-medium"
            style={{ background: "#ffffff", color: "#000" }}
          >
            Gamers
          </a>
        </div>
      </div>
    </nav>
  );
}
