import React from "react";
import { Link } from "react-router-dom";

const BannerSecond = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 items-center">
      <h1 className="text-center text-3xl font-bold">
        Best Food In Town Awaits You
      </h1>
      <Link to={"product"}>
        <button className="bg-gradient-to-r text-center from-[#d5294d] to-[#B6035C]  px-4 py-2 rounded-full text-white">
          Explore Our Food{" "}
        </button>
      </Link>
      <img
        className="rounded-xl"
        src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1688240984/pexels-ella-olsson-1334131_qepamm.jpg"
      />
    </div>
  );
};

export default BannerSecond;
