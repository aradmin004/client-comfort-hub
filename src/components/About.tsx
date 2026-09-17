import { CheckCircle, Factory, Building2, Fuel } from 'lucide-react';
import { useLanguage } from '@/lib/language';

const audienceIcons = [Factory, Building2, Fuel];

const content = {
  en: {
    badge: 'About Shemal Petroleum',
    headingPart1: 'Your trusted',
    headingHighlight: 'energy partner',
    paragraph:
      "Shemal Petroleum structures reliable supply chains: sourcing, storage, transport and delivery of petroleum products. Our goal is to make every operation clear, secure and compliant with industry requirements.",
    features: [
      'Secure and transparent contracts',
      'Responsiveness on physical and forward markets',
      'HSE and international standards compliance',
      'End-to-end traceability, from origin to delivery',
    ],
    audiences: [
      { title: 'Companies & refineries', desc: 'Crude and refined product supply' },
      { title: 'Distributors & traders', desc: 'Regular volumes, spot and term contracts' },
      { title: 'Stations & industrials', desc: 'Reliable delivery, stock management' },
    ],
    stats: [
      { value: '15+', label: "Years of expertise" },
      { value: '20+', label: 'Countries served' },
      { value: '24/7', label: 'Operational support' },
    ],
  },
  ar: {
    badge: 'عن شمال للنفط',
    headingPart1: 'شريككم',
    headingHighlight: 'الموثوق في الطاقة',
    paragraph:
      'تبني شركة شمال للنفط سلاسل توريد موثوقة: التوريد والتخزين والنقل وتسليم المنتجات النفطية. هدفنا أن تكون كل عملية واضحة وآمنة ومتوافقة مع متطلبات القطاع.',
    features: [
      'عقود آمنة وشفافة',
      'استجابة سريعة في الأسواق الفورية والآجلة',
      'الالتزام بمعايير الصحة والسلامة والبيئة والمعايير الدولية',
      'تتبع كامل من المصدر حتى التسليم',
    ],
    audiences: [
      { title: 'الشركات والمصافي', desc: 'توريد النفط الخام والمنتجات المكررة' },
      { title: 'الموزعون والتجار', desc: 'أحجام منتظمة، عقود فورية وآجلة' },
      { title: 'المحطات والصناعيون', desc: 'تسليم موثوق وإدارة المخزون' },
    ],
    stats: [
      { value: '+15', label: 'سنة خبرة' },
      { value: '+20', label: 'دولة نخدمها' },
      { value: '24/7', label: 'دعم تشغيلي' },
    ],
  },
};

const About = () => {
  const { lang } = useLanguage();
  const c = content[lang];

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
              {c.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
              {c.headingPart1} <span className="text-gradient">{c.headingHighlight}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              {c.paragraph}
            </p>

            <div className="space-y-4 mb-8">
              {c.features.map((feature, index) => (
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
            {c.audiences.map((item, index) => {
              const Icon = audienceIcons[index];
              return (
                <div
                  key={item.title}
                  className="glass-card-hover p-6 rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-shemal-gold-dark">
                      <Icon className="w-6 h-6 text-shemal-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-up animation-delay-600">
              {c.stats.map((stat) => (
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
