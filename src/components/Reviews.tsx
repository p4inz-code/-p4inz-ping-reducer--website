import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: '"Ping reducer works like magic. Ping dropped from 120 to 40."', author: "Jax", initials: "JD", product: "P4INZ Ping Reducer" },
  { text: '"FPS Booster gave me +40 fps in Warzone. legit."', author: "Zero", initials: "ZL", product: "FPS Booster" },
  { text: '"CleanerPro cleaned 20GB of junk, super fast."', author: "Tasia", initials: "TA", product: "CleanerPro" },
  { text: '"Support is 24/7, they helped me within 5min."', author: "Rex", initials: "RX", product: "Ping Reducer" },
  { text: '"Best optimization tools, never been banned."', author: "Mika", initials: "MK", product: "FPS Booster" },
  { text: '"Easy to use, works out of the box."', author: "Nox", initials: "NO", product: "CleanerPro" },
];

import GlowCard from "@/components/GlowCard";

const Reviews = () => (
  <section id="reviews" className="py-32 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
    
    <div className="container relative z-10">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
        >
          Testimonials
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-black text-white tracking-tight"
        >
          User Reviews
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <GlowCard
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10"
          >
            <div className="flex gap-1.5 mb-8">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={18} className="text-primary fill-primary shadow-[0_0_10px_rgba(180,60,255,0.4)]" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-white/70 mb-10 font-medium italic">"{r.text.replace(/"/g, '')}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-sm font-black text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
                {r.initials}
              </div>
              <div>
                <div className="font-black text-white tracking-tight">{r.author}</div>
                <div className="text-xs font-bold text-primary/70 tracking-widest uppercase">{r.product}</div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
