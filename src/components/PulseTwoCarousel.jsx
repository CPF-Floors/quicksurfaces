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
                  src="https://cpffloors.com/wp-content/uploads/2023/07/VALLEY-OAK-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Smoked Beige</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2021/11/TIMELINE-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Licht</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/11/PROPOSITION-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Lumina</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/SIMPLY-AWESOME-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Ebony</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/TAKEOFF-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Ambra</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/Drawing-2-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Avoria</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/LETS-DO-IT-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Shortbread</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2022/12/Execution-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Hasselnuss</h3>
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