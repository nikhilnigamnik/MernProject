import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeatures";
import MainLoader from "./MainLoader";
import { RxCross2 } from "react-icons/rx";
import { BiFilter } from "react-icons/bi";
import Carausel from "./Carausel";

const AllProduct = () => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  const [filterBy, setFilterBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    setSearchResults(productData);
  }, [productData]);

  useEffect(() => {
    let filteredResults = [...productData];

    // Filter by category
    if (filterBy !== "") {
      filteredResults = filteredResults.filter(
        (el) => el.category.toLowerCase() === filterBy.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery !== "") {
      filteredResults = filteredResults.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by price
    if (sortOrder === "lowToHigh") {
      filteredResults.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filteredResults.sort((a, b) => b.price - a.price);
    }

    setSearchResults(filteredResults);
  }, [filterBy, searchQuery, sortOrder, productData]);

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

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  

  return productData?.length === 0 ? (
    <MainLoader />
  ) : (
    <div className="mb-20">
      {/* <Carausel /> */}
      <div className="flex flex-col gap-2">
        <p className="text-mainclr text-center font-medium">OUR PRODUCT</p>
        <h1 className="text-4xl text-center font-bold">Menu Product</h1>
      </div>
      <div className="text-center flex flex-col sm:flex-row justify-between items-center mt-8">
        <div className="pl-3 pr-1 py-1 flex justify-between items-center rounded-full sha2 mb-4 sm:mb-0">
          <input
            type="text"
            className="px-2 bg-transparent outline-none"
            onChange={handleSearchChange}
            value={searchQuery}
            placeholder="Search product..."
          />
          <button
            className="bg-mainclr text-white px-6 py-2 rounded-full sm:ml-4"
            onClick={() => setSearchQuery("")}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="flex gap-4">
          <select
            className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-full shadow-md ml-4 focus:outline-none"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>

          <button
            onClick={handleToggle}
            className="px-4 py-1 bg-gray-900 rounded-full text-white flex items-center ml-auto mr-2"
          >
            <BiFilter size={22} />
            Filter
          </button>
        </div>
      </div>
      {/* Filter Product Menu */}
      <section
        className={`bg-white/70 backdrop-blur-3xl shadow-xl py-4 px-4 w-[20rem] h-screen top-0 fixed z-10 transition-all ease-in-out duration-300 ${
          isFilterOpen ? "left-0" : "-left-80"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Filter Products</h1>
          <RxCross2
            className="cursor-pointer transition-all duration-300 hover:bg-black hover:text-white rounded-md p-1"
            onClick={handleToggle}
            size={25}
          />
        </div>
        <button
          className="bg-mainclr mt-4 text-sm text-white px-6 py-1 rounded-lg"
          onClick={() => setFilterBy("")}
        >
          Clear
        </button>
        <div className="mt-4 flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Category</h1>
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
      </section>

      {searchResults.length === 0 ? (
        <h1 className="text-center mt-8 font-semibold ">No Search Found</h1>
      ) : (
        <div className="my-4">
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
