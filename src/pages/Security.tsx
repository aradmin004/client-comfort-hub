import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  Lock, 
  Key, 
  Database, 
  Users,
  FileCheck,
  Award,
  ArrowRight,
  Building2,
  Heart
} from 'lucide-react';

const Security = () => {
  const pillars = [
    { title: 'Protéger', desc: 'Réduire les risques (accès, réseau, postes, données).' },
    { title: 'Vérifier', desc: 'Contrôler la sécurité et corriger ce qui est faible.' },
    { title: 'Stratégie', desc: 'Prioriser, planifier et améliorer en continu.' },
  ];

  const audiences = [
    { icon: Building2, title: 'PME & indépendants', desc: 'Sécuriser l\'essentiel sans complexité inutile.' },
    { icon: Users, title: 'Particuliers', desc: 'Protection de base (WiFi, PC, sauvegardes, mots de passe).' },
    { icon: Heart, title: 'Médical / Hôpital', desc: 'Approche structurée, segmentation et bonnes pratiques.' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Vérification de sécurité',
      description: "État des lieux : configuration, accès, risques, points faibles. Résultat : liste claire d'actions à faire."
    },
    {
      icon: Shield,
      title: 'Protection réseau (Firewall / VPN)',
      description: "Règles simples et efficaces, accès VPN sécurisé, segmentation pour limiter l'impact d'un incident."
    },
    {
      icon: Key,
      title: 'Accès & mots de passe',
      description: "Bonnes pratiques, MFA, gestion des comptes et des droits (qui accède à quoi)."
    },
    {
      icon: Database,
      title: 'Sauvegardes & continuité',
      description: "Stratégie de sauvegarde, tests de restauration, continuité minimale en cas de problème."
    },
    {
      icon: Users,
      title: 'Sensibilisation (simple)',
      description: "Conseils concrets : phishing, mots de passe, comportements à éviter. Rapide et utile."
    },
    {
      icon: FileCheck,
      title: "Plan d'actions",
      description: "Priorités P1/P2/P3, planning réaliste et amélioration continue."
    }
  ];

  const compliance = [
    { title: 'NIS2 (Europe)', desc: 'Renforcer la sécurité, gérer les risques, améliorer la résilience et la réponse aux incidents.' },
    { title: 'ISO/IEC 27001', desc: 'Méthode de management de la sécurité (politiques, mesures, suivi, amélioration).' },
    { title: 'Certification', desc: 'Certifié ISO 27001 : je peux traduire les exigences en actions concrètes sur le terrain.' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title="Sécurité informatique"
          subtitle="Protéger vos systèmes, vérifier votre niveau de sécurité et mettre en place une stratégie simple et efficace."
          icon={Shield}
          breadcrumb="Sécurité"
        />

        {/* Objectif + Pour qui */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Objectif */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Objectif</h2>
                <p className="text-muted-foreground mb-6">
                  La sécurité ne doit pas être compliquée. Mon approche est de rendre votre 
                  environnement plus sûr, étape par étape, sans bloquer votre travail.
                </p>
                
                <div className="space-y-3 mb-6">
                  {pillars.map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <strong className="text-foreground">{item.title}</strong>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Demander un devis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/infrastructure" className="btn-secondary">
                    Voir Infrastructure
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
                Ce que je peux mettre en place
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
                    Conformité et bonnes pratiques (NIS2 / ISO 27001)
                  </h2>
                  <p className="text-muted-foreground">
                    Pour les organisations qui doivent aller plus loin, je propose une approche structurée 
                    inspirée des bonnes pratiques internationales.
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
                  Mettre en place une stratégie
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

export default Security;
