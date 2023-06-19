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

  const CartItemNum = useSelector(state => state.product.cartItem)

  return (
    <nav className="bg-gray-50  shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex gap-3 items-center sm:hidden">
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



            {showMenu && (
                <div>
                  <div className="absolute mt-10 right-0 bg-white p-2 shadow-md rounded-md">
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
                        Logout {(userData.email)}
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Your logo or brand */}
              <Link to="/">
                <img
                  width={100}
                  src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684857846/logo_o2djkp.png"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">





            <div className="flex gap-10 items-center space-x-4">
              {/* Your navigation links */}
              <Link to="/">
                <p>HOME</p>
              </Link>
              
              <Link to="/contact">
                <p>CONTACT</p>
              </Link>
              <Link to="/about">
                <p>ABOUT</p>
              </Link>
              
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


              {showMenu && (
                <div>
                  <div className="absolute mt-10 right-0 bg-white p-2 shadow-md rounded-md">
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
                        Logout {(userData.email)}
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Your mobile navigation links */}
              <Link to="/">
                <p>HOME</p>
              </Link>
              
              <Link to="contact">
                <p>CONTACT</p>
              </Link>
              <Link to="about">
                <p>ABOUT</p>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
