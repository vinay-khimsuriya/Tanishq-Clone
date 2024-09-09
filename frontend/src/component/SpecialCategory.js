import React from "react";
import ganesh from "../img/static images/GaneshaChaturthi.webp";
import Delightful from "../img/static images/DelightfulDiamonds.webp";
import Elegant from "../img/static images/ElegantNecklaces.webp";
import Arrivals from "../img/static images/NewArrival.webp";
import DailyWeares from "../img/static images/DailyWearJewellery.webp";

export default function SpecialCategory() {
  const images = [ganesh, Delightful, Elegant, Arrivals, DailyWeares];
  const nameArr = [
    "Ganesha Chaturthi",
    "Delightful Diamonds",
    "Elegant Necklaces",
    "New Arrivals",
    "Daily Wear Jewellery",
  ];
  return (
    <div className="w-full flex justify-center py-6 pb-18 lg:hidden ">
      <div className="w-5/6 gap-6 flex flex-nowrap justify-center items-start">
        {images.map((object, index) => (
          <div key={index} className="w-52">
            <div className="main-animate-div size-full flex flex-col items-center">
              <div className="outline-3 animate-spin-outline size-14 sm:size-20 md:size-[5.5rem] rounded-full outline outline-[#110a3b] outline-offset-8">
                <div className="animate-counter-spin size-14 sm:size-20 md:size-[5.5rem] rounded-full">
                  <img
                    src={object}
                    className="h-full w-full rounded-full"
                  ></img>
                </div>
              </div>
              <h1 className="w-full mt-6 text-center text-sm">
                {nameArr[index]}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="size-14 sm:size-20 md:size-24 rounded-full relative">
  <img
    className="size-14 sm:size-20 md:size-24 rounded-full"
    src={object}
  />
  <div className="size-14 sm:size-20 md:size-24 absolute top-0 left-0 bg-transparent outline-dashed outline-3 outline-red-500 rounded-full outline-offset-8 hover:animate-spin"></div>
</div> */
}
