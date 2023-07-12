import React, { useState } from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const userData = useSelector((state) => state?.user) || [];
  console.log(userData)
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex gap-10">
      <ul className="flex gap-4 flex-col">
     
        <li
          className={`px-2 transition-all duration-300 cursor-pointer py-1 rounded ${activeTab === 0 ? "bg-mainclr text-white" : "border"}`}
          onClick={() => handleTabClick(0)}
        >
          Profile
        </li>
        <li
          className={`px-2 transition-all duration-300 cursor-pointer py-1 rounded ${activeTab === 1 ? "bg-mainclr text-white" : "border"}`}
          onClick={() => handleTabClick(1)}
        >
          Order History
        </li>
        <li
          className={`px-2 transition-all duration-300 cursor-pointer py-1 rounded ${activeTab === 2 ? "bg-mainclr text-white" : "border"}`}
          onClick={() => handleTabClick(2)}
        >
          Change Password
        </li>
      </ul>

      <div className="border rounded w-full p-4">
        {activeTab === 0 && (
          <div>
            <h1>
              Name : {userData.firstname} {userData.lastname}
            </h1>
            <h1>Email Address : {userData.email}</h1>
          </div>
        )}
        {activeTab === 1 && <div>Order History</div>}
        {activeTab === 2 && <div>Password</div>}
      </div>
    </div>
  );
};

export default Account;
