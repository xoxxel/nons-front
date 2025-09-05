"use client"

import UserProfile from "@/components/profile/userInfo/customerMenu/userProfile";
import { UserContext } from "@/context/UserProvider";
import Cookies from "@/utils/cookie";
import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const UserProductsProfile = () => {

    const [userProfileLoading,setUserProfileLoading] = useState(false)
    const {getUser} = useContext(UserContext)
  
    const handleUserProfileChange = (file: File) => {
      setUserProfileLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      axios
        .patch(`${process.env.NEXT_PUBLIC_API}/user/user/`, formData, {
          headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        })
        .then((res) => handleProfileUpdate())
        .catch((err) => handleProfileUpdateError());
    };
  
    const handleProfileUpdate = () => {
      setUserProfileLoading(false);
      toast.success("بروزرسانی با موفقیت انجام شد");
      getUser();
    };
  
    const handleProfileUpdateError = () => {
      setUserProfileLoading(false);
      toast.error("مشکلی پیش آمد");
    };

    return ( 
        <UserProfile loading={userProfileLoading} onChange={(file)=>handleUserProfileChange(file)} lengthOfMembership />
     );
}
 
export default UserProductsProfile;