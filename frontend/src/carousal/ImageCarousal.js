import React, { useEffect, useRef, useState } from "react";
import image1 from "../img/carousel images/image1.webp";
import image2 from "../img/carousel images/image2.webp";
import image3 from "../img/carousel images/image3.webp";
import image4 from "../img/carousel images/image4.webp";
import image5 from "../img/carousel images/image5.webp";

export default function ImageCarousal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const images = [image1, image2, image3, image4, image5];

  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(scrollInterval);
  // }, [images.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  console.log(carouselRef.current);
  return (
    <div className="relative">
      <div ref={carouselRef} className="w-full overflow-x-hidden">
        <div className="w-full flex flex-nowrap">
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
          className="bg-slate-700 absolute top-1/2 left-5 py-3 px-5 rounded-full bg-opacity-30 text-white -translate-y-1/2 hover:cursor-pointer hover:bg-opacity-50"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (images.length + prevIndex - 1) % images.length
            )
          }
        >
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className=" bg-slate-700 absolute top-1/2 right-5 py-3 px-5 rounded-full bg-opacity-30 text-white -translate-y-1/2 hover:cursor-pointer hover:bg-opacity-50"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        {images.map((image, index) => (
          <span
            className={`size-4 rounded-full mx-2 ${
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
