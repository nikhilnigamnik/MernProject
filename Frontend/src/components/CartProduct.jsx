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
    <div className="shadow-md rounded justify-between items-center border p-4 flex">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img className="h-20 bg-white w-36 object-cover" src={image} />
      </div>
      <div>
        <h1>Name : {name}</h1>
        <h1> Price : {price}</h1>
      </div>

      <div className="flex justify-center">
        <div className="flex gap-4 items-center">
          <Button onClick={() => dispatch(decreaseItem(id))}>-</Button>
          <p>{qty}</p>
          <Button onClick={() => dispatch(increaseItem(id))}>+</Button>
        </div>
      </div>
      <div className="flex gap-4">
        total <p>{total}</p>
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
