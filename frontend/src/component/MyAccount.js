import React from "react";
import { useDispatch } from "react-redux";
import {
  changeIsSignInStatus,
  changeIsSignUpStatus,
} from "../redux files/headerSlice";

export default function MyAccount() {
  const dispatch = useDispatch();
  return (
    <div className="w-72 py-4 border border-slate-300 rounded-md text-[#963b3b] absolute top-[101%] -lg:right-36 -right-24  bg-white">
      <div className="">
        <h1 className="font-semibold text-2xl mb-3">My Account</h1>
        <p className="text-sm font-medium">Login to access your account</p>
        <div className="flex px-2 justify-evenly my-3">
          <button
            className="pb-[0.05rem] px-[0.75rem] border border-[#dfc3c3] rounded-md"
            onClick={() => {
              dispatch(changeIsSignInStatus(true));
              dispatch(changeIsSignUpStatus(false));
            }}
          >
            Login
          </button>
          <button
            className=" pb-[0.05rem] px-[0.75rem] border border-white rounded-md text-white bg-[#b44343]"
            onClick={() => {
              dispatch(changeIsSignInStatus(false));
              dispatch(changeIsSignUpStatus(true));
            }}
          >
            Sign Up
          </button>
        </div>
        <p className="text-sm font-medium mb-3">Click here to CONTACT US</p>
      </div>
    </div>
  );
}
