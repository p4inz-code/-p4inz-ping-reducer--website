import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "How to Buy", href: "#how-to-buy" },
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms", href: "#terms" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] max-w-7xl flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(180,60,255,0.15)] ring-1 ring-white/5 sm:w-[95%] sm:px-6 md:top-6 md:px-8 md:py-4">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-pulse group-hover:bg-primary/40 transition-colors" />
          <img src="/favicon.png" alt="Obsidian Labs" className="relative h-9 w-9 md:h-11 md:w-11 rounded-full object-cover border border-white/10 transition-transform group-hover:scale-110" />
        </div>
        <span data-text="OBSIDIAN LABS" className="glitch-text hidden font-display text-lg md:text-xl font-bold leading-none tracking-tight sm:inline bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">OBSIDIAN LABS</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 transition-all hover:text-primary hover:drop-shadow-[0_0_8px_rgba(180,60,255,0.5)]">
            {l.label}
          </a>
        ))}
        <button className="relative group overflow-hidden flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_rgba(180,60,255,0.4)]">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2">
            <Shield size={16} /> ADMIN
          </span>
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="lg:hidden text-white/80 hover:text-white transition-colors p-2" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-[calc(100%+12px)] left-0 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/90 p-4 backdrop-blur-2xl lg:hidden z-50 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  onClick={() => setMobileOpen(false)} 
                  className="flex items-center justify-between px-6 py-4 rounded-2xl text-white/70 hover:text-primary hover:bg-white/5 transition-all font-medium"
                >
                  {l.label}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <button className="w-full flex items-center justify-center gap-3 rounded-2xl bg-primary/20 border border-primary/40 py-4 text-primary font-bold">
                <Shield size={18} /> ADMIN ACCESS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
