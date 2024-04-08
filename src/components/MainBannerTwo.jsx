import "../scss/MainBanner.scss"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
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
                <Link><motion.button whileHover={{scale:1.1}} transition={{duraction:0.5}}>Get Started</motion.button></Link>
            </div>
            <div className="banner-img">
                <img src="./Group185.svg" alt="" />
            </div>
        </div>
     );
}
export default MainBannerTwo;