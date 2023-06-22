import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/productSlice";

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://backend-mernss.onrender.com/product");
      const resData = await res.json();
      dispatch(setDataProduct(resData));
      console.log(resData)
    })();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <main className="max-w-7xl  mx-auto mt-4 px-2 overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default App;
