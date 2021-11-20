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
  return (
    <>
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
            I’m Richard Tiland, president of New Evolution Video and dk3studios.
          </p>
          <p>
            Over the last 15 years I’ve learned not only the skills required for
            making high quality videos, but the marketing techniques to bring in
            the best results. I want to bring your company the same mind blowing
            results I’ve got for 100’s of New Evolution clients.
          </p>
          <p>Contact me today – talk is free!</p>
          <button className="our-services-btn" style={{ width: "12rem" }}>
            Request A Meeting
          </button>
        </div>
      </div>
    </>
  );
};

export default FounderSection;
