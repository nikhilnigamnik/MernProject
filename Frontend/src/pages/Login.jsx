import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

export default function Login() {
  const navigate = useNavigate();

  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        "https://backend-mernss.onrender.com/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const dataRes = await fetchData.json();

      toast.success(userData.user.email + dataRes.message);
      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        navigate("/");
      }
    } else {
      toast("please enter require field");
    }
  };

  return (
    <div className="flex h-[70vh]  justify-center items-center">
      <div>
        <h2 className="text-4xl text-center  capitalize font-bold">Login</h2>
        <h1 className="capitalize my-4 text-center  text-normal font-semibold">
          Enter your details to login
        </h1>
        <form
          className="sha2 rounded-xl shadow-sm w-80 p-8 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">Email</label>
              <input
                size="lg"
                id="email"
                name="email"
                className="border p-1 rounded-lg"
                label="Email"
                value={data.email}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="capitalize text-normal">Password</label>
              <input
                className="border p-1 rounded-lg"
                type="password"
                id="password"
                name="password"
                size="lg"
                label="Password"
                value={data.password}
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className=" bg-mainclr w-full my-4 rounded-full px-4 py-2 text-white"
          >
            Login
          </button>
          <h1>
            Do not have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-red-500 transition-colors hover:text-red-700"
            >
              Sign up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
