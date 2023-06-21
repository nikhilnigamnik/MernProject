import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

function UserList({ id, firstname, lastname }) {
  return (
    <div className="p-8">
      {/* <h1 className="text-center text-2xl font-semibold">User List</h1> */}
      {/* <p>Total Users : {totalUsers}</p> */}
      <ul className="flex mt-4 flex-col gap-4">
        <li
          className="flex border shadow-sm justify-between items-center p-4 "
          key={id}
        >
          <div className="">
            <p>
              Name: {firstname} {lastname}
            </p>
            {/* <p>Email: {user.email}</p> */}
          </div>
          {/* <p>Password : {user.password}</p>
              <p>Confirm Password : {user.confirmpassword}</p> */}
          {/* <button onClick={() => handleDelete(user._id)}>Delete</button> */}
          <AiFillDelete onClick={() => handleDelete(id)} />
        </li>
      </ul>
    </div>
  );
}

export default UserList;
