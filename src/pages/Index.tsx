import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";
import { HeroScrollDemo } from "@/components/ui/demo";
import HowToBuy from "@/components/HowToBuy";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Terms from "@/components/Terms";
import DiscordCTA from "@/components/DiscordCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative z-10 min-h-screen text-foreground isolation-isolate">
      <CustomCursor />
      <Navbar />
      <Hero />
      <div className="defer-render-section">
        <HeroScrollDemo />
      </div>
      <div className="defer-render-section">
        <HowToBuy />
      </div>
      <div className="defer-render-section">
        <Products />
      </div>
      <div className="defer-render-section">
        <Reviews />
      </div>
      <div className="defer-render-section">
        <FAQ />
      </div>
      <div className="defer-render-section">
        <Terms />
      </div>
      <div className="defer-render-section">
        <DiscordCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
