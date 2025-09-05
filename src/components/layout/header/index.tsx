"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import DrawerButton from "./drawerButton";
import DesktopDrawer from "./desktopDrawer";
import SearchBar from "./search";
import { useContext } from "react";
import { UserContext } from "@/context/UserProvider";

const Header = () => {

  const {user} = useContext(UserContext)

  return (
    <header
      style={{
        position: "sticky",
        top: "0px",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "background.element",
      }}
    >
      {/* desktop header */}
      <Box
        sx={{
          py: "14px",
          bgcolor: "background.element",
          display: { md: "block", xs: "none" },
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{ display: { md: "none", xs: "flex" }, alignItems: "center" }}
            >
              <DrawerButton />
            </Box>
            <Box
              sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}
            >
              <DesktopDrawer />
            </Box>
            {/* signup and login button */}
            <Link href="/login">
              <Button
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: "7px",
                  py: 2,
                  px: 8,
                  fontWeight: "600 !important",
                  bgcolor: "button.main",
                  color: "white",
                  ":hover": {
                    bgcolor: "button.main",
                  },
                }}
              >
                ورود / ثبت نام
              </Button>
            </Link>
          </Box>
          {/* serachBar */}
          <SearchBar />
          {/* logo apeared here */}
          <Link href={"/"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography
                sx={{ fontWeight: "700", fontSize: "50px", color: "text.main" }}
              >
                nons
              </Typography>
              <Image
                src="/images/logo-mobile.png"
                width={38}
                height={38}
                alt="logo"
              />
            </Box>
          </Link>
        </Container>
      </Box>
      {/* mobile responsive header */}
      <Container
        sx={{
          width: "100%",
          display: { md: "none", xs: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          py: 1,
          bgcolor: "background.element",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <DesktopDrawer />
          <Link href="/profile/notifications">
          <Box
            sx={{
              width: "20px",
              height: "20px",
              color: "icon.main",
              rotate: "30deg",
              position: "relative",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9997 19C14.9997 20.6569 13.6566 22 11.9997 22C10.3429 22 8.99972 20.6569 8.99972 19M13.7962 6.23856C14.2317 5.78864 14.4997 5.17562 14.4997 4.5C14.4997 3.11929 13.3804 2 11.9997 2C10.619 2 9.49972 3.11929 9.49972 4.5C9.49972 5.17562 9.76772 5.78864 10.2032 6.23856M17.9997 11.2C17.9997 9.82087 17.3676 8.49823 16.2424 7.52304C15.1171 6.54786 13.591 6 11.9997 6C10.4084 6 8.8823 6.54786 7.75708 7.52304C6.63186 8.49823 5.99972 9.82087 5.99972 11.2C5.99972 13.4818 5.43385 15.1506 4.72778 16.3447C3.92306 17.7056 3.5207 18.3861 3.53659 18.5486C3.55476 18.7346 3.58824 18.7933 3.73906 18.9036C3.87089 19 4.53323 19 5.85791 19H18.1415C19.4662 19 20.1286 19 20.2604 18.9036C20.4112 18.7933 20.4447 18.7346 20.4629 18.5486C20.4787 18.3861 20.0764 17.7056 19.2717 16.3447C18.5656 15.1506 17.9997 13.4818 17.9997 11.2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {user?.notif_count > 0 && <Box
              sx={{
                width: "5px",
                height: "5px",
                bgcolor: "#FFCE00",
                borderRadius: "50px",
                position: "absolute",
                top: "5px",
                right: "4px",
              }}
            ></Box>}
          </Box>
          </Link>
        </Box>
        <Link href="/" style={{ height: "38px" }}>
          <Image
            src="/images/logo-mobile.png"
            width={38}
            height={38}
            alt="logo"
          />
        </Link>
      </Container>
      <NextTopLoader
        template='<div class="bar" role="bar"></div>'
        height={5}
        color="linear-gradient(90deg, #9FE870 0%, #A31CA5 50%, #0961DC 100%);
 !important"
      />
    </header>
  );
};

export default Header;
