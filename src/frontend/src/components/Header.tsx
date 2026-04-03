import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Meet Rosie", href: "#meet-rosie" },
  { label: "Gallery", href: "#gallery" },
  { label: "Fun Facts", href: "#fun-facts" },
  { label: "Adventures", href: "#adventures" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavClick(href: string) {
    setActiveLink(href);
    scrollToSection(href);
    setMobileOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "oklch(0.888 0.045 5)",
        borderBottom: "1px solid oklch(0.73 0.075 5 / 0.4)",
        boxShadow: "0 2px 12px oklch(0.73 0.075 5 / 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-3xl">🐘</span>
            <div className="leading-tight">
              <div
                className="text-xl font-black tracking-wide"
                style={{ color: "oklch(0.32 0.07 30)" }}
              >
                Rosie
              </div>
              <div
                className="text-xs font-semibold -mt-0.5"
                style={{ color: "oklch(0.55 0.08 5)" }}
              >
                Pink Elephant
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 px-4 py-2 rounded-pill"
            style={{
              backgroundColor: "oklch(0.853 0.06 5 / 0.5)",
              border: "1px solid oklch(0.73 0.075 5 / 0.4)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-1.5 rounded-pill text-sm font-bold transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor:
                    activeLink === link.href
                      ? "oklch(0.67 0.09 5)"
                      : "transparent",
                  color:
                    activeLink === link.href ? "white" : "oklch(0.32 0.07 30)",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            data-ocid="nav.toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "oklch(0.32 0.07 30)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(0.853 0.06 5)" }}
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                  style={{
                    backgroundColor:
                      activeLink === link.href
                        ? "oklch(0.67 0.09 5)"
                        : "transparent",
                    color:
                      activeLink === link.href
                        ? "white"
                        : "oklch(0.32 0.07 30)",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
