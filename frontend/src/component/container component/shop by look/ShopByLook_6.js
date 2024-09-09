import React from "react";
import RivaahBride from "../../../img/static images/shop the look/Rivaah-Bride.jpg";
import rivahDesktop from "../../../img/static images/shop the look/rivah_desktop.webp";

export default function ShopByLook_6() {
  return (
    <div className="w-full lg:flex mt-5">
      <div className="w-full lg:w-1/2">
        <img className="w-full" src={RivaahBride} />
      </div>
      <div className="w-full lg:w-1/2 relative">
        <img className="w-full" src={rivahDesktop} />
        <div className="flex absolute bottom-5 right-1/2 translate-x-[50%] font-medium text-lg">
          <button className="btn-toggele px-8 py-[0.375rem] text-nowrap rounded-lg me-2">
            Arrange a Callback
          </button>
          <button className="btn-toggele px-8 py-[0.375rem] text-nowrap rounded-lg ms-2">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
