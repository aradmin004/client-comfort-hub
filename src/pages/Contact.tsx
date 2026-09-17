import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';

const content = {
  en: {
    pageTitle: 'Contact & Offer',
    pageSubtitle: 'Describe your need, our team gets back to you quickly.',
    services: [
      { value: '', label: 'Select…' },
      { value: 'trading', label: 'Trading & Supply' },
      { value: 'infra', label: 'Infrastructure & Logistics' },
      { value: 'hse', label: 'HSE & Compliance' },
      { value: 'support', label: 'Client Support' },
      { value: 'other', label: 'Other' },
    ],
    formTitle: 'Request an Offer',
    successTitle: 'Message sent!',
    successDesc: "Thank you! We'll get back to you as soon as possible.",
    sendAnother: 'Send another message',
    name: 'Name',
    namePlaceholder: 'Your name',
    company: 'Company',
    companyPlaceholder: 'Your company name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone',
    phonePlaceholder: '+xxx xx xxx xxxx',
    activity: 'Activity concerned',
    message: 'Message',
    messagePlaceholder: 'Describe your project or your need...',
    sending: 'Sending...',
    send: 'Send',
    orEmail: 'Or send an email',
    consent: "By submitting this form, you agree to be contacted by Shemal Petroleum.",
    infoTitle: 'Information',
    emailLabel: 'Email',
    zoneLabel: 'Zone',
    zoneValue: 'Middle East & North Africa – international operations',
    receiveLabel: "What you'll receive",
    receiveValue: 'A quick response + a clear proposal (scope, steps, estimate).',
    linkTrading: 'Trading & Supply',
    linkHse: 'HSE & Compliance',
    toastSuccessTitle: 'Message sent!',
    toastSuccessDesc: "Thank you! We'll get back to you as soon as possible.",
    toastErrorTitle: 'Error',
    toastErrorDesc: 'Network or server issue. Please try again shortly.',
  },
  ar: {
    pageTitle: 'اتصل بنا واطلب عرضًا',
    pageSubtitle: 'صف احتياجك، وسيتواصل فريقنا معك بسرعة.',
    services: [
      { value: '', label: 'اختر…' },
      { value: 'trading', label: 'التوريد والتجارة' },
      { value: 'infra', label: 'البنية التحتية واللوجستيات' },
      { value: 'hse', label: 'الصحة والسلامة والبيئة' },
      { value: 'support', label: 'دعم العملاء' },
      { value: 'other', label: 'أخرى' },
    ],
    formTitle: 'اطلب عرض سعر',
    successTitle: 'تم إرسال الرسالة!',
    successDesc: 'شكرًا لك! سنرد عليك في أقرب وقت ممكن.',
    sendAnother: 'إرسال رسالة أخرى',
    name: 'الاسم',
    namePlaceholder: 'اسمك',
    company: 'الشركة',
    companyPlaceholder: 'اسم شركتك',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'your@email.com',
    phone: 'الهاتف',
    phonePlaceholder: '+xxx xx xxx xxxx',
    activity: 'النشاط المعني',
    message: 'الرسالة',
    messagePlaceholder: 'صف مشروعك أو احتياجك...',
    sending: 'جارٍ الإرسال...',
    send: 'إرسال',
    orEmail: 'أو أرسل بريدًا إلكترونيًا',
    consent: 'بإرسال هذا النموذج، فإنك توافق على أن تتواصل معك شركة شمال للنفط.',
    infoTitle: 'معلومات التواصل',
    emailLabel: 'البريد الإلكتروني',
    zoneLabel: 'المنطقة',
    zoneValue: 'الشرق الأوسط وشمال أفريقيا – عمليات دولية',
    receiveLabel: 'ماذا ستحصل عليه',
    receiveValue: 'رد سريع + عرض واضح (تحديد النطاق، الخطوات، التقدير).',
    linkTrading: 'التوريد والتجارة',
    linkHse: 'الصحة والسلامة والبيئة',
    toastSuccessTitle: 'تم إرسال الرسالة!',
    toastSuccessDesc: 'شكرًا لك! سنرد عليك في أقرب وقت ممكن.',
    toastErrorTitle: 'خطأ',
    toastErrorDesc: 'مشكلة في الشبكة أو الخادم. حاول مرة أخرى بعد قليل.',
  },
};

const CONTACT_EMAIL = 'contact@shemalpetroleum.com';

const Contact = () => {
  const { lang } = useLanguage();
  const c = content[lang];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${txt}`);
      }

      const data = await res.json().catch(() => ({} as { ok?: boolean; error?: string }));
      if (data?.ok !== true) {
        throw new Error(data?.error || 'Invalid server response');
      }

      setIsSubmitted(true);
      form.reset();

      toast({
        title: c.toastSuccessTitle,
        description: c.toastSuccessDesc,
      });
    } catch (err) {
      console.error(err);
      setIsSubmitted(false);

      toast({
        title: c.toastErrorTitle,
        description: c.toastErrorDesc,
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
          title={c.pageTitle}
          subtitle={c.pageSubtitle}
          icon={Mail}
          breadcrumb={c.pageTitle}
        />

        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{c.formTitle}</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{c.successTitle}</h3>
                    <p className="text-muted-foreground mb-6">{c.successDesc}</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      {c.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          {c.name} *
                        </label>
                        <input
                          type="text"
                          required
                          name="nom"
                          autoComplete="name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder={c.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          {c.company}
                        </label>
                        <input
                          type="text"
                          name="societe"
                          autoComplete="organization"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder={c.companyPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          {c.email} *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          autoComplete="email"
                          dir="ltr"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-start"
                          placeholder={c.emailPlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                          {c.phone}
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          autoComplete="tel"
                          dir="ltr"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-start"
                          placeholder={c.phonePlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        {c.activity}
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                        {c.services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                        {c.message} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder={c.messagePlaceholder}
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
                            <span className="animate-spin me-2">⏳</span>
                            {c.sending}
                          </>
                        ) : (
                          <>
                            {c.send}
                            <Send className="ms-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="btn-secondary justify-center"
                      >
                        {c.orEmail}
                      </a>
                    </div>

                    <p className="text-xs text-muted-foreground">{c.consent}</p>
                  </form>
                )}
              </div>

              {/* Informations */}
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{c.infoTitle}</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{c.emailLabel}</h3>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        dir="ltr"
                        className="text-primary hover:underline inline-block"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{c.zoneLabel}</h3>
                      <p className="text-muted-foreground">{c.zoneValue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{c.receiveLabel}</h3>
                      <p className="text-muted-foreground">{c.receiveValue}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to="/trading" className="btn-secondary">
                    {c.linkTrading}
                  </Link>
                  <Link to="/hse" className="btn-secondary">
                    {c.linkHse}
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
