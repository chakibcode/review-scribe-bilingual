import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="hero-gradient py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          {t('heroSubtitle')}
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className={`flex bg-white rounded-lg p-2 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="flex-1 border-none focus:ring-0 text-gray-800 bg-transparent"
            />
            <Button size="sm" className="bg-primary hover:bg-primary-hover shrink-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;