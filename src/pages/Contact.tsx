import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Send,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: '', label: 'Sélectionner…' },
    { value: 'infra', label: 'Infrastructure & Réseau' },
    { value: 'sec', label: 'Sécurité informatique' },
    { value: 'cloud', label: 'Cloud & Hybride (M365 / Azure)' },
    { value: 'support', label: 'Support / Dépannage' },
    { value: 'formation', label: 'Formation' },
    { value: 'consult', label: 'Consultance / Cadrage projet' },
    { value: 'autre', label: 'Autre' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch('./contact.php', {
        method: 'POST',
        body: formData,
      });

      // En cas d'erreur HTTP (404/500...), on remonte une erreur claire
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${txt}`);
      }

      // contact.php doit renvoyer du JSON { ok: true } en succès
      const data = await res.json().catch(() => ({} as any));
      if (data?.ok !== true) {
        throw new Error(data?.error || "Réponse serveur invalide");
      }

      // ✅ Succès uniquement ici
      setIsSubmitted(true);
      form.reset();

      toast({
        title: 'Message envoyé !',
        description: 'Merci ! Je vous répondrai dès que possible.',
      });
    } catch (err) {
      console.error(err);
      setIsSubmitted(false);

      toast({
        title: 'Erreur',
        description: "Problème réseau ou serveur. Réessayez dans quelques instants.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader 
          title="Contact & Devis"
          subtitle="Décrivez votre besoin, je reviens vers vous rapidement."
          icon={Mail}
          breadcrumb="Contact"
        />

        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Demander un devis</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground mb-6">
                      Merci ! Je vous répondrai dès que possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          Nom *
                        </label>
                        <input
                          type="text"
                          required
                          name="nom"
                          autoComplete="name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          Société
                        </label>
                        <input
                          type="text"
                          name="societe"
                          autoComplete="organization"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="Nom de votre société"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          autoComplete="email"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          autoComplete="tel"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="+32 xxx xx xx xx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Service
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Décrivez votre projet ou votre besoin..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary flex-1 justify-center disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                      <a 
                        href="mailto:info@arotech.be"
                        className="btn-secondary justify-center"
                      >
                        Ou envoyer un email
                      </a>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      En envoyant ce formulaire, vous acceptez d'être recontacté par Arotech.
                    </p>
                  </form>
                )}
              </div>

              {/* Informations */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Informations</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:info@arotech.be" 
                        className="text-primary hover:underline"
                      >
                        info@arotech.be
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Zone</h3>
                      <p className="text-muted-foreground">
                        Belgique (Wallonie) – intervention sur demande
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ce que vous recevrez</h3>
                      <p className="text-muted-foreground">
                        Une réponse rapide + une proposition claire (cadrage, étapes, estimation).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/consultance" className="btn-secondary">
                    Consultance
                  </Link>
                  <Link to="/securite" className="btn-secondary">
                    Sécurité
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

