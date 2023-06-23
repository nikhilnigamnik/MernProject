import React from "react";
import { Link } from "react-router-dom";
import RatingIcons from "../components/RatingIcons";

const HomeCard = ({ name, image, category, price, id }) => {
  return (
    <div className="bg-white cursor-pointer flex justify-center items-center flex-col  hover:shadow-md transition-all sha3  p-4 rounded-xl min-w-[150px]">
      {name && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <div className="w-40">
              <img src={image} className="h-full rounded-md w-full" />
            </div>
            <RatingIcons />
            <div>
              <h3 className="font-semibold  capitalize">{name}</h3>
              <p className="">{category}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-bold ">
                <span className="text-red-500 ">Rs.</span>
                <span>{price}</span>
              </p>
              <Link
                className="float-right"
                to={`/menu/${id}`}
                onClick={() =>
                  window.scrollTo({ top: "0", behavior: "smooth" })
                }
              >
                <button className="bg-mainclr text-[10px] px-2 py-1 rounded-full text-white">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
