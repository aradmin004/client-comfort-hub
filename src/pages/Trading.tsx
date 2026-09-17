import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/language';
import {
  Fuel,
  Target,
  Compass,
  Shield,
  FileText,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const benefitIcons = [Target, Compass, Shield, Lightbulb, Users, FileText];

const content = {
  en: {
    pageTitle: 'Trading & Supply',
    pageSubtitle: "We secure your supply of crude and refined products, from sourcing to delivery.",
    roleTitle: 'Our Role',
    roleIntro:
      "A poorly secured energy supply exposes you to price, disruption and compliance risks. Our goal is to make every operation clear, manageable and secure: sourcing, contract, logistics and delivery.",
    role: [
      { title: 'Source', desc: 'Identify the best suppliers for your volumes and timelines.' },
      { title: 'Secure', desc: 'Clear contracts, price risk hedging, full documentation.' },
      { title: 'Deliver', desc: 'Coordinate logistics and transport to destination.' },
    ],
    discussCta: 'Discuss Your Needs',
    missionsTitle: 'Example Operations',
    missions: [
      { title: 'Spot contracts', desc: 'One-off purchases and sales based on market opportunities.' },
      { title: 'Term contracts', desc: 'Recurring volumes, negotiated prices, delivery schedule.' },
      { title: 'Supply structuring', desc: 'Source diversification, long-term security.' },
    ],
    valueBadge: 'Value Added',
    valueTitle: 'What We Bring',
    benefits: [
      { title: 'Targeted sourcing', description: 'Selecting the best suppliers based on your needs, volumes and quality constraints.' },
      { title: 'Supply strategy', description: 'A clear roadmap: volumes, timelines, budget and source diversification.' },
      { title: 'Price risk management', description: 'Hedging, term contracts, continuous monitoring of physical and financial markets.' },
      { title: 'Contract structuring', description: 'Clear terms, suitable Incoterms, documentation compliant with international standards.' },
      { title: 'Partner network', description: 'Producers, refiners, carriers and insurers qualified worldwide.' },
      { title: 'Transparent reporting', description: 'Tracking of volumes, prices and deliveries, accessible at every step.' },
    ],
    methodTitle: 'Working Method',
    workflow: [
      { title: 'Needs analysis', desc: 'Volumes, specifications, timelines.' },
      { title: 'Sourcing & offer', desc: 'Supplier selection, clear proposal.' },
      { title: 'Contracting', desc: 'Terms, Incoterms, security.' },
      { title: 'Delivery & tracking', desc: 'Logistics, documentation, reporting.' },
    ],
    planMeeting: 'Plan a Meeting',
    viewInfra: 'View Infrastructure & Logistics',
  },
  ar: {
    pageTitle: 'التوريد والتجارة',
    pageSubtitle: 'نؤمّن توريدكم من النفط الخام والمنتجات المكررة، من التوريد حتى التسليم.',
    roleTitle: 'دورنا',
    roleIntro:
      'التوريد الطاقي غير المؤمَّن جيدًا يعرّضكم لمخاطر الأسعار والانقطاع وعدم الامتثال. هدفنا أن تكون كل عملية واضحة وقابلة للتحكم وآمنة: التوريد والعقد واللوجستيات والتسليم.',
    role: [
      { title: 'التوريد', desc: 'تحديد أفضل الموردين حسب أحجامكم ومواعيدكم.' },
      { title: 'التأمين', desc: 'عقود واضحة، تغطية مخاطر الأسعار، وثائق كاملة.' },
      { title: 'التسليم', desc: 'تنسيق اللوجستيات والنقل حتى الوجهة.' },
    ],
    discussCta: 'ناقش احتياجك',
    missionsTitle: 'أمثلة على العمليات',
    missions: [
      { title: 'عقود فورية', desc: 'عمليات شراء وبيع لمرة واحدة حسب فرص السوق.' },
      { title: 'عقود آجلة', desc: 'أحجام متكررة، أسعار متفاوض عليها، جدول تسليم.' },
      { title: 'هيكلة التوريد', desc: 'تنويع المصادر وتأمين طويل الأمد.' },
    ],
    valueBadge: 'القيمة المضافة',
    valueTitle: 'ما نقدمه',
    benefits: [
      { title: 'توريد موجّه', description: 'اختيار أفضل الموردين وفق احتياجاتكم وأحجامكم ومتطلبات الجودة.' },
      { title: 'استراتيجية التوريد', description: 'خارطة طريق واضحة: الأحجام والمواعيد والميزانية وتنويع المصادر.' },
      { title: 'إدارة مخاطر الأسعار', description: 'تغطية، عقود آجلة، مراقبة مستمرة للأسواق الفعلية والمالية.' },
      { title: 'هيكلة العقود', description: 'شروط واضحة، شروط تسليم (Incoterms) مناسبة، وثائق متوافقة مع المعايير الدولية.' },
      { title: 'شبكة شركاء', description: 'منتجون ومصافٍ وناقلون وشركات تأمين مؤهلون حول العالم.' },
      { title: 'تقارير شفافة', description: 'متابعة الأحجام والأسعار والتسليمات، متاحة في كل مرحلة.' },
    ],
    methodTitle: 'منهجية العمل',
    workflow: [
      { title: 'تحليل الاحتياج', desc: 'الأحجام والمواصفات والمواعيد.' },
      { title: 'التوريد والعرض', desc: 'اختيار الموردين وتقديم عرض واضح.' },
      { title: 'التعاقد', desc: 'الشروط وIncoterms والتأمين.' },
      { title: 'التسليم والمتابعة', desc: 'اللوجستيات والوثائق والتقارير.' },
    ],
    planMeeting: 'حدد موعدًا',
    viewInfra: 'اطّلع على البنية التحتية واللوجستيات',
  },
};

const Trading = () => {
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
          icon={Fuel}
          breadcrumb={c.pageTitle}
        />

        {/* Role + Missions */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.roleTitle}</h2>
                <p className="text-muted-foreground mb-6">{c.roleIntro}</p>

                <div className="space-y-3 mb-6">
                  {c.role.map((item) => (
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
                    {c.discussCta}
                    <Arrow className="ms-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.missionsTitle}</h2>
                <div className="space-y-4">
                  {c.missions.map((item) => (
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

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-sm font-semibold mb-4">
                {c.valueBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{c.valueTitle}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.benefits.map((item, index) => {
                const Icon = benefitIcons[index];
                return (
                  <div
                    key={item.title}
                    className="feature-card animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="service-icon bg-gradient-to-br from-amber-400 to-yellow-600">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{c.methodTitle}</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {c.workflow.map((item, index) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  {c.planMeeting}
                  <Arrow className="ms-2 w-4 h-4" />
                </Link>
                <Link to="/infrastructure" className="btn-secondary">
                  {c.viewInfra}
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
