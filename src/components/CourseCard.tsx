import React from 'react';
import { Star, CheckCircle, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { language, t } = useLanguage();

  const title = language === 'ar' ? course.title_ar : course.title_fr;
  const author = language === 'ar' ? course.author_ar : course.author_fr;

  return (
    <div 
      className={`
        bg-card rounded-lg card-shadow hover:card-hover-shadow smooth-transition transform hover:-translate-y-1
        ${!course.verified ? 'border-2 border-destructive' : 'border border-border'}
      `}
    >
      {/* Course Image */}
      <div className="relative">
        <img 
          src={course.image} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {/* Verification Badge */}
        <div className="absolute top-3 right-3">
          {course.verified ? (
            <Badge variant="verified" className="flex items-center space-x-1">
              <CheckCircle className="h-3 w-3" />
              <span className="text-xs">{t('verifiedPurchase')}</span>
            </Badge>
          ) : (
            <Badge variant="warning" className="flex items-center space-x-1">
              <AlertTriangle className="h-3 w-3" />
              <span className="text-xs">{t('warning')}</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Course Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {author}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{course.rating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground text-sm">
            ({course.reviews} {t('reviews')})
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;