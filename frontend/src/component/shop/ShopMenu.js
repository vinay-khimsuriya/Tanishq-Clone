import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { TbFilter } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import ShopCard from "./ShopCard";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShopMenu = () => {
  const [name, setname] = useState("Bangels");
  const [quentity, setQuentity] = useState(135);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center py-5 bg-gradient-to-t from-[#eeeeee] to-[#ffffff]">
        <div className="w-full px-10 xl:px-0 xl:w-5/6 pt-4 flex justify-start gap-2 items-center ">
          <Link to={"/"} className="text-lg cursor-pointer">
            Home
          </Link>
          <SlArrowRight />
          <p className="font-medium text-primary text-lg">Bangles</p>
        </div>
      </div>

      <div className="bg-[#eeeeee]">
        <div className="bg-white w-full rounded-t-[32px] flex justify-center">
          <div className="w-full px-2 xl:px-0 xl:w-5/6">
            <div className="flex gap-2 justify-start items-baseline p-3">
              <h1 className="font-medium font-neuton text-3xl ps-2">{name}</h1>
              <p className="text-gray-600 text-xl">({quentity} results)</p>
            </div>
            <div className="flex justify-start lg:justify-between gap-2 p-4 ">
              <div className="flex py-2 border border-gray-300 rounded-full items-center gap-2 px-10 cursor-pointer">
                <TbFilter />
                <p>Filter</p>
                <IoIosArrowDown />
              </div>
              <div className="size-10 lg:size-auto flex justify-center py-2 border border-gray-300 rounded-full items-center gap-2 lg:px-10 cursor-pointer">
                <div className="hidden lg:flex items-center justify-center gap-2">
                  <p className="text-gray-500 ">
                    Sort By: <span className="text-black">Best Maches</span>
                  </p>
                  <IoIosArrowDown />
                </div>
                <BsThreeDots className="lg:hidden" />
              </div>
            </div>
            <div className="flex flex-wrap">
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
