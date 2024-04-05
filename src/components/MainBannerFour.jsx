import "../scss/MainBanner.scss"
import { Link } from "react-router-dom";

function MainBannerFour() {
    return ( 
        <div className="main-banner">
            <div className="banner-Text">
                <h1>
                Where Design Meets Innovation
                </h1>
                <p>
                The Pulse 4.0 laminate collection is crafted to endure the test of time, providing excellent scratch and water resistance. This collection offers a bold presence, catering to the needs of small commercial spaces while maintaining a stylish and modern aesthetic.
                </p>
                <Link><button>Get Started</button></Link>
            </div>
            <div className="banner-img">
                <img src="./Group177.svg" alt="" />
            </div>
        </div>
     );
}
export default MainBannerFour;