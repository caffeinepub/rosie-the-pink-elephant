import AdventuresSection from "./components/AdventuresSection";
import Footer from "./components/Footer";
import FunFactsSection from "./components/FunFactsSection";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MeetRosieSection from "./components/MeetRosieSection";

export default function App() {
  return (
    <div
      className="min-h-screen font-nunito"
      style={{ backgroundColor: "oklch(0.888 0.045 5)" }}
    >
      <Header />
      <main>
        <HeroSection />
        <MeetRosieSection />
        <GallerySection />
        <FunFactsSection />
        <AdventuresSection />
      </main>
      <Footer />
    </div>
  );
}
