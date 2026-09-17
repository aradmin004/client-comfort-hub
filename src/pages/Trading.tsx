import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import {
  Fuel,
  Target,
  Compass,
  Shield,
  FileText,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Trading = () => {
  const role = [
    { title: 'Sourcer', desc: 'Identifier les meilleurs fournisseurs pour vos volumes et échéances.' },
    { title: 'Sécuriser', desc: 'Contrats clairs, couverture des risques prix, documentation complète.' },
    { title: 'Livrer', desc: 'Coordonner logistique et transport jusqu\'à destination.' },
  ];

  const missions = [
    { title: 'Contrats spot', desc: 'Achats et ventes ponctuels selon les opportunités de marché.' },
    { title: 'Contrats à terme', desc: 'Volumes récurrents, prix négociés, planning de livraison.' },
    { title: 'Structuration d\'approvisionnement', desc: 'Diversification des sources, sécurisation long terme.' },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Sourcing ciblé',
      description: "Sélection des meilleurs fournisseurs selon vos besoins, volumes et contraintes qualité."
    },
    {
      icon: Compass,
      title: 'Stratégie d\'approvisionnement',
      description: "Une feuille de route claire : volumes, échéances, budget et diversification des sources."
    },
    {
      icon: Shield,
      title: 'Gestion des risques prix',
      description: "Couverture, contrats à terme, veille continue des marchés physiques et financiers."
    },
    {
      icon: Lightbulb,
      title: 'Structuration de contrats',
      description: "Conditions claires, Incoterms adaptés, documentation conforme aux standards internationaux."
    },
    {
      icon: Users,
      title: 'Réseau de partenaires',
      description: "Producteurs, raffineurs, transporteurs et assureurs qualifiés dans le monde entier."
    },
    {
      icon: FileText,
      title: 'Reporting transparent',
      description: "Suivi des volumes, des prix et des livraisons, accessible à chaque étape."
    }
  ];

  const workflow = [
    { step: '1', title: 'Analyse du besoin', desc: 'Volumes, spécifications, échéances.' },
    { step: '2', title: 'Sourcing & offre', desc: 'Sélection fournisseurs, proposition claire.' },
    { step: '3', title: 'Contractualisation', desc: 'Conditions, Incoterms, sécurisation.' },
    { step: '4', title: 'Livraison & suivi', desc: 'Logistique, documentation, reporting.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Trading & Négoce"
          subtitle="Nous sécurisons votre approvisionnement en brut et produits raffinés, du sourcing jusqu'à la livraison."
          icon={Fuel}
          breadcrumb="Trading & Négoce"
        />

        {/* Notre rôle + Exemples */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Notre rôle */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Notre rôle</h2>
                <p className="text-muted-foreground mb-6">
                  Un approvisionnement énergétique mal sécurisé expose à des risques de prix,
                  de rupture et de conformité. Notre objectif est de rendre chaque opération
                  claire, pilotable et sécurisée : sourcing, contrat, logistique et livraison.
                </p>

                <div className="space-y-3 mb-6">
                  {role.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="w-5 h-5 text-shemal-gold-dark mt-0.5" />
                      <div>
                        <strong className="text-foreground">{item.title}</strong>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Discuter de votre besoin
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Exemples d'opérations */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Exemples d'opérations</h2>
                <div className="space-y-4">
                  {missions.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                      <div>
                        <strong className="text-foreground">{item.title}</strong>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce que nous apportons */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-sm font-semibold mb-4">
                Valeur ajoutée
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ce que nous apportons
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon bg-gradient-to-br from-amber-400 to-yellow-600">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode de travail */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Méthode de travail
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {workflow.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  Planifier un échange
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/infrastructure" className="btn-secondary">
                  Voir Infrastructures & Logistique
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

export default Trading;
