import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBookmarkHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = useSelector((state) => state?.user) || [];
  const CartItemNum = useSelector((state) => state?.product?.cartItem) || [];
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarShadow = () => {
    if (window.scrollY >= 160) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarShadow);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast.success("Logout Successfully");
  };

  return (
    <nav
      className={`fixed top-0 left-0 bg-white right-0 ${
        colorChange ? "sha " : ""
      } z-10 transition delay-75 ease-in-out`}
    >
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between p-4">
          <div className="flex items-center justify-between w-full">
            {/* Your logo or brand */}
            <Link to="/">
              <img
                width={120}
                src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687529082/S_p0d2fn.png"
              />
            </Link>

            <div className="z-10 hidden sm:block sm:ml-6">
              {showMenu && (
                <div>
                  <div className="absolute px-4 py-2 right-0 flex flex-col justify-center gap-1 mt-8 bg-white border shadow-md rounded">
                    <div>
                      <h1 className="font-semibold text-lg text-center">
                        User Info
                      </h1>
                    </div>
                    {userData.email === "nik@gmail.com" && (
                      <Link to={"admin"}>
                        <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                          <FaUserCircle size={20} />

                          <p>Admin</p>
                        </div>
                      </Link>
                    )}
                    <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                      <FaUserCircle size={20} />

                      <p>Dashbord</p>
                    </div>

                    {userData.email ? (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                          <FaUserCircle size={20} />

                          <div className="flex gap-1">
                            <p>{userData.firstname}</p>
                            <p>{userData.lastname}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-4 py-2 text-white rounded-lg shadow-md cursor-pointer bg-mainclr">
                          <p className="" onClick={handleLogout}>
                            Logout
                          </p>
                          <IoLogOutOutline size={20} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-6 px-4 py-2 text-white rounded-lg shadow-md cursor-pointer bg-mainclr">
                        <Link to={"/login"}>Login</Link>
                        <IoLogInOutline />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="items-center justify-between hidden sm:block">
              {/* Your navigation links */}
              <div className="flex gap-6">
                <Link className="text-mainclr" to="/">
                  <p>Home</p>
                </Link>
                <Link to="/product">
                  <p>Product</p>
                </Link>

                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                <Link to="/about">
                  <p>About Us</p>
                </Link>
              </div>
            </div>

            <div className="hidden sm:block ">
              <div className="flex items-center justify-center">
                <Link
                  to={"/cart"}
                  className="relative p-2 ml-2 text-white transition bg-yellow-900 rounded-full shadow-sm cursor-pointer hover:bg-yellow-800"
                >
                  <HiOutlineShoppingBag />
                  {CartItemNum.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 rounded-full bg-mainclr -top-2 -right-2 ">
                      {CartItemNum.length}
                    </div>
                  )}
                </Link>
                <Link
                  className="relative p-2 mx-2 text-white transition bg-yellow-900 rounded-full shadow-sm cursor-pointer hover:bg-yellow-800"
                  to={"/bookmark"}
                >
                  <BsBookmarkHeart />
                </Link>

                <div
                  className=" p-2 text-white bg-gray-800  onhover rounded-full cursor-pointer hover:bg-mainclr"
                  onClick={handleShowMenu}
                >
                  {showMenu ? <FaUserCircle /> : <FaUserCircle />}
                </div>
              </div>
            </div>

            {/* Mobile Menu  */}

            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <div className="flex items-center justify-center">
                <Link
                  to={"/cart"}
                  className="relative p-2 ml-2 text-white transition bg-yellow-900 rounded-full shadow-sm cursor-pointer hover:bg-yellow-800"
                >
                  <HiOutlineShoppingBag />
                  {CartItemNum.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 rounded-full bg-mainclr -top-2 -right-2 ">
                      {CartItemNum.length}
                    </div>
                  )}
                </Link>

                <Link
                  className="relative p-2 mx-2 text-white transition bg-yellow-900 rounded-full shadow-sm cursor-pointer hover:bg-yellow-800"
                  to={"/bookmark"}
                >
                  <BsBookmarkHeart />
                </Link>

                <div
                  className=" p-2 text-white bg-gray-800  onhover rounded-full cursor-pointer hover:bg-mainclr"
                  onClick={handleShowMenu}
                >
                  {showMenu ? <FaUserCircle /> : <FaUserCircle />}
                </div>
              </div>

              <div className="ml-4">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2"
                >
                  {isOpen ? (
                    <RxCross2 className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <IoMenu className="block w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {showMenu && (
                <div>
                  <div className="absolute right-0 z-10 flex flex-col  gap-1   p-4 mt-10 bg-white border shadow-md rounded">
                    <div>
                      <h1 className="font-semibold text-lg text-center">
                        User Account
                      </h1>
                    </div>

                    {userData.email === "nik@gmail.com" && (
                      <Link to={"admin"}>
                        <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                          <FaUserCircle size={20} />

                          <p>Admin</p>
                        </div>
                      </Link>
                    )}

                    <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                      <FaUserCircle size={20} />

                      <p>Dashbord</p>
                    </div>

                    {userData.email ? (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-4 p-2 text-black border rounded-lg shadow-md cursor-pointer">
                          <FaUserCircle size={20} />

                          <div className="flex gap-1">
                            <p>{userData.firstname}</p>
                            <p>{userData.lastname}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between px-4 py-2 text-white rounded-lg shadow-md cursor-pointer bg-mainclr">
                          <p className="" onClick={handleLogout}>
                            Logout
                          </p>
                          <IoLogOutOutline size={20} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between gap-6 px-4 py-2 text-white rounded-lg shadow-md cursor-pointer bg-mainclr">
                        <Link to={"/login"}>Login</Link>
                        <IoLogInOutline />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-900 transform transition-all"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-125 transform transition-all"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {
          <div className="sm:hidden">
            <div className="flex flex-col border-b-2 border-black  gap-4 px-20 py-10 text-center text-white">
              <div className="bg-[#d5294d] shadow-sm   hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-full px-4 py-2">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </div>
              <div className="bg-[#d5294d] shadow-sm   hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-full px-4 py-2">
                <Link to="/product">
                  <p>Product</p>
                </Link>
              </div>
              <div className="bg-mainclr hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-full px-4 py-2">
                <Link to="contact">
                  <p>Contact</p>
                </Link>
              </div>
              <div className="bg-[#d5294d] hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-full px-4 py-2">
                <Link to="about">
                  <p>About Us</p>
                </Link>
              </div>
            </div>
          </div>
        }
      </Transition>
    </nav>
  );
};

export default Navbar;
