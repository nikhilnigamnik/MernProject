import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { baseURL } from "../components/Admin/api";

export default function Signup() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, email, password, confirmpassword } = data;
    if (firstname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${baseURL}/signup`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();

        // alert(dataRes.message);
        toast(dataRes.message);

        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        toast.error("password and confirm password do not match");
      }
    } else {
      toast.error("please enter require field");
    }
  };

  return (
    <div className=" flex my-10 justify-center items-center">
      <div>
        <h1 className="text-4xl text-center  capitalize font-bold">Signup</h1>
        <h1 className="capitalize my-4 text-center  text-normal font-semibold">
          Enter your details to Signup.
        </h1>
        <form
          className="sha2 rounded-xl shadow-sm p-8 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">FirstName</label>
              <input
                size="lg"
                id="firstname"
                name="firstname"
                label="First Name"
                className="border p-1 rounded-lg"
                value={data.firstname}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">LastName</label>
              <input
                size="lg"
                id="lastname"
                name="lastname"
                label="First Name"
                className="border p-1 rounded-lg"
                value={data.lastname}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">Email</label>
              <input
                size="lg"
                className="border p-1 rounded-lg"
                id="email"
                name="email"
                label="Email"
                value={data.email}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">Password</label>
              <input
                type="password"
                className="border p-1 rounded-lg"
                id="password"
                name="password"
                size="lg"
                label="Password"
                value={data.password}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">Confirm Password</label>
              <div className="flex relative  justify-between">
                <input
                  type={showPass ? "text" : "password"}
                  name="confirmpassword"
                  size="lg"
                  className="border p-1 rounded-lg"
                  label="Confirm Password"
                  value={data.confirmpassword}
                  onChange={handleOnChange}
                />
                <span
                  className="flex right-2 top-2 absolute justify-center mr-4 items-center cursor-pointer"
                  onClick={handleShowPass}
                >
                  {showPass ? <BiShow /> : <BiHide />}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" bg-mainclr w-full my-4 rounded-full px-4 py-2 text-white"
          >
            Signup
          </button>
          <h1 className="font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-red-500 transition-colors hover:red-blue-700"
            >
              Login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
