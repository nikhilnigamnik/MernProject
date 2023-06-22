import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex px-10 gap-4 flex-col justify-center items-center h-[70vh]">
      <h1 className="bg-gradient-to-r from-[#d5294d] to-[#B6035C] text-transparent bg-clip-text font-bold text-9xl">
        404
      </h1>
      <h1 className="text-xl font-medium">OPPS ! PAGE NOT FOUND</h1>
      <p className="text-center">
        we are sorry :( the page you requested cannot be found
      </p>
      <Link to={"/"}>
        <button className="bg-mainclr text-white rounded-full px-4 py-2">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
