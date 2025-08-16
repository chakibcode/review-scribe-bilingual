import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;