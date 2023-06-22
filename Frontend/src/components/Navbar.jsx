import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaOpencart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
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

            <div className="hidden z-10 sm:block sm:ml-6">
              {showMenu && (
                <div>
                  <div className="absolute flex flex-col p-4 justify-center gap-1 mt-10 right-0 bg-white border shadow-md rounded-xl">
                    {userData.email === "nik@gmail.com" && (
                      <Link to={"admin"}>
                        <div className="flex cursor-pointer gap-4  text-black border shadow-md p-2 rounded-lg  items-center">
                          <FaUserCircle size={20} />

                          <p>Admin</p>
                        </div>
                      </Link>
                    )}

                    {userData.email ? (
                      <div className="flex flex-col gap-1">
                        <div className="flex cursor-pointer gap-4  text-black border shadow-md p-2 rounded-lg  items-center">
                          <FaUserCircle size={20} />

                          <p className="">{userData.email}</p>
                        </div>
                        <div className="flex  cursor-pointer bg-mainclr text-white p-2 shadow-md rounded-lg justify-between items-center">
                          <p className="" onClick={handleLogout}>
                            Logout
                          </p>
                          <IoLogOutOutline size={20} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-6 cursor-pointer bg-mainclr text-white p-2 shadow-md rounded-lg justify-between items-center">
                        <Link to={"/login"}>Login</Link>
                        <IoLogInOutline />
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
              <div className="flex justify-center items-center gap-8">
                <Link to="/cart">
                  <Badge
                    color="red"
                    placement="top-end"
                    overlap="top-end"
                    content={CartItemNum.length}
                    withBorder
                  >
                    <FaOpencart size={24} />
                  </Badge>
                </Link>

                <div className="cursor-pointer" onClick={handleShowMenu}>
                  {showMenu ? (
                    userData.email ? (
                      <FaUserTie size={24} />
                    ) : (
                      <FaUserCircle size={24} />
                    )
                  ) : (
                    <FaUserCircle size={24} />
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu  */}

            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <div className="flex justify-center gap-6 items-center">
                <div>
                  <Link to="/cart">
                    <Badge
                      color="red"
                      placement="top-end"
                      overlap="top-end"
                      content={CartItemNum.length}
                      withBorder
                    >
                      <FaOpencart size={24} />
                    </Badge>
                  </Link>
                </div>

                <div className="cursor-pointer" onClick={handleShowMenu}>
                  {showMenu ? (
                    userData.email ? (
                      <FaUserTie size={24} />
                    ) : (
                      <FaUserCircle size={24} />
                    )
                  ) : (
                    <FaUserCircle size={24} />
                  )}
                </div>
              </div>

              <div className="ml-4">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2"
                >
                  {isOpen ? (
                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMenu className="block  h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {showMenu && (
                <div>
                  <div className="absolute z-10 flex flex-col p-4 justify-center gap-1 mt-10 right-0 bg-white border shadow-md rounded-xl">
                    {userData.email === "nik@gmail.com" && (
                      <Link to={"admin"}>
                        <div className="flex cursor-pointer gap-4  text-black border shadow-md p-2 rounded-lg  items-center">
                          <FaUserCircle size={20} />

                          <p>Admin</p>
                        </div>
                      </Link>
                    )}

                    {userData.email ? (
                      <div className="flex flex-col gap-1">
                        <div className="flex cursor-pointer gap-4  text-black border shadow-md p-2 rounded-lg  items-center">
                          <FaUserCircle size={20} />

                          <p className="">{userData.email}</p>
                        </div>
                        <div className="flex  cursor-pointer bg-mainclr text-white p-2 shadow-md rounded-lg justify-between items-center">
                          <p className="" onClick={handleLogout}>
                            Logout
                          </p>
                          <IoLogOutOutline size={20} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-6 cursor-pointer bg-mainclr text-white p-2 shadow-md rounded-lg justify-between items-center">
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
        enter="transition ease-out duration-400 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-125 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="sm:hidden" ref={ref}>
            <div className="text-white text-center py-10 px-20 flex flex-col gap-4">
              <div className="bg-[#d5294d] shadow-sm   hover:scale-[0.9] transition-all hover:bg-[#b31d3f] rounded-full px-4 py-2">
                <Link to="/">
                  <p>Home</p>
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
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
