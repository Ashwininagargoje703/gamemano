"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { updateOpen } from "@/lib/features/navSlice";

const SearchPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const s = searchParams.get("search");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const [search, setSearch] = useState(s || "");

  const searchProduct = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (page) {
        router.push(`/products?search=${search}&page=${page}&limit=${limit}`);
      } else {
        router.push(`/products?search=${search}`);
      }
      dispatch(updateOpen(false));
    }
  };

  return (
    <div className="flex items-center ">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchProduct}
          className="py-2 pl-10 pr-4 border border-white rounded-full outline-none text-gray-700 placeholder-gray-500 bg-transparent"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          />
          <circle cx="10" cy="10" r="8" />
        </svg>
      </div>
    </div>
  );
};

export default SearchPage;
