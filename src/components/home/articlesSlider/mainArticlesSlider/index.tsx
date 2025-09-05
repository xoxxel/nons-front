import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ArticlesSliderPagination from "../pagination";
import Article from "@/components/articles/article";
import ArticleModel from "@/models/Article";
const MainArticlesSlider = () => {
  return (
    <Box>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
          el: ".blogs-swiper-custom-pagination",
        }}
        mousewheel
        modules={[Pagination]}
        style={{ paddingBottom: "15px" }}
      >
        {Array(10)
          .fill(0)
          .map(() => (
            <SwiperSlide>
              <Article article={{} as ArticleModel} />
            </SwiperSlide>
          ))}
      </Swiper>
      <ArticlesSliderPagination />
    </Box>
  );
};

export default MainArticlesSlider;
