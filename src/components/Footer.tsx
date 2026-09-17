import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import icon from '@/assets/shemal-icon.svg';
import { useLanguage } from '@/lib/language';

const content = {
  en: {
    brand: 'SHEMAL',
    brandSub: 'PETROLEUM',
    legalName: 'Shemal Company for Petroleum Supplies & Services',
    description:
      "Trading, storage and distribution of petroleum products. A reliable partner to secure your supply chain, from origin to final delivery.",
    email: 'contact@shemalpetroleum.com',
    zone: 'Middle East & North Africa',
    activitiesTitle: 'Activities',
    activities: [
      { label: 'Trading & Supply', href: '/trading' },
      { label: 'Infrastructure & Logistics', href: '/infrastructure' },
      { label: 'HSE & Compliance', href: '/hse' },
      { label: 'Client Support', href: '/support' },
    ],
    navTitle: 'Navigation',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
    rights: 'All rights reserved.',
  },
  ar: {
    brand: 'شمال',
    brandSub: 'للنفط',
    legalName: 'شركة شمال للتوريدات والخدمات النفطية',
    description:
      'التجارة والتخزين وتوزيع المنتجات النفطية. شريك موثوق لتأمين سلسلة توريدكم، من المصدر حتى التسليم النهائي.',
    email: 'contact@shemalpetroleum.com',
    zone: 'الشرق الأوسط وشمال أفريقيا',
    activitiesTitle: 'أنشطتنا',
    activities: [
      { label: 'التوريد والتجارة', href: '/trading' },
      { label: 'البنية التحتية واللوجستيات', href: '/infrastructure' },
      { label: 'الصحة والسلامة والبيئة', href: '/hse' },
      { label: 'دعم العملاء', href: '/support' },
    ],
    navTitle: 'روابط',
    nav: [
      { label: 'الرئيسية', href: '/' },
      { label: 'اتصل بنا', href: '/contact' },
    ],
    rights: 'جميع الحقوق محفوظة.',
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shemal-navy text-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={icon} alt="Shemal Petroleum" className="h-11 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl">{c.brand}</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-background/60">{c.brandSub}</span>
              </span>
            </Link>
            <p className="text-xs text-background/50 mb-3">{c.legalName}</p>
            <p className="text-background/70 max-w-sm mb-6">{c.description}</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                {c.email}
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                {c.zone}
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-bold mb-4">{c.activitiesTitle}</h4>
            <ul className="space-y-3">
              {c.activities.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">{c.navTitle}</h4>
            <ul className="space-y-3">
              {c.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} {c.brand === 'شمال' ? 'شمال للنفط' : 'Shemal Petroleum'}. {c.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
