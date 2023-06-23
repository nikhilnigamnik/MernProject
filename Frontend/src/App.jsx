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
      const res = await fetch("http://localhost:8000/product");
      const resData = await res.json();
      dispatch(setDataProduct(resData));
      console.log(resData);

    })();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <main className="max-w-7xl  mx-auto mt-4 px-2 overflow-hidden">
        <Outlet />
      </main>
      <img
        width={50}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
        className="bottom-9 bg-white p-0 rounded-full cursor-pointer fixed right-9"
        src="https://img.icons8.com/ios-filled/100/000000/circled-up-2.png"
        alt="circled-up-2"
      />
    </>
  );
};

export default App;
