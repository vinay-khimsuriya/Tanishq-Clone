import React from "react";
import { BsCartX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  changeIsSignInStatus,
  changeIsSignUpStatus,
} from "../redux files/headerSlice";
import { useNavigate } from "react-router-dom";

const CartIsEmpty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-[360px]">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex w-auto rounded-full bg-cartlogobg text-zinc-400 pt-8 pb-6 px-8">
            <BsCartX className="text-8xl" />
          </div>
          <h1 className="uppercase text-primary font-semibold text-[28px] my-7">
            Your cart is empty
          </h1>
          <div className="flex flex-col lg:flex-raw gap-5 text-lg">
            <button
              className="btn-primary hover:bg-orange-800 px-10 w-fit"
              onClick={() => {
                dispatch(changeIsSignInStatus(true));
                dispatch(changeIsSignUpStatus(false));
              }}
            >
              Login To View Your Cart
            </button>
            <button
              className="btn-secondary hover:bg-gray-100 px-10 w-auto"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIsEmpty;
