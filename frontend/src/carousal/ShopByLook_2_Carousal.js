import React, { useEffect, useRef, useState } from "react";
import ShopByLook_2_Carousal_Card from "./carousal card/ShopByLook_2_Carousal_Card";
import ArtisticLayeredRing from "../img/static images/shop the look/ArtisticLayeredRing.webp";
import ContemporyGoldHoopEarrings from "../img/static images/shop the look/ContemporyGoldHoopEarrings.webp";
import elegantMultilayerRing from "../img/static images/shop the look/elegantMultilayerRing.webp";

export default function ShopByLook_2_Carousal() {
  const containerRef = useRef(null);
  const containerChildRef = useRef(null);
  const maindiv = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setShowLeftArrow(scrollLeft > 0);
      // console.log(scrollLeft, clientWidth, scrollWidth);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    checkScrollPosition();

    const container = containerRef.current;
    container.addEventListener("scroll", checkScrollPosition);

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const handleLeftClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerChildRef.current.clientWidth - 42,
        behavior: "smooth",
      });
    }
  };
  const handleRightClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerChildRef.current.clientWidth + 42,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative " ref={maindiv}>
      <div
        className="w-full flex gap-11 overflow-hidden px-14 lg:px-[20%] "
        ref={containerRef}
      >
        <div className="flex flex-nowrap gap-10 relative">
          <div ref={containerChildRef} className="">
            <ShopByLook_2_Carousal_Card
              imagePath={ArtisticLayeredRing}
              name="Artistic Layered Ring"
              price={12500}
            />
          </div>
          <ShopByLook_2_Carousal_Card
            imagePath={ContemporyGoldHoopEarrings}
            name="Contempory Gold Hoop Earrings"
            price={14199}
          />
          <ShopByLook_2_Carousal_Card
            imagePath={elegantMultilayerRing}
            name="Elegant Multilayer Ring"
            price={13500}
          />
          <ShopByLook_2_Carousal_Card
            imagePath={ArtisticLayeredRing}
            name="Artistic Layered Ring"
            price={10250}
          />
        </div>
        {showLeftArrow && (
          <div
            className="absolute top-1/2 left-5 lg:left-[16%] -translate-y-1/2 text-xl"
            onClick={handleLeftClick}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        )}
        {showRightArrow && (
          <div
            className="absolute top-1/2 right-5 lg:right-[16%] -translate-y-1/2 text-xl"
            onClick={handleRightClick}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}
