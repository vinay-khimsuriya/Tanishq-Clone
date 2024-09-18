import React from "react";
import shoplookgirl from "../../../img/static images/shop the look/shopLookGirl.webp";
import ShopByLook_2_Carousal from "../../../carousal/ShopByLook_2_Carousal";

export default function ShopByLook_2() {
  return (
    <div className="w-full flex flex-wrap mb-5 items-center  bg-[#f4eeee]">
      <div className="w-full lg:w-1/2 relative">
        <img className="hidden lg:block w-full" src={shoplookgirl} />
        <img
          className="lg:hidden  w-full"
          src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default/dw42d0296d/ShopByLookImages/Desktop/LargeImages/workwear-588x540.jpg"
        />
        <div className="size-7 bg-white bg-opacity-35 absolute top-[36%] right-[8%] rounded-full flex justify-center items-center">
          <div className="growing-inner-div rounded-full bg-white"></div>
        </div>
        <div className="size-7 bg-white bg-opacity-35 absolute bottom-[19.5%] left-[5.4%] rounded-full flex justify-center items-center">
          <div className="growing-inner-div rounded-full bg-white"></div>
        </div>
        <div className="size-7 bg-white bg-opacity-55 absolute bottom-[27%] left-[9.5%] rounded-full flex justify-center items-center">
          <div className="growing-inner-div rounded-full bg-white"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <ShopByLook_2_Carousal />
      </div>
    </div>
  );
}
