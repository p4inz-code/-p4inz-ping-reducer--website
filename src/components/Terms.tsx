import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const sections = [
  { title: "Our Purpose", text: "Obsidian Labs provides software tools for PC optimization and gaming enhancement." },
  { title: "Licence and Usage", text: "Each purchase grants a single-user license. Resale is prohibited." },
  { title: "Payments and Refunds", text: "All sales final after 24 hours. Chargebacks lead to permanent ban." },
  { title: "No Warranty", text: 'Software provided "as is" without warranty of any kind.' },
  { title: "Changes to Terms", text: "We may update terms; continued use implies acceptance." },
];

import GlowCard from "@/components/GlowCard";

const Terms = () => (
  <section id="terms" className="py-32 relative">
    <div className="container max-w-4xl relative z-10">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
        >
          Legal
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-black text-white tracking-tight"
        >
          Terms of Service
        </motion.h2>
      </div>

      <GlowCard
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden border border-white/5 bg-white/[0.02] rounded-[3rem] p-12 md:p-16 backdrop-blur-2xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
      >
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.title} className="relative group/item">
              <h4 className="font-display text-xl font-black text-primary mb-3 tracking-tight group-hover/item:text-primary-foreground transition-colors duration-300">{s.title}</h4>
              <p className="text-lg leading-relaxed text-white/50 font-medium group-hover/item:text-white/70 transition-colors duration-300">{s.text}</p>
            </div>
          ))}
        </div>
      </GlowCard>
    </div>
  </section>
);

export default Terms;
