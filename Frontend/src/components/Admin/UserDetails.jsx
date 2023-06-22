import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const handleDelete = async (userId) => {
  try {
    const response = await axios.delete(
      `https://backend-mernss.onrender.com/users/${userId}`
    );
    if (response.status === 200) {
      toast.success("Deleting...");
    }
  } catch (error) {
    console.log(error);
  }
};

function UserDetails() {
  const users = useSelector((state) => state?.user?.users);

  if (!users) {
    return <div>Loading...</div>; // or any other fallback UI when products are undefined
  }
  return (
    <div className="p-8">
      <h2>User List</h2>
      <p>Total Users : {users.length}</p>
      {users.map((item) => (
        <div key={item._id} className="">
          <ul className="flex mt-4 flex-col gap-4">
            <li className="flex sha3 rounded-xl  justify-between items-center p-4 ">
              <p>
                {item.firstname} {item.lastname}
              </p>
              <p>{item.email}</p>
              <p></p>
              <AiFillDelete
                className="cursor-pointer"
                onClick={() => handleDelete(item._id)}
              />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;
