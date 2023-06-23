import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { addCartItems } from "../redux/productSlice";

const CardFeature = ({ image, name, price, category, loading, id }) => {
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
    <div className="w-full hover:shadow-md transition-all min-w-[200px] max-w-[200px] bg-white sha3 rounded-xl  py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full rounded-md" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500  font-medium">{category}</p>
            <p className="font-bold ">
              <span className="text-red-500 hover:text-white">Rs.</span>
              <span>{price}</span>
            </p>
          </Link>
          <div className="flex mt-2 bg-mainclr text-white p-1 items-center justify-around rounded-full">
            <BiShoppingBag/>
          <button
            onClick={handleAddToCart}
            
          >
            Add to cart
          </button>
          </div>

          
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
