// ... Autres importations
import { useState } from "react";
function Button({ onPageChange, totalPages }) {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePrevious = () => {
    const newPage = activePage - 1;
    if (newPage >= 1) {
      setActivePage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    const newPage = activePage + 1;
    if (newPage <= totalPages) {
      setActivePage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-12 h-8 md:w-16 md:h-12 py-2 border shadow-md text-white border-[#2DA2DD]"
        onClick={handlePrevious}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 md:w-6"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      {[...Array(totalPages).keys()].map((pageNumber) => (
        <button
          key={pageNumber + 1}
          type="button"
          className={`inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 text-sm md:text-lg font-semibold border shadow-md ${
            activePage === pageNumber + 1
              ? "bg-[#2DA2DD] text-white border-[#2DA2DD]"
              : "text-white  border-[#2DA2DD]"
          }`}
          title={`Page ${pageNumber + 1}`}
          onClick={() => handleClick(pageNumber + 1)}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-12 h-8 md:w-16 md:h-12 py-2 border shadow-md text-white border-[#2DA2DD]"
        onClick={handleNext}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 md:w-6"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>{" "}
      </button>
    </div>
  );
}

export default Button;
