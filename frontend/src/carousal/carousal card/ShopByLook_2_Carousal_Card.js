import React from "react";

export default function ShopByLook_2_Carousal_Card({ imagePath, name, price }) {
  return (
    <div className="w-96 border shrink-0 mt-5 lg:mt-0 rounded bg-white">
      <div className="w-full p-3">
        <img src={imagePath}></img>
      </div>
      <div className="w-full px-2 text-start px-5 py-5">
        <h1 className="text-lg text-[#212121] pb-3">{name}</h1>
        <p className="font-medium pb-3"> &#8377; {price}</p>
      </div>
      <div className="absolute w-9 h-9 top-6 right-6 bg-black bg-opacity-5 flex justify-center items-center rounded-full">
        <i class="fa-regular fa-heart text-xl text-stone-900"></i>
      </div>
    </div>
  );
}
