import { fetchBrandTags } from "@/api/data";
import SellerInfoMobile from "@/components/profile/userInfo/main/sellerInfoMobile";

const ShopSettingsPage = async () => {
    const tags = await fetchBrandTags()
    return ( <SellerInfoMobile tags={tags} /> );
}
 
export default ShopSettingsPage;