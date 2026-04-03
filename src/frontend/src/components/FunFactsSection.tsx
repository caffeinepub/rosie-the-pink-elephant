import { motion } from "motion/react";

const whyPinkItems = [
  "Born under a magical rainbow",
  "The colors kissed her grey coat",
  "The pink stayed forever!",
  "She\u2019s one of a kind \ud83d\udc95",
];

const snackItems = [
  { emoji: "\ud83c\udf53", text: "Strawberries" },
  { emoji: "\ud83c\udf49", text: "Watermelon" },
  { emoji: "\ud83c\udf4b", text: "Pink Lemonade" },
  { emoji: "\ud83c\udf6d", text: "Cotton Candy" },
  { emoji: "\ud83c\udf38", text: "Flower Petals" },
];

const hobbyItems = [
  { emoji: "\ud83c\udfa8", text: "Painting with her trunk" },
  { emoji: "\ud83c\udf27\ufe0f", text: "Dancing in the rain" },
  { emoji: "\ud83d\udc8e", text: "Collecting sparkly rocks" },
  { emoji: "\ud83e\udde7", text: "Blowing bubbles" },
];

interface FactCard {
  title: string;
  bg: string;
  content: React.ReactNode;
}

const facts: FactCard[] = [
  {
    title: "Why am I Pink? \ud83c\udf38",
    bg: "oklch(0.888 0.045 5)",
    content: (
      <ol className="space-y-2 list-none">
        {whyPinkItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-semibold"
          >
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white"
              style={{ backgroundColor: "oklch(0.67 0.09 5)" }}
            >
              {whyPinkItems.indexOf(item) + 1}
            </span>
            <span style={{ color: "oklch(0.32 0.07 30)" }}>{item}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: "Favorite Snacks \ud83c\udf4e",
    bg: "oklch(0.89 0.06 75)",
    content: (
      <ul className="space-y-2 list-none">
        {snackItems.map(({ emoji, text }) => (
          <li
            key={text}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "oklch(0.32 0.07 30)" }}
          >
            <span className="text-lg">{emoji}</span>
            {text}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Rosie\u2019s Hobbies \ud83c\udfa8",
    bg: "oklch(0.853 0.06 5)",
    content: (
      <ul className="space-y-2 list-none">
        {hobbyItems.map(({ emoji, text }) => (
          <li
            key={text}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "oklch(0.32 0.07 30)" }}
          >
            <span className="text-lg">{emoji}</span>
            {text}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function FunFactsSection() {
  return (
    <section
      id="fun-facts"
      className="py-16 md:py-24"
      style={{ backgroundColor: "oklch(0.956 0.022 80)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-3"
            style={{ color: "oklch(0.32 0.07 30)" }}
          >
            Fun Facts About Rosie ✨
          </h2>
          <div
            className="w-16 h-1.5 mx-auto rounded-pill"
            style={{ backgroundColor: "oklch(0.67 0.09 5)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.title}
              data-ocid={`funfacts.item.${i + 1}`}
              className="rounded-3xl p-6 md:p-8"
              style={{
                backgroundColor: fact.bg,
                border: "2px solid oklch(0.73 0.075 5 / 0.4)",
                boxShadow: "0 4px 20px oklch(0.73 0.075 5 / 0.15)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <h3
                className="text-xl font-black mb-5"
                style={{ color: "oklch(0.32 0.07 30)" }}
              >
                {fact.title}
              </h3>
              {fact.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
