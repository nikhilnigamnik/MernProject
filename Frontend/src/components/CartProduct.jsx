import React from "react";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
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
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 items-center sha5  rounded-xl p-8">
      <div className="flex justify-center items-center">
        <img
          className=" bg-white w-20 rounded-md"
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
            className="border border-mainclr px-4 py-1 rounded-md text-black"
            onClick={() => dispatch(increaseItem(id))}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-between">
        <div className="flex justify-center items-center gap-1">
          <span className="text-mainclr font-semibold">Rs.</span>
          <p>{total}</p>
        </div>
        <div
          onClick={() => dispatch(deleteCartItems(id))}
          className="cursor-pointer border rounded p-1"
        >
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
