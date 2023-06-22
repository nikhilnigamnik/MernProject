import React, { useState } from "react";

import { Link} from "react-router-dom";


const AdminLeft = () => {

  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const buttonData = [
    { id: "", label: "Dashboard" },
    { id: "/addproduct", label: "Add Product" },
    { id: "/userdetails", label: "User Details" },
    { id: "/productdetails", label: "Product Details" },
    { id: "/order", label: "Order Details" },
    { id: "/customer", label: "Customer Details" },
    { id: "/manageproduct", label: "Manage Product" },
    { id: "/logout", label: "Logout" },
  ];

  return (
    <div className="md:w-1/4 rounded-lg  sha2 shadow-md">
      <div className="p-8 w-full flex flex-col gap-4">
        {buttonData.map((button) => (
          <Link to={`/admin${button.id}`} key={button.id}>
            <button
              className={`sha4 transition duration-150 ease-in-out text-left w-full  text-black px-4 py-2 rounded-md ${
                activeButton === button.id
                  ? "bg-mainclr border-none text-white"
                  : "hover:bg-red-50"
              }`}
              onClick={() => handleButtonClick(button.id)}
            >
              {button.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminLeft;
