import React from "react";
import stringIt from "../../img/static images//Shop By Collection/stringIt.webp";
import engagementrings from "../../img/static images//Shop By Collection/engagementrings.webp";
import theItalianCollecation from "../../img/static images//Shop By Collection/theItalianConnetion.webp";
import StaticImageComponent from "../../comman component/StaticImageComponent";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";

export default function ShopByCollection() {
  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="Shop By Collections"
        dec="Whatever the occasion, we've got a beautiful piece of jewellery for you."
      />
      <div className="md:flex gap-5">
        <StaticImageComponent imagePath={stringIt} name="String It" />

        <StaticImageComponent
          imagePath={engagementrings}
          name="The Italian Connection"
        />
        <StaticImageComponent
          imagePath={theItalianCollecation}
          name="Engagement Rings"
        />
      </div>
    </div>
  );
}
