import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import icon from '@/assets/shemal-icon.svg';
import { useLanguage } from '@/lib/language';

const content = {
  en: {
    brand: 'SHEMAL',
    brandSub: 'PETROLEUM',
    nav: [
      { href: '/', label: 'Home' },
      { href: '/trading', label: 'Trading & Supply' },
      { href: '/infrastructure', label: 'Infrastructure & Logistics' },
      { href: '/hse', label: 'HSE & Compliance' },
      { href: '/support', label: 'Client Support' },
      { href: '/contact', label: 'Contact' },
    ],
    cta: 'Request an Offer',
    switchLabel: 'العربية',
  },
  ar: {
    brand: 'شمال',
    brandSub: 'للنفط',
    nav: [
      { href: '/', label: 'الرئيسية' },
      { href: '/trading', label: 'التوريد والتجارة' },
      { href: '/infrastructure', label: 'البنية التحتية واللوجستيات' },
      { href: '/hse', label: 'الصحة والسلامة والبيئة' },
      { href: '/support', label: 'دعم العملاء' },
      { href: '/contact', label: 'اتصل بنا' },
    ],
    cta: 'اطلب عرض سعر',
    switchLabel: 'English',
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  const c = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={icon}
              alt="Shemal Petroleum"
              className="h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span
                className={`font-display font-bold text-lg tracking-wide transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {c.brand}
              </span>
              <span
                className={`text-[10px] font-semibold tracking-[0.3em] transition-colors ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                {c.brandSub}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {c.nav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isScrolled
                  ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Switch language"
            >
              <Languages className="w-4 h-4" />
              {c.switchLabel}
            </button>
            <Link to="/contact" className="btn-primary text-sm">
              {c.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className={`p-2.5 rounded-xl transition-colors ${
                isScrolled ? 'text-foreground bg-muted/50 hover:bg-muted' : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="Switch language"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-colors ${
                isScrolled ? 'text-foreground bg-muted/50 hover:bg-muted' : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className={`flex flex-col gap-1 pt-4 border-t ${isScrolled ? 'border-border/50' : 'border-white/10'}`}>
            {c.nav.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : isScrolled
                    ? 'text-foreground/70 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-3"
            >
              {c.cta}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
