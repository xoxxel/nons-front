import WalletDeposit from "./deposit";
import WalletWithdraw from "./withdraw";

const Deposit = ({
  setDrawerVisibility,
  data,
  activityId
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
  activityId:number
}) => {
  return <WalletDeposit data={data} setDrawerVisibility={setDrawerVisibility} activityId={activityId} />;
};

const Withdraw = ({
  setDrawerVisibility,
  data,
  activityId
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
  activityId:number
}) => {
  return <WalletWithdraw data={data} setDrawerVisibility={setDrawerVisibility} activityId={activityId} />;
};

export { Deposit, Withdraw };
