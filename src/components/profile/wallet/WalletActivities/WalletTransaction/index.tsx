import WalletDeposit from "./deposit";
import WalletWithdraw from "./withdraw";

const Deposit = ({
  open,
  setDrawerVisibility,
  data,
  activityId
}: {
  open: boolean;
  data: WalletTransactionModel;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  activityId:number
}) => {
  return (
    <WalletDeposit
      open={open}
      setDrawerVisibility={setDrawerVisibility}
      data={data}
      activityId={activityId}
    />
  );
};

const Withdraw = ({
  open,
  setDrawerVisibility,
  data,
  activityId
}: {
  open: boolean;
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
  activityId:number
}) => {
  return (
    <WalletWithdraw
      open={open}
      setDrawerVisibility={setDrawerVisibility}
      data={data}
      activityId={activityId}
    />
  );
};

export { Deposit, Withdraw };
