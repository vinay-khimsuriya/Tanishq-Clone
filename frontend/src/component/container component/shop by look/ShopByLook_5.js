import React, { useEffect, useState } from "react";
import shopByLookVideo from "../../../img/static images/shop the look/shopByLookVideo.mp4";
import geMb from "../../../videos/ge-mb.mp4";

export default function ShopByLook_5() {
  const [isLargeScreen, setIsLargeScreen] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const checkIsLargeScreen = () => {
      const isLargeScreen = window.matchMedia("(min-width : 768px)").matches;
      setIsLargeScreen(isLargeScreen);
    };

    checkIsLargeScreen();

    window.addEventListener("resize", checkIsLargeScreen);

    return () => {
      window.removeEventListener("resize", checkIsLargeScreen);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setVideo(shopByLookVideo);
    } else {
      setVideo(geMb);
    }
  }, [isLargeScreen]);

  return (
    <div className="w-full mt-5">
      <div className="w-full relative">
        <video
          className="lg:rounded-3xl w-full"
          src={video}
          controls
          autoPlay
          loop
          muted
        ></video>
        <button className="text-black btn-toggele font-medium absolute bottom-9 right-1/2 translate-x-[50%] px-7 py-[0.33rem] border border-black rounded-lg bg-slate-100">
          Explore
        </button>
      </div>
    </div>
  );
}
