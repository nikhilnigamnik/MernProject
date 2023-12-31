import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
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
import Admin from "./components/Admin/Admin.jsx";
import UserDetails from "./components/Admin/UserDetails.jsx";
import AllProduct from "./components/AllProduct.jsx";
import Account from "./pages/Account.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <AllProduct />,
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
        element: <Admin />,
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