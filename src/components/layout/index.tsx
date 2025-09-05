"use client";
import { usePathname } from "next/navigation";
import BackToTop from "./backToTop";
import Footer from "./footer";
import GetTheApplication from "./getTheApplication";
import Header from "./header";
import NonsOffers from "./nonsOffers";
import { ToastBar, Toaster } from "react-hot-toast";
import BottomNavigation from "./bottomNavigation";
import { Box } from "@mui/material";
import UserProvider from "@/context/UserProvider";
import UserModel from "@/models/User";

const SuccessIcon = () => (
  <svg width="0" height="0" fill="yellow">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 6.5l-4 4a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L7 9.793l3.5-3.5a.5.5 0 0 1 .707.707z" />
  </svg>
);

const Layout = ({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: UserModel;
}>) => {
  const pathname = usePathname();
  const withoutLayoutRoutes = ["/callback", "/profile", "/login"];
  let render = !withoutLayoutRoutes.includes(pathname);
  // const mode = localStorage.getItem("mui-mode")
  const findRoutes = () => {
    withoutLayoutRoutes.forEach((route: string) => {
      if (pathname.startsWith(route)) {
        render = false;
      }
    });
  };

  findRoutes();

  return (
    <UserProvider initialUserData={user}>
      {render && <Header />}
      <main>
        <Toaster
          position="top-left"
          toastOptions={{
            success: {
              className: "toast-success",
              style: {
                border: "1px solid",
                borderRight: "5px solid",
                borderRadius: "5px",
                fontSize: "14px",
                padding: "2px",
                minWidth: "250px",
                whiteSpace: "wrap",
                width: "fit-content",
                display: "flex",
                justifyContent: "end",
              },
              icon: <SuccessIcon />,
            },
            error: {
              className: "toast-error",
              style: {
                border: "1px solid",
                borderRight: "5px solid",
                borderRadius: "5px",
                fontSize: "14px",
                padding: "2px",
                minWidth: "250px",
                whiteSpace: "wrap",
                width: "fit-content",
                display: "flex",
                justifyContent: "end",
              },
              icon: <SuccessIcon />,
            },
          }}
        >
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? "toastComing 1s ease"
                  : "toastGoOut 1s ease",
              }}
            />
          )}
        </Toaster>
        {children}
      </main>
      {render && pathname !== "/about" && (
        <Box
          sx={{
            display: { md: "block", xs: pathname == "/" ? "block" : "none" },
            mb: "10px",
          }}
        >
          <GetTheApplication />
        </Box>
      )}
      {pathname == "/" && <NonsOffers />}
      {!pathname.startsWith("/profile") && <BackToTop />}
      {render && (
        <Box
          sx={{
            display: { md: "block", xs: pathname == "/" ? "block" : "none" },
          }}
        >
          <Footer />
        </Box>
      )}
      {render &&
        !pathname.startsWith("/shop/") &&
        !(pathname.startsWith("/products/") &&
        pathname !== "/products") && <BottomNavigation />}
    </UserProvider>
  );
};

export default Layout;
