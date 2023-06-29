import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCartItems,
  increaseItem,
  decreaseItem,
} from "../redux/productSlice";

const CartProduct = ({
  id,
  name,
  image,
  rating,
  discount,
  total,
  qty,
  price,
}) => {
  const dispatch = useDispatch();

  const percent = ((discount / price) * 100).toFixed(0);

  // const
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 items-center sha5  rounded-xl p-8">
      <div className="flex justify-center items-center">
        <img
          className=" bg-white md:w-full sm:w-full w-40 object-cover rounded-md"
          src={image}
        />
      </div>

      <div className="flex flex-col gap-1 text-center">
        <h3 className="font-semibold text-slate-600  capitalize text-lg overflow-hidden">
          {name}
        </h3>

        <div className="flex justify-center flex-col items-center">
          <p className="font-normal ">
            <span className="text-red-500 font-normal">₹</span>
            <span>{price}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex gap-2 items-center">
          <button
            className="bg-mainclr px-4 py-1 rounded-md text-white"
            onClick={() => dispatch(decreaseItem(id))}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            className="bg-mainclr px-4 py-1 rounded-md text-white"
            onClick={() => dispatch(increaseItem(id))}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-2 items-center flex-col justify-between">
        <div className="flex justify-center items-center gap-4">
          <span className="text-mainclr font-semibold">Rs. </span>
          <p>{total}</p>
        </div>
        <div
          onClick={() => dispatch(deleteCartItems(id))}
          className="cursor-pointer"
        >
          <button className=" bg-mainclr text-white text-sm px-2 py-[2px] rounded-lg">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
