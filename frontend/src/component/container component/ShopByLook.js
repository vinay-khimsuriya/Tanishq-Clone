import React from "react";
import ShopByLook_1 from "./shop by look/ShopByLook_1";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import ShopByLook_2 from "./shop by look/ShopByLook_2";

export default function ShopByLook() {
  return (
    <div className="w-full">
      <HeadeLineComponent
        header="Shop the Look"
        dec="Discover your timeless style and reveal your unique look!"
      />
      <ShopByLook_1 />
      <ShopByLook_2 />
    </div>
  );
}
