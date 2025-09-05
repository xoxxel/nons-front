"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SidebarOption from "./sidebarOptions";
import Profile from "@/components/categories/card/profile";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserContext } from "@/context/UserProvider";
import ThousandSeparator from "@/utils/thousandSeparator";

const ProfileSideBar = ({
  isSideBarOpen,
  setIsSideBarOpen,
  setIsMobileSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  let [pageName, setPageName] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (pathname.startsWith("/profile/settings")) {
      setPageName("تنظیمات");
    } else if (pathname === "/profile/messages") {
      setPageName("پیام ها");
    } else if (pathname === "/profile/bookmarks") {
      setPageName("نشان ها");
    } else if (pathname.startsWith("/profile/notifications")) {
      setPageName("اطلاع رسانی");
    } else if (pathname === "/profile/dashboard") {
      setPageName("داشبورد");
    } else if (pathname.startsWith("/profile/orders")) {
      setPageName("سفارشات");
    } else if (pathname === "/profile/products") {
      setPageName("محصولات");
    } else if (pathname === "/profile/products/add-product") {
      setPageName("افزودن محصول");
    } else if (pathname === "/profile/products/boost") {
      setPageName("بوست");
    } else if (pathname === "/profile/wallet") {
      setPageName("کیف پول");
    } else if (pathname.startsWith("/profile/support")) {
      setPageName("پشتیبانی");
    } else if (pathname.startsWith("/profile/activities")) {
      setPageName("فعالیت های اخیر");
    }
    else if (pathname.startsWith("/profile/arbitration")) {
      setPageName("داوری");
    }
  }, [pathname]);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          bgcolor: "background.element",
          p: "24px 10px",
          overflowY: "scroll",
          display: { md: "flex", xs: "none" },
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 9,
          transition: "0.3s ease",
        }}
        className="scrollbarHidden"
      >
        <Box>
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                width: "100%",
                minHeight: "55.5px",
                justifyContent: isSideBarOpen ? "start" : "center",
              }}
            >
              <Image
                src="/images/logo-mobile.png"
                width={38}
                height={38}
                alt="logo"
              />
              {isSideBarOpen && (
                <Typography
                  sx={{
                    color: "text.main",
                    fontSize: "37px",
                    fontWeight: "700",
                  }}
                >
                  نونز
                </Typography>
              )}
            </Box>
          </Link>
          <Box
            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: isSideBarOpen ? "end" : "center",
              rotate: isSideBarOpen ? "0deg" : "180deg",
              my: 2,
              color: "text.secondary",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <SidebarOption
              title="داشبورد"
              badgeNumber={0}
              isActive={pathname === "/profile/dashboard"}
              link="/profile/dashboard"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
            />
            <SidebarOption
              title="پیام ها"
              badgeNumber={user?.message_count}
              isActive={pathname === "/profile/messages"}
              link="/profile/messages"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
            />
            {user?.is_admin &&
              <SidebarOption
                title="داوری"
                badgeNumber={0}
                isActive={pathname === "/profile/arbitration"}
                link="/profile/arbitration"
                isSideBarOpen={isSideBarOpen}
                icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
              />}
            <SidebarOption
              title="سفارشات"
              badgeNumber={user?.order_count}
              isActive={pathname === "/profile/orders"}
              link="/profile/orders"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
            />
            {user?.has_shop && user?.shop?.status === "is_confirmed" &&
              <SidebarOption
                title="محصولات"
                badgeNumber={0}
                isActive={pathname.startsWith("/profile/products")}
                link="/profile/products"
                isSideBarOpen={isSideBarOpen}
                icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 7.27734L12 11.9996M12 11.9996L3.49997 7.27734M12 11.9996L12 21.4996M21 16.0582V7.94104C21 7.5984 21 7.42708 20.9495 7.27428C20.9049 7.1391 20.8318 7.01502 20.7354 6.91033C20.6263 6.79199 20.4766 6.70879 20.177 6.54239L12.777 2.43128C12.4934 2.27372 12.3516 2.19494 12.2015 2.16406C12.0685 2.13672 11.9315 2.13672 11.7986 2.16406C11.6484 2.19494 11.5066 2.27372 11.223 2.43128L3.82297 6.54239C3.52345 6.70879 3.37369 6.792 3.26463 6.91033C3.16816 7.01502 3.09515 7.1391 3.05048 7.27428C3 7.42708 3 7.5984 3 7.94104V16.0582C3 16.4008 3 16.5721 3.05048 16.7249C3.09515 16.8601 3.16816 16.9842 3.26463 17.0889C3.37369 17.2072 3.52345 17.2904 3.82297 17.4568L11.223 21.5679C11.5066 21.7255 11.6484 21.8042 11.7986 21.8351C11.9315 21.8625 12.0685 21.8625 12.2015 21.8351C12.3516 21.8042 12.4934 21.7255 12.777 21.5679L20.177 17.4568C20.4766 17.2904 20.6263 17.2072 20.7354 17.0889C20.8318 16.9842 20.9049 16.8601 20.9495 16.7249C21 16.5721 21 16.4008 21 16.0582Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'
              />}
            {/* <SidebarOption
              title="اسکریپت"
              badgeNumber={3}
              isActive={pathname === "/profile/scripts"}
              link="/profile/scripts"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.00007L2 22.0001M18 15.0001H9M6.6 19.0001H13.3373C13.5818 19.0001 13.7041 19.0001 13.8192 18.9724C13.9213 18.9479 14.0188 18.9075 14.1083 18.8527C14.2092 18.7909 14.2957 18.7044 14.4686 18.5314L19.5 13.5001C19.739 13.2611 19.8584 13.1416 19.9546 13.0358C22.0348 10.7474 22.0348 7.25275 19.9546 4.9643C19.8584 4.85851 19.739 4.73903 19.5 4.50007C19.261 4.26111 19.1416 4.14163 19.0358 4.04547C16.7473 1.96531 13.2527 1.96531 10.9642 4.04547C10.8584 4.14163 10.739 4.26111 10.5 4.50007L5.46863 9.53144C5.29568 9.70439 5.2092 9.79087 5.14736 9.89179C5.09253 9.98126 5.05213 10.0788 5.02763 10.1808C5 10.2959 5 10.4182 5 10.6628V17.4001C5 17.9601 5 18.2401 5.10899 18.4541C5.20487 18.6422 5.35785 18.7952 5.54601 18.8911C5.75992 19.0001 6.03995 19.0001 6.6 19.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'
            /> */}
            <SidebarOption
              title="کیف پول"
              badgeNumber={0}
              isActive={pathname === "/profile/wallet"}
              link="/profile/wallet"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

