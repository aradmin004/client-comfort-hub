import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/lib/language";

const content = {
  en: { message: 'Page not found', back: 'Return to Home' },
  ar: { message: 'الصفحة غير موجودة', back: 'العودة إلى الرئيسية' },
};

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const c = content[lang];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{c.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {c.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
