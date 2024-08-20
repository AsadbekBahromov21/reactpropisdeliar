import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const Products = ({ data, title }) => {
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div className="border p-3 mb-7 relative" key={product.id}>
      <div className="w-full h-60 bg-gray-200 rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-105"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>{product.title}</p>
        <strong>{product.price} USD</strong>
        <div className="absolute top-[5px] left-[10px]">
          <button>
            <FaHeart
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: product });
                toast.success("Mahsulot  qo'shildi ");
              }}
              className="text-20px hover:text-red-900"
            />
          </button>
        </div>
        <button
          className="border bg-lime-600 py-1 text-[#fff] "
          onClick={() => {
            dispatch({ type: "CART", payload: product });
            toast.success("Tanlangan maxsulot qoshildi");
          }}
        >
          add cart
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
