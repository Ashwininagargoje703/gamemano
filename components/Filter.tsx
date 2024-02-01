"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Filter({ categories }: { categories: [string] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryValue = searchParams.get("category") || "";
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const [selectedProduct, setSelectedProduct] = useState(categoryValue || "");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCheckboxClick = (product: string) => {
    setSelectedProduct(product === selectedProduct ? "" : product);
    setFilterOpen(false);
  };

  useEffect(() => {
    if (page) {
      if (selectedProduct === "") {
        return router.push(`/products?page=${page}&limit=${limit}`);
      }
      router.push(
        `/products?category=${selectedProduct}&page=${page}&limit=${limit}`
      );
    } else {
      if (selectedProduct === "") {
        return router.push("/products");
      }
      router.push(`/products?category=${selectedProduct}`);
    }
  }, [selectedProduct]);

  const reset = () => {
    setSelectedProduct("");
    setFilterOpen(false);
    router.push(`/products`);
  };

  return (
    <>
      {/* Filter button for mobile */}
      <button
        className="bg-orange-400 px-3 py-1 text-xs md:text-sm text-yellow-50 w-full mt-4 md:hidden mb-4"
        onClick={() => setFilterOpen(!filterOpen)}
      >
        {filterOpen ? "Close Filter" : "Open Filter"}
      </button>

      {/* Filter content */}
      <div className={`md:block ${filterOpen ? "block" : "hidden"}`}>
        <div className="p-4 bg-white shadow-md rounded-md mb-4 md:mb-0 h-full">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {categories.map((category: string, index: number) => (
              <div key={index} className="mb-2">
                <label
                  className={`flex items-center text-xs md:text-sm cursor-pointer ${
                    category === selectedProduct
                      ? "bg-yellow-300 pl-2 text-black font-semibold"
                      : "bg-transparent text-slate-800"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={category === selectedProduct}
                    onChange={() => handleCheckboxClick(category)}
                    className="cursor-pointer"
                  />
                  {category?.toUpperCase().split("-").join(" ")}
                </label>
              </div>
            ))}
            <div className="mt-2">
              <button
                className="bg-orange-400 px-3 py-1 text-xs md:text-sm outline-none text-yellow-50 w-full mt-4"
                onClick={reset}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
