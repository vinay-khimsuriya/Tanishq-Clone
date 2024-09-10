import React from "react";
import ring from "../../img/static images/New For You/ring.jpg";
import erring from "../../img/static images/New For You/erring.webp";
import neckless from "../../img/static images/New For You/neckless.webp";
import NewForYouComponent from "../../comman component/NewForYouComponent";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";

export default function NewForYou() {
  return (
    <div className="w-full pb-10">
      <HeadeLineComponent
        header="New For You!"
        dec="Our latest releases, just for you !"
      />
      <div className="sm:flex gap-12 px-7">
        <NewForYouComponent imagePath={ring} />
        <NewForYouComponent imagePath={erring} />
        <NewForYouComponent imagePath={neckless} />
      </div>
    </div>
  );
}
