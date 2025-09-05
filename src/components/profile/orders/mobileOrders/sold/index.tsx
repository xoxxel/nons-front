import OrderModel from "@/models/Order";
import OrderCard from "../orderCard";

const Sold = ({
  orders,
  isOrderSeller,
  setDrawerVisibility,
}: {
  orders: OrderModel[];
  isOrderSeller: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      {orders?.map((order) => (
        <OrderCard
          order={order}
          isOrderSeller={isOrderSeller}
          setDrawerVisibility={setDrawerVisibility}
        />
      ))}
    </>
  );
};

export default Sold;
