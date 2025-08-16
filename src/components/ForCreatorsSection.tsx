import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Users, Star, ShieldCheck } from 'lucide-react';

const ForCreatorsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="for-creators" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('forCreatorsTitle')}
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              {t('forCreatorsDescription')}
            </p>

            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 border-white"
              onClick={() => window.location.href = '/creators'}
            >
              {t('learnMore')}
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <p className="text-lg font-medium">Vrais Étudiants</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <p className="text-lg font-medium">Avis Authentiques</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <p className="text-lg font-medium">Vérifié</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCreatorsSection;