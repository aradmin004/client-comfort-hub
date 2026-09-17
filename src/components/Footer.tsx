import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import icon from '@/assets/shemal-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Trading & Négoce', href: '/trading' },
    { label: 'Infrastructures & Logistique', href: '/infrastructure' },
    { label: 'HSE & Conformité', href: '/hse' },
    { label: 'Support Client', href: '/support' },
  ];

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

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
                <span className="font-display font-bold text-xl">SHEMAL</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-background/60">PETROLEUM</span>
              </span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Négoce, stockage et distribution de produits pétroliers. Un partenaire fiable
              pour sécuriser votre approvisionnement, de l'origine jusqu'au dernier kilomètre.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@shemalpetroleum.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@shemalpetroleum.com
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                Moyen-Orient & Afrique du Nord
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Activités</h4>
            <ul className="space-y-3">
              {services.map((item) => (
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
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {links.map((item) => (
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
            © {currentYear} Shemal Petroleum. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
