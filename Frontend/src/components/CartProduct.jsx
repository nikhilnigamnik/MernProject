import { Button } from "@material-tailwind/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
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
    <div className="w-full border shadow-sm items-center rounded justify-between p-4 flex">
      <div className="bg-white flex-col flex justify-center items-center gap-2 rounded overflow-hidden">
        <img className="h-20 bg-white w-40 object-cover" src={image} />
        <h1>{name}</h1>
      </div>

      <div>
        <h1>{price}</h1>
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
        <p>{total}</p>
      </div>
      <div
        onClick={() => dispatch(deleteCartItems(id))}
        className="cursor-pointer"
      >
        <AiFillDelete />
      </div>
    </div>
  );
};

export default CartProduct;
