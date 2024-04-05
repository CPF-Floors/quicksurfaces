import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import CropBannerOne from "../components/CropBannerOne";
import CropBannerTwo from "../components/CropBannerTwo";
import MainBannerTwo from "../components/MainBannerTwo";
import MainBannerThree from "../components/MainBannerThree";
import CropBannerThree from "../components/CropBannerThree";


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


        </>
     );
}

export default Home;