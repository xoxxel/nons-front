import OrderModel from "@/models/Order";
import OrderCancelled from "./cancelled";
import OrderCompleted from "./completed";
import OrderPending from "./pending";
import OrderUnderReview from "./underReview";
import jalaliDate from "@/utils/jalaliDate";

const formattedDate = (date: string, dateFormat: string) => {
  const newDate = date ? jalaliDate(date, dateFormat) : "تاریخ نامشخص";
  return newDate;
};

const Completed = ({
  setDrawerVisibility,
  order,
}: {
  order: OrderModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <OrderCompleted
      setDrawerVisibility={setDrawerVisibility}
      order={order}
      formattedDate={formattedDate}
    />
  );
};

const Cancelled = ({
  setDrawerVisibility,
  order,
}: {
  order: OrderModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <OrderCancelled
      setDrawerVisibility={setDrawerVisibility}
      order={order}
      formattedDate={formattedDate}
    />
  );
};

const Pending = ({
  setDrawerVisibility,
  order,
  onStatusChange,
  orderType
}: {
  order: OrderModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  onStatusChange:(order:OrderModel)=>void;
  orderType:"buy"|"sell"
}) => {
  return (
    <OrderPending
      setDrawerVisibility={setDrawerVisibility}
      order={order}
      onStatusChange={onStatusChange}
      formattedDate={formattedDate}
      orderType={orderType}
    />
  );
};

const UnderReview = ({
  setDrawerVisibility,
  order,
}: {
  order: OrderModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <OrderUnderReview
      setDrawerVisibility={setDrawerVisibility}
      order={order}
      formattedDate={formattedDate}
    />
  );
};

export { Completed, Cancelled, Pending, UnderReview };
