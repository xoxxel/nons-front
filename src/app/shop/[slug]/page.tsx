import { fetchShopDetailsByTitleEn, fetchShopProductsByTitleEn } from "@/api/data";
import ShopDetails from "@/components/shop";
import ShopDetailsMobile from "@/components/shop/mobile";
import ProductsModel from "@/models/Products";

const ShopPage = async ({params}:{params:{slug:string}}) => {

    const shop:ShopModel = await fetchShopDetailsByTitleEn(params?.slug)
    const products:ProductsModel = await fetchShopProductsByTitleEn(params?.slug)

    return ( 
        <>
        <ShopDetails shop={shop} products={products} />
        <ShopDetailsMobile shop={shop} products={products} />
        </>
    );
}
 
export default ShopPage;