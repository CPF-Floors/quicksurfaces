import "../scss/MainBanner.scss";
import { Link } from "react-router-dom";

function MainBannerThree() {
  return (
    <div className="main-banner">
      <div className="banner-Text">
        <h1>Seamless Design, Perfection in every detail</h1>
        <p>
        Pulse 3.0 is a remarkably versatile and long-lasting solution that seamlessly blends thickness, wear resistance, size, and classic aesthetics to cater to various design preferences and practical needs.
        </p>
        <Link>
          <button>Get Started</button>
        </Link>
      </div>
      <div className="banner-img">
        <img src="./Group186.svg" alt="" />
      </div>
    </div>
  );
}
export default MainBannerThree;
