import React from "react";
import shopByLookVideo from "../../../img/static images/shop the look/shopByLookVideo.mp4";

export default function ShopByLook_5() {
  return (
    <div className="w-full mt-5">
      <div className="w-full relative">
        <video
          className="lg:rounded-3xl"
          src={shopByLookVideo}
          controls
          autoPlay
          loop
          muted
        ></video>
        <button className="text-black font-medium absolute bottom-9 right-1/2 translate-x-[50%] px-7 py-[0.33rem] border border-black rounded-lg bg-slate-100">
          Explore
        </button>
      </div>
    </div>
  );
}
