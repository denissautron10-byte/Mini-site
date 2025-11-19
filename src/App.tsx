import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { FeaturesDetailSection } from "./components/FeaturesDetailSection";
import { PricingSection } from "./components/PricingSection";
import { LunaSection } from "./components/LunaSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesDetailSection />
      <PricingSection />
      <LunaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}