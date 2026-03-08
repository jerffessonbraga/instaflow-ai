import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-6 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Você sabe que precisa postar, mas a{" "}
            <span className="gradient-text">tela em branco</span> trava sua criatividade?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ficar olhando para o celular sem saber o que escrever, pesquisar hashtags por horas
            e sentir que seus concorrentes sempre estão um passo à frente… Esse ciclo acaba agora.
          </p>
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-primary to-secondary" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
