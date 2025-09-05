import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import FeatureBanner from "../feature";

const MainOurFeatureSlider = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          spaceBetween: "10px",
        },
        600: {
          slidesPerView: 1.5,
          spaceBetween: "10px",
        },
        900: {
          slidesPerView: 1.3,
          spaceBetween: "20px",
        },
        1200: {
          slidesPerView: 1.5,
          spaceBetween: "20px",
        },
      }}
      modules={[Pagination, Autoplay]}
      style={{ paddingBottom: "10px", paddingTop: "10px" }}
    >
      <SwiperSlide>
        <FeatureBanner
          image="/images/experience.png"
          title="تجربه و اعتبار"
          shortText="10 سال تجربه و اعتبار"
          text="مفتخریم به عنوان اولین بازار تجارت الکترونیک صنعت گیم در کشور"
          backgroundColor="#FFEB69"
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeatureBanner
          image="/images/clock.png"
          title="پشتیبانی 24 ساعته"
          shortText="همیشه کنارت هستیم"
          text="پاسخگوی شما در تمام ساعات شبانه روز هستیم"
          backgroundColor="#FFD7EF"
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeatureBanner
          image="/images/security.png"
          title="امنیت معامله"
          shortText="معامله بدون نگرانی"
          text="ما در مقابل کلاهبرداران از شما محافظت میکنیم"
          backgroundColor="#FFC091"
        />
      </SwiperSlide>
      <SwiperSlide>
        <FeatureBanner
          image="/images/wage.png"
          title="بدون کارمزد"
          shortText="خرید و فروش بدون کارمزد!"
          text="اینجا جایی است که بدون هزینه اضافی میتوانید معامله کنید"
          backgroundColor="#A0E1E1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainOurFeatureSlider;
