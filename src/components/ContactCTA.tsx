import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language';

interface ContactCTAProps {
  variant?: 'default' | 'support';
}

const content = {
  en: {
    default: {
      title: 'Ready to secure your supply?',
      subtitle: "Describe your need, our team gets back to you quickly with a clear offer.",
    },
    support: {
      title: 'Need assistance quickly?',
      subtitle: 'Contact our team for order tracking or a personalized offer.',
    },
    primaryAction: 'Request an Offer',
    secondaryAction: 'View Our Activities',
    email: 'contact@shemalpetroleum.com',
  },
  ar: {
    default: {
      title: 'جاهزون لتأمين توريدكم؟',
      subtitle: 'صف احتياجك، وسيتواصل فريقنا معك بسرعة بعرض واضح.',
    },
    support: {
      title: 'تحتاج مساعدة بسرعة؟',
      subtitle: 'تواصل مع فريقنا لمتابعة طلبك أو الحصول على عرض مخصص.',
    },
    primaryAction: 'اطلب عرض سعر',
    secondaryAction: 'اطّلع على أنشطتنا',
    email: 'contact@shemalpetroleum.com',
  },
};

const ContactCTA = ({ variant = 'default' }: ContactCTAProps) => {
  const { lang, dir } = useLanguage();
  const c = content[lang];
  const copy = c[variant];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="section-container relative z-10">
        <div className="bg-hero-gradient rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {copy.title}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {copy.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground bg-white hover:bg-white/90 transition-all duration-300 group"
              >
                {c.primaryAction}
                <Arrow className="ms-2 w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/trading"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {c.secondaryAction}
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/60">
              <a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                {c.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
