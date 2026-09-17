import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Fuel, Warehouse, Ship, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/language';

const icons = [Fuel, Warehouse, Ship, ShieldCheck];

const content = {
  en: {
    badge: 'International Petroleum Trading',
    titleLine1: 'Securing your',
    titleLine2: 'energy supply chain',
    subtitle:
      "Shemal Petroleum supports oil companies, refineries and distributors in the trading, storage and logistics of petroleum products, with the HSE rigor the industry demands.",
    rotator: ['Trading & Supply', 'Storage & Terminals', 'Logistics & Transport', 'HSE & Compliance'],
    ctaPrimary: 'Request an Offer',
    ctaSecondary: 'Discover Our Activities',
    cards: [
      { title: 'Trading & Supply', desc: 'Crude and refined products, spot & term contracts' },
      { title: 'Storage & Terminals', desc: 'Storage capacity, real-time stock management' },
      { title: 'Logistics', desc: 'Maritime, pipeline, road fleet' },
      { title: 'HSE & Compliance', desc: 'Safety, environment, international standards' },
    ],
  },
  ar: {
    badge: 'تجارة نفطية دولية',
    titleLine1: 'نؤمّن',
    titleLine2: 'سلسلة إمدادكم من الطاقة',
    subtitle:
      'تدعم شركة شمال للنفط شركات النفط والمصافي والموزعين في تجارة وتخزين ونقل المنتجات النفطية، بالتزام صارم بمعايير الصحة والسلامة والبيئة.',
    rotator: ['التوريد والتجارة', 'التخزين والمحطات', 'النقل واللوجستيات', 'الصحة والسلامة والبيئة'],
    ctaPrimary: 'اطلب عرض سعر',
    ctaSecondary: 'اكتشف أنشطتنا',
    cards: [
      { title: 'التوريد والتجارة', desc: 'النفط الخام والمنتجات المكررة، عقود فورية وآجلة' },
      { title: 'التخزين والمحطات', desc: 'سعات تخزينية وإدارة المخزون في الوقت الفعلي' },
      { title: 'اللوجستيات', desc: 'النقل البحري وخطوط الأنابيب والأسطول البري' },
      { title: 'الصحة والسلامة والبيئة', desc: 'السلامة والبيئة والمعايير الدولية' },
    ],
  },
};

const Hero = () => {
  const { lang, dir } = useLanguage();
  const c = content[lang];
  const [currentService, setCurrentService] = useState(0);
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % c.rotator.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [c.rotator.length]);

  const CurrentIcon = icons[currentService];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[100px]" />
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
          <div className="text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white/90">{c.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-up animation-delay-100">
              {c.titleLine1}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-shemal-gold-light">
                {c.titleLine2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              {c.subtitle}
            </p>

            {/* Service Rotator */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-up animation-delay-300">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <CurrentIcon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-white font-semibold text-lg transition-all duration-300">
                {c.rotator[currentService]}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Link to="/contact" className="btn-primary group">
                {c.ctaPrimary}
                <Arrow className="ms-2 w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link to="/trading" className="px-6 py-3 rounded-xl font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                {c.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animation-delay-500">
            {c.cards.map((item, index) => {
              const ItemIcon = icons[index];
              return (
                <div
                  key={item.title}
                  className={`group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                    index % 2 === 1 ? 'sm:translate-y-6' : ''
                  }`}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ItemIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              );
            })}
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
