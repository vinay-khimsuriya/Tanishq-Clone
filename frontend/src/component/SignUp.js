import React, { useEffect, useReducer, useRef, useState } from "react";
import { changeIsSignUpStatus } from "../redux files/headerSlice";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, and include one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    setError("");
    return true;
  };

  const fetchdata = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      email: emailRef.current.value,
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("http://localhost:4500/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("NEtwork response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        dispatch(changeIsSignUpStatus(false));
        alert("User registered successfully");
      })
      .catch((error) => {
        alert("Something went to wrong in registering user");
      });
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-black bg-opacity-35 fixed top-0 left 0 z-[60]">
      <div className="w-[28rem] flex justify-center bg-[#f2eae8] text-[#995c5c] rounded-xl relative">
        <div className="absolute top-2 right-4 font-bold text-xl">
          <i
            class="fa-solid fa-xmark"
            onClick={() => dispatch(changeIsSignUpStatus(false))}
          ></i>
        </div>
        <div className="w-4/5 my-20">
          <div>
            <h1 className="text-4xl font-semibold">Sign Up</h1>
          </div>
          <div className="mt-5">
            <form className="text-left" onSubmit={fetchdata}>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Email :
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  placeholder="Enter your email Address..."
                  className={`w-full px-4 py-2 mt-1 border ${
                    error === "Invalid email address"
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Username:
                </label>
                <input
                  ref={userNameRef}
                  type="text"
                  placeholder="Enter Username"
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Password:
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter strong password"
                  className={`w-full px-4 py-2 mt-1 border ${
                    error.includes("Password")
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              <div class="mb-4">
                <label class="block text-base font-medium text-gray-700">
                  Confirm Password:
                </label>
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="Enter ypur password to confirm"
                  className={`w-full px-4 py-2 mt-1 border ${
                    error === "Passwords do not match"
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>

              <button
                type="submit"
                class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
