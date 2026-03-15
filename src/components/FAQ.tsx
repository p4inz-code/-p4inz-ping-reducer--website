import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I get my product?", a: "After payment via Discord ticket, you'll receive your license key instantly in the same channel." },
  { q: "Is there a refund policy?", a: "We offer refunds within 24h if the tool doesn't work as described. Contact support." },
  { q: "Do you accept Robux?", a: "Yes, we accept both Robux (group funds) and USD via PayPal/Crypto." },
  { q: "Can I use these on multiple PCs?", a: "Licenses are per user, but you can activate on up to 2 PCs with the same key." },
  { q: "Are tools undetectable?", a: "Yes, we regularly update to stay ahead of anticheats. No bans reported." },
  { q: "What is P4INZ?", a: "P4INZ is our brand for gaming-oriented utilities, optimized for performance." },
  { q: "How to contact support?", a: "Open a ticket in our Discord or DM an admin. Response within 1 hour." },
];

const FAQ = () => (
  <section id="faq" className="py-32 relative">
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="container max-w-4xl relative z-10">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
        >
          Support
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-black text-white tracking-tight"
        >
          Common Questions
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <GlowCard 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              <AccordionItem value={`faq-${i}`} className="border-none px-8">
                <AccordionTrigger className="font-display font-black text-lg md:text-xl text-left py-7 hover:no-underline text-white transition-colors [&[data-state=open]]:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-8 text-base font-medium leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </GlowCard>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
