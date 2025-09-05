import { fetchUserProducts } from "@/api/data";
import EditProducts from "@/components/profile/products/editProducts";
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";

const EditProductsPage = async () => {

  const products : ProductsModel = await fetchUserProducts();

  return <EditProducts products={products} />;
};

export default EditProductsPage;
