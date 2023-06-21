import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

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
      <p>{totalUsers}</p>

      <ul>
        {users.map((user) => (
          <li className="flex flex-col py-4 " key={user._id}>
            <p>
              Name: {user.firstname} {user.lastname}
            </p>
            <p>Email: {user.email}</p>
            <p>Password : {user.password}</p>
            <p>Confirm Password : {user.confirmpassword}</p>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
