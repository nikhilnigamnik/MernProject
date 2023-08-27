import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";
import Newproduct from "./components/Admin/NewProduct.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import Menu from "./pages/Menu.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
// import Admin from "./components/Admin/Admin.jsx";
import UserDetails from "./components/Admin/UserDetails.jsx";
// import AllProduct from "./components/AllProduct.jsx";
import Account from "./pages/Account.jsx";
import Lazy from "./utils/Lazy.jsx";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const Product = React.lazy(() => import("./components/AllProduct.jsx"));
const Admin = React.lazy(() => import("./components/Admin/Admin.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Lazy />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "menu/:filterby",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<Lazy />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/newproduct",
        element: <Newproduct />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/admin/*",
        element: (
          <Suspense fallback={<Lazy/>}>
            <Admin />
          </Suspense>
        ),
      },
      {
        path: "/userdetails",
        element: <UserDetails />,
      },
      {
        path: "/account/*",
        element: <Account />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement />
  </Provider>
);
