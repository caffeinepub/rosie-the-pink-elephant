import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.888 0.045 5) 0%, oklch(0.853 0.06 5) 50%, oklch(0.888 0.045 5) 100%)",
      }}
    >
      {/* Decorative elephant silhouettes */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span
          className="absolute top-8 left-8 text-5xl opacity-10"
          aria-hidden="true"
        >
          🐘
        </span>
        <span
          className="absolute top-16 right-16 text-3xl opacity-10"
          aria-hidden="true"
        >
          🐘
        </span>
        <span
          className="absolute bottom-16 left-1/4 text-4xl opacity-10"
          aria-hidden="true"
        >
          🐘
        </span>
        <span
          className="absolute bottom-8 right-1/3 text-2xl opacity-10"
          aria-hidden="true"
        >
          🐘
        </span>
        <span
          className="absolute top-12 left-1/3 text-2xl animate-sparkle"
          style={{ color: "oklch(0.865 0.07 75)" }}
          aria-hidden="true"
        >
          ✨
        </span>
        <span
          className="absolute top-24 right-1/4 text-xl animate-sparkle-delay"
          style={{ color: "oklch(0.865 0.07 75)" }}
          aria-hidden="true"
        >
          ⭐
        </span>
        <span
          className="absolute bottom-20 right-12 text-2xl animate-sparkle-delay-2"
          style={{ color: "oklch(0.865 0.07 75)" }}
          aria-hidden="true"
        >
          ✨
        </span>
        <span
          className="absolute bottom-32 left-16 text-lg animate-sparkle"
          style={{ color: "oklch(0.865 0.07 75)" }}
          aria-hidden="true"
        >
          🌸
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Rosie image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="relative rounded-3xl overflow-hidden animate-float"
              style={{
                boxShadow: "0 8px 40px oklch(0.73 0.075 5 / 0.35)",
                border: "4px solid oklch(0.73 0.075 5 / 0.5)",
                maxWidth: 480,
                width: "100%",
              }}
            >
              <img
                src="/assets/generated/rosie-hero.dim_600x500.png"
                alt="Rosie the Pink Elephant"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4"
              style={{ color: "oklch(0.32 0.07 30)" }}
            >
              Hi, I&apos;m Rosie! 🐘
            </h1>
            <p
              className="text-lg sm:text-xl font-semibold mb-8 max-w-md leading-relaxed"
              style={{ color: "oklch(0.42 0.07 30)" }}
            >
              I&apos;m Rosie, the pinkest and most magical elephant in the whole
              wide world! I love balloons, flowers, and making new friends.
            </p>
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollToSection("meet-rosie")}
              className="px-10 py-4 rounded-pill text-lg font-black transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "oklch(0.67 0.09 5)",
                color: "white",
                boxShadow: "0 4px 20px oklch(0.67 0.09 5 / 0.4)",
              }}
            >
              Meet Me! 🌸
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
