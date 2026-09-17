import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/language';
import {
  Warehouse,
  Ship,
  Truck,
  Gauge,
  FileText,
  Wrench,
  Globe,
  ArrowRight,
  ArrowLeft,
  Factory,
  Building2,
  Fuel
} from 'lucide-react';

const serviceIcons = [FileText, Warehouse, Ship, Truck, Gauge, Wrench];
const audienceIcons = [Factory, Building2, Fuel];

const content = {
  en: {
    pageTitle: 'Infrastructure & Logistics',
    pageSubtitle: 'Storage, transport and distribution: a reliable logistics chain, from terminal to your site.',
    whatWeDoTitle: 'What We Do',
    whatWeDo:
      "We organize a stable, high-performing logistics chain: storage, maritime and road transport, flow supervision and complete documentation, from terminal to your site.",
    requestOffer: 'Request an Offer',
    viewHse: 'View HSE & Compliance',
    whoForTitle: 'Who Is It For?',
    audiences: [
      { title: 'Oil companies', desc: 'Storage capacity, transit, flow management.' },
      { title: 'Distributors & stations', desc: 'Regular delivery, stock management.' },
      { title: 'Industrials', desc: 'Reliable supply, tailored contracts.' },
    ],
    prestationsBadge: 'Services',
    prestationsTitle: 'Infrastructure & Logistics Services',
    services: [
      { title: 'Audit & optimization', description: 'Analysis of capacity, logistics flows and risks, then a clear, concrete improvement plan.' },
      { title: 'Terminals & storage', description: 'Storage capacity, tank management, stock rotation and quality control.' },
      { title: 'Maritime transport', description: 'Chartering, cargo tracking, coordination with partner ports.' },
      { title: 'Road transport', description: 'Dedicated fleet, route planning, last-mile delivery.' },
      { title: 'Supervision & traceability', description: 'Real-time tracking of volumes, cargo and deliveries.' },
      { title: 'Maintenance & interventions', description: 'Facility upkeep, on-site interventions, operational continuity.' },
    ],
    networkTitle: 'International Logistics Network',
    networkDesc:
      "A multimodal coverage to deliver your volumes where and when you need them, with full traceability at every step.",
    network: [
      { title: 'Maritime', desc: 'Tanker chartering, port coordination, cargo tracking.' },
      { title: 'Pipeline', desc: 'Transit via partner pipeline networks, flow and quality control.' },
      { title: 'Road', desc: 'Dedicated fleet, last-mile delivery, route planning.' },
    ],
    discussLogistics: 'Discuss Your Logistics Project',
    methodTitle: 'Typical Mission Workflow',
    workflow: [
      { title: 'Analysis', desc: 'Needs, constraints, volumes.' },
      { title: 'Proposal', desc: 'Logistics plan + clear quote.' },
      { title: 'Implementation', desc: 'Coordination, transport, delivery.' },
      { title: 'Tracking & documentation', desc: 'Traceability, reports, reviews.' },
    ],
    talkProject: "Let's Talk About Your Project",
    viewAllActivities: 'View All Our Activities',
  },
  ar: {
    pageTitle: 'البنية التحتية واللوجستيات',
    pageSubtitle: 'التخزين والنقل والتوزيع: سلسلة لوجستية موثوقة، من المحطة حتى موقعكم.',
    whatWeDoTitle: 'ماذا نفعل',
    whatWeDo:
      'ننظم سلسلة لوجستية مستقرة وعالية الأداء: التخزين والنقل البحري والبري، ومراقبة التدفقات، ووثائق كاملة، من المحطة حتى موقعكم.',
    requestOffer: 'اطلب عرض سعر',
    viewHse: 'اطّلع على الصحة والسلامة والبيئة',
    whoForTitle: 'لمن هذه الخدمة؟',
    audiences: [
      { title: 'شركات النفط', desc: 'سعات تخزينية، عبور، إدارة التدفقات.' },
      { title: 'الموزعون والمحطات', desc: 'تسليم منتظم، إدارة المخزون.' },
      { title: 'الصناعيون', desc: 'توريد موثوق، عقود مخصصة.' },
    ],
    prestationsBadge: 'الخدمات',
    prestationsTitle: 'خدمات البنية التحتية واللوجستيات',
    services: [
      { title: 'التدقيق والتحسين', description: 'تحليل السعات والتدفقات اللوجستية والمخاطر، ثم خطة تحسين واضحة وملموسة.' },
      { title: 'المحطات والتخزين', description: 'سعات تخزينية، إدارة الخزانات، دوران المخزون ومراقبة الجودة.' },
      { title: 'النقل البحري', description: 'استئجار السفن، تتبع الشحنات، التنسيق مع الموانئ الشريكة.' },
      { title: 'النقل البري', description: 'أسطول مخصص، تخطيط الجولات، التسليم للميل الأخير.' },
      { title: 'المراقبة والتتبع', description: 'متابعة فورية للأحجام والشحنات والتسليمات.' },
      { title: 'الصيانة والتدخلات', description: 'صيانة المنشآت، تدخلات ميدانية، استمرارية التشغيل.' },
    ],
    networkTitle: 'شبكة لوجستية دولية',
    networkDesc: 'تغطية متعددة الوسائط لتسليم أحجامكم أينما وحينما تحتاجونها، مع تتبع كامل في كل مرحلة.',
    network: [
      { title: 'بحري', desc: 'استئجار الناقلات، التنسيق مع الموانئ، تتبع الشحنات.' },
      { title: 'خط أنابيب', desc: 'العبور عبر شبكات أنابيب شريكة، مراقبة التدفق والجودة.' },
      { title: 'بري', desc: 'أسطول مخصص، تسليم الميل الأخير، تخطيط الجولات.' },
    ],
    discussLogistics: 'ناقش مشروعك اللوجستي',
    methodTitle: 'سير العمل النموذجي للمهمة',
    workflow: [
      { title: 'التحليل', desc: 'الاحتياج والقيود والأحجام.' },
      { title: 'العرض', desc: 'خطة لوجستية وعرض سعر واضح.' },
      { title: 'التنفيذ', desc: 'التنسيق والنقل والتسليم.' },
      { title: 'المتابعة والتوثيق', desc: 'التتبع والتقارير والمراجعات.' },
    ],
    talkProject: 'لنتحدث عن مشروعك',
    viewAllActivities: 'اطّلع على جميع أنشطتنا',
  },
};

