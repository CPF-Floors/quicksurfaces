import "../scss/MainBanner.scss"
import { Link } from "react-router-dom";

function MainBannerTwo() {
    return ( 
        <div className="main-banner">
            <div className="banner-Text">
                <h1>
                Transforming spaces, transforming lives
                </h1>
                <p>
                Discover the Pulse 2.0 collection, the rigid core floor with unparalleled durability. With waterproof and scratch-resistant features, our flooring system is the perfect choice for active and high-traffic homes.
                </p>
                <Link><button>Get Started</button></Link>
            </div>
            <div className="banner-img">
                <img src="./Group185.svg" alt="" />
            </div>
        </div>
     );
}
export default MainBannerTwo;