import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Wifi, 
  Server, 
  Monitor, 
  FileText, 
  Wrench,
  Cloud,
  ArrowRight,
  Building2,
  Users,
  Heart
} from 'lucide-react';

const Infrastructure = () => {
  const services = [
    {
      icon: FileText,
      title: 'Audit et recommandations',
      description: "Analyse de l'existant (topologie, performances, WiFi, risques), puis plan d'amélioration clair et concret."
    },
    {
      icon: Server,
      title: 'Switching et VLAN',
      description: "Configuration de switches, segmentation VLAN, adressage IP, routage, bonnes pratiques."
    },
    {
      icon: Wifi,
      title: 'WiFi professionnel',
      description: "Étude de couverture, optimisation, sécurité, SSID invités, stabilité et performance."
    },
    {
      icon: Monitor,
      title: 'Supervision et documentation',
      description: "Supervision, alerting, cartographie réseau, documentation et inventaire."
    },
    {
      icon: Wrench,
      title: 'Interventions & support',
      description: "Installation sur site, dépannage, migration progressive, accompagnement."
    },
    {
      icon: Network,
      title: 'Optimisation & stabilité',
      description: "Améliorer les performances, réduire les pannes, fiabiliser le WiFi et le réseau."
    }
  ];

  const audiences = [
    { icon: Building2, title: 'PME & indépendants', desc: 'Réseau fiable, WiFi performant, cloud bien organisé.' },
    { icon: Users, title: 'Particuliers', desc: 'WiFi maison, optimisation, dépannage, conseils.' },
    { icon: Heart, title: 'Médical / Hôpital', desc: 'Segmentation, bonnes pratiques, continuité de service.' },
  ];

  const workflow = [
    { step: '1', title: 'Analyse', desc: 'Besoin, contraintes, inventaire.' },
    { step: '2', title: 'Proposition', desc: 'Plan + devis clair.' },
    { step: '3', title: 'Mise en œuvre', desc: 'Installation, configuration, tests.' },
    { step: '4', title: 'Documentation', desc: 'Schéma, IP/VLAN, procédures.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title="Infrastructure & Réseau"
          subtitle="Conception, installation et optimisation de votre infrastructure (réseau, WiFi, cloud et hybride)."
          icon={Network}
          breadcrumb="Infrastructure"
        />

        {/* Ce que je fais + Pour qui */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ce que je fais */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ce que je fais</h2>
                <p className="text-muted-foreground mb-6">
                  Je construis une infrastructure stable et performante : adressage IP, 
                  segmentation VLAN, WiFi, supervision, documentation, et intégration cloud 
                  (Microsoft 365 / Azure).
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Demander un devis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/securite" className="btn-secondary">
                    Voir la partie Sécurité
                  </Link>
                </div>
              </div>

              {/* Pour qui */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Pour qui ?</h2>
                <div className="space-y-4">
                  {audiences.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Prestations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Services Infrastructure
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon bg-gradient-to-br from-blue-500 to-cyan-600">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud & Hybride */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Infrastructure Cloud & Hybride</h2>
                  <p className="text-muted-foreground">
                    Je vous accompagne dans la mise en place et l'amélioration de votre infrastructure cloud, 
                    avec une approche simple, sécurisée et adaptée à votre activité.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { title: 'Microsoft 365', desc: 'Mise en place, organisation et bonnes pratiques : comptes, accès, MFA, gestion des utilisateurs, collaboration.' },
                  { title: 'Azure', desc: 'Infrastructure cloud : réseau, VM, services, accès sécurisés, organisation et optimisation.' },
                  { title: 'Hybride (site + cloud)', desc: 'Connexion entre votre site et le cloud, stratégie de migration progressive, continuité et sauvegardes.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Discuter de votre projet Cloud
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/securite" className="btn-secondary">
                  Voir Sécurité
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Déroulement type d'une mission
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {workflow.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  Parlons de votre projet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/consultance" className="btn-secondary">
                  Voir tous les services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
