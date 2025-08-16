import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Header
    logo: "موثوق",
    courses: "الدورات",
    forCreators: "للمنشئين",
    about: "حول",
    addReview: "أضف تقييمك",
    switchToFrench: "Français (FR)",
    
    // Hero
    heroTitle: "منصة موثوقة لتقييم الدورات التعليمية",
    heroSubtitle: "اكتشف الدورات الموثقة من طلاب حقيقيين وتجنب المحتوى المضلل",
    searchPlaceholder: "ابحث عن دورة تعليمية...",
    
    // Courses
    topRatedCourses: "الدورات الأعلى تقييماً",
    verifiedPurchase: "مشترٍ موثوق",
    warning: "تحذير!",
    reviews: "تقييم",
    
    // For Creators
    forCreatorsTitle: "للمنشئين: برنامج المراجعة مقابل الوصول",
    forCreatorsDescription: "احصل على تقييمات موثوقة من طلاب حقيقيين مقابل إعطائهم وصول مجاني لدورتك",
    learnMore: "اعرف المزيد",
    
    // Footer
    copyright: "© 2024 موثوق. جميع الحقوق محفوظة."
  },
  fr: {
    // Header
    logo: "Vérifié",
    courses: "Cours",
    forCreators: "Pour les Créateurs",
    about: "À propos",
    addReview: "Ajouter un Avis",
    switchToArabic: "العربية (AR)",
    
    // Hero
    heroTitle: "Plateforme fiable pour évaluer les cours en ligne",
    heroSubtitle: "Découvrez des cours vérifiés par de vrais étudiants et évitez le contenu trompeur",
    searchPlaceholder: "Rechercher un cours...",
    
    // Courses
    topRatedCourses: "Cours les mieux notés",
    verifiedPurchase: "Achat Vérifié",
    warning: "Alerte!",
    reviews: "avis",
    
    // For Creators
    forCreatorsTitle: "Pour les Créateurs: Programme Avis contre Accès",
    forCreatorsDescription: "Obtenez des avis vérifiés de vrais étudiants en échange d'un accès gratuit à votre cours",
    learnMore: "En savoir plus",
    
    // Footer
    copyright: "© 2024 Vérifié. Tous droits réservés."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    // Load saved language or default to French
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('fr');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};