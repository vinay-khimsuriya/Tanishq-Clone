import React from "react";
import kid from "../img/static images/shop by gender/kid.jpg";

export default function StaticImageComponent({ imagePath, name }) {
  return (
    <div className="w-full rounded-md">
      <div className="w-full">
        <img className="w-full rounded-md" src={imagePath} />
      </div>
      <div className="static-img-content w-full flex justify-between px-2 pb-2 hover:cursor-pointer">
        <div className="bg-transparent ">
          <h1 className="text-[#7f2e26] font-semibold">{name}</h1>
        </div>
        <div className="explore-div flex justify-end items-center text-xs text-black pt-2">
          <p className="">Explore More</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
