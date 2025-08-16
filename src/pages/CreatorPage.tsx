import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, Star, ShieldCheck, Send, FileText, UserCheck, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreatorPageContent: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    courseTitle: '',
    courseDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application soumise!",
      description: "Nous vous contacterons sous peu.",
    });
    setFormData({ fullName: '', email: '', courseTitle: '', courseDescription: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('creatorPageTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
            {t('creatorPageSubtitle')}
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('howItWorks')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('step1Title')}</h3>
              <p className="text-muted-foreground">{t('step1Desc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('step2Title')}</h3>
              <p className="text-muted-foreground">{t('step2Desc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full p-6 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('step3Title')}</h3>
              <p className="text-muted-foreground">{t('step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('benefits')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{t('benefit1')}</h3>
              </div>
            </div>

            <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{t('benefit2')}</h3>
              </div>
            </div>

            <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{t('benefit3')}</h3>
              </div>
            </div>

            <div className={`flex items-start space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <CheckCircle className="h-6 w-6 text-success mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{t('benefit4')}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">{t('joinProgram')}</CardTitle>
              <CardDescription>{t('contactInfo')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('fullName')}</label>
                  <Input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('email')}</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('courseTitle')}</label>
                  <Input
                    type="text"
                    required
                    value={formData.courseTitle}
                    onChange={(e) => handleInputChange('courseTitle', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('courseDescription')}</label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.courseDescription}
                    onChange={(e) => handleInputChange('courseDescription', e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('submitApplication')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CreatorPage: React.FC = () => {
  return (
    <LanguageProvider>
      <CreatorPageContent />
    </LanguageProvider>
  );
};

export default CreatorPage;