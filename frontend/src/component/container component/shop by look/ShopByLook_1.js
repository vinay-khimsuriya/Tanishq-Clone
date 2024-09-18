import React from "react";
import ShopByLookComponent from "../../../comman component/ShopByLookComponent";
import workwear from "../../../img/static images/shop the look/workwear.webp";
import sleek from "../../../img/static images/shop the look/sleek.webp";
import elgant from "../../../img/static images/shop the look/elgant.webp";

export default function shopByLook_1() {
  return (
    <div className="w-full flex justify-center mb-4">
      <div className="w-full sm:w-5/6 flex flex-wrap sm:flex-nowrap justify-center items-end  py-2">
        <ShopByLookComponent imagePath={workwear} name="Work wear" />
        <ShopByLookComponent imagePath={sleek} name="Sleek" />
        <ShopByLookComponent imagePath={elgant} name="Elgant" />
        <ShopByLookComponent name="Try Your Image" />
      </div>
    </div>
  );
}
