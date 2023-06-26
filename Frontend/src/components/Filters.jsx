import { AiOutlineClose } from "react-icons/ai";

const Filters = ({ isFilterOpen, setIsFilterOpen }) => {
  return (
    <div
      className={` fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
    transition-all ease-in-out duration-300  ${
      isFilterOpen ? "left-0 " : "-left-96"
    }
    `}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Filter Products</h1>
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </div>
      <button className="py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors ">
        Clear
      </button>
      <section className="py-3">
        <div className="grid grid-rows-2 grid-cols-2 gap-2"></div>
      </section>
      <section className="py-3"></section>
      <section className="py-3">
        <div className="flex flex-col gap-2">
          hillllllllllllllllllllllllllllllllllllllllllllllll
        </div>
      </section>

      <section className="py-3 flex flex-col gap-2"></section>
    </div>
  );
};

export default Filters;
