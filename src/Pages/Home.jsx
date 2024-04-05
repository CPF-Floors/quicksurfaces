import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import CropBannerOne from "../components/CropBannerOne";
import CropBannerTwo from "../components/CropBannerTwo";
import MainBannerTwo from "../components/MainBannerTwo";
import MainBannerThree from "../components/MainBannerThree";
import CropBannerThree from "../components/CropBannerThree";
import MainBannerFour from "../components/MainBannerFour";
import CropBannerFour from "../components/CropBannerFour";
import MainBannerFive from "../components/MainBannerFive";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <CropBannerOne />
      <MainBannerTwo />
      <CropBannerTwo />
      <MainBannerThree />
      <CropBannerThree />
      <MainBannerFour />
      <CropBannerFour />
      <MainBannerFive />
      <Footer />
    </>
  );
}

export default Home;
