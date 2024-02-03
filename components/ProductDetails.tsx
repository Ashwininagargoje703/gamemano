"use client";
import React, { useState } from "react";
import ProductSlider from "./Lading/ProductSlider";

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

const ProductDetails = ({ product }: { product: Product }) => {
  const {
    title,
    description,
    price,
    thumbnail,
    images,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
  } = product;

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
    {/* <div className="relative w-full">
      <img
        src="https://img.freepik.com/free-vector/black-background-with-white-border-black-background-with-light-middle_483537-4566.jpg"
        alt="Product Image"
        className="w-[100vw] h-auto"
      />
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <h1 className="text-3xl font-bold text-center">Product Details</h1>
      </div>
    </div> */}
    <div className="max-w-screen-lg min-h-[500px] mx-auto my-8 p-4 lg:p-8 bg-[#FEF3BC] shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full order-2 md:w-1/2 md:order-2 sm:order-2 lg:order-2">
          {/* Details Section */}
          <div className="w-full md:w-3/4 pl-4 md:pl-8">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-gray-600 mb-4">{description}</p>

            <div className="flex items-center mb-4">
              <span className="text-gray-700 font-bold">₹{price}</span>
              {discountPercentage > 0 && (
                <span className="text-green-500 font-semibold ml-2">
                  -{discountPercentage}% OFF
                </span>
              )}
            </div>

            <div className="flex items-center mb-4">
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
              <span className="text-gray-600 ml-2">{rating.toFixed(1)}</span>
            </div>
          
            <p className="text-gray-600 mb-4">Brand: {brand}</p>
            <p className="text-gray-600 mb-4">Category: {category}</p>
            <p className="text-gray-600 mb-4">Stock: {stock} units available</p>

            <div>
              <button
                className="bg-[#E58F28] px-5 py-2.5 text-center text-white rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-md"
                onClick={() => alert(`Added ${title} to the cart!`)}
              >
                Add to Cart
              </button>

            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-1 sm:order-1 sm:pb-5 lg:order-1">
          <img
            className="w-full h-auto max-h-96 rounded mb-4"
            src={selectedImage}
            alt={title}
          />
          <div className="flex space-x-4 overflow-x-auto">
            {images.map((image, index) => (
              <img
                key={index}
                className="w-16 h-16 cursor-pointer rounded"
                src={image}
                alt={title}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

    <ProductSlider />

    </>
  );
};

export default ProductDetails;
