import { CheckCircle, Users, Building2, Heart } from 'lucide-react';

const About = () => {
  const features = [
    'Solutions personnalisées et adaptées',
    'Réactivité et disponibilité',
    'Expertise technique certifiée',
    'Approche pragmatique et efficace',
  ];

  const audiences = [
    { icon: Building2, title: 'PME & Indépendants', desc: 'Réseau fiable, cloud organisé' },
    { icon: Users, title: 'Particuliers', desc: 'WiFi, dépannage, conseils' },
    { icon: Heart, title: 'Secteur Médical', desc: 'Sécurité, conformité, continuité' },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-up">
              À propos d'Arotech
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
              Votre partenaire IT <span className="text-gradient">de confiance</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              Je construis des infrastructures stables et performantes : adressage IP, 
              segmentation VLAN, WiFi, supervision, documentation et intégration cloud. 
              Mon objectif est de rendre vos projets clairs, pilotables et réalisables.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Audience Cards */}
          <div className="space-y-4">
            {audiences.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card-hover p-6 rounded-2xl animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-up animation-delay-600">
              {[
                { value: '10+', label: 'Années exp.' },
                { value: '100+', label: 'Projets' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
