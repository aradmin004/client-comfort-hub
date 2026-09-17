import { CheckCircle, Factory, Building2, Fuel } from 'lucide-react';

const About = () => {
  const features = [
    'Contrats sécurisés et transparents',
    'Réactivité sur les marchés physiques et à terme',
    'Conformité HSE et normes internationales',
    'Traçabilité de bout en bout, de l\'origine à la livraison',
  ];

  const audiences = [
    { icon: Factory, title: 'Compagnies & raffineries', desc: 'Approvisionnement en brut et produits raffinés' },
    { icon: Building2, title: 'Distributeurs & négociants', desc: 'Volumes réguliers, contrats spot et terme' },
    { icon: Fuel, title: 'Stations & industriels', desc: 'Livraison fiable, gestion des stocks' },
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-shemal-gold-dark text-sm font-semibold mb-4 animate-fade-up">
              À propos de Shemal Petroleum
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
              Votre partenaire énergétique <span className="text-gradient">de confiance</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              Shemal Petroleum structure des chaînes d'approvisionnement fiables : sourcing,
              stockage, transport et livraison de produits pétroliers. Notre objectif est de
              rendre chaque opération claire, sécurisée et conforme aux exigences du secteur.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-shemal-gold-dark" />
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
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-shemal-gold-dark">
                    <item.icon className="w-6 h-6 text-shemal-navy" />
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
                { value: '15+', label: 'Années d\'expertise' },
                { value: '20+', label: 'Pays desservis' },
                { value: '24/7', label: 'Support opérationnel' },
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
