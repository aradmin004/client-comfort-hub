import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/language';
import {
  Headphones,
  MonitorSmartphone,
  Wrench,
  UserCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const serviceIcons = [MonitorSmartphone, Wrench, UserCheck];

const content = {
  en: {
    pageTitle: 'Client Support',
    pageSubtitle: 'Assistance, delivery tracking and rapid intervention to keep your supply running.',
    whatWeDoTitle: 'What We Do',
    services: [
      { title: 'Order tracking', description: 'Real-time tracking of your deliveries, cargo and related documents.' },
      { title: 'Preventive maintenance', description: 'Regular checks on facilities to avoid service interruptions.' },
      { title: 'On-site interventions', description: 'Teams ready to mobilize quickly in case of operational emergency.' },
    ],
    talkTitle: "Let's Talk About Your Needs",
    talkDesc:
      "Describe your context, we propose a clear solution and a tailored offer. Responsiveness and transparency at every exchange.",
    reactivityTitle: 'Guaranteed Responsiveness',
    reactivityDesc:
      "Fast response to your requests. In case of emergency, priority intervention to minimize impact on your operations.",
    requestOffer: 'Request an Offer',
  },
  ar: {
    pageTitle: 'دعم العملاء',
    pageSubtitle: 'مساعدة، متابعة الشحنات، وتدخل سريع لضمان استمرارية توريدكم.',
    whatWeDoTitle: 'ماذا نفعل',
    services: [
      { title: 'متابعة الطلبات', description: 'تتبع فوري لشحناتكم وتسليماتكم والوثائق المرتبطة بها.' },
      { title: 'الصيانة الوقائية', description: 'فحوصات دورية للمنشآت لتجنب انقطاع الخدمة.' },
      { title: 'التدخلات الميدانية', description: 'فرق جاهزة للتحرك بسرعة في حالات الطوارئ التشغيلية.' },
    ],
    talkTitle: 'لنتحدث عن احتياجكم',
    talkDesc: 'صف لنا وضعك، ونقدم حلاً واضحًا وعرضًا مخصصًا. استجابة سريعة وشفافية في كل تواصل.',
    reactivityTitle: 'استجابة مضمونة',
    reactivityDesc: 'رد سريع على طلباتكم. في حالات الطوارئ، تدخل ذو أولوية لتقليل الأثر على عملياتكم.',
    requestOffer: 'اطلب عرض سعر',
  },
};

const Support = () => {
  const { lang, dir } = useLanguage();
  const c = content[lang];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title={c.pageTitle}
          subtitle={c.pageSubtitle}
          icon={Headphones}
          breadcrumb={c.pageTitle}
        />

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{c.whatWeDoTitle}</h2>
                <div className="space-y-4">
                  {c.services.map((service, index) => {
                    const Icon = serviceIcons[index];
                    return (
                      <div key={service.title} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.talkTitle}</h2>
                <p className="text-muted-foreground mb-6">{c.talkDesc}</p>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">{c.reactivityTitle}</h3>
                  <p className="text-sm text-muted-foreground">{c.reactivityDesc}</p>
                </div>

                <Link to="/contact" className="btn-primary w-full justify-center">
                  {c.requestOffer}
                  <Arrow className="ms-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA variant="support" />
      </main>
      <Footer />
    </div>
  );
};

export default Support;
