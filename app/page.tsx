import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import ColorSection from "@/components/ColorSection";
import SizeChartMatrix from "@/components/SizeChartMatrix";
import ServicesSection from "@/components/ServicesSection";
import WorkshopLocationSection from "@/components/WorkshopLocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <ColorSection />
        <SizeChartMatrix />
        <ServicesSection />
        <WorkshopLocationSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
