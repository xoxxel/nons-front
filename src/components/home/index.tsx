import { Box } from "@mui/material";
import SliderBanners from "./sliderBanners";
import OurFeatureSlider from "./ourFeatureSlider";
import GamerComments from "./gamerComments";
import ArticlesSlider from "./articlesSlider";
import CategoryTabs from "./productsByCategory";
import PopularBrands from "./sliderOfPopularBrands";
import SliderForSelectedPlatform from "./sliderForSelectedPlatforms";
import MainPageAbout from "./aboutUs";
import EarningBanner from "./earningBanner";
import BannerModel from "@/models/Banner";
import { fetchPlatforms } from "@/api/data";


const Home = async ({ banners }: { banners: BannerModel[] }) => {

  const platforms:platformModel[] = await fetchPlatforms();

  return (
    <Box>
      <SliderBanners banners={banners} />
      <Box sx={{ width: "100%", my: { md: 7, xs: 3.5 } }}>
        <CategoryTabs />
      </Box>
      <SliderForSelectedPlatform platforms={platforms} />
      <OurFeatureSlider />
      <Box sx={{ mt: 6 }}>
        <PopularBrands />
      </Box>
      <EarningBanner />
      <Box sx={{ width: "100%", my: { md: 7, xs: 3.5 } }}>
        <MainPageAbout />
      </Box>
      <GamerComments />
      <ArticlesSlider />
    </Box>
  );
};

export default Home;
