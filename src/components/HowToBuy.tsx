import { motion } from "framer-motion";
import { MessageSquare, CreditCard, Zap } from "lucide-react";

import GlowCard from "@/components/GlowCard";

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={36} height={36}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const steps = [
  { num: "01", icon: DiscordIcon, title: "Join Discord", desc: "Create an account and join our server to access the community." },
  { num: "02", icon: MessageSquare, title: "Open a ticket", desc: "Go to #support and open a ticket to request your product." },
  { num: "03", icon: CreditCard, title: "Choose payment", desc: "Pay via Robux or USD — we support both options." },
  { num: "04", icon: Zap, title: "Get activated", desc: "You'll receive your license key instantly in Discord." },
];

const HowToBuy = () => (
  <section id="how-to-buy" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
          >
            Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            How To Buy
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <GlowCard
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col h-full rounded-[2rem] border border-white/5 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-2"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="text-5xl font-black font-display text-white/5 transition-colors group-hover:text-primary/20">{s.num}</div>
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-[0_0_20px_rgba(180,60,255,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <s.icon size={32} />
                </div>
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-4 tracking-tight">{s.title}</h3>
              <p className="text-base leading-relaxed text-white/50 group-hover:text-white/70 transition-colors font-medium">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
);

export default HowToBuy;
