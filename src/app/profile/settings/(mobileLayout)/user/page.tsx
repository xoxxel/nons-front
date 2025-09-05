import { fetchBrandTags } from "@/api/data";
import CustomerInfoMobile from "@/components/profile/userInfo/main/customerInfoMobile";

const MobileUserPage = async () => {

    const tags = await fetchBrandTags()

  return <CustomerInfoMobile tags={tags} />;
};

export default MobileUserPage;
