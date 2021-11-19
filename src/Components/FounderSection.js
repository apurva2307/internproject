import React, { useRef, useEffect, useState } from "react";
import image1 from "./Images/founder/1.jpg";
import image2 from "./Images/founder/2.jpg";
import image3 from "./Images/founder/3.jpg";
import image4 from "./Images/founder/4.jpg";
import image5 from "./Images/founder/5.jpg";
import image6 from "./Images/founder/6.jpg";
import image7 from "./Images/founder/7.jpg";
import image8 from "./Images/founder/8.jpg";
import face from "./Images/founder/face.jpg";
import linkedin from "./Images/founder/linkedin.png";
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
      } else {
        setIndex(index + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <div
        className="featured-services-section"
        style={{ overflow: "hidden", padding: "0% 0%" }}
      >
        <div
          className="featured-img-container"
          style={{ flexShrink: 0, width: "100%", margin: "0 0" }}
          ref={crousalRef}
        >
          {images.map((image, ind) => {
            console.log("ind:", ind);
            let slider = "";
            let showSlide = "";

            if (
              index < images.length - 2 &&
              (index + 3 === ind || index + 1 === ind || index + 2 === ind)
            ) {
              showSlide = "featured-img2";
            } else if (
              index === images.length - 2 &&
              (ind === 1 || index + 1 === ind || ind === 0)
            ) {
              showSlide = "featured-img2";
            } else if (
              index === images.length - 1 &&
              (ind === 2 || ind === 0 || ind === 1)
            ) {
              showSlide = "featured-img2";
            } else showSlide = "noShow";
            if (index === ind) {
              slider = "image-slider";
            }
            return (
              <div className={`${showSlide} ${slider}`} key={ind.toString()}>
                <img src={image} alt="image1" style={{ width: "100%" }} />
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
        <div
          className="container-3"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(130, 218, 222, 0.75), rgba(130, 218, 222, .75)), url(${image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="box">
            <div className="imageBox">
              <img src={face} style={{ width: "100%" }} />
            </div>
            <div className="in">
              <img src={linkedin} style={{ width: "100%" }} />
            </div>
            <h3 style={{ fontStyle: "italic" }}>Note from our founder</h3>
            <p>
              I’m Richard Tiland, president of New Evolution Video and
              dk3studios.
            </p>
            <p>
              Over the last 15 years I’ve learned not only the skills required
              for making high quality videos, but the marketing techniques to
              bring in the best results. I want to bring your company the same
              mind blowing results I’ve got for 100’s of New Evolution clients.
            </p>
            <p>Contact me today – talk is free!</p>
            <button className="our-services-btn" style={{ width: "12rem" }}>
              Request A Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
