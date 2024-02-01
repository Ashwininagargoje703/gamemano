"use client";

import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider: FC = () => {
  return (
    <div className="relative w-full h-64 mt-10 mb-[-40px] md:mb-0 md:mt-2  md:h-screen overflow-hidden">
      <Carousel
        className="w-full h-full"
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        emulateTouch={true}
      >
        <div className="w-full h-full">
          <img
            src="/img2.png"
            alt="..."
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full h-full">
          <img src="/img.png" alt="..." className="w-full h-full object-fill" />
        </div>
        <div className="w-full h-full">
          <img
            src="/img3.jpg"
            alt="..."
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="/img4.jpg"
            alt="..."
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="/img5.jpg"
            alt="..."
            className="w-full h-full object-fill"
          />
        </div>
      </Carousel>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <a className="bg-orange-400 text-white px-4 py-2 rounded-md">
          View Product
        </a>
      </div>
    </div>
  );
};

export default Slider;
