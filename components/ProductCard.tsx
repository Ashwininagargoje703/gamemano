"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  images: [string];
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <div
        className="max-w-xs mx-auto bg-[#fef3bc] shadow-lg rounded-lg overflow-hidden cursor-pointer sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        onClick={() => router.push(`/products/${product.id}`)}
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">
            {product.title}
          </h2>
          <div className="flex items-center ">
            <div className="flex items-center text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`h-4 w-4 fill-current ${
                    star <= product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6l2.4-7.2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              {product.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-gray-600 text-sm md:text-base font-bold mb-2">
            {product.description.split(" ").slice(0, 6).join(" ")}
            {product.description.split(" ").length > 10 ? "..." : ""}
          </p>

          <div className="flex flex-col md:flex-row items-center md:justify-between mt-3">
            {product.discountPercentage > 0 && (
              <span className="text-green-500 font-semibold">
                -{product.discountPercentage}% OFF
              </span>
            )}
          </div>

          <div className="flex flex-row items-center gap-4 ">
            <div className="text-gray-700 font-bold mb-2 md:mb-0 text-2xl">
              ₹{product.price}
            </div>
            <button className="bg-[#E58F28] p-2 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 rounded-full w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
