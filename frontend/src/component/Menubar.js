import React from "react";
import { categoryType } from "../utils/Categories";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsMenuClicked,
  changeIsSignInStatus,
  changeIsSignUpStatus,
  changeIsUserLogin,
} from "../redux files/headerSlice";

export default function Menubar() {
  const isMenuClicked = useSelector((store) => store.header.isMenuClicked);
  const isUserLogin = useSelector((store) => store.header.isUserLogin);
  const userLoginData = useSelector((store) => store.user.userLoginData);

  const dispatch = useDispatch();

  return (
    <div
      className={`w-full fixed h-screen top-0 z-[52]  ${
        isMenuClicked ? "left-0" : "left-full"
      } bg-black bg-opacity-35`}
    >
      <div className="w-5/6 overflow-y-auto h-full">
        <div className="w-full bg-white ">
          <div className="w-full">
            <div className="w-full relative py-10 bg-gradient-to-l text-[#7e2b25] to-[#f6e4e4] via-[#f3cdce] from-[#f7f2f1] ">
              <div className={`${isUserLogin ? "hidden" : "flex"}`}>
                <div className="w-1/2 ps-20 text-left">
                  <p className="text-3xl">
                    RS 500 off <br />{" "}
                    <span className="text-xl">on first order</span>
                  </p>
                </div>
                <div className=" w-1/2">
                  <ul className="flex flex-col mt-3 ps-16 text-left ">
                    <li className="hover:text-black ">
                      <a
                        className=""
                        href="#"
                        onClick={() => {
                          dispatch(changeIsMenuClicked(false));
                          dispatch(changeIsSignInStatus(true));
                        }}
                      >
                        Login
                      </a>
                    </li>
                    <li className="hover:text-black ">
                      <a
                        className=""
                        href="#"
                        onClick={() => {
                          dispatch(changeIsMenuClicked(false));
                          dispatch(changeIsSignUpStatus(true));
                        }}
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`w-full flex-col ${isUserLogin ? "flex" : "hidden"}`}
              >
                <div className="flex justify-center w-full border-b-2">
                  <div className="flex flex-col items-center justify-center pb-3 pe-10">
                    <img className="size-16 border border-2 outline-dotted my-1 mb-2 rounded-full"></img>
                    <p className="text-sm font-medium text-pretty text-lg">
                      {userLoginData ? userLoginData.userName : ""}
                    </p>
                  </div>
                  <div className=" text-right ps-3 py-3 hover:cursor-pointer font-serif ps-10 text-black">
                    <p className="hover:text-[#7e2b25] pb-1"> Profile change</p>
                    <p className="hover:text-[#7e2b25] py-1">
                      Update Payment Method
                    </p>
                    <p className="hover:text-[#7e2b25] pt-1"> setting</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <p
                    className="hover:text-red-500 hover:cursor-pointer pt-2 font-serif text-lg"
                    onClick={() => dispatch(changeIsUserLogin(false))}
                  >
                    Log Out
                  </p>
                </div>
              </div>

              <div className="absolute top-2 right-5 hover:cursor-pointer">
                <i
                  class="fa-solid fa-arrow-left-long text-xl"
                  onClick={() => dispatch(changeIsMenuClicked(false))}
                ></i>
              </div>
            </div>

            <div className="w-full text-sm font-sans text-stone-800 py-3 px-2">
              <ul>
                {categoryType.map((category, index) => (
                  <div
                    className="flex justify-between px-5 py-2 hover:cursor-pointer hover:text-[#93352f]"
                    key={index}
                  >
                    <li>{category}</li>
                    {category !== "MIA" &&
                    category !== "WEDDING" &&
                    category !== "GIFTING" ? (
                      <i className="fa-solid fa-angle-right"></i>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full bg-[#f1e7e7] text-[#7e2b25] ps-7 pt-5 pb-20 text-left">
              <p>
                <span className="hover:text-black hover:cursor-pointer">
                  My Orders
                </span>
              </p>
              <p>
                <span className="hover:text-black hover:cursor-pointer">
                  FAQs
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
