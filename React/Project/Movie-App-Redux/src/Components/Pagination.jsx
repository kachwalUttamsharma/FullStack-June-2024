import React from "react";
import { handleNext, handlePrevious } from "../redux/PaginationSlice";
import { useDispatch } from "react-redux";

const Pagination = ({ pageNo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center  bg-gray-400 p-4 h-[40px] mt-2 gap-5">
      <div onClick={() => dispatch(handlePrevious())}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={() => dispatch(handleNext())}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
