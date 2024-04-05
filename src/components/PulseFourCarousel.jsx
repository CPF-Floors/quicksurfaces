import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";



import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";


const PulseTwoCarousel = () => {

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
                  src="https://cpffloors.com/wp-content/uploads/2024/03/Bold-Oak-LY-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Gala Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2024/03/SOFT-BEIGE-LY-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Hera Beige</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2024/03/Magnet-Oak-LY-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Kern Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2024/03/CELLO-LY-1-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Argenta Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2024/03/Cognac-Oak-LY-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Zlato Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2024/03/AUTUMN-OAK-LY-2-jpg.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Koppar Oak</h3>
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
export default PulseTwoCarousel;