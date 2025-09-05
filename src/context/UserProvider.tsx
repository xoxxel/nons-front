"use client";

import { fetchUserData } from "@/api/data";
import UserModel from "@/models/User";
import Cookies from "@/utils/cookie";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext<{
  user: UserModel;
  getUser: () => Promise<void>;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserModel>>;
}>({
  user: {} as UserModel,
  getUser: async () => {},
  isSeller: false,
  setIsSeller: () => {},
  setUser: () => {},
});

const UserProvider = ({ children, initialUserData }: { children: ReactNode, initialUserData:UserModel }) => {
  const [user, setUser] = useState<UserModel>(initialUserData);
  const [isSeller, setIsSeller] = useState(false);
  const [isFirstRequest, setIsFirstRequest] = useState(true);
  const access: string | null = Cookies.get("access");

  const getUserData = async () => {
    try {
      const data: UserModel = await fetchUserData();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (access) {
      getUserData();
    }
  }, [access]);

  useEffect(() => {
    if (user?.id) {
      if (isFirstRequest) {
        setIsSeller(user?.has_shop);
      }
      setIsFirstRequest(false);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        getUser: getUserData,
        isSeller: isSeller,
        setIsSeller: setIsSeller,
        setUser:setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
