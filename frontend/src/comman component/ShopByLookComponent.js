import React from "react";
import workwear from "../img/static images/shop the look/workwear.webp";

export default function ShopByLookComponent({ imagePath, name }) {
  return (
    <div className="w-full my-2 md:my-0 flex flex-col items-center justify-center">
      <div className="">
        {imagePath ? (
          <div className="outline outline-2 rounded-full outline-offset-8">
            <img
              className={`rounded-full blur-[0.9px] ${
                name === "Work wear" ? "size-28" : "size-24"
              }`}
              src={imagePath}
            />
          </div>
        ) : (
          <div className="size-24 bg-orange-900 rounded-full flex justify-center items-center">
            <i class="fa-regular fa-images text-4xl text-white"></i>
          </div>
        )}
      </div>
      <h1 className="mt-3">{name}</h1>
    </div>
  );
}
