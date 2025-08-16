import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoursesSection from '@/components/CoursesSection';
import ForCreatorsSection from '@/components/ForCreatorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <CoursesSection />
        <ForCreatorsSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
