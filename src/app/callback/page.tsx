import Callback from "@/components/callback";
import axios from "axios";
import { cookies } from "next/headers";

interface SearchParams {
  success: string;
  trackId: string;
  orderId: string;
  type?: string;
}

const CallbackPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const verifyOrder = () => {
    axios
      .post(
        `${process.env.API}/cart/verify-order/${searchParams?.orderId}`,
        { trackId: searchParams?.trackId, success: searchParams?.success },
        {
          headers: {
            Authorization: `Bearer ${cookies().get("access")?.value}`,
          },
        }
      )
      .then((res) => console.log("res"))
      .catch((err) => console.log("err"));
  };

  const verifyWalletOrder = () => {
    axios
      .post(
        `${process.env.API}/wallet/verify-transaction/${searchParams?.orderId}`,
        { trackId: searchParams?.trackId, success: searchParams?.success },
        {
          headers: {
            Authorization: `Bearer ${cookies().get("access")?.value}`,
          },
        }
      )
      .then((res) => console.log("res"))
      .catch((err) => console.log("err"));
  };

  if (searchParams?.type === "wallet") {
    verifyWalletOrder();
  } else {
    verifyOrder();
  }

  return (
    <Callback
      success={searchParams?.success}
      trackingID={searchParams?.trackId}
      orderID={searchParams?.orderId}
    />
  );
};

export default CallbackPage;
