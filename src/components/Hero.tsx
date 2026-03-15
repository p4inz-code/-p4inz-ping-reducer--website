import { motion } from "framer-motion";
import { ArrowRight, Globe, Headphones } from "lucide-react";

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Hero = () => {
  const stats = [
    { value: "3+", label: "Tools" },
    { value: "500+", label: "Users" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pb-24 pt-32 sm:px-6 md:pb-32 md:pt-48">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(180,60,255,0.1)] transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(180,60,255,0.2)] sm:gap-3 sm:px-6 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LATENCY ENDS HERE.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full animate-pulse" />
            <img
              src="/favicon.png"
              alt="Obsidian Labs"
              className="relative h-28 w-28 rounded-full object-cover shadow-2xl ring-4 ring-white/10 transition-transform duration-500 hover:scale-110"
              width={112}
              height={112}
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-text="OBSIDIAN LABS"
            className="glitch-text mx-auto max-w-4xl text-4xl sm:text-6xl font-black leading-[1.1] tracking-tighter md:text-8xl xl:text-[7rem] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent px-4"
          >
            OBSIDIAN LABS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base px-4 font-medium text-white/60 md:text-2xl leading-relaxed sm:mt-8"
          >
            P4INZ Ping Reducer stabilizes your connection, cuts ping spikes, and keeps competitive gameplay smooth under pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#products" className="group relative inline-flex w-full max-w-[20rem] items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(180,60,255,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(180,60,255,0.6)] active:scale-95 sm:w-auto sm:min-w-[240px] sm:px-10">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href="https://discord.gg/obsidianlabs" className="group inline-flex w-full max-w-[20rem] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 sm:w-auto sm:min-w-[240px] sm:px-10">
              <DiscordIcon /> JOIN DISCORD
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-white/10 hover:bg-white/[0.05]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-4xl font-black text-primary md:text-5xl">{stat.value}</div>
                <div className="relative mt-2 text-xs font-bold uppercase tracking-[0.25em] text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-10 text-sm font-bold text-white/30 uppercase tracking-widest"
          >
            <span className="inline-flex items-center gap-3 hover:text-white/50 transition-colors"><Globe size={20} className="text-primary/50" /> Connection stabilization</span>
            <span className="inline-flex items-center gap-3 hover:text-white/50 transition-colors"><Headphones size={20} className="text-primary/50" /> 24/7 support</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
