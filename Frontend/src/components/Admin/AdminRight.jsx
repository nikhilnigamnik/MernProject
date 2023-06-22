import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductItem from "./ProductItem";
import AdminHome from "./AdminHome";
import UserDetails from "./UserDetails";
import NewProduct from "./NewProduct";

const AdminRight = () => {
  return (
    <div className="md:w-3/4  sha2 rounded-lg shadow-md ">
      <div>
        <Routes>
          <Route index path="/" element={<AdminHome />} />
          <Route path="/productdetails" element={<ProductItem />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/addproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRight;
