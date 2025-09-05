import {
  fetchRecentActivities,
} from "@/api/data";
import Wallet from "@/components/profile/wallet";
import MobileWallet from "@/components/profile/wallet/mobileWallet";
import ActivityModel from "@/models/Activity";

const Walletpage = async () => {

  const walletActivities: {results: ActivityModel[]} = await fetchRecentActivities({
    limit: 18,
    type: "transaction",
  });

  return (
    <>
      <MobileWallet transactions={walletActivities?.results} />
      <Wallet transactions={walletActivities?.results} />
    </>
  );
};

export default Walletpage;