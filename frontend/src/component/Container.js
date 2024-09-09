import React from "react";
import HeadeLineComponent from "../comman component/HeadeLineComponent";
import ShopByGender from "./container component/ShopByGender";
import ShopByLook from "./container component/ShopByLook";

export default function Container() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-5/6 mx-4">
        <HeadeLineComponent
          header="Diamond Best Sellers"
          dec="Dazzling diamond jewellery, now at delightful prices"
        />
        <HeadeLineComponent
          header="Shop By Category"
          dec="Browse through your favorite categories. We've got them all!"
        />
        <HeadeLineComponent
          header="Shop By Collections"
          dec="Whatever the occasion, we've got a beautiful piece of jewellery for you."
        />
        <HeadeLineComponent
          header="Top Sellers"
          dec="Love the most to bought the most"
        />
        <HeadeLineComponent
          header="New For You!"
          dec="Our latest releases, just for you !"
        />
        <ShopByGender />
        <ShopByLook />

        <HeadeLineComponent
          header="Jewellery Guides"
          dec="Check out our ready made guides to make your buying process easier."
        />
      </div>
    </div>
  );
}
