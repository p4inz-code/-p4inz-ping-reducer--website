import { motion } from "framer-motion";
import { Globe, Zap, Rocket, Sparkles, Wrench, Play } from "lucide-react";

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

interface PriceTier {
  term: string;
  value: string;
  popular?: boolean;
}

interface Product {
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  pricing: PriceTier[];
  cta: "trial" | "discord";
}

const products: Product[] = [
  {
    badge: "FLAGSHIP",
    badgeColor: "bg-primary text-primary-foreground",
    icon: <><Globe size={28} className="text-primary" /><Zap size={28} className="text-primary" /></>,
    title: "P4INZ Ping Reducer",
    desc: "Reduce ping spikes & stabilize connection",
    features: ["Ping spike reduction", "Connection stabilization", "Lightweight engine", "Network diagnostics"],
    pricing: [
      { term: "Trial", value: "Free" },
      { term: "1 month", value: "$4.99", popular: true },
      { term: "6 months", value: "$19.99" },
      { term: "Lifetime", value: "$39.99" },
    ],
    cta: "trial",
  },
  {
    badge: "HOT",
    badgeColor: "bg-destructive text-destructive-foreground",
    icon: <Rocket size={28} className="text-primary" />,
    title: "FPS Booster",
    desc: "Maximize frame rate in games",
    features: ["Process lasso", "GPU priority", "Config clean", "RAM cleaner"],
    pricing: [
      { term: "1 month", value: "$3.49" },
      { term: "6 months", value: "$14.99" },
    ],
    cta: "discord",
  },
  {
    badge: "NEW",
    badgeColor: "bg-green-accent text-primary-foreground",
    icon: <Sparkles size={28} className="text-primary" />,
    title: "CleanerPro",
    desc: "Remove bloat & temp files",
    features: ["Deep scan", "Registry fix", "Startup manager", "Privacy clean"],
    pricing: [
      { term: "1 month", value: "$2.49" },
      { term: "6 months", value: "$9.99" },
    ],
    cta: "discord",
  },
];

import GlowCard from "@/components/GlowCard";

const Products = () => (
  <section id="products" className="py-32 relative">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="container relative z-10">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
        >
          Offerings
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-black text-white tracking-tight"
        >
          Our Tools
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <GlowCard
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10"
          >
            <div className="flex justify-between items-start mb-8">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${p.badgeColor} shadow-lg`}>
                {p.badge}
              </span>
              <div className="flex gap-2 p-3 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
            </div>

            <h3 className="font-display text-3xl font-black text-white mb-3 tracking-tight">{p.title}</h3>
            <p className="text-base text-white/50 mb-8 font-medium leading-relaxed">{p.desc}</p>

            <div className="space-y-4 mb-10 flex-grow">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white/90 transition-colors">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(180,60,255,0.8)]" />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {p.pricing.map((t) => (
                <div
                  key={t.term}
                  className={`relative flex-1 min-w-[80px] text-center rounded-2xl p-4 border transition-all duration-300 ${
                    t.popular 
                      ? "border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(180,60,255,0.2)]" 
                      : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-[8px] font-black uppercase tracking-tighter text-white shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <span className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1">{t.term}</span>
                  <span className="block font-black text-primary text-base">{t.value}</span>
                </div>
              ))}
            </div>

            {p.cta === "trial" ? (
              <a 
                href="https://discord.com/users/1381575003275001959"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn w-full overflow-hidden flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                <Play size={20} fill="currentColor" /> START FREE TRIAL
              </a>
            ) : (
              <a
                href="https://discord.gg/obsidianlabs"
                className="relative group/btn w-full overflow-hidden flex items-center justify-center gap-3 bg-[#5865F2] text-white py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(88,101,242,0.3)]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <DiscordIcon /> BUY ON DISCORD
              </a>
            )}
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
