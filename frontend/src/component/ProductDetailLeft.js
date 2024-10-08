import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useProductDetail from "../utils/fetchProductDetailById";

export default function ProductDetailLeft() {
  const { productDetail, loading, error } = useProductDetail();

  const images = [];

  const horiContRef = useRef(null);
  const verContRef = useRef(null);
  const verSubContRef = useRef([]);

  useEffect(() => {
    if (horiContRef.current) {
      horiContRef.current.scrollBy({
        left: horiContRef.current.clientWidth * 3,
        behavior: "smooth",
      });
    }
    if (verContRef.current && verSubContRef.current[0]) {
      let scroll = verSubContRef.current[0].clientHeight * 3;
      verContRef.current.scrollBy({
        top: scroll,
        behavior: "smooth",
      });
    }
  }, []);

  const handleRightClick = () => {
    if (horiContRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = horiContRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        horiContRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        horiContRef.current.scrollBy({
          left: clientWidth,
          behavior: "smooth",
        });
      }
    }
    if (verContRef.current && verSubContRef.current[0]) {
      const { scrollTop, clientHeight, scrollHeight } = verContRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        verContRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        verContRef.current.scrollBy({
          top: verSubContRef.current[0].clientHeight,
          behavior: "smooth",
        });
      }
    }
  };
  const handleLeftClick = () => {
    if (horiContRef.current) {
      const { scrollLeft, clientWidth } = horiContRef.current;
      if (scrollLeft <= 0) {
        horiContRef.current.scrollTo({
          left: horiContRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        horiContRef.current.scrollBy({
          left: -clientWidth,
          behavior: "smooth",
        });
      }
    }
    if (verContRef.current && verSubContRef.current[0]) {
      const { scrollTop } = verContRef.current;
      if (scrollTop <= 0) {
        verContRef.current.scrollTo({
          top: verContRef.current.scrollHeight,
          behavior: "smooth",
        });
      } else {
        verContRef.current.scrollBy({
          top: -verSubContRef.current[0].clientHeight,
          behavior: "smooth",
        });
      }
    }
  };

  for (let i = 0; i < 6; i++) {
    if (productDetail) {
      images.push(productDetail.image);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  return (
    <div className="w-full">
      <div className="flex py-1">
        <p className="px-3 cursor-pointer hover:text-orange-900 hover:font-medium">
          <Link to={"/"}>Home</Link>
        </p>
        <p> | </p>
        <p className="px-3 cursor-pointer">
          <a>Product</a>
        </p>
        <p> | </p>
        <p className="text-orange-900 font-medium px-3 cursor-pointer truncate">
          {productDetail ? productDetail.title : " "}
        </p>
      </div>
      <div className="w-full flex pt-10 lg:pb-1 items-center">
        <div
          className="hidden w-[22%] lg:block px-2 h-[60vh] overflow-hidden"
          ref={verContRef}
        >
          <div className="w-full flex flex-wrap items-center justify-center">
            {images &&
              images.map((image, index) => (
                <div className="w-full shrink-0 py-2" ref={verSubContRef}>
                  <img className="w-full border border-black" src={image} />
                </div>
              ))}
          </div>
        </div>

        <div className="w-full lg:w-5/6 sm:p-2 flex items-center">
          <div className="w-full flex justify-between sm:p-2 items-center ">
            <div
              className="hidden sm:block p-2 bg-gray-200 rounded-full hover:bg-gray-400"
              onClick={handleLeftClick}
            >
              <FaAngleLeft />
            </div>
            <div className="full sm:w-4/6 overflow-hidden" ref={horiContRef}>
              <div className="w-full flex  ">
                {images.map((image, index) => (
                  <div className="w-full shrink-0 p-1">
                    <img
                      className="w-full border border-gray-400"
                      src={image}
                    />
                    {/* <h1>{index}</h1> */}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="hidden sm:block p-2 bg-gray-200 rounded-full hover:bg-slate-400"
              onClick={handleRightClick}
            >
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end pe-16">
        <button className="btn-toggele px-2 py-1 rounded-md">
          {" "}
          Try It Now
        </button>
      </div>
    </div>
  );
}
