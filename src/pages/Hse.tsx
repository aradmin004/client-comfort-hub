import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Search,
  Leaf,
  HardHat,
  FileCheck,
  AlertTriangle,
  Award,
  ArrowRight,
  Factory,
  Users
} from 'lucide-react';

const Hse = () => {
  const pillars = [
    { title: 'Protéger', desc: 'Réduire les risques pour les personnes, les sites et l\'environnement.' },
    { title: 'Prévenir', desc: 'Identifier les dangers avant qu\'ils ne deviennent des incidents.' },
    { title: 'Améliorer', desc: 'Suivre, corriger et progresser en continu.' },
  ];

  const audiences = [
    { icon: Factory, title: 'Compagnies pétrolières', desc: 'Conformité réglementaire, gestion des risques.' },
    { icon: Users, title: 'Sites industriels', desc: 'Procédures adaptées, formation des équipes.' },
    { icon: HardHat, title: 'Équipes terrain', desc: 'Sécurité au quotidien, équipements adaptés.' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Audit HSE',
      description: "État des lieux sécurité et environnement, identification des points faibles, plan d'action prioritaire."
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité des installations',
      description: "Procédures opérationnelles, équipements de protection, prévention des incidents industriels."
    },
    {
      icon: Leaf,
      title: 'Gestion environnementale',
      description: "Prévention des pollutions, traitement des rejets, conformité aux réglementations locales et internationales."
    },
    {
      icon: HardHat,
      title: 'Formation & sensibilisation',
      description: "Procédures de sécurité, gestes d'urgence, culture HSE diffusée à toutes les équipes."
    },
    {
      icon: FileCheck,
      title: 'Certifications & conformité',
      description: "Accompagnement vers les référentiels ISO 14001, ISO 45001 et réglementations sectorielles."
    },
    {
      icon: AlertTriangle,
      title: 'Gestion des incidents',
      description: "Plans d'urgence, retour d'expérience et amélioration continue après chaque événement."
    }
  ];

  const compliance = [
    { title: 'ISO 14001', desc: 'Système de management environnemental : maîtrise des impacts et amélioration continue.' },
    { title: 'ISO 45001', desc: 'Santé et sécurité au travail : prévention des accidents et des maladies professionnelles.' },
    { title: 'Réglementations locales', desc: 'Nous traduisons les exigences légales et sectorielles en actions concrètes sur le terrain.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="HSE & Conformité"
          subtitle="Protéger les personnes, les installations et l'environnement à chaque étape de nos opérations."
          icon={ShieldCheck}
          breadcrumb="HSE & Conformité"
        />

        {/* Objectif + Pour qui */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Objectif */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Notre objectif</h2>
                <p className="text-muted-foreground mb-6">
                  Dans le secteur pétrolier, la sécurité ne se négocie pas. Notre approche
                  consiste à réduire les risques à chaque étape, sans jamais compromettre
                  la continuité de vos opérations.
                </p>

                <div className="space-y-3 mb-6">
                  {pillars.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" />
                      <div>
                        <strong className="text-foreground">{item.title}</strong>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Demander un audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/infrastructure" className="btn-secondary">
                    Voir Infrastructures & Logistique
                  </Link>
                </div>
              </div>

              {/* Pour qui */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Pour qui ?</h2>
                <div className="space-y-4">
                  {audiences.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10">
                        <item.icon className="w-5 h-5 text-emerald-600" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
                Prestations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ce que nous mettons en place
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon bg-gradient-to-br from-emerald-500 to-teal-600">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conformité */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Conformité et bonnes pratiques
                  </h2>
                  <p className="text-muted-foreground">
                    Pour les organisations qui doivent aller plus loin, nous proposons une
                    approche structurée inspirée des référentiels internationaux du secteur.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {compliance.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Mettre en place une stratégie HSE
                  <ArrowRight className="ml-2 w-4 h-4" />
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

export default Hse;
