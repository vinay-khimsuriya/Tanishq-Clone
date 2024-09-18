import React from "react";

export default function StaticImageComponentForShopByGender({
  imagePath,
  name,
}) {
  return (
    <div className="w-full rounded-t-md">
      <div className="w-full ">
        <img className="w-full rounded-t-md" src={imagePath} />
      </div>
      <div className="static-img-content w-full h-10 lg:h-16  flex justify-between items-center px-2 pb-2 hover:cursor-pointer rounded-b-md border relative">
        <div className="bg-transparent lg:my-3">
          <h1 className="text-[#7f2e26] font-semibold text-lg md:text-xs lg:text-lg truncate">
            {name}
          </h1>
        </div>
        <div className="explore-div w-28 md:w-24 lg:w-28 flex justify-between items-center text-sm md:text-xs lg:text-sm text-black px-2 absolute right-0 ">
          <p className="">Explore More</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
