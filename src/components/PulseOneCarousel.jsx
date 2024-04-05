import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";



import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";


const PulseOneCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <motion.div
        className="embla"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" style={{ cursor: "zoom-in" }}>
            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2021/02/Charcoal-1-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Mood Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2020/10/METAL-MIX-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Fearless Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/03/Sara-oak-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Trustable Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2020/10/Rustic-Pine-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Grateful Pine</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/03/COMMON-OAK-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Vital Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/07/DARK-GREIGE-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Expressive Brown</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/03/Cherry-Blossom-1-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Euphory Cherry</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/07/VALLEY-OAK-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Neutral Greige</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="buttons">
          <button className="embla__prev" onClick={scrollPrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default PulseOneCarousel;