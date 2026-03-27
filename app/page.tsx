import Footer from "../components/footer"
import AnimatedHero from "../components/ui/animated-hero"
import Navbar from "../components/navbar"
import HeroScroll from "../components/hero-scroll"
import ProductGrid from "../components/product-grid"
import HorizontalScroll from "../components/horizontal-scroll"
import TestimonialsSection from "../components/testimonials"
import Campaign from "../components/campaign"
import Lookbook from "../components/lookbook"

export default function Home() {
  return (
    <main className="bg-white text-black">

      <Navbar />

      <HeroScroll />

      <ProductGrid />

      <Campaign />

      <AnimatedHero />

      <Lookbook />

      <HorizontalScroll />

      <TestimonialsSection />

      <Footer />

    </main>
  );
}
