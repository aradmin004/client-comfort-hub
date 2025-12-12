import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/arotech-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/consultance', label: 'Services' },
    { href: '/infrastructure', label: 'Infrastructure' },
    { href: '/securite', label: 'Sécurité' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ];

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
              src={logo} 
              alt="Arotech" 
              className="h-10 md:h-11 transition-transform duration-300 group-hover:scale-105" 
            />
            <span className={`font-bold text-xl tracking-tight hidden sm:block transition-colors ${
              isScrolled ? 'text-foreground' : 'text-foreground'
            }`}>
              Arotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-foreground bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col gap-1 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
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
              Demander un devis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
