import { Link } from 'react-router-dom';
import {
  Fuel,
  Warehouse,
  ShieldCheck,
  Truck,
  Headphones,
  TrendingUp,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { useLanguage } from '@/lib/language';

const serviceMeta = [
  { icon: Fuel, link: '/trading', color: 'from-amber-400 to-yellow-600' },
  { icon: Warehouse, link: '/infrastructure', color: 'from-sky-600 to-blue-700' },
  { icon: ShieldCheck, link: '/hse', color: 'from-emerald-500 to-teal-600' },
  { icon: Truck, link: '/infrastructure', color: 'from-cyan-500 to-sky-600' },
  { icon: Headphones, link: '/support', color: 'from-orange-500 to-red-500' },
  { icon: TrendingUp, link: '/contact', color: 'from-violet-500 to-purple-600' },
];

const content = {
  en: {
    badge: 'Our Activities',
    headingPart1: 'A complete chain of',
    headingHighlight: 'petroleum services',
    subtitle:
      "From sourcing to final delivery, we support every step of your energy supply chain.",
    learnMore: 'Learn more',
    services: [
      { title: 'Trading & Supply', description: 'Crude and refined products, spot and term contracts, international sourcing.' },
      { title: 'Infrastructure & Storage', description: 'Terminals, storage capacity and real-time stock management.' },
      { title: 'HSE & Compliance', description: 'Safety, environment, international standards and certifications.' },
      { title: 'Logistics & Transport', description: 'Maritime, pipeline and road fleet transport, from terminal to client.' },
      { title: 'Client Support', description: 'Delivery tracking, dedicated assistance and complaint handling.' },
      { title: 'Advisory & Development', description: 'Contract structuring, supply strategy, hands-on support.' },
    ],
  },
  ar: {
    badge: 'أنشطتنا',
    headingPart1: 'سلسلة متكاملة من',
    headingHighlight: 'الخدمات النفطية',
    subtitle: 'من التوريد إلى التسليم النهائي، نرافقكم في كل مرحلة من سلسلة إمداد الطاقة.',
    learnMore: 'اعرف المزيد',
    services: [
      { title: 'التوريد والتجارة', description: 'النفط الخام والمنتجات المكررة، عقود فورية وآجلة، وتوريد دولي.' },
      { title: 'البنية التحتية والتخزين', description: 'محطات ومستودعات وإدارة المخزون في الوقت الفعلي.' },
      { title: 'الصحة والسلامة والبيئة', description: 'السلامة والبيئة والمعايير الدولية والشهادات.' },
      { title: 'النقل واللوجستيات', description: 'النقل البحري وخطوط الأنابيب والأسطول البري، من المحطة إلى العميل.' },
      { title: 'دعم العملاء', description: 'تتبع الشحنات، مساعدة مخصصة، ومعالجة الشكاوى.' },
      { title: 'الاستشارات والتطوير', description: 'هيكلة العقود، استراتيجية التوريد، ومرافقة ميدانية.' },
    ],
  },
};

const Services = () => {
  const { lang, dir } = useLanguage();
  const c = content[lang];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-shemal-gold-dark text-sm font-semibold mb-4 animate-fade-up">
            {c.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            {c.headingPart1} <span className="text-gradient">{c.headingHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {c.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.services.map((service, index) => {
            const meta = serviceMeta[index];
            return (
              <Link
                key={service.title}
                to={meta.link}
                className="group feature-card animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className={`service-icon bg-gradient-to-br ${meta.color}`}>
                  <meta.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-sm font-semibold text-shemal-gold-dark opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {c.learnMore}
                  <Arrow className="ms-1 w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
