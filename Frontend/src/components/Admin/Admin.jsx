import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="border rounded-md flex flex-col gap-4 p-4 md:w-1/4">
      <h2 className="text-3xl text-center  capitalize font-semibold">
        Admin Panel
      </h2>
      <div className="flex   mt-4 gap-8 flex-col">
        <Link to="/newproduct">
          <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
            Add Product
          </button>
        </Link>

        <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
          Product Items
        </button>
        <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
          Dashboard
        </button>
        <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
          Tracking
        </button>
        <Link to="/">
          <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
            Home
          </button>
        </Link>
        <Link to="/">
          <button className="bg-mainclr w-full px-4 py-2 rounded-full text-white">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
