import React from "react";
import { BiStoreAlt } from "react-icons/bi";
import right from "../asset/right.png";
import right2 from "../asset/right2.png";

const FilterProduct = ({ category,isActive, onClick}) => {
  return (
    <div className={`filter-product transition-all  rounded-md ${isActive ? 'bg-mainclr text-white' : 'onhover hover:bg-mainclr/10 '}`} onClick={onClick}>
      <p className="capitalize  py-1 px-3 rounded-xl cursor-pointer ">{category}</p>
    </div>
  );
};

export default FilterProduct;
