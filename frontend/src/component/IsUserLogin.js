import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsUserLogin } from "../redux files/headerSlice";
import { emptyProductCart } from "../redux files/cartSlice";

export default function IsUserLogin() {
  const dispatch = useDispatch();

  const [localUserData, setLocalUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setLocalUserData(JSON.parse(storedUserData));
    }
  }, []);

  const userLoginData = useSelector((store) => store.user.userLoginData);
  const isUserLogin = useSelector((store) => store.header.isUserLogin);

  return (
    <div className="w-72 py-4 border border-slate-300 rounded-md text-[#963b3b] absolute top-[101%] -lg:right-36 -right-24  bg-white ">
      <div className="flex flex-col items-center justify-center border-b-2 pb-3">
        <img
          src={localUserData ? localUserData.image : ""}
          className="size-24 border border-2 outline-dotted my-1 mb-2 rounded-full"
        ></img>
        <p className="text-sm font-medium text-pretty text-lg">
          {localUserData ? localUserData.userName : ""}
        </p>
      </div>
      <div className="border border-t-2 text-left ps-3 py-3 hover:cursor-pointer font-serif">
        <p className="hover:text-blue-500 pb-1"> Profile change</p>
        <p className="hover:text-blue-500 py-1"> Update Payment Method</p>
        <p className="hover:text-blue-500 pt-1"> setting</p>
      </div>

      <div className="flex justify-center">
        <p
          className="hover:text-red-500 hover:cursor-pointer pt-2 pb-2 font-serif text-lg"
          onClick={() => {
            dispatch(changeIsUserLogin(false));
            dispatch(emptyProductCart());
            localStorage.removeItem("userData");
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
}
