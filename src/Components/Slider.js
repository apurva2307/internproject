import React, { useEffect, useState } from "react";
import image1 from "./Images/founder/1.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image2 from "./Images/founder/2.jpg";
import image3 from "./Images/founder/3.jpg";
import image4 from "./Images/founder/4.jpg";
import image5 from "./Images/founder/5.jpg";
import image6 from "./Images/founder/6.jpg";
import image7 from "./Images/founder/7.jpg";
import image8 from "./Images/founder/8.jpg";

const Slider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const [noOfSlides, setNoOfSlides] = useState(3);
  useEffect(() => {
    if (window.screen.width < 769) {
      setNoOfSlides(2);
    }
  }, []);

  return (
    <>
      <OwlCarousel
        className="owl-carousel owl-theme"
        items={noOfSlides}
        loop
        margin={0}
        autoplay={true}
        autoplayTimeout={2000}
        dots={false}
        mouseDrag
        touchDrag
        autoplayHoverPause={true}
      >
        {images.map((image) => {
          return (
            <div className="item">
              <img src={image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
};

export default Slider;
