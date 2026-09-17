import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import {
  Headphones,
  MonitorSmartphone,
  Wrench,
  UserCheck,
  ArrowRight
} from 'lucide-react';

const Support = () => {
  const services = [
    {
      icon: MonitorSmartphone,
      title: 'Suivi des commandes',
      description: "Suivi en temps réel de vos livraisons, cargaisons et documents associés."
    },
    {
      icon: Wrench,
      title: 'Maintenance préventive',
      description: "Vérifications régulières des installations pour éviter les interruptions de service."
    },
    {
      icon: UserCheck,
      title: 'Interventions sur site',
      description: "Équipes mobilisables rapidement en cas d'urgence opérationnelle."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Support Client"
          subtitle="Assistance, suivi des livraisons et intervention rapide pour garantir la continuité de votre approvisionnement."
          icon={Headphones}
          breadcrumb="Support Client"
        />

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ce que nous faisons */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Ce que nous faisons</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <service.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parlons de votre besoin */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Parlons de votre besoin</h2>
                <p className="text-muted-foreground mb-6">
                  Décrivez votre contexte, nous proposons une solution claire et une offre
                  adaptée. Réactivité et transparence à chaque échange.
                </p>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Réactivité garantie</h3>
                  <p className="text-sm text-muted-foreground">
                    Réponse rapide à vos demandes. En cas d'urgence, intervention prioritaire
                    pour minimiser l'impact sur votre activité.
                  </p>
                </div>

                <Link to="/contact" className="btn-primary w-full justify-center">
                  Demander une offre
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA
          title="Besoin d'assistance rapidement ?"
          subtitle="Contactez notre équipe pour un suivi de commande ou une intervention."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
