import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const services = [
  'Configuration et maintenance des ordinateurs',
  'Formations',
  'Installation de vos infrastructures IT',
  'Caméras de surveillance',
  'Sécurisation réseaux',
  'Audits et conseils informatiques',
  'Sauvegarde des données en ligne',
  'Téléphonie IP',
  'Solutions Cloud',
];

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-fade-up">
            Votre Partenaire IT
          </h1>
          
          <div className="h-20 md:h-24 flex items-center justify-center overflow-hidden mb-8">
            <p
              key={currentService}
              className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/80 font-display font-medium animate-fade-in"
            >
              {services[currentService]}
            </p>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Solutions informatiques professionnelles pour particuliers, indépendants et entreprises
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-arotech-blue-dark font-display font-semibold rounded-lg shadow-arotech-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              Nos Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
