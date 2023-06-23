import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
// import { ImagetoBase64 } from "../../utils/ImagetoBase62";

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
          const fetchData = await fetch(`https://foodwaalaapi.onrender.com/uploadProduct`, {
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
      <form className=" rounded-md flex flex-col p-4 " onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="border rounded-lg p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>

        <select
          className="bg-slate-200 rounded-lg capitalize p-1 my-1"
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
          <div className="h-40 rounded-lg border w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
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
          className="border rounded-lg p-1 my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />
        <label htmlFor="discount" className="my-1">
          Discount
        </label>
        <input
          type={"text"}
          className="border rounded-lg p-1 my-1"
          name="discount"
          onChange={handleOnChange}
          value={data.discount}
        />
        <label htmlFor="rating" className="my-1">
          Rating
        </label>
        <input
          type={"text"}
          className="border rounded-lg p-1 my-1"
          name="rating"
          onChange={handleOnChange}
          value={data.rating}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          value={data.description}
          className="border rounded-lg p-1 my-1 resize-none"
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
