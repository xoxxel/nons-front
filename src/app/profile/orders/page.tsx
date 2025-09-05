import { fetchSellerOrders, fetchUserOrders } from "@/api/data";
import MainOrders from "@/components/profile/orders/main";

const page = async ({
  searchParams,
}: {
  searchParams: {
    category: string;
    brand: string;
    status: string;
    min_date_created: string;
    max_date_created: string;
    type?:"sells"|"buys"
  };
}) => {



  const sellerOrders = await fetchSellerOrders(searchParams);
  const customerOrders = await fetchUserOrders(searchParams);

  return (
    <MainOrders
      sellerOrders={sellerOrders?.results}
      customerOrders={customerOrders?.results}
      orderType={searchParams?.type}
    />
  );
};

export default page;
