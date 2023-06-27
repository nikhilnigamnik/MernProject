import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeatures";
import MainLoader from "./MainLoader";
import { RiCloseFill } from "react-icons/ri";

const AllProduct = () => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  const [filterBy, setFilterBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(productData);
  }, [productData]);

  useEffect(() => {
    const filteredResults = productData.filter((el) =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery, productData]);

  useEffect(() => {
    if (filterBy === "") {
      setSearchResults(productData);
    } else {
      const filter = productData.filter(
        (el) => el.category.toLowerCase() === filterBy.toLowerCase()
      );
      setSearchResults(filter);
    }
  }, [filterBy, productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    if (category === "") {
      setSearchResults(productData);
    } else {
      const filter = productData.filter(
        (el) => el.category.toLowerCase() === category.toLowerCase()
      );
      setSearchResults(filter);
    }
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query === "") {
      setSearchResults(productData);
    }
  };

  return productData?.length === 0 ? (
    <MainLoader />
  ) : (
    <div className="my-20">
      <div className="flex flex-col gap-2">
        <p className="text-mainclr text-center font-medium">Our Category</p>
        <h1 className="text-4xl text-center font-bold">Menu Category</h1>
      </div>

      <div className="text-center mt-8">
        <div className="inline-block">
          <div className="p-1 flex justify-between4 items-center rounded-full sha2">
            <input
              type="text"
              className="px-2 bg-transparent outline-none"
              onChange={handleSearchChange}
              value={searchQuery}
              placeholder="Search product..."
            />
            <button
              className="bg-mainclr text-white px-6 py-2 rounded-full"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className=""
        />
        <RiCloseFill onClick={() => setSearchQuery("")} className="" />
      </div> */}

      <div className="grid grid-flow-col gap-3 justify-center overflow-scroll scrollbar-none">
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

      <button
        className="bg-mainclr text-white px-6 py-2 rounded-full"
        onClick={() => setFilterBy("")}
      >
        Clear
      </button>

      {searchResults.length > 0 && (
        <div className="my-4">
          <h2 className="text-2xl font-semibold mb-2">Search Results:</h2>
          <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
            {searchResults.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  rating={el.rating}
                  discount={el.discount}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
