import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Mensal",
    price: "R$ 47",
    period: "/mês",
    description: "Acesso total a todas as funcionalidades.",
    features: [
      "Legendas ilimitadas com IA",
      "Calendário editorial completo",
      "Fluxos de engajamento",
      "Suporte por e-mail",
    ],
    popular: false,
    icon: Star,
    cta: "Começar agora",
  },
  {
    name: "Anual",
    price: "R$ 470",
    period: "/ano",
    badge: "Economize 2 meses",
    description: "Melhor custo-benefício para criadores dedicados.",
    features: [
      "Tudo do plano Mensal",
      "Economia de R$ 94",
      "Suporte prioritário",
      "Acesso antecipado a novidades",
    ],
    popular: true,
    icon: Sparkles,
    cta: "Assinar com desconto",
  },
  {
    name: "Founder's Pass",
    price: "R$ 997",
    period: " vitalício",
    badge: "Vagas Limitadas",
    description: "Somente para os primeiros 50 usuários.",
    features: [
      "Tudo do plano Anual",
      "Acesso vitalício",
      "Badge exclusivo de Founder",
      "Grupo privado de founders",
      "Consultoria 1-a-1 mensal",
    ],
    popular: false,
    icon: Crown,
    cta: "Garantir minha vaga",
    founder: true,
  },
];

const PricingSection = () => {
  const { toast } = useToast();

  const handlePlanClick = (planName: string) => {
    toast({
      title: "🚀 Quase lá!",
      description: `Você escolheu o plano ${planName}. Em breve o checkout estará disponível!`,
    });
  };

  return (
    <section id="precos" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Escolha o plano ideal para{" "}
            <span className="gradient-text">seu crescimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Sem surpresas. Cancele quando quiser.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 transition ${
                plan.popular
                  ? "border-2 border-primary bg-card shadow-[var(--shadow-glow)] scale-105"
                  : plan.founder
                  ? "glass-card border border-secondary/30"
                  : "glass-card"
              }`}
            >
              {plan.badge && (
                <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {plan.badge}
                </span>
              )}

              <plan.icon className={`mb-4 h-8 w-8 ${plan.founder ? "text-secondary" : "text-primary"}`} />
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : plan.founder
                    ? "bg-secondary text-secondary-foreground"
                    : "border border-border bg-muted text-foreground hover:bg-border"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
