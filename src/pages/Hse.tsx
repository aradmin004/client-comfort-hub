import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/language';
import {
  ShieldCheck,
  Search,
  Leaf,
  HardHat,
  FileCheck,
  AlertTriangle,
  Award,
  ArrowRight,
  ArrowLeft,
  Factory,
  Users
} from 'lucide-react';

const serviceIcons = [Search, ShieldCheck, Leaf, HardHat, FileCheck, AlertTriangle];
const audienceIcons = [Factory, Users, HardHat];

const content = {
  en: {
    pageTitle: 'HSE & Compliance',
    pageSubtitle: 'Protecting people, facilities and the environment at every stage of our operations.',
    objectiveTitle: 'Our Objective',
    objectiveIntro:
      "In the oil industry, safety is non-negotiable. Our approach reduces risk at every stage, without ever compromising the continuity of your operations.",
    pillars: [
      { title: 'Protect', desc: 'Reduce risks to people, sites and the environment.' },
      { title: 'Prevent', desc: 'Identify hazards before they become incidents.' },
      { title: 'Improve', desc: 'Monitor, correct and progress continuously.' },
    ],
    requestAudit: 'Request an Audit',
    viewInfra: 'View Infrastructure & Logistics',
    whoForTitle: 'Who Is It For?',
    audiences: [
      { title: 'Oil companies', desc: 'Regulatory compliance, risk management.' },
      { title: 'Industrial sites', desc: 'Tailored procedures, team training.' },
      { title: 'Field teams', desc: 'Day-to-day safety, suitable equipment.' },
    ],
    prestationsBadge: 'Services',
    prestationsTitle: 'What We Put in Place',
    services: [
      { title: 'HSE audit', description: 'Assessment of safety and environmental status, identification of weak points, priority action plan.' },
      { title: 'Facility security', description: 'Operating procedures, protective equipment, prevention of industrial incidents.' },
      { title: 'Environmental management', description: 'Pollution prevention, discharge treatment, compliance with local and international regulations.' },
      { title: 'Training & awareness', description: 'Safety procedures, emergency responses, HSE culture spread to all teams.' },
      { title: 'Certifications & compliance', description: 'Support toward ISO 14001, ISO 45001 and sector regulations.' },
      { title: 'Incident management', description: 'Emergency plans, post-incident review and continuous improvement.' },
    ],
    complianceTitle: 'Compliance & Best Practices',
    complianceDesc:
      "For organizations that need to go further, we offer a structured approach inspired by international industry standards.",
    compliance: [
      { title: 'ISO 14001', desc: 'Environmental management system: control of impacts and continuous improvement.' },
      { title: 'ISO 45001', desc: 'Occupational health and safety: prevention of accidents and occupational diseases.' },
      { title: 'Local regulations', desc: 'We translate legal and sector requirements into concrete field actions.' },
    ],
    setupStrategy: 'Set Up an HSE Strategy',
  },
  ar: {
    pageTitle: 'الصحة والسلامة والبيئة',
    pageSubtitle: 'حماية الأفراد والمنشآت والبيئة في كل مرحلة من عملياتنا.',
    objectiveTitle: 'هدفنا',
    objectiveIntro:
      'في القطاع النفطي، السلامة غير قابلة للتفاوض. نهجنا يقلل المخاطر في كل مرحلة، دون المساس أبدًا باستمرارية عملياتكم.',
    pillars: [
      { title: 'الحماية', desc: 'تقليل المخاطر على الأفراد والمواقع والبيئة.' },
      { title: 'الوقاية', desc: 'تحديد المخاطر قبل أن تتحول إلى حوادث.' },
      { title: 'التحسين', desc: 'المتابعة والتصحيح والتطور المستمر.' },
    ],
    requestAudit: 'اطلب تدقيقًا',
    viewInfra: 'اطّلع على البنية التحتية واللوجستيات',
    whoForTitle: 'لمن هذه الخدمة؟',
    audiences: [
      { title: 'شركات النفط', desc: 'الامتثال التنظيمي وإدارة المخاطر.' },
      { title: 'المواقع الصناعية', desc: 'إجراءات مخصصة وتدريب الفرق.' },
      { title: 'الفرق الميدانية', desc: 'السلامة اليومية والمعدات المناسبة.' },
    ],
    prestationsBadge: 'الخدمات',
    prestationsTitle: 'ما نقوم بتنفيذه',
    services: [
      { title: 'تدقيق الصحة والسلامة والبيئة', description: 'تقييم وضع السلامة والبيئة، تحديد نقاط الضعف، خطة عمل ذات أولوية.' },
      { title: 'سلامة المنشآت', description: 'إجراءات تشغيلية، معدات وقاية، الوقاية من الحوادث الصناعية.' },
      { title: 'الإدارة البيئية', description: 'الوقاية من التلوث، معالجة النفايات، الامتثال للأنظمة المحلية والدولية.' },
      { title: 'التدريب والتوعية', description: 'إجراءات السلامة، الاستجابة للطوارئ، نشر ثقافة السلامة بين جميع الفرق.' },
      { title: 'الشهادات والامتثال', description: 'المرافقة نحو معايير ISO 14001 وISO 45001 وأنظمة القطاع.' },
      { title: 'إدارة الحوادث', description: 'خطط الطوارئ، مراجعة ما بعد الحادث، والتحسين المستمر.' },
    ],
    complianceTitle: 'الامتثال وأفضل الممارسات',
    complianceDesc: 'للمؤسسات التي تحتاج للمضي أبعد، نقدم نهجًا منظمًا مستوحى من المعايير الدولية للقطاع.',
    compliance: [
      { title: 'ISO 14001', desc: 'نظام الإدارة البيئية: التحكم في الآثار والتحسين المستمر.' },
      { title: 'ISO 45001', desc: 'الصحة والسلامة المهنية: الوقاية من الحوادث والأمراض المهنية.' },
      { title: 'الأنظمة المحلية', desc: 'نترجم المتطلبات القانونية والقطاعية إلى إجراءات ميدانية ملموسة.' },
    ],
    setupStrategy: 'ضع استراتيجية للصحة والسلامة والبيئة',
  },
};

const Hse = () => {
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
          icon={ShieldCheck}
          breadcrumb={c.pageTitle}
        />

        {/* Objective + Who for */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">{c.objectiveTitle}</h2>
                <p className="text-muted-foreground mb-6">{c.objectiveIntro}</p>

                <div className="space-y-3 mb-6">
                  {c.pillars.map((item) => (
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
                    {c.requestAudit}
                    <Arrow className="ms-2 w-4 h-4" />
                  </Link>
                  <Link to="/infrastructure" className="btn-secondary">
                    {c.viewInfra}
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
                        <div className="p-2 rounded-lg bg-emerald-500/10">
                          <Icon className="w-5 h-5 text-emerald-600" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
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
                    <div className="service-icon bg-gradient-to-br from-emerald-500 to-teal-600">
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

        {/* Compliance */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="feature-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{c.complianceTitle}</h2>
                  <p className="text-muted-foreground">{c.complianceDesc}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {c.compliance.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  {c.setupStrategy}
                  <Arrow className="ms-2 w-4 h-4" />
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
