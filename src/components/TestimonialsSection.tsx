import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila Rocha",
    role: "Social Media • 12k seguidores",
    avatar: "CR",
    text: "Eu passava 3 horas por dia criando legendas. Com o InstaFlow, faço em 10 minutos e o engajamento SUBIU. Parece mágica.",
    stars: 5,
  },
  {
    name: "Lucas Mendes",
    role: "Criador de conteúdo • 45k seguidores",
    avatar: "LM",
    text: "O calendário editorial mudou meu jogo. Organizo a semana inteira no domingo e o resto da semana só executo. Produtividade absurda.",
    stars: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Dona de e-commerce • 8k seguidores",
    avatar: "AB",
    text: "Finalmente consigo manter constância nas postagens. Meu faturamento subiu 40% depois que comecei a usar o InstaFlow.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Quem usa, <span className="gradient-text">recomenda</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja o que criadores reais estão dizendo.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
