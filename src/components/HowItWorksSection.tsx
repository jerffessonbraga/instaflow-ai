import { motion } from "framer-motion";
import { Wand2, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Wand2,
    title: "Diga seu nicho",
    description: "Informe seu segmento e tom de voz. A IA aprende o seu estilo em segundos.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Gere seu conteúdo",
    description: "Legendas, hashtags e roteiros de Reels aparecem prontos para você editar e publicar.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Cresça no automático",
    description: "Ative os fluxos de engajamento e veja seus números subirem enquanto você foca no que importa.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Simples assim: <span className="gradient-text">3 passos</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do zero ao conteúdo publicado em minutos.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <step.icon className="h-10 w-10 text-primary" />
              </div>
              <span className="font-display text-sm font-bold text-primary">{step.number}</span>
              <h3 className="font-display mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
