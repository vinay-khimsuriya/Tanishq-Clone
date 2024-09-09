import React from "react";
import lookSyteBgBanner from "../../../img/static images/shop the look/look_syte-bg_banner.webp";
import lineDesign from "../../../img/static images/Line-Design.svg";

export default function ShopByLook_3() {
  return (
    <div className="w-full">
      <div className="w-full bg-default-light lg:flex">
        <div className="relative w-full lg:w-1/4">
          <img className="w-full h-40 lg:h-auto" src={lookSyteBgBanner} />
          <div className=" w-full absolute top-1/2 -translate-y-[100%] size-9">
            <i class="fa-regular fa-images text-4xl text-white mb-2"></i>
            <p className="text-white font-medium w-full">Upload your Image</p>
          </div>
        </div>
        <div className="px-3 text-wrap flex justify-center items-center text-default-high w-full lg:w-3/4">
          <p className=" py-8 lg:py-0">
            Look no further! Upload the screenshots from your favorite wedding
            celebrity looks and find similar pieces using image search!
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img src={lineDesign} className="w-[95%]" />
      </div>
    </div>
  );
}
