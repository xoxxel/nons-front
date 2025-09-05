import { fetchMainPageBanners } from "@/api/data";
import Home from "@/components/home";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata | undefined> {
  unstable_noStore();
  return {
    title: `نونز - بی نهایت جهان را با نونز تجربه کنید`,
  };
}

export default async function HomePage() {
  const banners = await fetchMainPageBanners();

  return <Home banners={banners} />;
}
