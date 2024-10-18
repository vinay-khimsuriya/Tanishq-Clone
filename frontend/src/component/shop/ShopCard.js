import React, { useState } from "react";
import one from "../../img/1.webp";
import two from "../../img/2.webp";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiStarFormation } from "react-icons/gi";
import { IoCopy } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const ShopCard = () => {
  const [productName, setProductName] = useState("Product name");
  const [origanalPrice, setOrignalPrice] = useState(40235);
  const [discountedPrice, setDiscountedPrice] = useState(36025);
  const [stock, setStock] = useState(5);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 overflow-hidden px-2 lg:px-4 mb-10">
      <div className="shop-card">
        <div className="primary-div relative border border-gray-300 rounded-lg cursor-pointer">
          <div className="img-div relative rounded-lg transition-all duration-1000 ease-in-out overflow-hidden">
            <img className="w-full rounded-lg" src={two} alt="Product" />
            <div className="bestseller-div flex items-center justify-center z-10 gap-2 text-white absolute top-0 left-0 rounded-br-lg px-4 py-[0.2rem] bg-gradient-to-r from-primary to-[#666]">
              <GiStarFormation />
              <p>Best Sellers</p>
            </div>

            <div className="scroll-div w-full absolute top-0 -right-full transition-all duration-1000 ease-in-out">
              <img src={one} alt="Offer" className="w-full" />
            </div>
          </div>

          <IoMdHeartEmpty className="absolute z-10 top-4 right-4 text-primary size-8 transition-colors duration-1000" />

          <div className="btn-div h-0 overflow-hidden absolute bottom-0 right-0 bg-white flex justify-end items-center transition-all duration-1000 ease-in-out z-10 rounded-tl-xl rounded-br-lg">
            <div className="border px-5 flex gap-1 justify-center items-center h-full font-semibold text-primary">
              <IoCopy className="" />
              <button className="">Similer</button>
            </div>
            <div className=" border px-5 flex gap-1 justify-center items-center h-full font-semibold text-primary">
              <FaCamera className="" />
              <button className="">Try it</button>
            </div>
          </div>
        </div>

        <div className="px-1 py-4 bg-gradient-to-t from-gray-200 rounded-b-lg to-white text-start text-xl">
          <h1 className="truncate py-1 ">{productName}</h1>
          <div className="flex gap-2 justify-start items-baseline">
            <div className="flex justify-start items-center ">
              <FaRupeeSign />
              <p>{discountedPrice}</p>
            </div>
            <div className="flex line-through justify-start items-center">
              <FaRupeeSign />
              <p>{origanalPrice}</p>
            </div>
            <p className="text-lg">
              Only {stock} <span className="text-primary">left!</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
