import { motion } from "framer-motion";
import { Bot, Calendar, Zap } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    emoji: "🤖",
    title: "Gemini AI Integrada",
    description: "Sugestões de legendas e hashtags que combinam com seu nicho. A IA entende seu tom de voz e gera conteúdo autêntico.",
  },
  {
    icon: Calendar,
    emoji: "📅",
    title: "Calendário Editorial",
    description: "Organize sua semana em minutos. Visualize, arraste e publique — sem planilhas complicadas.",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Fluxos de Engajamento",
    description: "Automatize as respostas iniciais para seus seguidores. Aumente a retenção sem esforço manual.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Tudo que você precisa para{" "}
            <span className="gradient-text">dominar o Instagram</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="glass-card group rounded-2xl p-8 transition hover:border-primary/30"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {benefit.emoji}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
