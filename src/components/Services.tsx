import { Link } from 'react-router-dom';
import {
  Fuel,
  Warehouse,
  ShieldCheck,
  Truck,
  Headphones,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Fuel,
      title: 'Trading & Négoce',
      description: 'Brut et produits raffinés, contrats spot et à terme, sourcing international.',
      link: '/trading',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Warehouse,
      title: 'Infrastructures & Stockage',
      description: 'Terminaux, capacités de stockage et gestion des stocks en temps réel.',
      link: '/infrastructure',
      color: 'from-sky-600 to-blue-700'
    },
    {
      icon: ShieldCheck,
      title: 'HSE & Conformité',
      description: 'Sécurité, environnement, normes internationales et certifications.',
      link: '/hse',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Truck,
      title: 'Logistique & Transport',
      description: 'Transport maritime, pipeline et flotte routière, du terminal au client.',
      link: '/infrastructure',
      color: 'from-cyan-500 to-sky-600'
    },
    {
      icon: Headphones,
      title: 'Support Client',
      description: 'Suivi des livraisons, assistance dédiée et gestion des réclamations.',
      link: '/support',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Conseil & Développement',
      description: 'Structuration de contrats, stratégie d\'approvisionnement, accompagnement.',
      link: '/contact',
      color: 'from-violet-500 to-purple-600'
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-shemal-gold-dark text-sm font-semibold mb-4 animate-fade-up">
            Nos Activités
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Une chaîne <span className="text-gradient">complète</span> de services pétroliers
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            Du sourcing à la livraison finale, nous accompagnons chaque étape de votre
            chaîne d'approvisionnement énergétique.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group feature-card animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              <span className="inline-flex items-center text-sm font-semibold text-shemal-gold-dark opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                En savoir plus
                <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
