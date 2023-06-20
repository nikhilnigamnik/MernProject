import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataProduct } from "../../redux/productSlice";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

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
    <div className="p-8">
      <h2>Product List</h2>
      <p>Total Products: {totalProducts}</p>
      {productsId.length > 0 ? (
        productsId.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <img src={product.image} />
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductItem;
