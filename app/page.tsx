import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FabricTechniqueMatrix from "@/components/FabricTechniqueMatrix";
import SizeChartMatrix from "@/components/SizeChartMatrix";
import PriceEstimator from "@/components/PriceEstimator";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <FabricTechniqueMatrix />
        <SizeChartMatrix />
        <PriceEstimator />
        <WorkflowSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
