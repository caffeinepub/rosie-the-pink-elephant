import { motion } from "motion/react";

export default function AdventuresSection() {
  return (
    <section
      id="adventures"
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.888 0.045 5) 0%, oklch(0.853 0.06 5) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-3"
            style={{ color: "oklch(0.32 0.07 30)" }}
          >
            Adventures 🌈
          </h2>
          <div
            className="w-16 h-1.5 mx-auto rounded-pill"
            style={{ backgroundColor: "oklch(0.67 0.09 5)" }}
          />
        </motion.div>

        <motion.div
          data-ocid="adventures.card"
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            backgroundColor: "oklch(0.956 0.022 80)",
            border: "2px solid oklch(0.73 0.075 5 / 0.4)",
            boxShadow: "0 8px 40px oklch(0.73 0.075 5 / 0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Decorative sparkles */}
          <span
            className="absolute top-4 right-6 text-2xl animate-sparkle"
            style={{ color: "oklch(0.865 0.07 75)" }}
            aria-hidden
          >
            ✨
          </span>
          <span
            className="absolute bottom-6 left-6 text-xl animate-sparkle-delay"
            style={{ color: "oklch(0.865 0.07 75)" }}
            aria-hidden
          >
            ⭐
          </span>

          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-xs font-black px-3 py-1 rounded-pill"
              style={{
                backgroundColor: "oklch(0.67 0.09 5)",
                color: "white",
              }}
            >
              Latest Adventure
            </span>
          </div>

          <h3
            className="text-2xl md:text-3xl font-black mb-4"
            style={{ color: "oklch(0.32 0.07 30)" }}
          >
            🌈 Rosie & the Rainbow Trail
          </h3>

          <p
            className="text-base md:text-lg font-semibold leading-relaxed mb-4"
            style={{ color: "oklch(0.42 0.07 30)" }}
          >
            One magical morning, Rosie woke up to discover a shimmering rainbow
            trail stretching across the meadow, glowing with every colour she'd
            ever dreamed of. With her heart full of wonder and her trunk held
            high, she set off to follow it — hopping over crystal-clear streams,
            ducking under arches of wildflowers, and gathering handfuls of
            fallen petals along the way.
          </p>

          <p
            className="text-base md:text-lg font-semibold leading-relaxed"
            style={{ color: "oklch(0.42 0.07 30)" }}
          >
            The trail led her to a hidden valley filled with the most
            breathtaking field of pink flowers she had ever seen — roses,
            peonies, and cherry blossoms as far as the eye could reach! Rosie
            danced through the petals, painted the sky with her trunk, and made
            a hundred new butterfly friends. It was, without a doubt, the most
            magical day of her life. 🌸💕
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["🌈 Rainbow", "🌸 Flowers", "🦋 Butterflies", "✨ Magic"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-pill text-sm font-bold"
                  style={{
                    backgroundColor: "oklch(0.888 0.045 5)",
                    color: "oklch(0.32 0.07 30)",
                    border: "1.5px solid oklch(0.73 0.075 5 / 0.5)",
                  }}
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
