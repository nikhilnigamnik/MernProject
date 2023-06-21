import React, { useContext, useEffect, useState } from "react";

import UserDetails from "./UserDetails";
import axios from "axios";
import AdminLeft from "./AdminLeft";
import AdminRight from "./AdminRight";
import { baseURL } from "./api";
import { userRedux } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { productRedux } from "../../redux/productSlice";

const Admin = () => {
const dispatch = useDispatch();


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseURL}/product`);
      if(response.data){

        dispatch(productRedux(response.data));
      }
      const resData = response.data;
      console.log(resData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/users`);
      if (response.data) {
        dispatch(userRedux(response.data));
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="md:flex justify-between md:gap-8">
        <AdminLeft />
        <AdminRight />
      </div>
    </>
  );
};

export default Admin;
