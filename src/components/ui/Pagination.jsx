import React from "react";

import Icons from "@/components/ui/Icons";

const Pagination = ({
  totalPages = 1,
  currentPage = 1,
  handlePageChange = () => {},
  text = false,
  className = "",
}) => {
  const goPrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <nav
      className={`flex items-center gap-x-1 ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={goPrev}
        disabled={currentPage === 1}
        aria-label="Previous"
        className="w-10 h-10 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 
          text-sm rounded-full text-slate-500 hover:bg-gray-100 
          focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      >
        {text ? (
          "Previous"
        ) : (
          <Icons icon="heroicons:chevron-left" className="size-4" />
        )}
      </button>

      <div className="flex items-center gap-x-1">
        <span
          className="w-10 h-10 flex justify-center items-center 
          border border-slate-200 text-gray-800 py-2 px-3 text-sm rounded-full 
          focus:outline-none focus:bg-gray-50"
        >
          {currentPage}
        </span>

        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
          of
        </span>

        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
          {totalPages}
        </span>
      </div>

      <button
        type="button"
        onClick={goNext}
        disabled={currentPage === totalPages}
        aria-label="Next"
        className="w-10 h-10 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 
          text-sm rounded-full text-slate-500 hover:bg-gray-100 
          focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      >
        {text ? (
          "Next"
        ) : (
          <Icons icon="heroicons:chevron-right" className="size-4" />
        )}
      </button>
    </nav>
  );
};

export default Pagination;
