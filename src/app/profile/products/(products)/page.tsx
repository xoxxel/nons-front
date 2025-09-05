import { fetchUserProducts } from "@/api/data";
import SellerProducts from "@/components/profile/products";
import ProductsMobile from "@/components/profile/products/products/productsMobile";
import ProductModel from "@/models/Product";
import ProductsModel from "@/models/Products";

const ProfileProducts = async ({
  searchParams,
}: {
  searchParams?: { category?: string; brand?: string; status?: string;is_active?: string };
}) => {
  const items: ProductsModel = await fetchUserProducts(
    searchParams?.category,
    searchParams?.brand,
    searchParams?.status,
    searchParams?.is_active
  );

  return (
    <>
      <SellerProducts items={items} />
      <ProductsMobile items={items} />
    </>
  );
};

export default ProfileProducts;
