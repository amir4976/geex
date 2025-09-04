import React from "react";

type PaginationProps<T> = {
  data: T[];
  page: number;
  pageSize: number;
  handlePageChange: (page: number) => void;
};

function Pagination<T>({
  data,
  page,
  pageSize,
  handlePageChange,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(data.length / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-end gap-2 mt-4">
      {/* Prev */}
      {/* <button
        className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        قبلی
      </button> */}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num)}
          className={`w-10 h-10 rounded-lg transition-all ${
            page === num
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white/5 hover:bg-purple-500/50"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Next */}
      {/* <button
        className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        بعدی
      </button> */}
    </div>
  );
}

export default Pagination;
