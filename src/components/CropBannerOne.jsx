import "../scss/CropBanner.scss";
import PulseOneCarousel from "./PulseOneCarousel";

function CropBannerOne() {
  return (
    <>
      <div className="crop-banner-container">
        <div className="crop-img">
          <img src="./Capa_1.svg" alt="" />
        </div>
        <div className="crop-text">
          <p>
            Pulse 1.0 is a rigid-core vinyl collection that boasts unparalleled
            durability. The construction of this floor is composed of four
            layers - a wear layer, an image decor layer, a rigid polymeric core,
            and an attached underlayment.
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
            <h3>5.5 mm</h3>
            <p>Overall Thickness</p>
          </div>
          <div className="mils-specs">
            <h3>12 mil</h3>
            <p>Wear Layer</p>
          </div>
          <div className="mils-specs">
            <h3>7" x 48"</h3>
            <p>Plank Size</p>
          </div>
          <div className="mils-specs">
            <h3>24.23</h3>
            <p>Sqft per Box</p>
          </div>
        </div>

        <div className="icons-container">
          <img src="/sp1-1.svg" alt="" />
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
