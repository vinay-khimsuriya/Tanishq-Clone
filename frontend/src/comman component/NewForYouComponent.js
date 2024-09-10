import React from "react";

export default function NewForYouComponent({ imagePath }) {
  return (
    <div className="w-full relative mt-5 sm:mt-0">
      <div>
        <img className="w-full rounded-md" src={imagePath}></img>
      </div>
      <button className="absolute bottom-4 sm:-bottom-4 md:bottom-4 right-1/2 translate-x-1/2 btn-toggele transition-all duration-500 py-1 md:py-3 sm:px-3 md:px-6 rounded-md text-nowrap">
        Explore More
      </button>
    </div>
  );
}