'
            />
            <SidebarOption
              title="فعالیت های اخیر"
              badgeNumber={0}
              isActive={pathname === "/profile/activities"}
              link="/profile/activities"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
            />

            <SidebarOption
              title="اطلاع رسانی"
              badgeNumber={user?.notif_count}
              isActive={pathname === "/profile/notifications"}
              link="/profile/notifications"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3909 18.0149C14.8197 19.6153 13.8699 21.2603 12.2695 21.6891C10.6691 22.118 9.02414 21.1682 8.59531 19.5678M10.8914 5.74097C11.1956 5.19367 11.2958 4.53217 11.121 3.87957C10.7636 2.54591 9.39275 1.75445 8.05909 2.11181C6.72542 2.46916 5.93397 3.84 6.29132 5.17367C6.46619 5.82627 6.88372 6.34904 7.42082 6.67091M16.2358 9.44541C15.8788 8.11328 14.9259 6.99931 13.5866 6.34858C12.2474 5.69785 10.6314 5.56365 9.09437 5.97551C7.55729 6.38737 6.22496 7.31155 5.39048 8.54473C4.556 9.77792 4.28773 11.2191 4.64467 12.5512C5.23524 14.7553 5.12057 16.5137 4.74761 17.8498C4.32255 19.3727 4.11001 20.1341 4.16743 20.287C4.23312 20.4619 4.28064 20.5099 4.45488 20.5774C4.60717 20.6364 5.24694 20.465 6.52648 20.1222L18.3915 16.9429C19.6711 16.6001 20.3109 16.4287 20.4132 16.3014C20.5304 16.1558 20.5475 16.0905 20.517 15.9061C20.4902 15.745 19.9255 15.1919 18.7959 14.0856C17.8049 13.1149 16.8264 11.6495 16.2358 9.44541Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'
            />
            <SidebarOption
              title="نشان ها"
              badgeNumber={0}
              isActive={pathname === "/profile/bookmarks"}
              link="/profile/bookmarks"
              isSideBarOpen={isSideBarOpen}
              icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'
            />
          </Box>
        </Box>
        {/* bottom section */}
        <Box>
          <SidebarOption
            title="تنظیمات"
            badgeNumber={0}
            isSideBarOpen={isSideBarOpen}
            isActive={pathname === "/profile/settings"}
            link="/profile/settings"
            icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.39504 19.3711L9.97949 20.6856C10.1532 21.0768 10.4368 21.4093 10.7957 21.6426C11.1547 21.8759 11.5736 22.0001 12.0017 22C12.4298 22.0001 12.8488 21.8759 13.2077 21.6426C13.5667 21.4093 13.8502 21.0768 14.0239 20.6856L14.6084 19.3711C14.8164 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5677 17.8941 17.0784 17.9478L18.5084 18.1C18.934 18.145 19.3636 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8714 16.635 20.9735 16.2103 20.951 15.7829C20.9285 15.3555 20.7825 14.9438 20.5306 14.5978L19.6839 13.4344C19.3825 13.0171 19.2214 12.5148 19.2239 12C19.2238 11.4866 19.3864 10.9864 19.6884 10.5711L20.535 9.40778C20.7869 9.06175 20.933 8.65007 20.9554 8.22267C20.9779 7.79528 20.8759 7.37054 20.6617 7C20.4478 6.62923 20.1309 6.32849 19.7495 6.13423C19.3681 5.93997 18.9385 5.86053 18.5128 5.90556L17.0828 6.05778C16.5722 6.11141 16.0576 6.00212 15.6128 5.74556C15.1699 5.48825 14.8199 5.09736 14.6128 4.62889L14.0239 3.31444C13.8502 2.92317 13.5667 2.59072 13.2077 2.3574C12.8488 2.12408 12.4298 1.99993 12.0017 2C11.5736 1.99993 11.1547 2.12408 10.7957 2.3574C10.4368 2.59072 10.1532 2.92317 9.97949 3.31444L9.39504 4.62889C9.18797 5.09736 8.83792 5.48825 8.39504 5.74556C7.95026 6.00212 7.43571 6.11141 6.92504 6.05778L5.4906 5.90556C5.06493 5.86053 4.63534 5.93997 4.25391 6.13423C3.87249 6.32849 3.55561 6.62923 3.34171 7C3.12753 7.37054 3.02549 7.79528 3.04798 8.22267C3.07046 8.65007 3.2165 9.06175 3.46838 9.40778L4.31504 10.5711C4.61698 10.9864 4.77958 11.4866 4.77949 12C4.77958 12.5134 4.61698 13.0137 4.31504 13.4289L3.46838 14.5922C3.2165 14.9382 3.07046 15.3499 3.04798 15.7773C3.02549 16.2047 3.12753 16.6295 3.34171 17C3.55582 17.3706 3.87274 17.6712 4.25411 17.8654C4.63548 18.0596 5.06496 18.1392 5.4906 18.0944L6.9206 17.9422C7.43127 17.8886 7.94581 17.9979 8.3906 18.2544C8.83513 18.511 9.18681 18.902 9.39504 19.3711Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 15C13.6568 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6568 9 11.9999 9C10.3431 9 8.99992 10.3431 8.99992 12C8.99992 13.6569 10.3431 15 11.9999 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'
          />
          <SidebarOption
            title="پشتیبانی"
            badgeNumber={0}
            isSideBarOpen={isSideBarOpen}
            isActive={pathname === "/profile/support"}
            link="/profile/support"
            icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
