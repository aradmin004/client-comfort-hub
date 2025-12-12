import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  Target, 
  Compass, 
  Shield,
  FileText,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Consultance = () => {
  const role = [
    { title: 'Cadrer', desc: 'Définir le besoin, le périmètre et les priorités.' },
    { title: 'Piloter', desc: 'Suivre l\'avancement, gérer les risques, arbitrer.' },
    { title: 'Renforcer', desc: 'Apporter expertise technique + méthode.' },
  ];

  const missions = [
    { title: 'Cadrage de projet', desc: 'Objectifs, périmètre, planning, budget, responsabilités.' },
    { title: 'Architecture & design', desc: 'Choix techniques, scénarios, validation, documentation.' },
    { title: 'Migration / transformation', desc: 'Approche progressive, plan de bascule, tests, rollback.' },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Cadrage clair',
      description: "Des objectifs précis, un périmètre défini, et des priorités réalistes pour éviter le flou et les dérives."
    },
    {
      icon: Compass,
      title: "Plan d'action concret",
      description: "Une roadmap P1/P2/P3, des livrables, des jalons, et une méthode simple de suivi."
    },
    {
      icon: Shield,
      title: 'Gestion des risques',
      description: "Identification des risques, mesures de réduction, et décisions documentées."
    },
    {
      icon: Lightbulb,
      title: 'Alignement technique & métier',
      description: "Traduire un besoin métier en solution technique réaliste et maintenable."
    },
    {
      icon: Users,
      title: 'Renfort expertise',
      description: "Renforcement ponctuel de l'équipe : validation, troubleshooting, arbitrages."
    },
    {
      icon: FileText,
      title: 'Documentation livrable',
      description: "Schémas, décisions, procédures, checklists : tout ce qui rend le projet durable."
    }
  ];

  const workflow = [
    { step: '1', title: 'Découverte', desc: 'Objectifs, contraintes, contexte.' },
    { step: '2', title: 'Cadrage', desc: 'Périmètre, livrables, planning.' },
    { step: '3', title: 'Exécution', desc: 'Suivi, coordination, validations.' },
    { step: '4', title: 'Clôture', desc: 'Documentation, transfert, recommandations.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title="Consultance & Accompagnement"
          subtitle="Je vous accompagne pour cadrer vos projets, sécuriser les décisions et garantir une mise en œuvre réussie."
          icon={FileSearch}
          breadcrumb="Consultance"
        />

        {/* Mon rôle + Exemples */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mon rôle */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Mon rôle</h2>
                <p className="text-muted-foreground mb-6">
                  Quand un projet IT avance sans cadrage, on perd du temps et on prend des risques. 
                  Mon objectif est de rendre le projet clair, pilotable et réalisable : objectifs, 
                  périmètre, priorités, risques, planning et livrables.
                </p>
                
                <div className="space-y-3 mb-6">
                  {role.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <strong className="text-foreground">{item.title}</strong>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Discuter de votre projet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Exemples de missions */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Exemples de missions</h2>
                <div className="space-y-4">
                  {missions.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-violet-500/5 border border-violet-500/10">
                      <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" />
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

        {/* Ce que je peux apporter */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-600 text-sm font-semibold mb-4">
                Valeur ajoutée
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ce que je peux apporter
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div 
                  key={item.title}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon bg-gradient-to-br from-violet-500 to-purple-600">
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
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
                  Voir Infrastructure
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

export default Consultance;
