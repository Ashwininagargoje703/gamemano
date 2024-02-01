"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface PaginationProps {
  totalItems: number;
}

const Pagination: FC<PaginationProps> = ({ totalItems }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 9;

  let currentPage = +page;

  const totalPages = Math.ceil(totalItems / +limit);

  if (totalPages <= 1) {
    return null;
  }

  const onPageChange = (num: number) => {
    if (
      (currentPage === totalPages && num > totalPages) ||
      (currentPage === 1 && num < 1)
    )
      return;
    router.push(`/products?page=${num}&limit=${limit}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`mx-1 p-2 px-3 sm:px-4 cursor-pointer outline-none rounded-full ${
            i === currentPage
              ? "bg-orange-400 text-white"
              : "bg-orange-200 hover:bg-orange-300"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="flex list-none flex-wrap justify-center gap-2">
      <li
        className={`mx-1 p-2 px-3 sm:px-4 cursor-pointer outline-none rounded-full ${
          currentPage === 1 ? "bg-[#666]" : "bg-gray-200 hover:bg-orange-300"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </li>
      {renderPageNumbers()}
      <li
        className={`mx-1 p-2 px-3 sm:px-4 cursor-pointer outline-none rounded-full ${
          currentPage === totalPages
            ? "opacity-50"
            : "bg-gray-200 hover:bg-orange-300"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </li>
    </ul>
  );
};

export default Pagination;
