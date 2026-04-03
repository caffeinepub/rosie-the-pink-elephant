import { motion } from "motion/react";

const photos = [
  {
    src: "/assets/generated/rosie-garden.dim_400x400.png",
    caption: "Garden Playtime",
    emoji: "🌷",
  },
  {
    src: "/assets/generated/rosie-playtime.dim_400x400.png",
    caption: "Playtime Fun",
    emoji: "🎈",
  },
  {
    src: "/assets/generated/rosie-magic.dim_400x400.png",
    caption: "Magical Moments",
    emoji: "✨",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
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
            Rosie's Photo Gallery 📸
          </h2>
          <div
            className="w-16 h-1.5 mx-auto rounded-pill"
            style={{ backgroundColor: "oklch(0.67 0.09 5)" }}
          />
          <p
            className="mt-4 text-base font-semibold"
            style={{ color: "oklch(0.48 0.06 30)" }}
          >
            A peek into Rosie's most magical adventures!
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          data-ocid="gallery.list"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.caption}
              data-ocid={`gallery.item.${i + 1}`}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="w-full rounded-3xl overflow-hidden"
                style={{
                  border: "3px solid oklch(0.73 0.075 5 / 0.5)",
                  boxShadow: "0 4px 20px oklch(0.73 0.075 5 / 0.2)",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="mt-4 px-5 py-2 rounded-pill font-bold text-base"
                style={{
                  backgroundColor: "oklch(0.888 0.045 5)",
                  color: "oklch(0.32 0.07 30)",
                  border: "1.5px solid oklch(0.73 0.075 5 / 0.4)",
                }}
              >
                {photo.emoji} {photo.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
