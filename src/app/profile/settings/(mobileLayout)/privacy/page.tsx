import { fetchUserAccount } from "@/api/data";
import UserPrivacy from "@/components/profile/privacy";
import PrivacyMobile from "@/components/profile/privacy/mobilePrivacy";

const Privacy = async () => {

    const account:AccountType = await fetchUserAccount()
    return ( 
        <>
        <UserPrivacy userAccount={account} />
        <PrivacyMobile userAccount={account} />
        </>
     );
}
 
export default Privacy;