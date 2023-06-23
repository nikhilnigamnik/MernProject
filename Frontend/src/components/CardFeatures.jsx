import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";
import { addCartItems } from "../redux/productSlice";

const CardFeature = ({
  image,
  name,
  price,
  rating,
  discount,
  category,
  loading,
  id,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(
      addCartItems({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="cursor-pointer p-4 hover:shadow-md transition-all sha3 rounded-xl flex flex-col justify-between">
      <Link
        to={`/menu/${id}`}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
      >
        <div className="flex  flex-col justify-center items-center">
          <img src={image} className=" sm:w-full rounded-md" />
        </div>
      </Link>

      <div className="mt-4 ">
        <div className="flex justify-between">
          <div className="">
            <h3 className="font-semibold text-slate-600  capitalize text-lg overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500  font-medium">
              {rating} ⭐ <span className="font-normal text-sm ">Rating</span>
            </p>
            <p className=" text-slate-500 text-sm ">{category}</p>
          </div>

          <div>
            <p className="font-normal ">
              <span className="text-red-500 font-normal">₹</span>
              <span>{price}</span>
            </p>
            <del className=" text-slate-500">{discount}</del>
          </div>
        </div>

        <hr />

        <div className="flex w-full items-center mt-4  justify-between">
          <button
            className="border border-mainclr px-4 py-1 rounded-full"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <span>
            <BsBookmarkHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
