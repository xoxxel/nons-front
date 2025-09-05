import Checkout from "@/components/checkout";
import axios from "axios";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata | undefined> {
  unstable_noStore();
  return {
    title: "ثبت سفارش - نونز",
  };
}

const fetchLastOrder = async () => {
  try {
    const res = await axios.get(`${process.env.API}/cart/orders/last-order/`, {
      headers: { Authorization: `Bearer ${cookies().get("access")?.value}` },
    });
    return res.data;
  } catch (err) {
    console.error("error fetching last order",err)
  }
};

const CheckoutPage = async () => {
  const order = await fetchLastOrder();
  if(!order) redirect("/profile/orders")
  return <Checkout order={order} />;
};

export default CheckoutPage;
