import { fetchCategories, fetchPlatforms, fetchProductBySlug, fetchProductCodes, fetchReagons } from "@/api/data";
import AddProduct from "@/components/profile/products/addProduct";
import CategoryModel from "@/models/Category";
import ProductDetailsModel from "@/models/productDetails";

type ActivatiionCodeType = {
    id:number,
    code:string,
    product:number,
}

const EditProductDetails = async ({params}:{params:{slug:string}}) => {

    const categories:CategoryModel[] = await fetchCategories()
    const platforms:platformModel[] = await fetchPlatforms()
    const regions:RegionModel[] = await fetchReagons()
    const product:ProductDetailsModel = await fetchProductBySlug(params?.slug)
    const codes:ActivatiionCodeType[] = await fetchProductCodes(params?.slug)

    return ( <AddProduct defaultProduct={product} defaultProductCodes={codes} categories={categories} platforms={platforms} regions={regions} productEditing /> );
}
 
export default EditProductDetails;