import { motion } from "motion/react";

export default function MeetRosieSection() {
  return (
    <section
      id="meet-rosie"
      className="py-16 md:py-24"
      style={{ backgroundColor: "oklch(0.956 0.022 80)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2
              className="text-4xl md:text-5xl font-black mb-3"
              style={{ color: "oklch(0.32 0.07 30)" }}
            >
              Meet Rosie 🐘
            </h2>
            <div
              className="w-16 h-1.5 mx-auto rounded-pill"
              style={{ backgroundColor: "oklch(0.67 0.09 5)" }}
            />
          </div>

          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              backgroundColor: "oklch(0.853 0.06 5 / 0.5)",
              border: "2px solid oklch(0.73 0.075 5 / 0.4)",
              boxShadow: "0 4px 24px oklch(0.73 0.075 5 / 0.15)",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div
                className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-5xl"
                style={{ backgroundColor: "oklch(0.888 0.045 5)" }}
              >
                🐘
              </div>
              <div className="flex-1 space-y-4">
                <p
                  className="text-lg font-semibold leading-relaxed"
                  style={{ color: "oklch(0.32 0.07 30)" }}
                >
                  Hello, lovely friend! I'm Rosie — the sweetest, most
                  adventure-loving pink elephant you'll ever meet. I was born on
                  a warm sunny morning when a rainbow kissed the sky, and its
                  colors decided to stay with me forever.
                </p>
                <p
                  className="text-lg font-semibold leading-relaxed"
                  style={{ color: "oklch(0.42 0.07 30)" }}
                >
                  I'm known throughout the enchanted forest for my joyful trunk
                  waves, my love of splashing in puddles, and my uncanny ability
                  to find the most beautiful flower patches. Every day is a new
                  adventure with me!
                </p>
                <p
                  className="text-lg font-semibold leading-relaxed"
                  style={{ color: "oklch(0.42 0.07 30)" }}
                >
                  I believe in kindness, curiosity, and always stopping to smell
                  the flowers 🌸. Whether I'm painting with my trunk, dancing in
                  the rain, or collecting sparkly rocks, I pour my whole heart
                  into everything I do. Come join me on my magical journey!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    "💕 Kind",
                    "🎨 Creative",
                    "🌈 Magical",
                    "🌸 Playful",
                    "✨ Curious",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-pill text-sm font-bold"
                      style={{
                        backgroundColor: "oklch(0.888 0.045 5)",
                        color: "oklch(0.32 0.07 30)",
                        border: "1.5px solid oklch(0.73 0.075 5 / 0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
