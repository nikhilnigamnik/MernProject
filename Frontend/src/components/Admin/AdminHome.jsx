import React from "react";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const products = useSelector((state) => state?.product?.products) || [];
  const users = useSelector((state) => state?.user?.users) || [];
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="border  cursor-pointer py-2 px-4 shadow-sm rounded-md">
          <h1 className="text-lg font-medium">Products</h1>
          <h1>{products.length}</h1>
        </div>
        <div className="border cursor-pointer py-2 px-4 shadow-sm rounded-md">
          <h1 className="text-lg font-medium">Users</h1>
          <h1>{users.length}</h1>
        </div>
        <div className="border cursor-pointer py-2 px-4 shadow-sm rounded-md">
          <h1 className="text-lg font-medium">Total Order</h1>
          <h1>{products.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
