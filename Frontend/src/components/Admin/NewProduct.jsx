import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import { baseURL } from "./api";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
    discount: "",
    rating: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setData((prev) => {
      return {
        ...prev,
        image: file,
      };
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, category, price, discount, rating } = data;

    if (name && category && price && discount && rating) {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("image", data.image,data.image.name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("rating", rating);
      formData.append("description", data.description);

      if (name && data.image && category && price && discount && rating) {
        try {
          const fetchData = await fetch(`${baseURL}/uploadProduct`, {
            method: "POST",
            body: formData,
          });

          const fetchRes = await fetchData.json();

          toast(fetchData.message);

          setData({
            name: "",
            image: null,
            category: "",
            price: "",
            discount: "",
            description: "",
            rating: "",
          });
        } catch (error) {
          toast.error("Upload Failed");
          console.error(error);
        }
      } else {
        toast.error("Enter required Field");
      }
    }
  };

  return (
    <div className="p-4">
      <form className="flex flex-col p-4 rounded-md " onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="p-1 my-1 border rounded-lg"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>

        <select
          className="p-1 my-1 capitalize rounded-lg bg-slate-200"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"icecream"}>Icecream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="flex items-center justify-center w-full h-40 border rounded rounded-lg cursor-pointer bg-slate-200">
            {data.image ? (
              <img
                src={URL.createObjectURL(data.image)}
                alt="product"
                className="h-full "
              />
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
              className="hidden "
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="p-1 my-1 border rounded-lg"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />
        <label htmlFor="discount" className="my-1">
          Discount
        </label>
        <input
          type={"text"}
          className="p-1 my-1 border rounded-lg"
          name="discount"
          onChange={handleOnChange}
          value={data.discount}
        />
        <label htmlFor="rating" className="my-1">
          Rating
        </label>
        <input
          type={"text"}
          className="p-1 my-1 border rounded-lg"
          name="rating"
          onChange={handleOnChange}
          pattern="\d{1,2}\.\d"
          title="Please enter a two-digit number with one decimal place."
          value={data.rating}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          value={data.description}
          className="p-1 my-1 border rounded-lg resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>

        <button className="bg-mainclr text-[10px] px-2 py-3 mt-4 rounded-full text-white">
          Save
        </button>
      </form>
    </div>
  );
};
export default NewProduct;
