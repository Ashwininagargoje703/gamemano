import React from "react";

const ProductListSkeleton = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 pr-4 mb-4">
        <div className="bg-gray-300 h-8 w-full mb-4 animate-pulse"></div>
        <div className="bg-gray-300 h-6 w-full mb-4 animate-pulse"></div>
        <div className="bg-gray-300 h-6 w-full mb-4 animate-pulse"></div>
        <div className="bg-gray-300 h-6 w-full mb-4 animate-pulse"></div>
      </div>

      {/* Product Cards Section */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product Card Skeleton */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
            <div className="bg-gray-300 h-48 w-full mb-4 animate-pulse"></div>
            <div className="bg-gray-300 h-4 w-3/4 mb-2 animate-pulse"></div>
            <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
            <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListSkeleton;
