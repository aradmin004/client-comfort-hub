import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import {
  Warehouse,
  Ship,
  Truck,
  Gauge,
  FileText,
  Wrench,
  Globe,
  ArrowRight,
  Factory,
  Building2,
  Fuel
} from 'lucide-react';

const Infrastructure = () => {
  const services = [
    {
      icon: FileText,
      title: 'Audit et optimisation',
      description: "Analyse des capacités, des flux logistiques et des risques, puis plan d'amélioration clair et concret."
    },
    {
      icon: Warehouse,
      title: 'Terminaux et stockage',
      description: "Capacités de stockage, gestion des cuves, rotation des stocks et contrôle qualité."
    },
    {
      icon: Ship,
      title: 'Transport maritime',
      description: "Affrètement, suivi des cargaisons, coordination avec les ports partenaires."
    },
    {
      icon: Truck,
      title: 'Transport routier',
      description: "Flotte dédiée, planification des tournées, livraison au dernier kilomètre."
    },
    {
      icon: Gauge,
      title: 'Supervision et traçabilité',
      description: "Suivi en temps réel des volumes, des cargaisons et des livraisons."
    },
    {
      icon: Wrench,
      title: 'Maintenance & interventions',
      description: "Entretien des installations, interventions sur site, continuité opérationnelle."
    }
  ];

  const audiences = [
    { icon: Factory, title: 'Compagnies pétrolières', desc: 'Capacités de stockage, transit, gestion des flux.' },
    { icon: Building2, title: 'Distributeurs & stations', desc: 'Livraison régulière, gestion des stocks.' },
    { icon: Fuel, title: 'Industriels', desc: 'Approvisionnement fiable, contrats sur mesure.' },
  ];

  const workflow = [
    { step: '1', title: 'Analyse', desc: 'Besoin, contraintes, volumes.' },
    { step: '2', title: 'Proposition', desc: 'Plan logistique + devis clair.' },
    { step: '3', title: 'Mise en œuvre', desc: 'Coordination, transport, livraison.' },
    { step: '4', title: 'Suivi & documentation', desc: 'Traçabilité, rapports, bilans.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Infrastructures & Logistique"
          subtitle="Stockage, transport et distribution : une chaîne logistique fiable, du terminal jusqu'à votre site."
          icon={Warehouse}
          breadcrumb="Infrastructures & Logistique"
        />

        {/* Ce que nous faisons + Pour qui */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ce que nous faisons */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ce que nous faisons</h2>
                <p className="text-muted-foreground mb-6">
                  Nous organisons une chaîne logistique stable et performante : stockage,
                  transport maritime et routier, supervision des flux et documentation
                  complète, du terminal jusqu'à votre site.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Demander une offre
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/hse" className="btn-secondary">
                    Voir HSE & Conformité
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
                        <item.icon className="w-5 h-5 text-shemal-gold-dark" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-700 text-sm font-semibold mb-4">
                Prestations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Services Infrastructures & Logistique
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon bg-gradient-to-br from-sky-600 to-blue-700">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réseau international */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Réseau logistique international</h2>
                  <p className="text-muted-foreground">
                    Une couverture multimodale pour livrer vos volumes où et quand vous en avez besoin,
                    avec une traçabilité complète à chaque étape.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { title: 'Maritime', desc: 'Affrètement de tankers, coordination portuaire, suivi des cargaisons.' },
                  { title: 'Pipeline', desc: 'Transit via réseaux de pipelines partenaires, contrôle des débits et de la qualité.' },
                  { title: 'Routier', desc: 'Flotte dédiée, livraison dernier kilomètre, planification des tournées.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Discuter de votre projet logistique
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/hse" className="btn-secondary">
                  Voir HSE & Conformité
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-shemal-gold-dark text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
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
                <Link to="/trading" className="btn-secondary">
                  Voir toutes nos activités
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
