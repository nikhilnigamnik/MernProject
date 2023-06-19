import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import { RiUserSmileFill } from "react-icons/ri";
import { Badge } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = useSelector((state) => state.user);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast.success("Logout Successfully");
  };

  const CartItemNum = useSelector((state) => state.product.cartItem);

  return (
    <nav className="bg-gray-50 border">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative justify-between flex items-center  h-16">
          <div className="flex justify-between items-center w-full">
            {/* Your logo or brand */}
            <Link to="/">
              <img
                width={120}
                src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687178864/DIGITALY_4_dhwooi.png"
              />
            </Link>

            <div className="hidden  sm:block sm:ml-6">
              {showMenu && (
                <div>
                  <div className="absolute mt-10 right-0 bg-white p-4 shadow-md rounded">
                    {userData.email === "nik@gmail.com" && (
                      <Link
                        to={"newproduct"}
                        className="cursor-pointer text-white px-2 bg-black rounded"
                      >
                        Add new product
                      </Link>
                    )}

                    {userData.email ? (
                      <div className="flex flex-col gap-1">
                        <p className="cursor-pointer text-white px-2 bg-black rounded">
                          {" "}
                          user : {userData.email}
                        </p>
                        <p
                          className="cursor-pointer text-white px-2 bg-black rounded"
                          onClick={handleLogout}
                        >
                          Logout
                        </p>
                      </div>
                    ) : (
                      <div>
                        <Link
                          to={"/login"}
                          className="cursor-pointer text-white px-2 bg-black rounded"
                        >
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex hidden  sm:block justify-between items-center">
              {/* Your navigation links */}
              <div className="flex gap-4">
                <Link to="/">
                  <p>Home</p>
                </Link>

                <Link to="/contact">
                  <p>Contact</p>
                </Link>
                <Link to="/about">
                  <p>About Us</p>
                </Link>
              </div>
            </div>

            <div className="hidden  sm:block ">
              <div className="flex items-center gap-4">
                <Link to="/cart">
                  <Badge
                    color="red"
                    placement="top-end"
                    overlap="top-end"
                    content={CartItemNum.length}
                    withBorder
                  >
                    <BsFillCartFill size={24} />
                  </Badge>
                </Link>

                <div className="cursor-pointer" onClick={handleShowMenu}>
                  {<RiUserSmileFill size={24} /> ? (
                    <RiUserSmileFill size={24} />
                  ) : (
                    <RiUserSmileFill size={24} />
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu  */}

            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <div className="flex justify-center gap-4 items-center">
                <div>
                  <Link to="/cart">
                    <Badge
                      color="red"
                      placement="top-end"
                      overlap="top-end"
                      content={CartItemNum.length}
                      withBorder
                    >
                      <BsFillCartFill size={24} />
                    </Badge>
                  </Link>
                </div>

                <div className="cursor-pointer" onClick={handleShowMenu}>
                  {<RiUserSmileFill size={24} /> ? (
                    <RiUserSmileFill size={24} />
                  ) : (
                    <RiUserSmileFill size={24} />
                  )}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2"
                >
                  {isOpen ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenuAlt1 className="block  h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {showMenu && (
                <div>
                  <div className="absolute mt-10 right-0 bg-white p-2 rounded-md">
                    {userData.email === "nik@gmail.com" && (
                      <Link
                        to={"newproduct"}
                        className="whitespace-nowrap cursor-pointer px-2"
                      >
                        New product
                      </Link>
                    )}

                    {userData.email ? (
                      <p
                        className="cursor-pointer text-white px-2 bg-red-500"
                        onClick={handleLogout}
                      >
                        Logout {userData.email}
                      </p>
                    ) : (
                      <Link
                        to={"/login"}
                        className="whitespace-nowrap cursor-pointer px-2"
                      >
                        Login
                      </Link>
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
        enter="transition ease-out duration-400 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-125 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" ref={ref}>
            <div className="text-white p-8 flex flex-col gap-4">
              <div className="bg-[#d5294d] hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-sm px-4 py-2">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </div>
              <div className="bg-[#d5294d] hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-sm px-4 py-2">
                <Link to="contact">
                  <p>Contact</p>
                </Link>
              </div>
              <div className="bg-[#d5294d] hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-sm px-4 py-2">
                <Link to="about">
                  <p>About Us</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
