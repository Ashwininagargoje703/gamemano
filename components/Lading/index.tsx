import React from "react";
import Section from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Slider from "./Slider";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Slider />
      {/* <Section /> */}
      {/* <Section2 /> */}
      <Section3 />
    </div>
  );
};

export default LandingPage;
