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
      <HeroScrollDemo />
      <HowToBuy />
      <Products />
      <Reviews />
      <FAQ />
      <Terms />
      <DiscordCTA />
      <Footer />
    </div>
  );
};

export default Index;
