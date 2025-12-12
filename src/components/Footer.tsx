import logo from '@/assets/arotech-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arotech-gray-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Arotech" className="h-10 brightness-0 invert" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#accueil" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors">
              Accueil
            </a>
            <a href="#about" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors">
              À propos
            </a>
            <a href="#services" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-secondary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} Arotech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
