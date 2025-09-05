import { fetchBrands, fetchCategories, fetchPlatforms, fetchReagons } from "@/api/data";
import AddProduct from "@/components/profile/products/addProduct";
import CategoryModel from "@/models/Category";

const AddProductPage = async () => {

    const categories:CategoryModel[] = await fetchCategories()
    const platforms:platformModel[] = await fetchPlatforms()
    const regions:RegionModel[] = await fetchReagons()

    return ( 
        <AddProduct categories={categories} platforms={platforms} regions={regions} productEditing={false} />
     );
}
 
export default AddProductPage;