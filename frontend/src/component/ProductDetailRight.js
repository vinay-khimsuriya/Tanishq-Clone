import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiShare2 } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import exchangeFestival from "../img/product detail/exchange-festival.webp";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addProductToCart } from "../redux files/cartSlice";
import { changeIsSignInStatus } from "../redux files/headerSlice";
import useProductDetail from "../utils/fetchProductDetailById";
import useGetUserData from "../custom hooks/useGetUserData";

export default function ProductDetailRight() {
  const isUserLogin = useSelector((store) => store.header.isUserLogin);

  const { productDetail } = useProductDetail();
  const { userId, accessToken } = useGetUserData();
  const dispatch = useDispatch();

  const [isRupee, setIsRupee] = useState(true);
  const [productPrice, setProductPrice] = useState();
  const [quantityNumber, setQuantityNumber] = useState(1);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setProductPrice(productDetail?.price);
  }, [productDetail]);

  const addToCart = async () => {
    const data = {
      userId,
      productId: productDetail._id,
      quantity: quantityNumber,
    };

    try {
      const response = await fetch("http://localhost:4500/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const jsonData = await response.json();

      if (!response.ok) {
        console.log("response>>>>", response.json());
        alert(jsonData.message);
      } else {
        alert(jsonData.message);
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div className="w-full p-2 px-12">
      <div className="w-full px-2 text-start">
        <div className="w-full ">
          <div className="flex justify-between items-center">
            <div className="text-start">
              <p className="text-xs">{productDetail && productDetail._id}</p>
              <h3 className="text-lg font-medium">
                {productDetail && productDetail.title}
              </h3>
            </div>
            <div className="flex text-3xl gap-1 items-center ms-4">
              {!isLike ? (
                <FaRegHeart
                  className=" text-[27px]"
                  onClick={() => setIsLike(true)}
                />
              ) : (
                <FaHeart
                  className=" text-[27px]"
                  onClick={() => setIsLike(false)}
                />
              )}
              <CiShare2 className="block sm:hidden md:block" />
            </div>
          </div>
          <div className="w-full bg-black h-[1px] mt-5 hidden md:block"></div>
          <div className="text-justify mt-8 text-xs">
            <p className="">{productDetail && productDetail.description}</p>
            <p className="py-1 lg:hidden">
              see full
              <span className="text-default-extra-high mx-1 font-medium hover:cursor-pointer hover:underline">
                Product Detail
              </span>
            </p>
          </div>
        </div>
        {/* second div */}
        <div className="w-full">
          <div className="w-full flex justify-between py-2">
            <div className="flex items-baseline">
              Offer Price:
              {isRupee ? (
                <FaRupeeSign className="ms-1 text-xl" />
              ) : (
                <FaDollarSign className="ms-1 text-xl" />
              )}
              <span className="text-2xl font-medium">{productPrice}</span>
            </div>
            <div
              className="flex h-6 items-center rounded-full justify-between bg-default-high text-orange-100"
              onClick={() => {
                setIsRupee(!isRupee);
                {
                  isRupee
                    ? setProductPrice(Math.floor(productDetail?.price / 83))
                    : setProductPrice(productDetail?.price);
                }
              }}
            >
              <div
                className={`p-[0.2rem] ${
                  isRupee ? "bg-black" : "bg-transparent"
                } rounded-full`}
              >
                <FaRupeeSign />
              </div>
              <div
                className={`p-[0.2rem] ${
                  isRupee ? "bg-transparent" : "bg-black"
                } rounded-full `}
              >
                <FaDollarSign />
              </div>
            </div>
          </div>
          <div className="text-xs">
            <p className="w-28 bg-gray-800 text-white px-2 py-1 mb-1 rounded font-medium">
              Flat 2.5% off
            </p>
            <p>
              Price Inclusive of all taxes. See full
              <span className="text-default-extra-high mx-1 font-bold hover:cursor-pointer">
                Price Breakup
              </span>
            </p>
          </div>
        </div>
        {/* third div */}
        <div>
          <div className="w-full lg:flex justify-between gap-3 py-2">
            <div className="w-full lg:w-2/5">
              <p className="py-1">Size</p>
              <select className="w-full border border-black py-2 rounded ps-2">
                <option>16.40 MM</option>
              </select>
            </div>
            <div className="w-full lg:w-2/5">
              <p className="py-1">Gross Weight</p>
              <select className="w-full border border-black py-2 rounded ps-2">
                <option>2.699 g</option>
              </select>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center justify-center">
              <p className="py-1">Qty</p>
              <div className="w-1/2 flex items-center justify-center ">
                <div
                  className="bg-gray-300 p-1 rounded-full me-2"
                  onClick={() => {
                    quantityNumber === 1
                      ? setQuantityNumber(quantityNumber)
                      : setQuantityNumber(quantityNumber - 1);
                  }}
                >
                  <FaMinus />
                </div>
                <h1>{quantityNumber}N</h1>
                <div
                  className="bg-gray-300 p-1 rounded-full ms-2"
                  onClick={() => {
                    setQuantityNumber(quantityNumber + 1);
                  }}
                >
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs">
            Weight will increase as per the Size. Check
            <span className="text-default-extra-high cursor-pointer">
              {" "}
              Sizing Comparison
            </span>
          </p>
          <div className="flex justify-between font-semibold flex-wrap mt-5">
            <p className="me-2">Gold Purity: 18 Karat</p>
            <p>Diamond weight: 0.104 c</p>
          </div>
          <p className="text-xs my-1">
            Not sure what to buy? Check out our
            <span className="text-default-extra-high cursor-pointer">
              Buying Guides
            </span>
          </p>
        </div>

        {/* third div end */}
        {/* forth div */}
        <div className="my-2 divide-y-2 divide-black ">
          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row items-center gap-3 justify-center font-bold py-5">
            <button
              className="w-1/2 sm:w-auto md:w-1/2 xl:w-auto sm:px-10 md:px-0 xl:px-10 py-5 text-black text-center text-nowrap border hover:bg-orange-900 hover:text-white"
              onClick={() => {
                if (isUserLogin) {
                  {
                    dispatch(addProductToCart(productDetail));
                    addToCart();
                  }
                } else {
                  dispatch(changeIsSignInStatus(true));
                }
              }}
            >
              Add to Cart
            </button>
            <button className="w-1/2 sm:w-auto md:w-1/2 xl:w-auto sm:px-10 md:px-0 xl:px-10 py-5 text-white bg-orange-800 hover:bg-orange-900 text-center text-nowrap">
              Buy Now
            </button>
          </div>

          <div className="w-full blcok sm:flex md:block xl:flex gap-5 py-8">
            <div className="f-full sm:w-1/2 md:w-full xl:1/2 outline outline-[1px] outline-offset-4 relative rounded-[0.01rem]">
              <select className="w-full p-1 rounded">
                <option>India</option>
              </select>
              <label className="absolute -top-5 left-2 bg-white px-2 rounded-sm ">
                Country
              </label>
            </div>
            <div className="w-full sm:w-1/2 md:w-full xl-1/2 outline outline-[1px] outline-offset-4 relative rounded-[0.01rem] mt-4 sm:mt-0 md:mt-4 xl:mt-0">
              <div className="flex justify-between">
                <input
                  className="w-full"
                  type="number"
                  placeholder="Pincode"
                  min={6}
                  max={6}
                />
                <p className="text-red-400 py-1">Check</p>
              </div>
              {/* <label className="absolute -top-6 left-0 bg-white px-2 rounded-sm ">
                Country
              </label> */}
            </div>
          </div>
          {/* <div className="w-full bg-black h-[1px] my-3 hidden md:block"></div> */}

          <div className="text-xs font-semibold py-5">
            <p className="flex items-center gap-2 py-3">
              <span className="text-2xl">
                <IoDiamondOutline />
              </span>
              Purity Guaranteed.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-2xl">
                <FaArrowRightArrowLeft />{" "}
              </span>
              Exchange across all stores.
            </p>
            <div className="flex items-center gap-2 py-3">
              <span className="text-2xl">
                <FaShippingFast />
              </span>
              Free Shipping all across India
            </div>
          </div>

          <div className="w-full py-10 ">
            <div className="w-full block sm:flex md:block xl:flex justify-evenly p-3 bg-yellow-100">
              <div className="w-full xl:w-2/5 flex flex-col items-center justify-center">
                <img className="w-40 " src={exchangeFestival}></img>
                <p className="text-xs py-2 text-red-700 cursor-pointer text-center font-semibold hover:text-red-500">
                  Terms and Condition
                </p>
              </div>
              <div className="w-full xl:w-3/5 flex flex-col items-center justify-center py-2 sm:py-0 md:my-2 xl:py-0">
                <p className="text-sm">Get this product for only</p>
                <p className="text-orange-900 text-xl font-medium pb-1">
                  14 grams* of GOLD
                </p>
                <p className="text-sm font-medium ">with our exchange offer</p>
                <p className="text-sm ">
                  When you bring 22kt gold to our store
                </p>
                <button className="bg-yellow-900 text-white font-medium py-2 px-5 mt-2 cursor-pointer">
                  Find Out How
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
