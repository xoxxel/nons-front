"use client";
import { Box, Button, Typography } from "@mui/material";
import UserProfile from "../customerMenu/userProfile";
import MenuTabs from "./menuTabs";
import Confirmations from "../customerMenu/confirmations";
import axios from "axios";
import Cookies from "@/utils/cookie";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "@/context/UserProvider";
import ShareLink from "@/utils/share";

const ProfileMenu = () => {
  const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [sellerProfileLoading, setSellerProfileLoading] = useState(false);
  const { getUser, setIsSeller, isSeller, user } = useContext(UserContext);

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
    <Box
      sx={{
        width: "100%",
        p: "15px",
        bgcolor: "background.element",
        borderRadius: "12px",
        border: "0.5px solid",
        borderColor: "border.secondary",
      }}
    >
      {/* user profile */}
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
      {isSeller && <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: "10px",
          mt: 2
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
      </Box>}
      <Box sx={{ width: "100%", display: "flex", gap: 2, mt: 5 }}>
        <Button
          onClick={() => ShareLink(`/shop/${user?.shop?.title_en}`)}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            width: "100%",
            height: "44px",
            borderRadius: "5px",
            bgcolor: "button.main",
            ":hover": {
              bgcolor: "button.main",
            },
          }}
          className="profileMenuButtons"
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36875 8.94375L9.6375 11.4312M9.63125 4.56875L5.36875 7.05625M13.125 3.625C13.125 4.66053 12.2855 5.5 11.25 5.5C10.2145 5.5 9.375 4.66053 9.375 3.625C9.375 2.58947 10.2145 1.75 11.25 1.75C12.2855 1.75 13.125 2.58947 13.125 3.625ZM5.625 8C5.625 9.03553 4.78553 9.875 3.75 9.875C2.71447 9.875 1.875 9.03553 1.875 8C1.875 6.96447 2.71447 6.125 3.75 6.125C4.78553 6.125 5.625 6.96447 5.625 8ZM13.125 12.375C13.125 13.4105 12.2855 14.25 11.25 14.25C10.2145 14.25 9.375 13.4105 9.375 12.375C9.375 11.3395 10.2145 10.5 11.25 10.5C12.2855 10.5 13.125 11.3395 13.125 12.375Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              mx: 0.5,
            }}
          >
            اشتراک
          </Typography>
        </Button>
        <Button
          onClick={() => user?.verified && setIsSeller(!isSeller)}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "44px",
            width: "100%",
            borderRadius: "5px",
            bgcolor: "transparent",
            border: "0.5px solid #1E1E1E",
            ":hover": {
              bgcolor: "transparent",
            },
            color: "text.main",
          }}
          className="profileMenuButtons"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 11.125H3M3 11.125L5.5 8.625M3 11.125L5.5 13.625M3 4.875H13M13 4.875L10.5 2.375M13 4.875L10.5 7.375"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            sx={{
              color: "text.main",
              fontSize: "16px",
              fontWeight: "600",
              mx: 0.5,
            }}
          >
            {isSeller ? "نمایه کاربری" : "نمایه فروشگاه"}
          </Typography>
        </Button>
      </Box>
      <MenuTabs />
      <Confirmations withoutButtons />
    </Box>
  );
};

export default ProfileMenu;