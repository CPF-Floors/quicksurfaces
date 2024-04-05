import "../scss/MainBanner.scss"
import { Link } from "react-router-dom";

function MainBanner() {
    return ( 
        <div className="main-banner">
            <div className="banner-Text">
                <h1>
                Transform Your Space with Stunning Flooring
                </h1>
                <p>
                At Quicksurfaces, we distribute a wide selection of high-quality flooring from waterproof laminate to durable vinyl, we have the perfect flooring solution for every space!
                </p>
                <Link><button>Get Started</button></Link>
            </div>
            <div className="banner-img">
                <img src="./Group179.png" alt="" />
            </div>
        </div>
     );
}
export default MainBanner;