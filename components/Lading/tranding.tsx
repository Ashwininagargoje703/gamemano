"use client";

import Link from "next/link";
import ProductSlider from "./ProductSlider";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const TrendingProductsSection: React.FC = () => {
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
    <div className="bg-black w-full h-[90vh] text-white flex flex-col justify-center items-start p-4">
      <div className="flex justify-between w-[85vw] lg:ml-20">
        <h2 className="text-3xl mb-4 font-Pressstart text-[#DAB785]" >Most Trending</h2>
        <Link href="/products" className="text-orange-300 flex items-center">
      View All Products <FaArrowRight className="ml-1" />
    </Link>
      </div>

      <div className="lg:ml-20">
  <ProductSlider />
</div>

    </div>
  );
};

export default TrendingProductsSection;
