import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const productcartItems = useSelector((state) => state.product.cartItem);
  const navigate = useNavigate();
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
      const res = await fetch("https://backend-mernss.onrender.com/checkout-payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productcartItems),
      });
      if (res.statusCode === 500) return;

      const data = await res.json();
     
      toast("Redirect to Payment Gateway....!");
      stripePromise.redirectToCheckout({ sessionId: data });
    }
    else{
      toast("You have not Login");
      setTimeout(()=> {
        navigate("/login")
      },100)
    }
  };
  return (
    <>
      <div className="p-2 md:p-4">
        <h1>Your Cart Items</h1>

        {productcartItems[0] ? (
          <div className="w-full gap-10 justify-between md:flex max-w-3xl ">
            {/* Display Cart items */}
            <div className="">
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
            <div className=" ml-auto">
              <h1>Checkout</h1>
              <div>
                <p>Total Quantity {totalQty}</p>
                <p>Total Price {totalPrice}</p>
              </div>
              <Button onClick={handlePayment}>Checkout</Button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center">
            <img
              className="w-full max-w-lg"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6910d1112421559.6013fd8d41f44.jpg"
            />
            <Link to="/">
              <Button>Continue</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
