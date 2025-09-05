"use client";
import { Box, Button, Typography } from "@mui/material";
import UserProfile from "../../customerMenu/userProfile";
import { UserContext } from "@/context/UserProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "@/utils/cookie";
import ShareLink from "@/utils/share";
import Link from "next/link";
import differenceBetweenDates from "@/utils/timeDiffrence";

const SellerInformationMobile = () => {
  const { setIsSeller, getUser, user } = useContext(UserContext);
  const [sellerProfileLoading, setSellerProfileLoading] = useState(false);

  const membershipLength = differenceBetweenDates(
    new Date(),
    new Date(user?.shop?.date_created)
  );
  const shownDate = () => {
    if (membershipLength?.years > 0)
      return `${membershipLength?.years} سال ${
        membershipLength?.months > 0 ? ` و ${membershipLength?.months} ماه` : ""
      }`;
    if (membershipLength?.months > 0) return `${membershipLength?.months} ماه`;
    if (membershipLength?.days > 0) return `${membershipLength?.days} روز`;
    if (membershipLength?.hours > 0) return `${membershipLength?.hours} ساعت`;
    if (membershipLength?.minutes > 0)
      return `${membershipLength?.minutes} دقیقه`;
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
    setSellerProfileLoading(false);
    toast.success("بروزرسانی با موفقیت انجام شد");
    getUser();
  };

  const handleProfileUpdateError = () => {
    setSellerProfileLoading(false);
    toast.error("مشکلی پیش آمد");
  };

  return (
    <Box sx={{ display: { md: "none", xs: "block" }, mb: 12 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
        <UserProfile
          loading={sellerProfileLoading}
          onChange={(file) => handleSellerProfileChange(file)}
          seller
        />
      </Box>
      {/* seller score and reviews */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          my: 5,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "900", color: "text.main" }}
          >
            {shownDate()}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "400", color: "text.main" }}
          >
            تجربه
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "900", color: "text.main" }}
          >
            {user?.shop?.score}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "400", color: "text.main" }}
          >
            امتیاز
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "900", color: "text.main" }}
          >
           {user?.shop?.score_count}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: "400", color: "text.main" }}
          >
            بازخورد
          </Typography>
        </Box>
      </Box>
      {/* buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          mt: "20px",
        }}
      >
        <Button
          onClick={() =>
            ShareLink(`/shop/${user?.shop?.title_en}`)
          }
          sx={{
            bgcolor: "background.element",
            border: "0.5px solid",
            borderColor: "icon.main",
            borderRadius: "5px",
            minWidth: "36px",
            height: "36px",
            color: "icon.main",
            ":hover": {
              bgcolor: "background.element",
            },
          }}
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
        </Button>
        <Link href="/profile/settings">
        <Button
          sx={{
            bgcolor: "background.element",
            border: "0.5px solid",
            borderColor: "icon.main",
            borderRadius: "5px",
            minWidth: "36px",
            height: "36px",
            color: "icon.main",
            ":hover": {
              bgcolor: "background.element",
            },
          }}
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11.125H2.5M2.5 11.125L5 8.625M2.5 11.125L5 13.625M2.5 4.875H12.5M12.5 4.875L10 2.375M12.5 4.875L10 7.375"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        </Link>
        <Link href="/profile/settings/shop">
        <Button
          sx={{
            borderRadius: "5px",
            bgcolor: "button.main",
            color: "white",
            height: "36px",
            width: "176px",
            ":hover": {
              bgcolor: "button.main",
            },
          }}
        >
          ویرایش
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SellerInformationMobile;
