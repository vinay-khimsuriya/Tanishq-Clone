import React, { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import logosmallscreen from "../img/tanishq_logo_small_screen._full_screensvg.svg";
import MyAccount from "./MyAccount";
import { useDispatch, useSelector } from "react-redux";
import IsUserLogin from "./IsUserLogin";
import { changeIsMenuClicked } from "../redux files/headerSlice";

export default function Navbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [cartValue, setCartValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const isLogin = useSelector((store) => store.header.isUserLogin);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      if (isLargeScreen) {
        dispatch(changeIsMenuClicked(false));
      }
      setIsLargeScreen(isLargeScreen);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleMouseEnterEvent = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    console.log("isUserLogin state:", isLogin);
  }, [isLogin]);

  return (
    <div className="w-full flex flex-col items-center justify-center sticky top-0 z-50">
      <div className="w-full flex justify-center bg-[#f2eae8]">
        <div className="w-full lg:w-5/6 mx-4 mb-4 lg:mx-0 lg:mb-0 pt-3 flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="flex items-center">
            <div className="block lg:hidden pr-3 pl-1 pb-2 text-[1.45rem] hover:cursor-pointer opacity-55">
              <i
                class="fa-solid fa-bars"
                onClick={() => {
                  dispatch(changeIsMenuClicked(true));
                }}
              ></i>
            </div>
            <a href="#">
              <div className="pb-3">
                <img
                  src={logo}
                  alt="image"
                  className="bg-opacity-5 w-[80px] hidden lg:block"
                ></img>
                <img
                  src={logosmallscreen}
                  alt="image"
                  className="bg-opacity-5 w-[80px] block lg:hidden"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full lg:w-3/5 mx-0 lg:mx-[0.625rem] my-2 lg:my-0 order-last lg:order-none">
            <section className="m-0 w-full relative">
              <div className="h-10 sm:mr-[0.5em]">
                <div className="bg-white flex justify-between items-center py-1 rounded-md">
                  <input
                    className="text-left w-full py-[0.375rem] px-3 text-base font-normal text-[#495057] bg-white rounded-[0.1875rem] bg-clip-padding outline-none"
                    placeholder={
                      isLargeScreen
                        ? "Search for Gold Jewellery, Diamond..."
                        : `Search for Gold Jewellery, Diamond Jewellery and more…`
                    }
                  ></input>
                  <div className="flex items-center gap-4 justify-between">
                    <div className="px-3 text-xl">
                      <div className="hover:cursor-pointer">
                        <i className="fa-solid fa-camera text-[#895c5d]"></i>
                      </div>
                    </div>
                    <div className="pr-3 text-xl">
                      <div className="hover:cursor-pointer">
                        <i class="fa-solid fa-microphone text-[#895c5d]"></i>
                      </div>
                    </div>
                    <div className="pr-3 text-xl">
                      <div className="hover:cursor-pointer">
                        <i className="fa-solid fa-magnifying-glass text-[#895c5d]"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="flex text-[#995c5c] gap-5 lg:gap-4 justify-evenly mr-[6px] ">
            <div className="w-fit relative hover:text-[#c95c5c] py-2 hover-underline">
              <a href="#">
                <div className="">
                  <div className="w-full h-6 text-xl">
                    <i class="fa-regular fa-gem"></i>
                  </div>
                  <span className="hidden lg:block ">Diamond</span>
                </div>
              </a>
            </div>
            <div className="w-fit relative hover:text-[#c95c5c] py-2 hover-underline">
              <a href="#">
                <div>
                  <div className="w-full h-6 text-xl">
                    <i class="fa-solid fa-shop"></i>
                  </div>
                  <span className="hidden lg:block">Store</span>
                </div>
              </a>
            </div>
            <div
              className="w-fit relative hover:text-[#c95c5c] py-2 hover-underline"
              onMouseEnter={handleMouseEnterEvent}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <a href="#">
                <div>
                  <div className="w-full h-6 text-xl">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <span className="hidden lg:block">Account</span>
                </div>
              </a>
              {isHovered && (isLogin ? <IsUserLogin /> : <MyAccount />)}
            </div>
            <div className="w-fit relative hover:text-[#c95c5c] py-2 hover-underline">
              <a href="#">
                <div>
                  <div className="w-full h-6 text-xl">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <span className="hidden lg:block">WishList</span>
                </div>
              </a>
            </div>
            <div className="w-fit  hover:text-[#c95c5c] relative py-2 hover-underline">
              <a href="#">
                <div>
                  <div className="w-full h-6 text-xl">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                  </div>
                  <span className="hidden lg:block">Cart</span>
                </div>
              </a>
              <div className="flex items-center justify-center absolute top-0 -right-[0.75rem] bg-[#a95c5c] rounded-full px-[0.4rem] py-[0.1rem] text-white text-xs">
                <span>{cartValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
