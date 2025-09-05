"use client";
import FirstLogin from "@/components/login/firstLogin";
import { UserContext } from "@/context/UserProvider";
import ThousandSeparator from "@/utils/thousandSeparator";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import LoginDrawer from "./login";
import Cookies from "@/utils/cookie";
import LogOut from "@/utils/logOut";

const ProfileMenuContent = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useContext(UserContext);
  const access = Cookies.get("access");

  return (
    <Box>
      <Box
        sx={{
          width: "35px",
          height: "5px",
          borderRadius: "5px",
          mx: "auto",
          bgcolor: "background.secondary",
        }}
      ></Box>
      {access ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "10px",
              mt: "10px",
              borderBottom: "0.5px solid",
              borderColor: "background.secondary",
            }}
          >
            <Box sx={{ display: " flex", alignItems: "center", gap: "10px" }}>
              <Box
                sx={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50px",
                  border: "2px solid white",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={
                    user?.has_shop
                      ? user?.shop?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.shop?.image}` : "/images/boredape.png"
                      : user?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.image}` : "/images/boredape.png"
                  }
                  fill
                  alt="profile"
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontsize: "14px",
                      fontWeight: 600,
                      color: "text.content",
                    }}
                  >{user?.has_shop ? `فروشگاه ${user?.shop?.title!}` : user?.name || "کاربر جدید"}</Typography>
                  {user?.shop?.is_authenticated && (
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3965 3.1253C14.5666 3.53064 14.8931 3.85284 15.3043 4.02105L16.746 4.60942C17.1574 4.77733 17.4843 5.0994 17.6547 5.50478C17.8251 5.91015 17.8251 6.36562 17.6547 6.771L17.058 8.19044C16.8875 8.59599 16.8872 9.05193 17.0585 9.45728L17.6542 10.8763C17.7387 11.0771 17.7822 11.2923 17.7822 11.5096C17.7823 11.727 17.7388 11.9422 17.6544 12.143C17.57 12.3438 17.4462 12.5263 17.2902 12.6799C17.1342 12.8336 16.949 12.9555 16.7452 13.0386L15.3045 13.6265C14.8931 13.7941 14.5661 14.1158 14.3954 14.5209L13.7982 15.9414C13.6278 16.3468 13.3009 16.6688 12.8894 16.8367C12.478 17.0046 12.0157 17.0046 11.6043 16.8367L10.1636 16.2488C9.75217 16.0813 9.29005 16.0816 8.87885 16.2497L7.43715 16.8373C7.02594 17.0048 6.56406 17.0046 6.15296 16.8369C5.74185 16.6691 5.41515 16.3474 5.24461 15.9425L4.64726 14.5216C4.47715 14.1162 4.15063 13.794 3.73948 13.6258L2.29778 13.0375C1.88652 12.8696 1.55973 12.5478 1.38925 12.1426C1.21876 11.7375 1.21853 11.2822 1.38861 10.8769L1.98535 9.45747C2.15535 9.05209 2.15501 8.59677 1.98438 8.19164L1.3885 6.77017C1.30401 6.56939 1.26051 6.35418 1.26047 6.13683C1.26044 5.91948 1.30387 5.70426 1.38829 5.50345C1.47271 5.30265 1.59646 5.1202 1.75247 4.96654C1.90849 4.81288 2.0937 4.69101 2.29753 4.6079L3.7382 4.01994C4.14925 3.85249 4.47607 3.53119 4.64692 3.12656L5.24409 1.7061C5.41451 1.30073 5.7414 0.978662 6.15284 0.81075C6.56427 0.642838 7.02656 0.642838 7.438 0.81075L8.87866 1.3987C9.29011 1.5662 9.75223 1.56586 10.1634 1.39775L11.6057 0.811662C12.0171 0.643844 12.4793 0.643879 12.8907 0.811757C13.302 0.979636 13.6289 1.30161 13.7993 1.70688L14.3967 3.12776L14.3965 3.1253Z"
                        fill="#0788F5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0286 6.51053C13.1482 6.32537 13.1883 6.10096 13.14 5.88667C13.0917 5.67238 12.959 5.48577 12.7711 5.36789C12.5832 5.25001 12.3554 5.2105 12.1379 5.25808C11.9204 5.30565 11.731 5.4364 11.6114 5.62156L8.32361 10.7116L6.81909 8.85867C6.68 8.68726 6.47749 8.57731 6.25611 8.553C6.03474 8.5287 5.81263 8.59204 5.63865 8.72908C5.46468 8.86612 5.35308 9.06565 5.32841 9.28376C5.30374 9.50187 5.36803 9.72071 5.50712 9.89212L7.74598 12.6495C7.82942 12.7523 7.93658 12.8341 8.05856 12.888C8.18055 12.9418 8.31381 12.9662 8.44729 12.9591C8.58076 12.952 8.71058 12.9136 8.82595 12.847C8.94131 12.7805 9.03889 12.6878 9.11056 12.5767L13.0286 6.51053Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </Box>
                <Typography
                  sx={{ fontSize: "13px", color: "text.secondary", mt: "2px" }}
                >{`${ThousandSeparator(user?.wallet_balance)} IRT`}</Typography>
              </Box>
            </Box>
            <Link href="/profile/settings" onClick={()=> setIsDrawerOpen(false)} >
            <Box sx={{ color: "icon.main" }}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 13.5C19.5523 13.5 20 13.0523 20 12.5C20 11.9477 19.5523 11.5 19 11.5C18.4477 11.5 18 11.9477 18 12.5C18 13.0523 18.4477 13.5 19 13.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13.5C5.55228 13.5 6 13.0523 6 12.5C6 11.9477 5.55228 11.5 5 11.5C4.44772 11.5 4 11.9477 4 12.5C4 13.0523 4.44772 13.5 5 13.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              my: "10px",
            }}
          >
            <Link href="/profile/messages" onClick={()=> setIsDrawerOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: " 8px 10px",
                  borderRadius: "5px",
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ color: "icon.main" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.29932 7.8C3.29932 6.11984 3.29932 5.27976 3.6263 4.63803C3.91392 4.07354 4.37286 3.6146 4.93734 3.32698C5.57908 3 6.41916 3 8.09932 3H16.4993C18.1795 3 19.0196 3 19.6613 3.32698C20.2258 3.6146 20.6847 4.07354 20.9723 4.63803C21.2993 5.27976 21.2993 6.11984 21.2993 7.8V13.2C21.2993 14.8802 21.2993 15.7202 20.9723 16.362C20.6847 16.9265 20.2258 17.3854 19.6613 17.673C19.0196 18 18.1795 18 16.4993 18H13.9831C13.359 18 13.047 18 12.7485 18.0613C12.4837 18.1156 12.2275 18.2055 11.9868 18.3285C11.7155 18.4671 11.4718 18.662 10.9845 19.0518L8.59907 20.9602C8.18299 21.2931 7.97494 21.4595 7.79986 21.4597C7.64759 21.4599 7.50354 21.3906 7.40855 21.2716C7.29932 21.1348 7.29932 20.8684 7.29932 20.3355V18C6.36934 18 5.90436 18 5.52286 17.8978C4.48758 17.6204 3.67894 16.8117 3.40154 15.7765C3.29932 15.395 3.29932 14.93 3.29932 14V7.8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography sx={{ color: "text.content", fontSize: "13px" }}>
                    پیام ها
                  </Typography>
                </Box>
                <Box sx={{ color: "icon.main" }}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Link>
            <Link href="/profile/activities" onClick={()=> setIsDrawerOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: " 8px 10px",
                  borderRadius: "5px",
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ color: "icon.main" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2993 12H18.2993L15.2993 21L9.29932 3L6.29932 12H2.29932"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography sx={{ color: "text.content", fontSize: "13px" }}>
                    فعالیت های اخیر
                  </Typography>
                </Box>
                <Box sx={{ color: "icon.main" }}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Link>
            <Link href="/profile/bookmarks" onClick={()=> setIsDrawerOpen(false)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: " 8px 10px",
                  borderRadius: "5px",
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ color: "icon.main" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.29932 7.8C5.29932 6.11984 5.29932 5.27976 5.6263 4.63803C5.91392 4.07354 6.37286 3.6146 6.93734 3.32698C7.57908 3 8.41916 3 10.0993 3H14.4993C16.1795 3 17.0196 3 17.6613 3.32698C18.2258 3.6146 18.6847 4.07354 18.9723 4.63803C19.2993 5.27976 19.2993 6.11984 19.2993 7.8V21L12.2993 17L5.29932 21V7.8Z"
                        stroke="currentcolor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography sx={{ color: "text.content", fontSize: "13px" }}>
                    نشان ها
                  </Typography>
                </Box>
                <Box sx={{ color: "icon.main" }}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Link>
            <Link href="/profile/support/ticket-list" onClick={()=> setIsDrawerOpen(false)}>
              <Box
                sx={{
                  p: " 8px 10px",
                  borderRadius: "5px",
                  ":hover": {
                    bgcolor: "hover.main",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box sx={{ color: "icon.main" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.76377 8.46448L5.22825 4.92896M5.22825 19.0711L8.76379 15.5355M15.8349 15.5355L19.3704 19.071M19.3704 4.92891L15.8348 8.46445M22.2993 12C22.2993 17.5228 17.8222 22 12.2993 22C6.77647 22 2.29932 17.5228 2.29932 12C2.29932 6.47715 6.77647 2 12.2993 2C17.8222 2 22.2993 6.47715 22.2993 12ZM17.2993 12C17.2993 14.7614 15.0607 17 12.2993 17C9.53789 17 7.29932 14.7614 7.29932 12C7.29932 9.23858 9.53789 7 12.2993 7C15.0607 7 17.2993 9.23858 17.2993 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Box>
                  <Typography sx={{ color: "text.content", fontSize: "13px" }}>
                    تیکت ها
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              mt: "15px",
              borderTop: "1px solid",
              borderColor: "background.secondary",
            }}
          >
            <Link href="/" onClick={()=>{LogOut();setIsDrawerOpen(false)}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                py: "10px",
                px: "45px",
              }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2993 17L21.2993 12M21.2993 12L16.2993 7M21.2993 12H9.29932M12.2993 17C12.2993 17.2956 12.2993 17.4434 12.2883 17.5714C12.1741 18.902 11.1942 19.9968 9.88435 20.2573C9.75834 20.2823 9.61133 20.2987 9.31767 20.3313L8.29626 20.4448C6.76179 20.6153 5.99452 20.7005 5.38498 20.5055C4.57225 20.2454 3.90873 19.6515 3.56049 18.8725C3.29932 18.2882 3.29932 17.5162 3.29932 15.9723V8.0277C3.29932 6.48377 3.29932 5.7118 3.5605 5.12752C3.90873 4.34848 4.57225 3.7546 5.38498 3.49453C5.99453 3.29947 6.76177 3.38472 8.29626 3.55522L9.31767 3.66871C9.61144 3.70135 9.75832 3.71767 9.88435 3.74273C11.1942 4.00316 12.1741 5.09804 12.2883 6.42861C12.2993 6.55663 12.2993 6.70442 12.2993 7"
                  stroke="#FF6666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Typography sx={{ fontSize: "13px", color: "#FF6666" }}>
                خروج
              </Typography>
            </Box>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box sx={{ px: 2.5, pb: 2 }}>
          <LoginDrawer setIsDrawerOpen={setIsDrawerOpen} />
        </Box>
      )}
    </Box>
  );
};

export default ProfileMenuContent;
