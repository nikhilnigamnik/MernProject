import React from "react";
import { Link } from "react-router-dom";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="sha2">
      <div className="py-8 w-[80vw] justify-between gap-4 m-auto sm:flex-row flex flex-col items-center">
        <Link className="" to="/">
          <img
            width={120}
            src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687529082/S_p0d2fn.png"
          />
        </Link>
        <div className="flex gap-6">
          <Link to="/product">
            <p>Product</p>
          </Link>

          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <Link to="/about">
            <p>About Us</p>
          </Link>
        </div>
        <div className="flex gap-6">
          <span className="bg-mainclr cursor-pointer onhover hover:bg-red-800 rounded-full p-3 text-white">
            <SlSocialGithub size={18} />
          </span>
          <span className="bg-mainclr cursor-pointer onhover hover:bg-red-800 rounded-full p-3 text-white">
            <SlSocialFacebook size={18} />
          </span>
          <span className="bg-mainclr cursor-pointer onhover hover:bg-red-800 rounded-full p-3 text-white">
            <SlSocialInstagram size={18} />
          </span>
          <span className="bg-mainclr cursor-pointer onhover hover:bg-red-800 rounded-full p-3 text-white">
            <SlSocialLinkedin size={18} />
          </span>
        </div>
      </div>
      
        <h1 className="text-center bg-mainclr p-2 text-white font-medium tracking-widest text-xl">All Right Reserved</h1>
      
    </div>
  );
};

export default Footer;