'
          />
          {isSideBarOpen ? (
            <Link href="/profile">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: "12px 16px",
                  border: "1.5px solid",
                  borderColor:
                    pathname === "/profile" || pathname === "/profile/posts"
                      ? "button.main"
                      : "border.main",
                  borderRadius: "12px",
                  mt: 3,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Profile width="48px" height="48px" image={user?.image} />
                  <Box>
                    <Typography sx={{ color: "text.main", fontWeight: "600" }}>
                      {user?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "12px",
                        color: "text.secondary",
                        direction: "ltr",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      {`${ThousandSeparator(user?.wallet_balance)} IRT`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link href="/profile">
                <Image
                  src={user?.image ? `${process.env.NEXT_PUBLIC_SERVER}/${user?.image}` : "/images/boredape.png"}
                  width={48}
                  height={48}
                  alt="profile"
                  style={{
                    borderRadius: "50px",
                    border:
                      pathname === "/profile" || pathname === "/profile/posts"
                        ? "2px solid"
                        : "none",
                    borderColor: "var(--mui-palette-button-main)",
                  }}
                />
              </Link>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          p: "10px 15px",
          bgcolor: "background.element",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Box
          onClick={() => setIsMobileSideBarOpen(true)}
          sx={{
            cursor: "pointer",
          }}
        >
          <Profile width="34px" height="34px" image={user?.image} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "text.main",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
            {pageName}
          </Typography>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={router.back}
          >
            <path
              d="M11.875 8H3.125M3.125 8L7.5 12.375M3.125 8L7.5 3.625"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSideBar;
