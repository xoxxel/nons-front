"use client";
import { Box, Button, Typography } from "@mui/material";
import UserProfile from "../customerMenu/userProfile";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";
import differenceBetweenDates from "@/utils/timeDiffrence";
import ShareLink from "@/utils/share";
import MenuTabs from "../customerMenu/menuTabs";
import Confirmations from "../customerMenu/confirmations";

const SellerInformationMenu = ({
  setIsSeller,
  onChange,
  loading,
}: {
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (file: File) => void;
  loading: boolean;
}) => {
  const { user } = useContext(UserContext);
  const membershipLength = differenceBetweenDates(
    new Date(),
    new Date(user?.shop?.date_created)
  );
  const shownDate = () => {
    if (membershipLength?.years > 0)
      return `${membershipLength?.years} سال ${membershipLength?.months > 0 ? ` و ${membershipLength?.months} ماه` : ""
        }`;
    if (membershipLength?.months > 0) return `${membershipLength?.months} ماه`;
    if (membershipLength?.days > 0) return `${membershipLength?.days} روز`;
    if (membershipLength?.hours > 0) return `${membershipLength?.hours} ساعت`;
    if (membershipLength?.minutes > 0)
      return `${membershipLength?.minutes} دقیقه`;
  };

  return (
    <Box>
      {/* right side menu */}
      <Box
        sx={{
          width: "100%",
          p: "15px",
          bgcolor: "background.element",
          border: "0.5px solid",
          borderColor: "border.secondary",
          borderRadius: "12px",
        }}
      >
        {/* user profile */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <UserProfile loading={loading} onChange={onChange} seller />
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
        {/* share and subscribtion buttons */}
        <Box sx={{ width: "100%", display: "flex", gap: 2, mt: 0 }}>
          <Button
            onClick={() =>
              ShareLink(`/shop/${user?.shop?.title_en}`)
            }
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              bgcolor: "button.main",
              ":hover": {
                bgcolor: "button.main",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                display: "flex",
                marginInlineEnd: 0.5,
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
            </Box>
            اشتراک
          </Button>
          <Button
            onClick={() => setIsSeller(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
              fontSize: "16px",
              fontWeight: "600",
              width: "100%",
              borderRadius: "5px",
              border: "0.5px solid",
              borderColor: "border.secondary",
              bgcolor: "transparent",
              ":hover": {
                bgcolor: "transparent",
              },
            }}
            className="profileMenuButtons"
          >
            <Box
              sx={{
                display: "flex",
                marginInlineEnd: 0.5,
              }}
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
            </Box>
            نمایه کاربری
          </Button>
        </Box>
        <MenuTabs />
        <Confirmations />
      </Box>
   
    </Box>
  );
};

export default SellerInformationMenu;
