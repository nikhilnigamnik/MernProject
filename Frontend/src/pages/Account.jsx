import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const userData = useSelector((state) => state?.user) || [];
  return (
    <div>
      <div>
        <h1>User Details</h1>
      </div>
      <div className="flex gap-1">
        <p>{userData.firstname}</p>
        <p>{userData.lastname}</p>
      </div>
      <div>
        <p>{userData.email}</p>
      </div>
      <div>
        <p>Change Password</p>
      </div>
    </div>
  );
};

export default Account;
