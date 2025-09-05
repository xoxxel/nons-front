"use client";
import { Box, Grid, Link, Typography } from "@mui/material";
import SellerInformationMenu from "../../sellerMenu";
import UserInformationMenu from "..";
import { UserContext } from "@/context/UserProvider";
import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "@/utils/cookie";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";

const UserProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, getUser, isSeller, setIsSeller } = useContext(UserContext);
  const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [sellerProfileLoading, setSellerProfileLoading] = useState(false);
  const pathname = usePathname();

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
    setSellerProfileLoading(false);
    toast.success("بروزرسانی با موفقیت انجام شد");
    getUser();
  };

  const handleProfileUpdateError = () => {
    setUserProfileLoading(false);
    setSellerProfileLoading(false);
    toast.error("مشکلی پیش آمد");
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

  return (
    <>
      <Box sx={{ width: "100%", display: { md: "block", xs: "none" } }}>
        <Box sx={{ mt: 5 }}>
          {/* big title at the top */}
          <Typography
            sx={{
              color: "text.main",
              fontSize: "29px",
              fontWeight: "600",
              mt: 5,
            }}
          >
            تنظیمات حساب کاربری
          </Typography>
          {/* braedcrumb is here */}
          <Box sx={{ display: "flex", gap: 1, mt: 1, mb: 5 }}>
            <Link href="/">
              <Typography sx={{ color: "button.main" }}>Home</Typography>
            </Link>
            <Typography sx={{ color: "text.main" }}>/</Typography>
            <Typography sx={{ color: "text.secondary" }}>setting</Typography>
          </Box>

          <Grid
            container
            spacing={{ lg: 3, md: 1.5 }}
            sx={{ maxWidth: "100%" }}
          >
            <Grid item md={4.5} lg={4}>
              {isSeller ? (
                <SellerInformationMenu
                  loading={sellerProfileLoading}
                  onChange={(file) => handleSellerProfileChange(file)}
                  setIsSeller={setIsSeller}
                />
              ) : (
                <UserInformationMenu
                  loading={userProfileLoading}
                  onChange={(file) => handleUserProfileChange(file)}
                  setIsSeller={setIsSeller}
                />
              )}
            </Grid>
            <Grid item md={7.5} lg={8}>
              <Box>
                <Typography
                  sx={{ color: "text.main", fontWeight: "600", my: 3 }}
                >
                  ویرایش اطلاعات {pathname === "/profile/settings/seller" ? "فروشگاه" : "کاربری"}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    p: { lg: "30px 25px", md: "15px 12px" },
                    bgcolor: "background.element",
                    border: "0.5px solid",
                    borderColor: "border.secondary",
                    borderRadius: "12px",
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mb: "74px", display: { md: "none", xs: "block" } }}>
        {children}
      </Box>
    </>
  );
};

export default UserProfileLayout;
