import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 mt-10">
      <hr />
      <div className="sm:flex py-10 justify-between">
        <div className="flex flex-col gap-3">
          <img
            width={100}
            src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1687529082/S_p0d2fn.png"
          />
          <div className="flex gap-4 flex-wrap">
            <p>Home</p>
            <p>Product</p>
            <p>Help</p>
            <p>About Us</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1>Get In Touch</h1>
          <div className="flex gap-2">
            <input type="search" className="border rounded px-2 w-36" />
            <button className="bg-mainclr text-white rounded px-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="sm:flex py-10 justify-between">
        <h1>@2023 Foodwaale All rights reserved.</h1>
        <div className="flex gap-4">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Help</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
