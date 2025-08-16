import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            {t('logo')}
          </div>

          {/* Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            <a href="#courses" className="text-foreground hover:text-primary smooth-transition">
              {t('courses')}
            </a>
            <a href="#for-creators" className="text-foreground hover:text-primary smooth-transition">
              {t('forCreators')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary smooth-transition">
              {t('about')}
            </a>
          </nav>

          {/* Actions */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">
                {language === 'ar' ? t('switchToFrench') : t('switchToArabic')}
              </span>
            </Button>

            {/* Add Review Button */}
            <Button size="sm" className="bg-primary hover:bg-primary-hover">
              {t('addReview')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;