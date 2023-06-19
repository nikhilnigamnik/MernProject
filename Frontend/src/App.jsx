import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { setDataProduct } from "./redux/productSlice";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancle from "./pages/Cancle";

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      // const res = await fetch(`${process.env.REACT_APP_BACKEND_API}/product`);
      const res = await fetch("https://backend-mernss.onrender.com/product");
      console.log(res);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, []);
  // console.log(productData);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-4 mx-auto px-2 overflow-hidden">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="menu" element={<Menu />} /> */}
          <Route path="menu/:filterby" element={<Menu />} />
          <Route path="login" element={<Login />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancle />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
