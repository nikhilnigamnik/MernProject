import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "./redux/productSlice";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://foodwaalaapi.onrender.com/product");
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <main className="px-2 mx-auto mt-24 overflow-hidden max-w-7xl">
        <Outlet />
      </main>
      <Footer />
      <img
        width={50}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
        className="fixed p-0 bg-white rounded-full cursor-pointer bottom-9 right-9"
        src="https://img.icons8.com/ios-filled/100/000000/circled-up-2.png"
        alt="circled-up-2"
      />
    </>
  );
};

export default App;
