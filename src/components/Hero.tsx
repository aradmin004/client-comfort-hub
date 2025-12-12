import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Network, Cloud, Headphones } from 'lucide-react';

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    { text: 'Infrastructure & Réseau', icon: Network },
    { text: 'Sécurité informatique', icon: Shield },
    { text: 'Cloud & Microsoft 365', icon: Cloud },
    { text: 'Support & Maintenance', icon: Headphones },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = services[currentService].icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/90">Expert IT en Belgique</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
              Solutions IT
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                sur mesure
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Réactivité, qualité et solutions adaptées à votre contexte. 
              PME, indépendants ou secteur médical.
            </p>

            {/* Service Rotator */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-up animation-delay-300">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <CurrentIcon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-white font-semibold text-lg transition-all duration-300">
                {services[currentService].text}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Link to="/contact" className="btn-primary group">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/consultance" className="px-6 py-3 rounded-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animation-delay-500">
            {[
              { icon: Network, title: 'Réseau & WiFi', desc: 'Switch, AP, VLAN, optimisation' },
              { icon: Shield, title: 'Sécurité', desc: 'Firewall, VPN, segmentation' },
              { icon: Cloud, title: 'Cloud & Support', desc: 'M365, Azure, maintenance' },
              { icon: Headphones, title: 'Accompagnement', desc: 'Formation, conseil, support' },
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                  index % 2 === 1 ? 'sm:translate-y-6' : ''
                }`}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
