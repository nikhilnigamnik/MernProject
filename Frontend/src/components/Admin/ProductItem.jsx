import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";

const handleDelete = async (productId) => {
  try {
    const response = await axios.delete(
      `https://foodwaalaapi.onrender.com/product/${productId}`
    );
    if (response.status === 200) {
      toast.success("Product deleted successfully!");
    }
  } catch (error) {
    console.log(error);
  }
};

function ProductItem() {
  const products = useSelector((state) => state?.product?.products);

  if (!products) {
    return <div>Loading...</div>; // or any other fallback UI when products are undefined
  }

  return (
    <div className="p-8 flex flex-col">
      <h2>Product List</h2>
      <h2>Total Products: {products.length}</h2>
      <div className="flex mt-4 flex-col gap-4">
        {products.map((item) => (
          <div
            className="flex p-4 rounded-xl sha3 justify-between items-center"
            key={item._id}
          >
            <div className="">
              <img className="w-20 max-w-sm" src={item.image} alt={item.name} />
              <h1>Product Name: {item.name}</h1>
              <h1>Category: {item.category}</h1>
              <h1>Price: {item.price}</h1>
            </div>
            <AiFillDelete
              className="cursor-pointer"
              onClick={() => {
                handleDelete(item._id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductItem;
