import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { RxCross2 } from "react-icons/rx";
import { baseURL } from "../components/Admin/api";

const Cart = () => {
  const productcartItems = useSelector((state) => state.product.cartItem);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const user = useSelector((state) => state.user);
  const totalPrice = productcartItems.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productcartItems.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        "pk_test_51NKO11SFNB5NKPFS71M8pGFzVBLImxOvG2UywkJofGWrN4hsWvxXdWfFaHpGEnluZoTBTZAa3Fh9ey6l9g0ZuE5D00ypujXOtb"
      );
      const res = await fetch(
        `${baseURL}/checkout-payment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productcartItems),
        }
      );
      if (res.statusCode === 500) return;

      const data = await res.json();

      toast("Redirect to Payment Gateway....!");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login");
      setTimeout(() => {
        navigate("/login");
      }, 100);
    }
  };
  return (
    <>
      <div className="">
        {productcartItems[0] ? (
          <>
            <div className="my-4 flex flex-col gap-4">
              <p className="text-mainclr text-center font-medium">CART</p>
              <h1 className="text-4xl text-center font-bold">
                Your Cart Items
              </h1>
            </div>
            <div className="w-full my-10 gap-10 justify-between md:flex ">
              {/* Display Cart items */}

              <div className="flex  w-full flex-col gap-4">
                <div className="w-full rounded-xl shadow-sm p-4 sha2 justify-items-center grid grid-cols-3">
                  <h1 className="capitalize text-normal font-semibold">
                    Product Details
                  </h1>
                  <h1 className="capitalize text-normal font-semibold">
                    Quantity
                  </h1>
                  <h1 className="capitalize text-normal font-semibold">
                    Subtotal
                  </h1>
                </div>

                {/* Modal */}

                <div>
                  {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                      <div className="bg-white flex flex-col justify-between  h-1/2 p-6 rounded-lg relative">
                        <div className="flex justify-end">
                          <button
                            
                            onClick={closeModal}
                          >
                           <RxCross2/>
                          </button>
                        </div>
                        <h2 className="text-xl font-bold mb-4">Your Total Products</h2>
                        <div>
                          <div className="flex justify-between">
                            <p className="text-sm font-semibold">
                              Total Quantity
                            </p>
                            <p>{totalQty}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm font-semibold">Discount</p>
                            <p>0%</p>
                          </div>
                          <div className="flex mb-2 justify-between">
                            <p className="text-sm font-semibold">Shipping</p>
                            <p>Free</p>
                          </div>
                          <hr></hr>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-sm font-semibold">Total Price</p>
                          <p>{totalPrice}</p>
                        </div>
                        <button
                          onClick={handlePayment}
                          className="bg-mainclr px-4 py-2 rounded-full text-white"
                        >
                          Proceed To Payment
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal End */}

                {productcartItems.map((el) => {
                  return (
                    <CartProduct
                      id={el._id}
                      key={el._id}
                      name={el.name}
                      image={el.image}
                      price={el.price}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}
                    />
                  );
                })}
              </div>

              {/* Total Cart Items */}
              <div className="flex rounded-xl flex-col mt-8 md:mt-0 gap-4 h-fit w-full md:w-1/3 p-4 sha2 border">
                <h1 className="text-2xl font-semibold">Total</h1>
                <div>
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold">Total Quantity</p>
                    <p>{totalQty}</p>
                  </div>
                  
                  <div className="flex mb-2 justify-between">
                    <p className="text-sm font-semibold">Shipping</p>
                    <p>Free</p>
                  </div>
                  <hr></hr>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">Total Price</p>
                  <p>{totalPrice}</p>
                </div>

                <div className="rounded-xl py-2 px-4 sha2 flex justify-center">
                  <input
                    type="text"
                    className="bg-transparent outline-none "
                    placeholder="Enter coupon to get discount"
                  />
                  <button className="bg-mainclr px-2 hover:bg-red-800 transition-all text-white rounded-xl">
                    Check
                  </button>
                </div>

                <button
                  onClick={openModal}
                  className="bg-mainclr px-4 py-2 rounded-full text-white"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-6 flex-col my-8 justify-center items-center">
            <h1 className="text-center text-xl font-semibold ">
              Your Cart is Empty
            </h1>
            <img
              className=""
              src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687243479/Cart_illustartion_bewtgt.png"
            />
            <p className="text-center font-normal text-lg w-1/2">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link to="/">
              <button className="bg-mainclr px-4 py-2 rounded-full text-white">
                Go Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
