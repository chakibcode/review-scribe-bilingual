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
    copyright: "© 2024 موثوق. جميع الحقوق محفوظة.",
    
    // Creator Page
    creatorPageTitle: "انضم إلى برنامج المراجعة مقابل الوصول",
    creatorPageSubtitle: "احصل على تقييمات موثوقة من طلاب حقيقيين واكتشف نقاط القوة والضعف في دورتك",
    howItWorks: "كيف يعمل البرنامج",
    step1Title: "قدم دورتك",
    step1Desc: "أرسل تفاصيل دورتك وستتم مراجعتها من قبل فريقنا",
    step2Title: "طلاب موثوقون",
    step2Desc: "نختار طلاباً موثوقين ومهتمين بمجال دورتك",
    step3Title: "تقييمات مفصلة",
    step3Desc: "احصل على تقييمات شاملة ومفيدة لتحسين دورتك",
    benefits: "الفوائد",
    benefit1: "تقييمات حقيقية من طلاب مهتمين",
    benefit2: "تحسين جودة المحتوى التعليمي",
    benefit3: "زيادة الثقة والمصداقية",
    benefit4: "ردود أفعال مفصلة ومفيدة",
    joinProgram: "انضم للبرنامج",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    courseTitle: "عنوان الدورة",
    courseDescription: "وصف الدورة",
    submitApplication: "إرسال الطلب",
    contactInfo: "معلومات التواصل"
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
    copyright: "© 2024 Vérifié. Tous droits réservés.",
    
    // Creator Page
    creatorPageTitle: "Rejoignez le Programme Avis contre Accès",
    creatorPageSubtitle: "Obtenez des avis vérifiés de vrais étudiants et découvrez les forces et faiblesses de votre cours",
    howItWorks: "Comment ça marche",
    step1Title: "Soumettez votre cours",
    step1Desc: "Envoyez les détails de votre cours qui sera examiné par notre équipe",
    step2Title: "Étudiants vérifiés",
    step2Desc: "Nous sélectionnons des étudiants vérifiés intéressés par votre domaine",
    step3Title: "Avis détaillés",
    step3Desc: "Recevez des avis complets et utiles pour améliorer votre cours",
    benefits: "Avantages",
    benefit1: "Avis authentiques d'étudiants intéressés",
    benefit2: "Amélioration de la qualité du contenu",
    benefit3: "Augmentation de la confiance et crédibilité",
    benefit4: "Retours détaillés et constructifs",
    joinProgram: "Rejoindre le Programme",
    fullName: "Nom complet",
    email: "Email",
    courseTitle: "Titre du cours",
    courseDescription: "Description du cours",
    submitApplication: "Soumettre la candidature",
    contactInfo: "Informations de contact"
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