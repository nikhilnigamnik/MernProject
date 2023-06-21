import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataProduct } from "../../redux/productSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";

const ProductItem = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  const [productsId, setProductsId] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    // Initialize productsId with an empty array
    setProductsId([]);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://backend-mernss.onrender.com/product"
      );
      const resData = response.data;
      dispatch(setDataProduct(resData));
      // Update productsId with the fetched data
      setTotalProducts(resData.length);
      setProductsId(resData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `https://backend-mernss.onrender.com/product/${productId}`
      );
      if (response.status === 200) {
        // alert("Product deleted successfully!");
        window.location.reload();
        toast("Deleting...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 flex flex-col">
      <h2>Product List</h2>
      <p>Total Products: {totalProducts}</p>
      <div className="flex mt-4 flex-col gap-4">
        {productsId.length > 0 ? (
          productsId.map((product) => (
            <div
              className="flex p-4 shadow-sm border justify-between items-center"
              key={product._id}
            >
              <div className="">
                <img className="w-20 max-w-sm" src={product.image} />
                <h1>Product Name : {product.name}</h1>
                <h1>Category : {product.category}</h1>
                <h1>Price : {product.price}</h1>
              </div>
              <AiFillDelete onClick={() => handleDelete(product._id)} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
