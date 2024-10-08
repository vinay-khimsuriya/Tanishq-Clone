import React from "react";
import ShopByGender from "./container component/ShopByGender";
import ShopByLook from "./container component/ShopByLook";
import JewelleryGuides from "./container component/JewelleryGuides";
import ConnectWithUs from "./container component/ConnectWithUs";
import DiamondBestSellers from "./container component/DiamondBestSellers";
import TopSellers from "../carousal/TopSellers";
import NewForYou from "./container component/NewForYou";
import ShopByCollection from "./container component/ShopByCollection";
import ShopByCategoryComponent from "../comman component/ShopByCategoryComponent";
import ShopByCategory from "./container component/ShopByCategory";

export default function Container() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center w-[95%] lg:w-[86%]">
        <DiamondBestSellers />
        <ShopByCategory />
        <ShopByCollection />
        <TopSellers />
        <NewForYou />
        <ShopByGender />
        <ShopByLook />
        <JewelleryGuides />
        <ConnectWithUs />
      </div>
    </div>
  );
}
