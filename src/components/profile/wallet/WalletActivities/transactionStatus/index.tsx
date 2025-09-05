import ActivityModel from "@/models/Activity";
import WalletPurchaseCancelled from "./cancelled/purchase";
import WalletSaleCancelled from "./cancelled/sale";
import WalletTrade from "./pending/sale";
import WalletDepositAndWithdraw from "./pending/withdraw";
import WalletDepositSuccess from "./success/deposit";
import WalletPurchaseSuccess from "./success/purchase";
import WalletWithdrawSuccess from "./success/withdraw";

const WithdrawSuccess = ({
  setDrawerVisibility,
  transaction,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  transaction: WalletTransactionModel;
}) => {
  return (
    <WalletWithdrawSuccess
      transaction={transaction}
      setDrawerVisibility={setDrawerVisibility}
    />
  );
};

const DepositAndWithdraw = ({
  setDrawerVisibility,
  transaction,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  transaction: ActivityModel;
}) => {
  return (
    <WalletDepositAndWithdraw
      setDrawerVisibility={setDrawerVisibility}
      activity={transaction}
    />
  );
};

const DepositSuccess = ({
  setDrawerVisibility,
  data,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  data: WalletTransactionModel;
}) => {
  return (
    <WalletDepositSuccess
      setDrawerVisibility={setDrawerVisibility}
      data={data}
    />
  );
};

const PurchaseCancelled = ({
  setDrawerVisibility,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return <WalletPurchaseCancelled setDrawerVisibility={setDrawerVisibility} />;
};

const PurchaseSuccess = ({
  setDrawerVisibility,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return <WalletPurchaseSuccess setDrawerVisibility={setDrawerVisibility} />;
};

const SaleCancelled = ({
  setDrawerVisibility,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return <WalletSaleCancelled setDrawerVisibility={setDrawerVisibility} />;
};

const Trade = ({
  setDrawerVisibility,
  transaction,
}: {
  setDrawerVisibility: React.Dispatch<React.SetStateAction<number>>;
  transaction: ActivityModel;
}) => {
  return (
    <WalletTrade
      setDrawerVisibility={setDrawerVisibility}
      activity={transaction}
    />
  );
};

export { DepositAndWithdraw, Trade };
