import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import CardFeatures from "../components/CardFeatures";
import left from "../asset/left.png";
import right from "../asset/right.png";

import FilterProduct from "../components/FilterProduct";
import productSlice from "../redux/productSlice";
import AllProduct from "../components/AllProduct";
import RatingAvatar from "../components/RatingAvatar";
import RatingIcons from "../components/RatingIcons";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);
  const productCartVegetableCardList = productData.filter(
    (el) => el.category === "vegetable",
    []
  );

  const loadingArray = new Array(4).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  // filterData
  const [filterBy, setfilterBy] = useState("");
  const [filterByCategory, setFilterByCategory] = useState(productData);

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex justify-center items-center gap-4 py-2">
        <div className="md:w-1/2">
          <p className="bg-red-100 inline-block rounded-full px-4 py-2">
            Hungry?
          </p>

          <h2 className="text-5xl md:text-6xl md:text-left text-left font-semibold py-4">
            Just Come to <span className="text-[#d5294d]">FoodWaale</span> &
            Order
          </h2>
          <p className="py-3 capitalize text-base font-normal ">
            Here you will find all the best quality and pure food. order now to
            satisfy your hunger.
          </p>
          <div className="flex  gap-4 mt-2">
            <button className="bg-mainclr px-4 py-2 rounded-full text-white">
              Order Now
            </button>
            <button className="border px-4 py-2 rounded-full shadow-sm text-black">
              Explore Food
            </button>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-10">
            <div className="flex gap-4 items-center">
              <RatingAvatar />
            </div>

            <div className="">
              <span>Our Happy Customer</span>
              <RatingIcons />
              <p>(12.5K Review)</p>
            </div>
          </div>
        </div>

        <img
          className="w-full max-w-lg"
          src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687194080/DIGITALY_6_r8id0t.png"
        />
      </div>

      <div className="flex gap-2 mt-6 flex-col justify-center items-center">
        <p className="text-mainclr font-medium">MENU</p>
        <h1 className="text-4xl font-bold">Explore Our Best Menu</h1>
        <p className="text-gray-600 w-1/2 md:w-full  inline-block text-center">
          Choose your meals from our diverse weekly menu. Find gluten or dairy
          free, low carb & veggie options.
        </p>
      </div>

      <div className="flex mt-6 flex-wrap justify-center gap-4">
        {homeProductCartList[0]
          ? homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
          : loadingArray.map((el, index) => {
              return <HomeCard key={index} loading={"loading"} />;
            })}
      </div>

      <div className="mt-20">
        <div className="gap-2 flex flex-col justify-center items-center my-10 w-full">
          <p className="text-mainclr text-center font-medium">
            Our Fresh Product{" "}
          </p>
          <h2 className="text-4xl text-center  capitalize font-bold">
            That Always makes you fall in love
          </h2>
          <div className="flex justify-center gap-4">
            <button
              className="rounded-full bg-mainclr p-2"
              onClick={prevProduct}
            >
              <img src={left} />
            </button>
            <button
              className="rounded-full bg-mainclr p-2"
              onClick={nextProduct}
            >
              <img src={right} />
            </button>
          </div>
        </div>

        <div
          className="ml-auto flex gap-4 overflow-scroll  scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {productCartVegetableCardList.map((el) => {
            return (
              <CardFeatures
                key={el._id}
                id={el._id}
                name={el.name}
                price={el.price}
                category={el.category}
                image={el.image}
              />
            );
          })}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
