import "../scss/CropBanner.scss";
import PulseFourCarousel from "./PulseFourCarousel";

function CropBannerFour() {
  return (
    <>
      <div
        style={{ backgroundColor: "#5d8e8a" }}
        className="crop-banner-container"
      >
        <div className="crop-img">
          <img src="./Capa_1(4).svg" alt="" />
        </div>
        <div className="crop-text">
          <p>
            This laminate flooring is an ideal choice for those seeking a
            durable, versatile flooring solution. Its optimal thickness, wear
            resistance, and classic design cater to various design preferences
            and practical needs.
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <h2>Flooring Gallery</h2>
        <p>Explore our stunning collection of flooring options.</p>
        <PulseFourCarousel />
      </div>

      <div className="specs-container">
        <h2>Specifications</h2>
        <p>Explore our stunning collection of flooring options.</p>
        <img
          style={{ width: "180px", marginBottom: "40px" }}
          src="./Capa_1(5).svg"
          alt=""
        />
        <div className="mils-container">
          <div className="mils-specs">
            <h3>7 mm</h3>
            <p>Overall Thickness</p>
          </div>
          <div className="mils-specs">
            <h3>AC5</h3>
            <p>Wear Layer</p>
          </div>
          <div className="mils-specs">
            <h3>8" x 48"</h3>
            <p>Plank Size</p>
          </div>
          <div className="mils-specs">
            <h3>36.43</h3>
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

export default CropBannerFour;
