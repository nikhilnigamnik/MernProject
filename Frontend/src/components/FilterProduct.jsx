import React from "react";
import { BiStoreAlt } from "react-icons/bi";
import right from "../asset/right.png";
import right2 from "../asset/right2.png";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div className="my-10 flex flex-col gap-3" onClick={onClick}>
      <div
        className={`text-3xl transition duration-700 ease-in-out px-5 py-8 flex gap-4 items-center flex-col  rounded-xl cursor-pointer ${
          isActive ? "bg-mainclr text-white" : "bg-white border"
        }`}
      >
        <BiStoreAlt />
        <p
          className={`w-10 h-1 rounded ${isActive ? "bg-white" : "bg-black"} `}
        ></p>
        <img src={isActive ? right : right2} alt="Arrow" />
      </div>
      <p className="text-center capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
