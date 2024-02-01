import React from "react";
import Section from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Slider from "./Slider";

const LandingPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0 flex flex-col items-center md:items-stretch gap-5 py-2">
      <Slider />
      <Section />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default LandingPage;
