import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  primaryAction?: string;
  secondaryAction?: string;
}

const ContactCTA = ({ 
  title = "Prêt à démarrer votre projet ?",
  subtitle = "Décrivez votre besoin, je reviens vers vous rapidement avec une proposition claire.",
  primaryAction = "Demander un devis",
  secondaryAction = "Voir les services"
}: ContactCTAProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="section-container relative z-10">
        <div className="bg-hero-gradient rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground bg-white hover:bg-white/90 transition-all duration-300 group"
              >
                {primaryAction}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/consultance" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {secondaryAction}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/60">
              <a href="mailto:info@arotech.be" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@arotech.be
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
