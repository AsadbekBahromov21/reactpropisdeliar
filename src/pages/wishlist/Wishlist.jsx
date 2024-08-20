import Products from "@/components/products/Products";
import { useStateValue } from "@/context/Index";
import React from "react";

const Wishlist = () => {
  let [data, dispatch] = useStateValue();
  console.log(data.wishlist);

  return (
    <div>
      <Products title={"Wishlist"} data={data.wishlist} />
    </div>
  );
};

export default Wishlist;
