import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../components/AllProduct";
import { addCartItems } from "../redux/productSlice";

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
    navigate("/cart")
  };

  return (
    <div className="p-2 md:p-4 shadow-md">
      <div className="w-full m-auto max-w-4xl md:flex bg-gray-400">
        <div className="w-full max-w-md overflow-hidden">
          <img src={productDisplay.image} className="" />
        </div>
        <div className="flex max-w-lg  flex-col justify-center items-center">
          <h1>Name : {productDisplay.name}</h1>
          <h1>Category : {productDisplay.category}</h1>
          <h1>rupiyaaaaa {productDisplay.price}</h1>
          <div className="flex gap-4">
            <Button onClick={handleBuy}>Buy</Button>
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </div>
          <p>Description : {productDisplay.description}</p>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
