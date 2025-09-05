"use client";
import UserInformation from "@/components/profile/userInfo/main/customerInfo";
import UserInformationMobile from "@/components/profile/userInfo/main/customerProfileMobile";
import { UserContext } from "@/context/UserProvider";
import { useContext } from "react";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return(
  <>
    <UserInformation user={user} />
    <UserInformationMobile />
  </>);
};

export default ProfilePage;
