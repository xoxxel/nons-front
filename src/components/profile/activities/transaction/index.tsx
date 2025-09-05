import OrderModel from "@/models/Order";
import DepositCard from "./deposit";
import TradingCard from "./trade";
import WithdrawingCard from "./withdraw";
import ActivityModel from "@/models/Activity";
import OrderCard from "./order";

const Withdraw = ({
  open,
  activity,
  setDrawerVisibility,
}: {
  open: boolean;
  activity: ActivityModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <WithdrawingCard
      open={open}
      activity={activity}
      onDetailClick={(activityId) => setDrawerVisibility(activityId)}
    />
  );
};

const Deposit = ({
  open,
  activity,
  setDrawerVisibility,
}: {
  open: boolean;
  activity: ActivityModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <DepositCard
      open={open}
      activity={activity}
      onDetailClick={(activityId) => setDrawerVisibility(activityId)}
    />
  );
};

const Trade = ({
  open,
  activity,
  isOrderSeller,
  setDrawerVisibility,
}: {
  open?: boolean;
  activity: ActivityModel;
  isOrderSeller?: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <TradingCard
      open={open}
      activity={activity}
      onDetailClick={(activityId) => setDrawerVisibility(activityId)}
    />
  );
};

const Order = ({
  open,
  order,
  isOrderSeller,
  setDrawerVisibility,
}: {
  open?: boolean;
  order: OrderModel;
  isOrderSeller?: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <OrderCard
      open={open}
      order={order}
      isOrderSeller={isOrderSeller}
      setDrawerVisibility={setDrawerVisibility}
    />
  );
};

export { Withdraw, Deposit, Trade, Order };
