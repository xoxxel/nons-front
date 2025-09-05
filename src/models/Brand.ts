interface BrandModel {
  id: number;
  is_favorite: boolean;
  title: string;
  title_en: string;
  slug: string;
  image: string;
  icon: string;
  text: string;
  guide: string;
  product_count: number;
  faqs: { question: string; answer: string }[];
  tags: { id: number; title: string }[];
}
