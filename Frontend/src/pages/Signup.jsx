import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
        const fetchData = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const dataRes = await fetchData.json();
    

        // alert(dataRes.message);
        toast.success(dataRes.message);

        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("pass and confirm pass not match");
      }
    } else {
      alert("please enter require field");
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Signup
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <img />
            </div>
            <Input
              size="lg"
              id="firstname"
              name="firstname"
              label="First Name"
              value={data.firstname}
              onChange={handleOnChange}
            />
            <Input
              size="lg"
              id="lastname"
              name="lastname"
              label="Last Name"
              value={data.lastname}
              onChange={handleOnChange}
            />
            <Input
              size="lg"
              id="email"
              name="email"
              label="Email"
              value={data.email}
              onChange={handleOnChange}
            />
            <Input
              type="password"
              id="password"
              name="password"
              size="lg"
              label="Password"
              value={data.password}
              onChange={handleOnChange}
            />
            <div className="flex ">
              <Input
                type={showPass ? "text" : "password"}
                name="confirmpassword"
                size="lg"
                label="Confirm Password"
                value={data.confirmpassword}
                onChange={handleOnChange}
              />
              <span
                className="flex justify-center items-center cursor-pointer"
                onClick={handleShowPass}
              >
                {showPass ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Signup
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
