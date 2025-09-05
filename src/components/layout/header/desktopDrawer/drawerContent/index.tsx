"use client";

import { Box, Typography } from "@mui/material";
import UserInfo from "./userInfo";
import { ModeSwicherButton } from "@/components/layout/modeSwicher";
import { useContext, useEffect, useState } from "react";
import CategoryModel from "@/models/Category";
import DrawerAccordion from "../../drawerButton/drawer/drawerAccordion";
import Link from "next/link";
import NotLoggedIn from "@/components/layout/header/notLoggedIn";
import Cookies from "@/utils/cookie";
import { fetchCategories } from "@/api/data";
import { UserContext } from "@/context/UserProvider";
import LogOut from "@/utils/logOut";

const CategoryIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 7.27771L12 11.9999M12 11.9999L3.49997 7.27771M12 11.9999L12 21.5M21 16.0585V7.94141C21 7.59876 21 7.42744 20.9495 7.27464C20.9049 7.13947 20.8318 7.01539 20.7354 6.9107C20.6263 6.79236 20.4766 6.70916 20.177 6.54276L12.777 2.43164C12.4934 2.27409 12.3516 2.19531 12.2015 2.16442C12.0685 2.13709 11.9315 2.13709 11.7986 2.16442C11.6484 2.19531 11.5066 2.27409 11.223 2.43165L3.82297 6.54276C3.52345 6.70916 3.37369 6.79236 3.26463 6.9107C3.16816 7.01539 3.09515 7.13947 3.05048 7.27465C3 7.42745 3 7.59877 3 7.94141V16.0585C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9845 3.26463 17.0892C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7258 11.6484 21.8046 11.7986 21.8355C11.9315 21.8628 12.0685 21.8628 12.2015 21.8355C12.3516 21.8046 12.4934 21.7258 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0892C20.8318 16.9845 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0585Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const QuickAccessIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MessagesIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActivitiesIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12H18L15 21L9 3L6 12H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const BookmarkssIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DesktopDrawerContent = ({ onSelect }: { onSelect: () => void }) => {
  const [categories, setCategories] = useState<CategoryModel[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const isLogin: string | null = Cookies.get("access");
  const { user } = useContext(UserContext);

  const quickAccessLinks = [
    { title: "تماس با ما", link: "/contact-us" },
    { title: "درباره ما", link: "/about" },
    { title: "وبلاگ", link: "https://nons.ir/blog" },
    { title: "سوالات متداول", link: "/faq" },
  ];

  const profileLinks = [
    {
      title: "پیام ها",
      link: "/profile/messages",
      icon: <MessagesIcon />,
    },
    {
      title: "فعالیت های اخیر",
      link: "/profile/activities",
      icon: <ActivitiesIcon />,
    },
    { title: "نشان ها", link: "/profile/bookmarks", icon: <BookmarkssIcon /> },
  ];

  useEffect(() => {
    setLoading(true);
    const fetchingCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchingCategories();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "end", px: 2, pt: 2 }}>
          <ModeSwicherButton />
        </Box>
        {/* {!isLogin && (
        <Box sx={{ width: "100%", height: "150px" }}>
          <Box
            sx={{
              width: "100%",
              height: "150px",
              background: "url(images/backk.png), #52FF00",
              backgroundSize: "cover",
              position: "relative",
            }}
          ></Box>
        </Box>
      )} */}
        {isLogin && (
          <Box sx={{ mt: 5, px: 2 }}>
            <UserInfo />
          </Box>
        )}
        <Box>
          <Box>{!isLogin && <NotLoggedIn onLinkClick={onSelect} />}</Box>

          {isLogin && (
            <Box>
              <DrawerAccordion
                title={user?.email || user?.number}
                data={profileLinks}
                loading={false}
                onSelect={onSelect}
              />
              <Box
                sx={{
                  borderTop: "1px solid",
                  borderColor: "background.secondary",
                  mb: 2,
                }}
              ></Box>
            </Box>
          )}

          {/* dashboard */}
          {isLogin && (
            <Link href="/profile/dashboard" onClick={onSelect}>
              <Box sx={{ display: "flex", px: 2, my: 1, gap: "10px" }}>
                <Box sx={{ color: "icon.main" }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 20V10M12 20V4M6 20V14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
                <Typography sx={{ fontSize: "14px", color: "icon.main" }}>
                  داشبورد
                </Typography>
              </Box>
            </Link>
          )}
          {/* support */}
          <Link href="/profile/support" onClick={onSelect}>
            <Box sx={{ display: "flex", px: 2, my: 1, gap: "10px" }}>
              <Box sx={{ color: "icon.main" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Typography sx={{ fontSize: "14px", color: "icon.main" }}>
                پشتیبانی
              </Typography>
            </Box>
          </Link>
          {/* invite friends */}
          <Box
            sx={{
              display: "flex",
              alignitems: "center",
              px: 2,
              my: 1,
              gap: "10px",
            }}
          >
            <Box sx={{ color: "icon.main" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 10V4M16 7H22M16 21V19.8C16 18.1198 16 17.2798 15.673 16.638C15.3854 16.0735 14.9265 15.6146 14.362 15.327C13.7202 15 12.8802 15 11.2 15H6.8C5.11984 15 4.27976 15 3.63803 15.327C3.07354 15.6146 2.6146 16.0735 2.32698 16.638C2 17.2798 2 18.1198 2 19.8V21M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography sx={{ fontSize: "14px", color: "icon.main" }}>
              دعوت دوستان
            </Typography>
          </Box>
          {/* categories */}
          <DrawerAccordion
            title="دسته بندی ها"
            icon={<CategoryIcon />}
            data={categories}
            loading={loading}
            onSelect={onSelect}
          />
          <DrawerAccordion
            title="دسترسی سریع"
            icon={<QuickAccessIcon />}
            data={quickAccessLinks}
            loading={false}
            onSelect={onSelect}
          />
        </Box>
      </Box>
      {isLogin && (
        <Link
          href="/"
          onClick={() => {
            LogOut();
            onSelect();
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "cemter",
              gap: "10px",
              color: "#FF6666",
              p: 2,
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16.9999L21 11.9999M21 11.9999L16 6.99994M21 11.9999H9M12 16.9999C12 17.2955 12 17.4433 11.989 17.5713C11.8748 18.9019 10.8949 19.9968 9.58503 20.2572C9.45903 20.2823 9.31202 20.2986 9.01835 20.3312L7.99694 20.4447C6.46248 20.6152 5.69521 20.7005 5.08566 20.5054C4.27293 20.2453 3.60942 19.6515 3.26118 18.8724C3 18.2881 3 17.5162 3 15.9722V8.02764C3 6.4837 3 5.71174 3.26118 5.12746C3.60942 4.34842 4.27293 3.75454 5.08566 3.49447C5.69521 3.29941 6.46246 3.38466 7.99694 3.55516L9.01835 3.66865C9.31212 3.70129 9.45901 3.71761 9.58503 3.74267C10.8949 4.0031 11.8748 5.09798 11.989 6.42855C12 6.55657 12 6.70436 12 6.99994"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography sx={{ fontSize: "14px", color: "inherit" }}>
              خروج
            </Typography>
          </Box>
        </Link>
      )}
    </Box>
  );
};

export default DesktopDrawerContent;
