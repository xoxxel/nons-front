"use client";
import { UserContext } from "@/context/UserProvider";
import { Box, Button, Container, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserMobileTabs = () => {
  const pathname = usePathname();
  const [tab, setTab] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (pathname === "/profile/settings/user") {
      setTab("info");
    } else if (pathname === "/profile/settings/privacy") {
      setTab("privacy");
    } else {
      setTab("shop");
    }
  }, [pathname]);

  return (
    <Container sx={{ mt: 2 }}>
      <Box
        className="scrollbarHidden"
        sx={{ display: { md: "none", xs: "flex", overflowX: "scroll" } }}
      >
        <Box sx={{ width: "fit-content" }}>
          <Link href="/profile/settings/user">
            <Button
              sx={{
                color: tab === "info" ? "button.main" : "text.secondary",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "0px",
                whiteSpace: "nowrap",
              }}
            >
              اطلاعات شخصی
            </Button>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                height: "2px",
                width: tab === "info" ? "100%" : "0px",
                bgcolor: "button.main",
                transition: "all 0.2s ease",
              }}
            ></Box>
          </Box>
        </Box>
        <Box sx={{ width: "fit-content" }}>
          <Link href="/profile/settings/privacy">
            <Button
              sx={{
                color: tab === "privacy" ? "button.main" : "text.secondary",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "0px",
                whiteSpace: "nowrap",
              }}
            >
              حریم خصوصی و امنیت
            </Button>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                height: "2px",
                width: tab === "privacy" ? "100%" : "0px",
                bgcolor: "button.main",
                transition: "all 0.2s ease",
              }}
            ></Box>
          </Box>
        </Box>
        <Box sx={{ width: "fit-content" }}>
          <Link href={user?.verified ? "/profile/settings/shop" : ""}>
            <Button
              // disabled={!user?.verified}
              onClick={() => { if (!user?.verified) return toast.error("لطفا ابتدا پروفایل خود را تکمیل کنید!") }}
              sx={{
                color: tab === "shop" ? "button.main" : "text.secondary",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "0px",
                whiteSpace: "nowrap",
              }}
            >
              فروشگاه
            </Button>
          </Link>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                height: "2px",
                width: tab === "shop" ? "100%" : "0px",
                bgcolor: "button.main",
                transition: "all 0.2s ease",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserMobileTabs;
