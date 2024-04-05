import "../scss/CropBanner.scss";
import PulseOneCarousel from "./PulseOneCarousel";

function CropBannerOne() {
  return (
    <>
      <div style={{backgroundColor:'#006a4e'}} className="crop-banner-container">
        <div className="crop-img">
          <img src="./Capa_1(2).svg" alt="" />
        </div>
        <div className="crop-text">
          <p>
          Pulse 2.0 is a classic choice for apartments, it's easy to install, maintain, and reduce noise! Designed for your comfort, it is the best option for apartment flooring.
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
            <h3>5.2 mm</h3>
            <p>Overall Thickness</p>
          </div>
          <div className="mils-specs">
            <h3>16 mil</h3>
            <p>Wear Layer</p>
          </div>
          <div className="mils-specs">
            <h3>9" x 48"</h3>
            <p>Plank Size</p>
          </div>
          <div className="mils-specs">
            <h3>27.49</h3>
            <p>Sqft per Box</p>
          </div>
        </div>

        <div className="icons-container">
          <img src="/sp2-1.svg" alt="" />
          <img src="/sp1-2.svg" alt="" />
          <img src="/sp1-3.svg" alt="" />
          <img src="/sp1-4.svg" alt="" />
          <img src="/sp1-5.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default CropBannerOne;
