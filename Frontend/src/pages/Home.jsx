import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import CardFeatures from "../components/CardFeatures";
import MainLoader from "../components/MainLoader";
import { Link } from "react-router-dom";
import BannerFirst from "../components/BannerFirst";
import BannerSecond from "../components/BannerSecond";
import { Img } from "../utils/helper";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);
  const productCartVegetableCardList = productData.slice(8, 12);

  return productData?.length === 0 ? (
    <MainLoader />
  ) : (
    <div className="p-2 md:p-4 ">
      <div className="md:flex w-full justify-center items-center gap-4 py-2">
        <div className="md:w-1/2">
          <p className="bg-red-100 inline-block rounded-full px-4 py-2">
            Hungry?
          </p>
          <h2 className="text-5xl md:text-6xl md:text-left text-left font-semibold py-4">
            Just Come to{" "}
            <span className="bg-gradient-to-r from-[#d5294d] to-[#B6035C] text-transparent bg-clip-text font-bold">
              FoodWaale
            </span>{" "}
            & Order
          </h2>
          <p className="py-3 capitalize text-base font-normal ">
            Here you will find all the best quality and pure food. order now to
            satisfy your hunger.
          </p>
          <div className="flex  gap-4 mt-2">
            <button
              onClick={() =>
                window.scrollTo({ top: "1100", behavior: "smooth" })
              }
              className="bg-gradient-to-r from-[#d5294d] to-[#B6035C]  px-4 py-2 rounded-full text-white"
            >
              Order Now
            </button>
            <Link to={"/product"}>
              <button className=" hover:bg-mainclr hover:text-white  transition-all border-red-300 px-4 py-2 rounded-full shaBlack text-black">
                Explore Food
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div
            className="w-full rounded-full bg-gray-200 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            style={{ height: "80%", width: "80%" }}
          ></div>
          <Img
          width={500}
          height={500}
            className=" relative max-w-lg"
            src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1688670097/My_project_2_fkjbyq.png"
          />
        </div>
      </div>

      <BannerFirst />

      <div className="flex gap-2 mt-10 flex-col justify-center items-center">
        <p className="text-mainclr font-medium">MENU</p>
        <h1 className="text-4xl font-bold">Explore Our Best Menu</h1>
        <p className="text-gray-600  text-center">
          Choose your meals from our diverse weekly menu. Find gluten or dairy
          free, low carb & veggie options.
        </p>
      </div>

      <div className="gap-4 grid mt-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
        {homeProductCartList.map((el) => {
          return (
            <HomeCard
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
              rating={el.rating}
              discount={el.discount}
            />
          );
        })}
      </div>

      <BannerSecond/>

      <div className="mt-20">
        <div className="gap-2 flex flex-col justify-center items-center w-full">
          <p className="text-mainclr text-center font-medium">
            Our Fresh Product{" "}
          </p>
          <h2 className="text-4xl text-center  capitalize font-bold">
            That Always makes you fall in love
          </h2>
        </div>

        <div className="gap-4 grid mt-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
          {productCartVegetableCardList.map((el) => {
            return (
              <CardFeatures
                key={el._id}
                id={el._id}
                name={el.name}
                price={el.price}
                category={el.category}
                image={el.image}
                rating={el.rating}
                discount={el.discount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
