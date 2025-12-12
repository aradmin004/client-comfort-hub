import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, icon: Icon, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 animate-fade-up">
          <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{breadcrumb || title}</span>
        </nav>

        <div className="flex items-start gap-6">
          {Icon && (
            <div className="hidden sm:flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-up">
              <Icon className="w-10 h-10 text-accent" />
            </div>
          )}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-up animation-delay-100">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl animate-fade-up animation-delay-200">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
