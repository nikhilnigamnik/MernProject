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
    <div className="cursor-pointer gap-4 items-center sm:items-stretch p-4 hover:shadow-md transition-all sha3 rounded-xl grid grid-cols-2 sm:justify-between sm:flex sm:flex-col">
      <Link
        className="w-full flex items-center justify-center"
        to={`/menu/${id}`}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
      >
        <img src={image} className="w-full rounded-md" />
      </Link>

      <div className="">
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

          <div className="flex justify-center flex-col items-center">
            <p className="font-normal ">
              <span className="text-red-500 font-normal">₹</span>
              <span>{price}</span>
            </p>
            <del className=" text-slate-500 text-sm ">₹ {discount}</del>
          </div>
        </div>

        <hr />

        <div className="flex w-full items-center mt-4  justify-between">
          <button
            className="hover:bg-red-800 onhover text-white bg-mainclr px-4 py-1 rounded-full"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <span className="hover:-scale-x-110 onhover">
            <BsBookmarkHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
