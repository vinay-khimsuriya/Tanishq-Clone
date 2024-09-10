import React from "react";
import demo from "../../img/static images/profile.jpg";
export default function CommonCard({ product }) {
  const { title, price, image } = product;
  //   console.log(title, price, image);

  const leftOnly = price % 4;
  // console.log(leftOnly);
  return (
    <div className="p-[0.675rem] border bg-default-light border-zinc-400">
      <div className="text-start">
        <img src={image} className="w-full" />
        <div className="ps-1 pt-2">
          <p className="text-red-500 text-sm">Only {leftOnly} left in stock</p>
          <h1 className="text-sm font-semibold truncate mt-1 font-sans">
            {title}
          </h1>
          <h1 className="mt-3">
            <i class="fa-solid fa-indian-rupee-sign"></i> {price}
          </h1>
        </div>
      </div>
    </div>
  );
}
