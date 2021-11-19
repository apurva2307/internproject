import React, { useRef, useEffect, useState } from "react";
import image1 from "./Images/founder/1.jpg";
import image2 from "./Images/founder/2.jpg";
import image3 from "./Images/founder/3.jpg";
import image4 from "./Images/founder/4.jpg";
import image5 from "./Images/founder/5.jpg";
import image6 from "./Images/founder/6.jpg";
import image7 from "./Images/founder/7.jpg";
import image8 from "./Images/founder/8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const FounderSection = () => {
  const crousalRef = useRef(null);
  const initialImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(initialImages);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index == 7) {
        setIndex(0);
        console.log("7", index);
      } else {
        setIndex(index + 1);
        console.log(index);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);
  console.log("index", index);

  return (
    <>
      <div className="featured-services-section" style={{ overflow: "hidden" }}>
        <div
          className="featured-img-container"
          style={{ flexShrink: 0, width: "266.7%" }}
          ref={crousalRef}
        >
          {images.map((image, ind) => {
            let slider = "";
            if (index === ind || index + 1 === ind || index + 2 === ind) {
              slider = "image-slider";
            } else slider = "";
            return (
              <div className={`featured-img2 ${slider}`} key={ind.toString()}>
                <img src={image} alt="image1" width="100%" />
              </div>
            );
          })}

          {/* <div className="featured-img2">
            <img src={images[index + 1]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 2]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 3]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 4]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 5]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 6]} alt="image1" width="100%" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FounderSection;
