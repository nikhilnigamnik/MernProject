import { Button } from "@material-tailwind/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItems,
  increaseItem,
  decreaseItem,
} from "../redux/productSlice";


const CartProduct = ({ id, name, image, category, total, qty, price }) => {
  const dispatch = useDispatch();
  // const
  return (
    <div className="w-full flex   border shadow-sm items-center rounded justify-between p-8">
     
      <div>
        <div className="bg-white md:flex justify-between items-center gap-6 rounded overflow-hidden">
          <img className="h-20 bg-white w-40 object-cover" src={image} />
          <div className="flex flex-col gap-1">
            <h1 className="capitalize text-normal font-semibold">{name}</h1>
            <h1>
              <span className="text-mainclr font-semibold">Rs. </span>
              {price}
            </h1>
          </div>
        </div>
        <div className="flex mt-4 justify-around items-center">
          <div
            onClick={() => dispatch(deleteCartItems(id))}
            className="cursor-pointer"
          >
            <AiFillDelete />
          </div>
          <div>
            <AiFillHeart />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-2 items-center">
          <button
            className="bg-mainclr px-4 py-2 rounded-full text-white"
            onClick={() => dispatch(decreaseItem(id))}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            className="bg-mainclr px-4 py-2 rounded-full text-white"
            onClick={() => dispatch(increaseItem(id))}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-mainclr font-semibold">Rs. </span>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default CartProduct;
