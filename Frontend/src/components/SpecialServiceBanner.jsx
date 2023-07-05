import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { SiIfood } from "react-icons/si";

const SpecialServiceBanner = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-mainclr font-medium">SERVICE</p>
        <h1 className="text-4xl font-bold">Foodwaale Can Be Your</h1>
        <h1 className="text-4xl font-bold">Daily Service</h1>
      </div>
      <div className="flex gap-4 mt-6 items-center justify-around flex-wrap">
        <div className="border hover:shadow-md onhover p-2 gap-2 flex flex-col items-center justify-center  h-28 rounded-xl">
          <p>Fast Delivery</p>
          <TbTruckDelivery className="bg-red-500 text-white rounded-full p-1" size={35} />
        </div>
        <div className="border flex flex-col items-center justify-center w-28 h-28 rounded-xl">
          <p>Fresh Food</p>
          <IoFastFood size={25} />
        </div>
        <div className="border flex flex-col items-center justify-center w-28 h-28 rounded-xl">
          <p>Big Discount</p>
          <TbDiscount2 size={25} />
        </div>
        <div className="border flex flex-col items-center justify-center w-28 h-28 rounded-xl">
          <p>Free Delivery</p>
          <TbShoppingCartDiscount size={25} />
        </div>
        <div className="border flex flex-col items-center justify-center w-28 h-28 rounded-xl">
          <p>Healthy Food</p>
          <SiIfood size={25} />
        </div>
      </div>
    </div>
  );
};

export default SpecialServiceBanner;
