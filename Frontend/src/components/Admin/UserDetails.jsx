import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

function UserList() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios
      .get("https://backend-mernss.onrender.com/users")
      .then((response) => {
        setUsers(response.data);
        setTotalUsers(users.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `https://backend-mernss.onrender.com/users/${userId}`
      );
      if (response.status === 200) {
        // alert("User deleted successfully!");
        toast.success("Deleting...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-semibold">User List</h1>
      <p>Total Users : {totalUsers}</p>

      <ul className="flex mt-4 flex-col gap-4">
        {users.map((user) => (
          <li
            className="flex border shadow-sm justify-between items-center p-4 "
            key={user._id}
          >
            <div className="">
              <p>
                Name: {user.firstname} {user.lastname}
              </p>
              <p>Email: {user.email}</p>
              <p>Password : {user.password}</p>
              <p>Confirm Password : {user.confirmpassword}</p>
            </div>
            {/* <button onClick={() => handleDelete(user._id)}>Delete</button> */}
            <AiFillDelete onClick={() => handleDelete(user._id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
