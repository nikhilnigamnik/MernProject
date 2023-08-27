import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setDataProduct } from "./redux/productSlice";
// import Footer from "./components/Footer";
import { baseURL } from "./components/Admin/api";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  // const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseURL}/product`);
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
        <Footer />
      </main>
    </>
  );
};

export default App;
