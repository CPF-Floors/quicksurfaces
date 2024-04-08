import "../scss/MainBanner.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainBanner() {
  return (
    <>
      <div className="main-banner main-banner-end">
        <div className="banner-img" style={{ width: "50%" }}>
          <img src="./Group187.svg" alt="" />
        </div>
        <div
          className="banner-Text"
          style={{
            textAlign: "inherit",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <h2 style={{fontSize:"30px", marginBottom:"20px"}}>
            Transform Your Space with Stunning Flooring
          </h2>
          <p>
            At Quicksurfaces, we distribute a wide selection of high-quality
            flooring from waterproof laminate to durable vinyl, we have the
            perfect flooring solution for every space!
          </p>
          <Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duraction: 0.5 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>

    </>
  );
}
export default MainBanner;
