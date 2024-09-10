import React from "react";
import ShopByLook_1 from "./shop by look/ShopByLook_1";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import ShopByLook_2 from "./shop by look/ShopByLook_2";
import ShopByLook_3 from "./shop by look/ShopByLook_3";
import ShopByLook_4 from "./shop by look/ShopByLook_4";
import ShopByLook_5 from "./shop by look/ShopByLook_5";
import ShopByLook_6 from "./shop by look/ShopByLook_6";

export default function ShopByLook() {
  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Shop the Look"
        dec="Discover your timeless style and reveal your unique look!"
      />
      <ShopByLook_1 />
      <ShopByLook_2 />
      <ShopByLook_3 />
      <ShopByLook_4 />
      <ShopByLook_5 />
      <ShopByLook_6 />
    </div>
  );
}
