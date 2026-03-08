import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Preciso saber sobre IA para usar o InstaFlow?",
    a: "Não! O InstaFlow foi feito para ser simples. Basta informar seu nicho e tom de voz — a IA cuida do resto.",
  },
  {
    q: "Funciona para qualquer nicho no Instagram?",
    a: "Sim. Moda, fitness, gastronomia, educação, e-commerce, serviços… A IA se adapta ao seu segmento.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Claro. Nos planos Mensal e Anual, você cancela quando quiser sem burocracia. O Founder's Pass é vitalício.",
  },
  {
    q: "O conteúdo gerado é único?",
    a: "Sim. Cada sugestão é personalizada para o seu perfil, evitando conteúdo genérico ou repetitivo.",
  },
  {
    q: "E o Founder's Pass? Realmente são só 50 vagas?",
    a: "Sim. Quando as 50 vagas forem preenchidas, o plano vitalício será removido permanentemente.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-display font-semibold transition hover:text-primary"
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
