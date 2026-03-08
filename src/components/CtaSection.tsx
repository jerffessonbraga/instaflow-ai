import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-6">
            🔥 Apenas 50 vagas para Founder's Pass
          </div>

          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Pare de pensar.{" "}
            <span className="gradient-text">Comece a criar.</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Enquanto você lê isso, seus concorrentes já estão postando. Garanta seu lugar
            no InstaFlow e transforme sua presença no Instagram hoje.
          </p>

          {/* Counter */}
          <div className="mt-10 flex items-center justify-center gap-8">
            {[
              { value: "12", label: "vagas restantes" },
              { value: "2.4k+", label: "legendas geradas" },
              { value: "98%", label: "satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#precos"
              className="inline-block rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
            >
              Garantir minha vaga agora →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
