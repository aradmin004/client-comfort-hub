import { 
  UserCheck, 
  Network, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Mail, 
  Headphones 
} from 'lucide-react';

const services = [
  {
    icon: UserCheck,
    title: 'Consultance',
    description: 'Conseil stratégique et accompagnement personnalisé pour vos projets IT',
  },
  {
    icon: Network,
    title: 'Infrastructures',
    description: 'Installation et gestion de vos réseaux et infrastructures informatiques',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Protection de vos données et sécurisation de vos systèmes',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Solutions cloud flexibles et évolutives pour votre entreprise',
  },
  {
    icon: Database,
    title: 'Backups',
    description: 'Sauvegarde et récupération de vos données critiques',
  },
  {
    icon: Users,
    title: 'Formations',
    description: 'Formation de votre personnel aux outils et technologies IT',
  },
  {
    icon: Mail,
    title: 'Messagerie',
    description: 'Solutions de messagerie professionnelle sécurisée',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Assistance technique et maintenance de vos équipements',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous vous proposons une offre complète de services informatiques adaptés à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-xl p-6 shadow-sm hover:shadow-arotech-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