const Infrastructure = () => {
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
          icon={Warehouse}
          breadcrumb={c.pageTitle}
        />

        {/* What we do + Who for */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.whatWeDoTitle}</h2>
                <p className="text-muted-foreground mb-6">{c.whatWeDo}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    {c.requestOffer}
                    <Arrow className="ms-2 w-4 h-4" />
                  </Link>
                  <Link to="/hse" className="btn-secondary">
                    {c.viewHse}
                  </Link>
                </div>
              </div>

              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.whoForTitle}</h2>
                <div className="space-y-4">
                  {c.audiences.map((item, index) => {
                    const Icon = audienceIcons[index];
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-shemal-gold-dark" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
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
                {c.prestationsBadge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{c.prestationsTitle}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div
                    key={service.title}
                    className="feature-card animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="service-icon bg-gradient-to-br from-sky-600 to-blue-700">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* International network */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{c.networkTitle}</h2>
                  <p className="text-muted-foreground">{c.networkDesc}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {c.network.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  {c.discussLogistics}
                  <Arrow className="ms-2 w-4 h-4" />
                </Link>
                <Link to="/hse" className="btn-secondary">
                  {c.viewHse}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{c.methodTitle}</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {c.workflow.map((item, index) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-shemal-gold-dark text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  {c.talkProject}
                  <Arrow className="ms-2 w-4 h-4" />
                </Link>
                <Link to="/trading" className="btn-secondary">
                  {c.viewAllActivities}
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
