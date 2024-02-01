"use client";
import React, { FunctionComponent } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import ProductCard from "../ProductCard";


interface ArrowProps {
  onClick: () => void;
}

interface Product {
  name: string;
  // Other properties of the product
}
interface ResponsiveObject {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite: boolean;
    dots?: boolean;
  };
}
interface Settings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  prevArrow?: JSX.Element;
  nextArrow?: JSX.Element;
  className?: string;
  responsive?: ResponsiveObject[];
}

const PrevArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-0 z-10"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <FaArrowAltCircleLeft style={{ color: "#00B3A5", fontSize: 25 }} />
  </div>
);

const NextArrow: FunctionComponent<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-0 z-10"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <FaArrowAltCircleRight style={{ color: "#00B3A5", fontSize: 25 }} />
  </div>
);

const BestSellingProducts: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    className: "myCustomCarousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true, // Include the 'infinite' property here
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true, // Include the 'infinite' property here
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true, // Include the 'infinite' property here
        },
      },
    ],
  };

  return (
    <div
      className="rounded-lg shadow-md p-4 m-4 gap-10"
      style={{ background: "#1f1a10" }}
    >
      <Slider {...settings}>
        <div className="p-2">
         <ProductCard />
        </div>
        <div className="p-2">
         <ProductCard />
        </div>
        <div className="p-2">
         <ProductCard />
        </div>
        <div className="p-2">
         <ProductCard />
        </div>
        <div className="p-2">
         <ProductCard />
        </div>
        <div className="p-2">
         <ProductCard />
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
};

export default BestSellingProducts;
