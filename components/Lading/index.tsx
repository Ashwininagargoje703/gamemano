"use client";

import React, { useEffect, useState } from "react";
import Section from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Slider from "./Slider";


const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect viewport width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call the function initially

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-0 flex flex-col items-center md:items-stretch gap-5 py-2">
      {isMobile ? (
        <Slider /> // Render the slider for mobile view
      ) : (
        <div className="flex items-center justify-center">
          <img
            className="h-[70vh] w-full"
            src="https://static.vecteezy.com/system/resources/previews/004/672/772/non_2x/flash-sale-banner-design-template-offer-shopping-on-dark-blue-background-free-vector.jpg"
            alt="Flash Sale Banner"
          />
        </div> // Render the image for desktop view
      )}

      <Section />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default LandingPage;
