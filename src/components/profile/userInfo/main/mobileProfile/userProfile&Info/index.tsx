"use client";
import { UserContext } from "@/context/UserProvider";
import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import UserProfile from "../../../customerMenu/userProfile";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";

const SwapableUserProfile = () => {
    const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [sellerProfileLoading, setSellerProfileLoading] = useState(false);
  const { getUser, isSeller, user } = useContext(UserContext);

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

  const handleSellerProfileChange = (file: File) => {
    setSellerProfileLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", user?.shop?.title);
    formData.append("title_en", user?.shop?.title_en);
    axios
      .patch(`${process.env.NEXT_PUBLIC_API}/user/update-shop/`, formData, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => handleProfileUpdate())
      .catch((err) => handleProfileUpdateError());
  };

  const handleProfileUpdate = () => {
    setUserProfileLoading(false);
    setSellerProfileLoading(false);
    toast.success("بروزرسانی با موفقیت انجام شد");
    getUser();
  };

  const handleProfileUpdateError = () => {
    setUserProfileLoading(false);
    setSellerProfileLoading(false);
    toast.error("مشکلی پیش آمد");
  };

  return (
    <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        {isSeller ? (
          <UserProfile
            seller
            loading={sellerProfileLoading}
            onChange={(file) => handleSellerProfileChange(file)}
            lengthOfMembership
          />
        ) : (
          <UserProfile
            loading={userProfileLoading}
            onChange={(file) => handleUserProfileChange(file)}
            lengthOfMembership
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "10px",
          mt: 1.5,
        }}
      >
        <Box
          sx={{
            width: "82px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "900",
            }}
          >
            {user?.shop?.score}
          </Typography>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            امتیاز
          </Typography>
        </Box>
        <Box
          sx={{
            width: "82px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "900",
            }}
          >
            {user?.shop?.product_count}
          </Typography>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            محصول
          </Typography>
        </Box>
        <Box
          sx={{
            width: "82px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "900",
            }}
          >
            0
          </Typography>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            پست
          </Typography>
        </Box>
      </Box>
    </Box>

  );
};

export default SwapableUserProfile;
