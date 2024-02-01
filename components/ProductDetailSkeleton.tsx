import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-2xl md:mx-auto p-4 h-full w-full lg:w-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-gray-300 h-64 w-full animate-pulse" />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
          <div className="bg-gray-300 h-6 w-3/4 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-1/2 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-1/2 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-2/3 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-1/3 animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-2/5 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
