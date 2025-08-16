export interface Course {
  id: number;
  title_ar: string;
  title_fr: string;
  author_ar: string;
  author_fr: string;
  rating: number;
  reviews: number;
  verified: boolean;
  image: string;
}

export const coursesData: Course[] = [
  {
    id: 1,
    title_ar: "أسرار التجارة الإلكترونية الناجحة",
    title_fr: "Les secrets de l'E-commerce à succès",
    author_ar: "أحمد علي",
    author_fr: "Ahmed Ali",
    rating: 4.8,
    reviews: 120,
    verified: true,
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Cours+1"
  },
  {
    id: 2,
    title_ar: "كن خبيراً في التسويق الرقمي",
    title_fr: "Devenez un expert en Marketing Digital",
    author_ar: "سارة كريم",
    author_fr: "Sara Karim",
    rating: 4.9,
    reviews: 250,
    verified: true,
    image: "https://placehold.co/600x400/10B981/FFFFFF?text=Cours+2"
  },
  {
    id: 3,
    title_ar: "الثراء السريع من المنتجات الرقمية",
    title_fr: "Richesse rapide avec les produits digitaux",
    author_ar: "يوتيوبر غامض",
    author_fr: "Youtubeur Mystère",
    rating: 1.2,
    reviews: 310,
    verified: false,
    image: "https://placehold.co/600x400/EF4444/FFFFFF?text=SCAM%3F"
  }
];