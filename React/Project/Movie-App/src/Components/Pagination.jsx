import React from "react";

const Pagination = ({ pageNo, handlePrevious, handleNext }) => {
  return (
    <div className="flex justify-center items-center  bg-gray-400 p-4 h-[40px] mt-2 gap-5">
      <div onClick={handlePrevious}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
