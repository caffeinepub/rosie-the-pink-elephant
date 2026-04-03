export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer style={{ backgroundColor: "oklch(0.888 0.045 5)" }}>
      {/* Wavy top divider */}
      <div
        className="relative overflow-hidden h-16"
        style={{ backgroundColor: "oklch(0.956 0.022 80)" }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          role="presentation"
          focusable="false"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="oklch(0.888 0.045 5)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Decorative elephant */}
        <span
          className="absolute bottom-4 right-6 text-5xl opacity-20 select-none"
          aria-hidden="true"
        >
          🐘
        </span>

        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-4xl">🐘</span>
            <div>
              <div
                className="text-2xl font-black"
                style={{ color: "oklch(0.32 0.07 30)" }}
              >
                Rosie
              </div>
              <div
                className="text-sm font-semibold -mt-0.5"
                style={{ color: "oklch(0.55 0.08 5)" }}
              >
                Pink Elephant
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { label: "Home", href: "#home" },
              { label: "Meet Rosie", href: "#meet-rosie" },
              { label: "Gallery", href: "#gallery" },
              { label: "Fun Facts", href: "#fun-facts" },
              { label: "Adventures", href: "#adventures" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-bold transition-colors duration-200 hover:opacity-70"
                style={{ color: "oklch(0.32 0.07 30)" }}
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.href.replace("#", "");
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div
            className="w-24 h-0.5 rounded-full"
            style={{ backgroundColor: "oklch(0.73 0.075 5 / 0.5)" }}
          />

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p
              className="text-sm font-bold"
              style={{ color: "oklch(0.32 0.07 30)" }}
            >
              &copy; {year} Rosie the Pink Elephant. All rights reserved. 💕
            </p>
            <p
              className="text-xs font-semibold"
              style={{ color: "oklch(0.55 0.08 5)" }}
            >
              Built with ❤️ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
