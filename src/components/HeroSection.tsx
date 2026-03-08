import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 px-6 pt-24 pb-16">
        {/* Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 glass-card"
        >
          <span className="font-display text-2xl font-bold gradient-text">InstaFlow</span>
          <a
            href="#precos"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Começar agora
          </a>
        </motion.nav>

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ⚡ Powered by Gemini AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Domine seu Instagram:{" "}
            <span className="gradient-text">conteúdo que converte</span>, gerado em segundos com IA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Chega de perder horas pensando no que postar. O InstaFlow cria legendas, roteiros de Reels
            e calendários editoriais inteligentes para você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#precos"
              className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
            >
              Comece gratuitamente →
            </a>
            <a
              href="#beneficios"
              className="rounded-xl border border-border px-8 py-4 text-lg font-semibold text-foreground transition hover:bg-muted"
            >
              Ver benefícios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
