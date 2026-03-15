const Footer = () => (
  <footer className="py-20 relative overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-3xl">
    <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="Obsidian Labs" className="h-12 w-12 rounded-full object-cover border border-white/10" />
          <span className="font-display text-xl font-black text-white tracking-tight">OBSIDIAN LABS</span>
        </div>
        <p className="text-sm font-bold text-white/30 tracking-widest uppercase">© 2026 Obsidian Labs — All rights reserved.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
        {[
          { label: "Products", href: "#products" },
          { label: "FAQ", href: "#faq" },
          { label: "Terms", href: "#terms" },
          { label: "Discord", href: "https://discord.gg/obsidianlabs" },
        ].map((l) => (
          <a 
            key={l.label} 
            href={l.href} 
            className="text-sm font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(180,60,255,0.5)] transition-all duration-300"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
