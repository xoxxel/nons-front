import CategoryModel from "./Category";
import CommentModel from "./Comment";
import UserModel from "./User";

interface ProductModel {
  id: number;
  title: string;
  title_fa: string;
  slug: string;
  price: string;
  text: string;
  image: string;
  auto_send: boolean;
  is_active: boolean;
  status:"checking"|"accepted"|"rejected",
  category: CategoryModel;
  brand: BrandModel;
  region: RegionModel[];
  product_comments: CommentModel[];
  related_products: ProductModel[];
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  quantity: number;
  is_bookmarked: boolean;
  is_boosted: boolean;
  score: number;
  score_count: number;
  guarantee_days: number;
  gallery: {file_type:string,id:number,image:string}[],
  shop: {
    id: number;
    user: UserModel;
    title: string;
    title_en: string;
    image: string;
    is_authenticated: boolean;
    score_count: string | number;
    score: string | number;
    welcome_message: string;
    date_created: string; is_online:boolean
  };
}

export default ProductModel;
