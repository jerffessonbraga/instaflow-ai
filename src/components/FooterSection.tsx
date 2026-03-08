const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 text-center">
        <span className="font-display text-xl font-bold gradient-text">InstaFlow</span>
        <p className="mt-3 text-sm text-muted-foreground">
          © {new Date().getFullYear()} InstaFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
