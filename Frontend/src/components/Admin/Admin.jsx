import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const Admin = ({ children, totalUsers }) => {
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const buttonData = [
    { id: "", label: "Dashboard" },
    { id: "/product", label: "Add Product" },
    { id: "/userdetails", label: "User Details" },
    { id: "/order", label: "Order Details" },
    { id: "/productdetails", label: "Product Details" },
    { id: "/customer", label: "Customer Details" },
    { id: "/manageproduct", label: "Manage Product" },
    { id: "/logout", label: "Logout" },
  ];

  return (
    <div className="md:flex justify-between md:gap-8">
      <div className="flex gap-4 p-8 border md:w-1/4 flex-col">
        {buttonData.map((button) => (
          <Link to={`/admin${button.id}`} key={button.id}>
            <button
              className={`border transition duration-150 ease-in-out shadow-sm text-left w-full text-black px-4 py-2 rounded-md ${
                activeButton === button.id ? "bg-mainclr text-white" : ""
              }`}
              onClick={() => handleButtonClick(button.id)}
            >
              {button.label}
            </button>
          </Link>
        ))}
      </div>

      <div className="md:w-3/4 border">
        {location.pathname === "/admin" && (
          <div className="p-8">
            <div>
              <h1>Total Products</h1>
              <h1>Total Users : {totalUsers}</h1>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Admin;
