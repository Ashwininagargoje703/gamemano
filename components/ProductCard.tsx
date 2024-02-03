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
        onClick={() => router.push(`/products/${product.id}`)}
        className="bg-[#fef3bc] shadow-lg rounded-lg overflow-hidden cursor-pointer w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between card-container"
      >
        <img
          className="w-full h-48 object-cover object-center"
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="p-4">
          <div>
            <h2 className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl mb-2">
              {product.title}
            </h2>
            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-4 w-4 fill-current ${
                      star <= product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
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

            <p className="text-gray-600 text-sm md:text-base font-bold mb-4">
              {product.description.split(" ").slice(0, 6).join(" ")}
              {product.description.split(" ").length > 10 ? "..." : ""}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-bold text-2xl">
              ₹{product.price}
            </span>
            <button className="bg-[#E58F28] px-5 py-2.5 text-center text-white rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-md">
  Add to Cart
</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
