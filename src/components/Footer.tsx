import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/arotech-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Consultance', href: '/consultance' },
    { label: 'Infrastructure', href: '/infrastructure' },
    { label: 'Sécurité', href: '/securite' },
    { label: 'Support', href: '/support' },
  ];

  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Arotech" className="h-10 brightness-0 invert" />
              <span className="font-bold text-xl">Arotech</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Expert IT en Belgique. Réseaux, sécurité, cloud et support 
              pour PME, indépendants et secteur médical.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@arotech.be" 
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@arotech.be
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                Belgique (Wallonie)
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
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
            © {currentYear} Arotech. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <span>TVA: BE XXX.XXX.XXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
