import type { Metadata } from "next";
import Theme from "./theme";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { cookies } from "next/headers";
import Layout from "@/components/layout";
import { fetchUserData } from "@/api/data";
import UserModel from "@/models/User";
import localFont from 'next/font/local'

const iransans = localFont({ src: "../../public/fonts/iransans/woff2/IRANSansXV.woff2",variable: '--iransans', })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = cookies()?.get("mode")?.value;

  const user:UserModel = await fetchUserData()
  return (
    <html lang="fa" dir="rtl" rel="nofollow">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />

      </head>
      <body className={`${iransans.variable} font-sans`} style={{ minHeight:`100svh`}}>
        <Theme mode={mode as "light" | "dark" | undefined}>
          <Layout user={user}>{children}</Layout>
        </Theme>
      </body>
    </html>
  );
}
