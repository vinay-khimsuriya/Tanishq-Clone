import React from "react";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import bg1 from "../../img/static images/shop the look/bg1.png";
import bg2 from "../../img/static images/shop the look/bg2.png";

export default function JewelleryGuides() {
  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Jewellery Guides"
        dec="Check out our ready made guides to make your buying process easier."
      />
      <div className="w-full sm:flex justify-start text-default-extra-high text-lg md:text-3xl">
        <div
          className="flex flex-col justify-center items-start w-full lg:w-1/2 lg:h-40 me-0 sm:me-2 py-10 lg:py-0 rounded-md border border-[#9a4646] px-10"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="w-[65%] text-start ">Find Your Ring Size </h1>
          <div className="flex w-28 hover:w-full items-center justify-between transition-width duration-1000 text-start sm:text-lg bg-default-light px-2 py-1 my-2 rounded-md">
            <p>Explore</p>{" "}
            <i class="fa-solid fa-arrow-right-long pt-1 ps-2"></i>
          </div>
        </div>
        <div
          className="flex items-start flex-col justify-center w-full lg:w-1/2 mt-2 sm:mt-0 lg:mt-0 py-10 lg:py-0 lg:h-40 rounded-md border border-[#9a4646] px-10"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="w-[65%] text-start"> The Jewellery Care Guid</h1>
          <div className="flex w-28 hover:w-full items-center justify-between transition-width duration-1000 text-start text-lg bg-default-light px-2 py-1 mt-2 rounded-md">
            <p className="">Explore</p>
            <i class="fa-solid fa-arrow-right-long pt-1 ps-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
