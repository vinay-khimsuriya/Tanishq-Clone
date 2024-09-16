import React from "react";
import { useSelector } from "react-redux";
import ProductDetailLeft from "./ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight";

export default function ProductDetail() {
  const productDetail = useSelector((store) => store.product.productDetail);
  console.log(productDetail);
  return (
    <div className="w-full flex items-center justify-center">
      {/* <div className="">
        <h1 className="">{productDetail.category}</h1>
        <img className="size-96" src={productDetail.image} />
      </div> */}

      <div className="w-[95%] lg:w-[86%]">
        <div className="w-full mx-4 md:flex relative">
          <div className="w-full md:w-1/2 h-screen md:sticky lg:top-[75px] top-[118px] ">
            <ProductDetailLeft />
          </div>
          <div className="w-full md:w-1/2 ">
            <ProductDetailRight />
          </div>
        </div>
      </div>
    </div>
  );
}
