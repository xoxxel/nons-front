interface BrandDetailsModel {
  id: number;
  faqs: [];
  is_favorite: true;
  title_fa: string;
  title_en: string;
  icon: string;
  text: string;
  giude: string;
  slug: string;
  meta_keywords: string;
  meta_description: string;
  meta_title: string;
  tags: { id: number; title: string }[];
}
