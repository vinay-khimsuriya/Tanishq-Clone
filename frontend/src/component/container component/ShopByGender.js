import React from "react";
import kid from "../../img/static images/shop by gender/kid.jpg";
import men from "../../img/static images/shop by gender/men.webp";
import woman from "../../img/static images/shop by gender/Woman.webp";
import StaticImageComponent from "../../comman component/StaticImageComponent";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";

export default function ShopByGender() {
  return (
    <div className="w-full rounded-md pb-10">
      <HeadeLineComponent
        header="Shop By Gender"
        dec="First-class jewelry for first-class Men, Women & Children."
      />
      <div className="w-full flex gap-0 flex-wrap lg:flex-nowrap lg:gap-4 lg:py-3 hover:cursor-pointer rounded-md">
        <div className="w-1/2 lg:w-1/3 shadow-sm shadow-black rounded-md mt-3 mb-2 lg:my-2">
          <StaticImageComponent imagePath={men} name="Men" />
        </div>
        <div className="w-1/2 lg:w-1/3 shadow-sm shadow-black rounded-md mt-3 mb-2 lg:my-2">
          <StaticImageComponent imagePath={kid} name="Kids" />
        </div>
        <div className="w-full lg:w-1/3 shadow-sm shadow-black rounded-md mt-2 mb-3 lg:my-2">
          <StaticImageComponent imagePath={woman} name="Woman" />
        </div>
      </div>
    </div>
  );
}
