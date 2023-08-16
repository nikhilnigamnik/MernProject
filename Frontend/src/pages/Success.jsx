import React from "react";
import { Link } from "react-router-dom";
import { Img } from "../utils/helper";

const Success = () => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center  h-[70vh]">
      <Img
        width={100}
        src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687454555/vecteezy_green-tick-checkbox-illustration-isolated_10829962_2_ragbmh.png"
      />
      <h1 className="font-medium text-xl">Your Payment is Completed...!!!</h1>

      <p className="text-mainclr">Order Again...</p>
      <Link to={"/"}>
        <button className="bg-mainclr text-white rounded-full px-4 py-2">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Success;
