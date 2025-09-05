import CategoryModel from "./Category";
import ProductModel from "./Product"

interface ProductDetailsModel {
    id: number,
    category: CategoryModel,
    region: RegionModel[],
    // shop: null,
    brand: BrandModel
    platform: platformModel[],
    gallery: [],
    suggested_products: [],
    related_products: ProductModel[],
    product_comments: [],
    is_bookmarked: boolean,
    sku: number,
    is_active: boolean,
    auto_send: boolean,
    status: "checking" | "rejected" | "accepted",
    title: string,
    activation_message: string,
    text: null,
    date_created: Date,
    slug: string,
    price: number,
    sold: number,
    quantity: number,
    discount: null,
    meta_keywords: null,
    meta_description: null,
    meta_title: null,
    is_boosted: boolean,
    boost_start_time: null,
    boost_amount: number
    instructions: string
}

export default ProductDetailsModel;