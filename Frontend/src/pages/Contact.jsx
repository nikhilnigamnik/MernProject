import React from "react";

const Contact = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-mainclr font-medium">CONTACT</p>
        <h1 className="text-4xl font-bold">Get In Touch</h1>
      </div>
      <div className=" flex mt-10 flex-col gap-6 items-center ">
        <input
          size="lg"
          id="fullname"
          name="fullname"
          className="border p-1 rounded-lg"
          placeholder="Full Name"
          label="text"
        />

        <input
          className="border p-1 rounded-lg"
          type="email"
          id="email"
          name="email"
          size="lg"
          placeholder="Email"
          label="email"
        />
        <input
          className="border p-1 rounded-lg"
          type="phone"
          id="phone"
          name="phone"
          size="lg"
          placeholder="Phone"
          label="phone"
        />
        <input
          className="border p-1 rounded-lg"
          type="phone"
          id="phone"
          name="phone"
          size="lg"
          placeholder="Describe Your Issue"
          label="text"
        />
        <div className="">
          <button className="bg-gradient-to-r from-[#d5294d] to-[#B6035C]  px-4 py-2 rounded-full text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
