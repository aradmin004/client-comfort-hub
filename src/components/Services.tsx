import { Link } from 'react-router-dom';
import { 
  Network, 
  Shield, 
  Cloud, 
  Headphones, 
  GraduationCap, 
  FileSearch,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: 'Consultance',
      description: 'Cadrage de projet, architecture, accompagnement et conseil stratégique.',
      link: '/consultance',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Network,
      title: 'Infrastructure',
      description: 'Réseau, WiFi, VLAN, switching et optimisation de vos systèmes.',
      link: '/infrastructure',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Firewall, VPN, audit, conformité NIS2/ISO 27001.',
      link: '/securite',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & Hybride',
      description: 'Microsoft 365, Azure, migration et infrastructure cloud.',
      link: '/infrastructure',
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Assistance, dépannage, maintenance préventive et interventions.',
      link: '/support',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Sensibilisation sécurité, bonnes pratiques, accompagnement équipes.',
      link: '/contact',
      color: 'from-pink-500 to-rose-600'
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-up">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Des solutions <span className="text-gradient">complètes</span> pour votre IT
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            De la consultation à l'implémentation, je vous accompagne à chaque étape de vos projets informatiques.
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
              
              <span className="inline-flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
