import { useStateValue } from "@/context/Index";
import React from "react";
import { FaHeart } from "react-icons/fa";
const Newcart = ({ data, title }) => {
  const [_, dispatch] = useStateValue();
  let items = data?.map((product) => (
    <div
      className="border w-full p-3 mb-7 flex  gap-11 items-center relative"
      key={product.id}
    >
      <div className="w-[350px]  h-60  rounded-lg">
        <img
          className="w-full h-full object-contain duration-300 hover:scale-105"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-8">
          <p className="text-[20px] font-medium">{product.title}</p>
          <p className="w-[70%] text-[14px] ">{product.description}</p>
          <strong className="text-red-500">{product.price} USD</strong>
        </div>
        <div className="absolute top-[5px] left-[10px]">
          <button>
            <FaHeart
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
              className="text-20px hover:text-red-900"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className="border py-1 w-[140px] font-[500]"
          onClick={() => dispatch({ type: "CART", payload: product })}
        >
          Add cart
        </button>
        <button className=" py-1 w-[140px] font-[500] text-red-500">
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-1 gap-2">{items}</div>
    </div>
  );
};

export default Newcart;
