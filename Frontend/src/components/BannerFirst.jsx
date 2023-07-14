import React from "react";

const BannerFirst = () => {
  return (
    <div className="mt-10">
       <p className="text-mainclr font-medium text-center mb-2">FAVOURITE</p>
      <h1 className="text-3xl font-bold text-center">Why People Choose Us?</h1>
      <div className="sm:grid grid-cols-2 items-center">
        <div className="flex justify-center items-center">
          <img
            className="w-[70%]"
            src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687411927/image_1_kmbet2.png"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <img
              className="bg-gray-200 rounded-full w-20 h-20"
              src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1689345297/3D_Food_Icon_by_OdafeUI_1_gmntg5.png"
            />
            <div>
              <h1 className="text-lg font-semibold">Choose Your Favourite</h1>
              <p className="text-sm mt-2 text-gray-800">
                Let your taste buds guide you as you choose your favorite food
                from our carefully crafted menu.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="bg-gray-200 rounded-full w-20 h-20"
              src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1689345296/3D_Food_Icon_by_OdafeUI_nfjkia.png"
            />
            <div>
              <h1 className="text-lg font-semibold">We Deliver Your Meals</h1>
              <p className="text-sm mt-2 text-gray-800">
                Discover the joy of doorstep dining with our efficient and
                reliable meal delivery service.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="bg-gray-200 rounded-full w-20 h-20"
              src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1689345296/3D_Food_Icon_by_OdafeUI_2_ol5ruw.png"
            />
            <div>
              <h1 className="text-lg font-semibold">
                Grab Your Delicious Food
              </h1>
              <p className="text-sm mt-2 text-gray-800">
                Give in to your cravings and grab the food that will leave you
                with a smile on your face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFirst;
