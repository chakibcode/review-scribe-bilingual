import React from 'react';
import CourseCard from './CourseCard';
import { useLanguage } from '@/context/LanguageContext';
import { coursesData } from '@/data/courses';

const CoursesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('topRatedCourses')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;