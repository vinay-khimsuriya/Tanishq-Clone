import React from "react";

export default function ShopByCategoryComponent({ imagePath, name }) {
  return (
    <div className="w-full border">
      <div className="w-full rounded-t-sm">
        <img className="w-full rounded-t-sm" src={imagePath} />
      </div>
      <div className="w-full flex flex-col justify-center items-center hover:shadow-slate-700 py-3 rounded-b-md hover:shadow-rose-300 hover:shadow-sm transition-all">
        <h1 className="text-lg text-default-extra-high my-2">{name}</h1>
        <div className="w-16 hover:w-[80%] flex items-center justify-between transition-all duration-500 text-light text-sm rounded-b-md hover:text-red-800">
          <p className="pb-1">Explore</p>
          <i class="fa-solid fa-chevron-right text-xs"></i>
        </div>
      </div>
    </div>
  );
}
