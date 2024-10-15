import React, { useEffect, useState } from "react";
import logo from "../img/logo.svg";
import logosmallscreen from "../img/tanishq_logo_small_screen._full_screensvg.svg";
import MyAccount from "./MyAccount";
import { useDispatch, useSelector } from "react-redux";
import IsUserLogin from "./IsUserLogin";
import { changeIsMenuClicked } from "../redux files/headerSlice";
import useGetCartItems from "../custom hooks/useGetCartItems";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const isLogin = useSelector((store) => store.header.isUserLogin);
  const [isHovered, setIsHovered] = useState(false);
  const [cartsize, setCartSize] = useState(0);

  const { cartLength } = useGetCartItems();

  useEffect(() => {
    setCartSize(cartLength ? cartLength : 0);
  }, [cartLength]);

  console.log(cartLength);

  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.cart);

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

  return (
    <div className="w-full flex flex-col items-center justify-center sticky top-0 z-50">
      <div className="w-full flex justify-center bg-header">
        <div className="w-full lg:w-[85%] mx-4 mb-4 lg:mx-0 lg:mb-0 py-[0.35rem] flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="flex items-center">
            <div className="block lg:hidden pr-2 pl-1 pb-1 lg:pb-2 text-3xl hover:cursor-pointer opacity-55">
              <i
                class="fa-solid fa-bars"
                onClick={() => {
                  dispatch(changeIsMenuClicked(true));
                }}
              ></i>
            </div>
            <a href="#">
              <div className="py-3 lg:py-0">
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
          <div className="w-full lg:w-[60%] mx-0 lg:mx-[0.625rem] lg:my-0 order-last lg:order-none">
            <section className="m-0 w-full relative">
              <div className="h-10 sm:mr-[0.5em]">
                <div className="bg-white flex justify-between items-center py-[0.125rem] rounded-sm">
                  <input
                    className="text-left w-full px-3 lg:py-2  text-sm font-normal text-[#495057] bg-white outline-none"
                    placeholder={
                      isLargeScreen
                        ? "Search for Gold Jewellery, Diamond..."
                        : `Search for Gold Jewellery, Diamond Jewellery and more…`
                    }
                  ></input>
                  <div className="flex items-center gap-5 justify-between text-primary">
                    <div className="px-3 text-lg">
                      <div className="hover:cursor-pointer">
                        <i className="fa-solid fa-camera "></i>
                      </div>
                    </div>
                    <div className="pr-3 text-lg">
                      <div className="hover:cursor-pointer">
                        <i class="fa-solid fa-microphone "></i>
                      </div>
                    </div>
                    <div className="pr-3 text-lg">
                      <div className="hover:cursor-pointer">
                        <i className="fa-solid fa-magnifying-glass "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="flex text-primary gap-[1.30rem] lg:gap-4 justify-evenly mr-[10px]">
            <div className="w-fit relative hover:text-[#c95c5c] lg:py-2 hover-underline">
              <a href="#">
                <div className="">
                  <div className="w-full h-6 text-lg lg:text-xl">
                    <i class="fa-regular fa-gem"></i>
                  </div>
                  <span className="hidden lg:block ">Diamond</span>
                </div>
              </a>
            </div>
            <div className="w-fit relative hover:text-[#c95c5c] lg:py-2 hover-underline">
              <a href="#">
                <div>
                  <div className="w-full h-6 text-lg lg:text-xl">
                    <i class="fa-solid fa-shop"></i>
                  </div>
                  <span className="hidden lg:block">Store</span>
                </div>
              </a>
            </div>
            <div
              className="w-fit relative hover:text-[#c95c5c] lg:py-2 hover-underline"
              onMouseEnter={handleMouseEnterEvent}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <a href="#">
                <div>
                  <div className="w-full h-6 text-lg lg:text-xl">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <span className="hidden lg:block">Account</span>
                </div>
              </a>
              {isHovered && (isLogin ? <IsUserLogin /> : <MyAccount />)}
            </div>
            <div className="w-fit relative hover:text-[#c95c5c] lg:py-2 hover-underline">
              <a href="#">
                <div>
                  <div className="w-full h-6 text-lg lg:text-xl">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <span className="hidden lg:block">WishList</span>
                </div>
              </a>
            </div>
            <div className="w-fit  hover:text-[#c95c5c] relative pb-2 lg:py-2 hover-underline">
              <Link to="cart">
                <div>
                  <div className="w-full h-6 text-lg lg:text-xl">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                  </div>
                  <span className="hidden lg:block">Cart</span>
                </div>
              </Link>
              <div className="flex items-center justify-center absolute -top-1 lg:top-0 -right-[0.75rem] bg-primary rounded-full px-[0.4rem] py-[0.1rem] text-white text-xs">
                <span>{cartsize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
