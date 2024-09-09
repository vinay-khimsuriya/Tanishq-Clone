import React from "react";
import lineDesign from "../img/static images/Line-Design.svg";

export default function HeadeLineComponent({ header, dec }) {
  return (
    <div className="w-full text-[#7f2e26] text-opacity-85">
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`font-semibold ${
            header === "Shop the Look" ? "text-4xl" : "text-2xl"
          }`}
        >
          {header}
        </h1>
        <p className="text-xs text-black">{dec}</p>
      </div>
      <div className="w-full">
        <img src={lineDesign} />
      </div>
    </div>
  );
}
