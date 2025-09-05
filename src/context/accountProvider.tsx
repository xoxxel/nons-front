"use client";

import { fetchUserAccount } from "@/api/data";
import Cookies from "@/utils/cookie";
import { createContext, useEffect, useState } from "react";

export const AccountContext = createContext<{
  account: AccountType;
  updateAccount: () => void;
}>({
  account: {} as AccountType,
  updateAccount: () => {},
});
const access = Cookies.get("access");

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState<AccountType>({} as AccountType);

  const getAccount = () => {
    fetchUserAccount()
      .then((res) => setAccount(res))
      .catch((err) => console.error("Error fetching user account", err));
  };

  useEffect(() => {
    if (access) {
      getAccount();
    }
  }, [access]);
  return (
    <AccountContext.Provider value={{ account, updateAccount: getAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
