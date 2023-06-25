import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCartItems } from "../redux/productSlice";
import RatingIcons from "../components/RatingIcons";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const navigate = useNavigate();

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    dispatch(addCartItems(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItems(productDisplay));
    navigate("/cart");
  };

  if (!productDisplay) {
    return <div>Loading...</div>; // or any other fallback UI when products are undefined
  }

  return (
    <div className="p-2 md:p-4">
      <p className="text-mainclr text-center font-medium">About</p>
      <h1 className="text-4xl text-center font-bold">Explore Our Best Meal</h1>
      <div className="w-full gap-6 p-10 my-10  m-auto max-w-4xl items-center  grid md:grid-cols-3 sha2 rounded-xl">
        <div className="flex items-center justify-center">
          <img src={productDisplay.image} className="rounded-md" />
        </div>

        <div className="flex gap-4 max-w-lg  flex-col justify-center ">
          <div>
            <h1 className="capitalize text-normal font-semibold">
              {productDisplay.name}
            </h1>
            <h1 className="capitalize">Category : {productDisplay.category}</h1>
            <h1>
              <span className="text-mainclr font-semibold">Rs. </span>
              {productDisplay.price}
            </h1>
            <RatingIcons />
          </div>

          <div>
            <p className="text-gray-900 text-left  text-xs">
              Description : {productDisplay.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-4 mt-2">
          <button
            onClick={handleBuy}
            className="bg-mainclr px-4 py-2 rounded-full text-white"
          >
            Buy
          </button>
          <button
            onClick={handleAddToCart}
            className="border border-red-300 px-4 py-2 rounded-full shadow-sm text-black"
          >
            Add To Cart
          </button>
        </div>
      </div>

    
    </div>
  );
};

export default Menu;
