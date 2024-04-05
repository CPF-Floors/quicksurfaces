import "../scss/CropBanner.scss";
import PulseOneCarousel from "./PulseOneCarousel";

function CropBannerThree() {
  return (
    <>
      <div style={{backgroundColor:'#ec4755'}} className="crop-banner-container">
        <div className="crop-img">
          <img src="./Capa_1(3).svg" alt="" />
        </div>
        <div className="crop-text">
          <p>
          This collection boasts a large plank format of 9 inches by 60 inches, which adds a spacious and contemporary feel to any room. The timeless color options available make it compatible with a wide range of interior design styles.
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <h2>Flooring Gallery</h2>
        <p>Explore our stunning collection of flooring options.</p>
        <PulseOneCarousel />
      </div>

      <div className="specs-container">
        <h2>Specifications</h2>
        <p>Explore our stunning collection of flooring options.</p>

        <div className="mils-container">
          <div className="mils-specs">
            <h3>8 mm</h3>
            <p>Overall Thickness</p>
          </div>
          <div className="mils-specs">
            <h3>22 mil</h3>
            <p>Wear Layer</p>
          </div>
          <div className="mils-specs">
            <h3>9" x 60"</h3>
            <p>Plank Size</p>
          </div>
          <div className="mils-specs">
            <h3>19.29</h3>
            <p>Sqft per Box</p>
          </div>
        </div>

        <div className="icons-container">
          <img src="/sp2-1.svg" alt="" />
          <img src="/sp1-2.svg" alt="" />
          <img src="/sp1-3.svg" alt="" />
          <img src="/sp3-1.svg" alt="" />
          <img src="/sp3-2.svg" alt="" />
          <img src="/sp3-3.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default CropBannerThree;
