import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeatures";
import { useSelector } from "react-redux";

const AllProduct = () => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // filterData
  const [filterBy, setfilterBy] = useState("");
  const [filterByCategory, setFilterByCategory] = useState(productData);

  useEffect(() => {
    setFilterByCategory(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setfilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setFilterByCategory(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-20">
      <div className="flex flex-col gap-2">
        <p className="text-mainclr text-center font-medium">Our Category</p>
        <h1 className="text-4xl text-center font-bold">Menu Category</h1>
      </div>

      <div className="flex   gap-8 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] &&
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterBy.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {filterByCategory.map((el) => {
          return (
            <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
