import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsSignInStatus,
  changeIsUserLogin,
} from "../redux files/headerSlice";
import { addUserLoginData } from "../redux files/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const isUserLogin = useSelector((store) => store.header.isUserLogin);

  const validate = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username.length) {
      setError("Please Enter Username");
      return false;
    }
    if (!password.length) {
      setError("Please Enter Password");
      return false;
    }

    return true;
  };

  const fetchData = async () => {
    if (!validate()) {
      return;
    }

    const data = {
      userName: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:4500/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();

      if (!response.ok) {
        console.log(response);
        setError(jsonData.message);
      } else {
        dispatch(changeIsUserLogin(true));
        alert("User Successfully Login", isUserLogin);
        console.log("data", jsonData.data);
        dispatch(addUserLoginData(jsonData.data));

        dispatch(changeIsSignInStatus(false));
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-black bg-opacity-35 fixed top-0 left 0 z-[60]">
      <div className="w-[28rem] flex justify-center bg-[#f2eae8] text-[#995c5c] rounded-xl relative">
        <div className="absolute top-2 right-4 font-bold text-xl">
          <i
            class="fa-solid fa-xmark"
            onClick={() => dispatch(changeIsSignInStatus(false))}
          ></i>
        </div>
        <div className="w-4/5 border my-20">
          <div>
            <h1 className="text-4xl font-semibold">Sign In</h1>
          </div>
          <div className="mt-5">
            <form className="text-left" onSubmit={fetchData}>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Username :
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  placeholder="Enter your username"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Password :
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter strong password"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="flex items-center mb-4">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label class="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              {error && <p className="my-2 text-red-600"> {error}</p>}
              <button
                type="submit"
                class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
