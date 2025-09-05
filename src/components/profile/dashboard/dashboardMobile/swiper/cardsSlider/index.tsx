"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import BalanceCard from "@/components/profile/activities/activitiesMenu/balanceCard";
import ShopStatusCard from "../../../cards/shopStatusCard";
import BoostsCard from "../../../cards/boostsCard";

const CardsSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      spaceBetween={10}
      id="dashboard__cards__slider"
    >
      <SwiperSlide>
        <BalanceCard />
      </SwiperSlide>
      <SwiperSlide>
        <ShopStatusCard />
      </SwiperSlide>
      <SwiperSlide>
        <BoostsCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default CardsSlider;
