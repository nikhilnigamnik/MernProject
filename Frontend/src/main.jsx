import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Success from "./pages/Success.jsx";
import Cancle from "./pages/Cancle.jsx";
import Newproduct from "./components/Admin/NewProduct.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import Menu from "./pages/Menu.jsx";
import Admin from "./components/Admin/Admin.jsx";
import UserDetails from "./components/Admin/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Hilliiiii",
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
        path: "/cancle",
        element: <Cancle />,
      },
      {
        path: "/admin/*",
        element: <Admin />,
      },
      {
        path: "/userdetails",
        element: <UserDetails/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement />
  </Provider>
);
