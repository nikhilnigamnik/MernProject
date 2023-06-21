import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductItem from "./ProductItem";
import UserDetails from "./UserDetails";
import NewProduct from "../NewProduct";

const AdminRight = () => {
  return (
    <div className="md:w-3/4  border shadow-md ">
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/productdetails" element={<ProductItem />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/addproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRight;
