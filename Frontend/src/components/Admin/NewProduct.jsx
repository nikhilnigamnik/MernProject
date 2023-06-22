import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../../utils/ImagetoBase62";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `https://backend-mernss.onrender.com/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      toast.success(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast.error("Enter required Fields");
    }
  };
  return (
    
      <div className="">
        <div className="p-4 bg-white">
          <form
            className=" rounded-md flex flex-col p-4 "
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type={"text"}
              name="name"
              className="border p-1 my-1"
              onChange={handleOnChange}
              value={data.name}
            />

            <label htmlFor="category">Category</label>

            <select
              className="bg-slate-200 capitalize p-1 my-1"
              id="category"
              name="category"
              onChange={handleOnChange}
              value={data.category}
            >
              <option value={"other"}>select category</option>
              <option value={"fruits"}>Fruits</option>
              <option value={"vegetable"}>Vegetable</option>
              <option value={"icream"}>Icream</option>
              <option value={"dosa"}>Dosa</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"rice"}>rice</option>
              <option value={"cake"}>Cake</option>
              <option value={"burger"}>Burger</option>
              <option value={"panner"}>Panner</option>
              <option value={"sandwich"}>Sandwich</option>
            </select>

            <label htmlFor="image">
              Image
              <div className="h-40 border w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
                {data.image ? (
                  <img src={data.image} className="h-full " />
                ) : (
                  <span className="text-5xl">
                    <BsCloudUpload />
                  </span>
                )}

                <input
                  type={"file"}
                  accept="image/*"
                  id="image"
                  onChange={uploadImage}
                  className="hidden"
                />
              </div>
            </label>

            <label htmlFor="price" className="my-1">
              Price
            </label>
            <input
              type={"text"}
              className="border p-1 my-1"
              name="price"
              onChange={handleOnChange}
              value={data.price}
            />

            <label htmlFor="description">Description</label>
            <textarea
              rows={2}
              value={data.description}
              className="border p-1 my-1 resize-none"
              name="description"
              onChange={handleOnChange}
            ></textarea>

            <button className="bg-mainclr text-[10px] px-2 py-2 rounded-full text-white">
              Save
            </button>
          </form>
        </div>
      </div>
  
  );
};

export default NewProduct;
