import Footer from "../footer";
import Navbar from "../navbar";
import HeroScroll from "../hero-scroll";
import Campaign from "../campaign";
import ProductGrid from "../product-grid";
import HorizontalScroll from "../horizontal-scroll";
import TestimonialsSection from "../testimonials";
import Lookbook from "../lookbook";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <HeroScroll />
      <ProductGrid />
      <Campaign />
      <Lookbook />
      <HorizontalScroll />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
