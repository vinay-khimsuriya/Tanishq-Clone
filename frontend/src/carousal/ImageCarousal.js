import React, { useEffect, useRef, useState } from "react";
import image1 from "../img/carousel images/fod-plp-desktop.jpg";
import image2 from "../img/carousel images/into-eternity-desktop.jpg";
import image3 from "../img/carousel images/modern-polki-desktop.jpg";
import image4 from "../img/carousel images/new-arrivals-desktop.jpg";
import image5 from "../img/carousel images/rivaah-tf-desktop.png";
import image6 from "../img/carousel images/the-spotlight-edit-desktop.jpg";
import imageMobile1 from "../img/carousel images/small screen/fod-plp-mobile.webp";
import imageMobile2 from "../img/carousel images/small screen/into-eternity-mobile.webp";
import imageMobile3 from "../img/carousel images/small screen/modern-polki-mobile.webp";
import imageMobile4 from "../img/carousel images/small screen/new-arrivals-mobile.webp";
import imageMobile5 from "../img/carousel images/small screen/rivaah-tf-mobile.webp";
import imageMobile6 from "../img/carousel images/small screen/the-spotlight-edit-mobile.webp";

export default function ImageCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [images, setImages] = useState([]);

  const [isLargeScreen, setIsLargeScreen] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width : 768px)").matches;
      setIsLargeScreen(isLargeScreen);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setImages([image1, image2, image3, image4, image5, image6]);
    } else {
      setImages([
        imageMobile1,
        imageMobile2,
        imageMobile3,
        imageMobile4,
        imageMobile5,
        imageMobile6,
      ]);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // console.log(carouselRef.current);
  return (
    <div className="relative px-2 md:px-0">
      <div ref={carouselRef} className="w-full md:h-auto overflow-x-hidden">
        <div className="w-full h-full flex flex-nowrap">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full flex-shrink-0"
              src={image}
              alt={`Carousel image ${index + 1}`}
            />
          ))}
        </div>
        <div
          className="hidden md:block bg-slate-700 absolute top-1/2 left-5 py-3 px-5 rounded-full bg-opacity-30 text-white -translate-y-1/2 hover:cursor-pointer hover:bg-opacity-50"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (images.length + prevIndex - 1) % images.length
            )
          }
        >
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="hidden md:block bg-slate-700 absolute top-1/2 right-5 py-3 px-5 rounded-full bg-opacity-30 text-white -translate-y-1/2 hover:cursor-pointer hover:bg-opacity-50"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="w-full flex justify-center py-7">
        {images.map((image, index) => (
          <span
            className={`size-[10px] rounded-full mx-2 ${
              index !== currentIndex ? "bg-slate-300" : "bg-slate-900"
            }`}
            key={index}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
