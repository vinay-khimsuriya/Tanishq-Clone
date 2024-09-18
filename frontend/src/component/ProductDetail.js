import React from "react";
import { useSelector } from "react-redux";
import ProductDetailLeft from "./ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight";

export default function ProductDetail() {
  const productDetail = useSelector((store) => store.product.productDetail);
  console.log(productDetail);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-[95%] lg:w-[86%]">
        <div className="w-full md:flex relative">
          <div className="w-full md:w-1/2  md:h-screen md:sticky lg:top-[75px] py-5 sm:py-0">
            <ProductDetailLeft />
          </div>
          <div className="w-full md:w-1/2">
            <ProductDetailRight />
          </div>
        </div>
      </div>
    </div>
  );
}
