import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";



import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";


const PulseThreeCarousel = () => {

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
                  src="https://cpffloors.com/wp-content/uploads/2023/09/BLASS-GRAY-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Hygge Gray</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/BRUT-OAK-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Scandi Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/COFFEE-CREAM-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Japandi Beige</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/CERISE-copia-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Kirsche Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/CREME-BRULEE-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Live Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/DARK-CREME-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Truffle Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/BALANCED-OAK-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Serenity Oak</h3>
              </div>
            </Link>

            <Link style={{ margin: "25px", color: "black" }}>
              <div className="embla__slide">
                <img
                  src="https://cpffloors.com/wp-content/uploads/2023/09/SLATE-1024x1024.webp"
                  alt=""
                />
                <h3 style={{ marginTop: "40px" }}>Chic Dark</h3>
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
export default PulseThreeCarousel;