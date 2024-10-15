import React, { useEffect, useState } from "react";
import qr from "../img/static images/qr.webp";

export default function Footer() {
  const [isUsefulLinks, setIsUseFullLinks] = useState(false);
  const [isInformation, setIsInformation] = useState(false);
  const [isContectUs, setIsContentctUS] = useState(false);

  const checkScreenWidth = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setIsUseFullLinks(true);
      setIsInformation(true);
      setIsContentctUS(true);
    } else {
      setIsUseFullLinks(false);
      setIsInformation(false);
      setIsContentctUS(false);
    }
  };

  useEffect(() => {
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-footer mt-5 py-14">
      <div className="w-5/6">
        <div className="w-full lg:flex justify-between text-start text-lg">
          <div className="flex gap-5">
            <div className="w-full">
              <div
                className="flex items-center justify-between text-primary cursor-pointer mb-2 lg:mb-12"
                onClick={() => {
                  setIsUseFullLinks(!isUsefulLinks);
                }}
              >
                <h1 className="font-medium">Useful Links</h1>
                {!isUsefulLinks && (
                  <i class="fa-solid fa-plus text-lg lg:hidden"></i>
                )}
                {isUsefulLinks && (
                  <i class="fa-solid fa-minus text-lg lg:hidden"></i>
                )}
              </div>
              {isUsefulLinks && (
                <div className="px-5 lg:px-0">
                  <ul>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Delivery Information</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">International Shipping</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Payment Options</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Track your Order</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Returns</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Find a Store</a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="w-full lg:hidden h-[0.05rem] rounded-full bg-black"></div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <div
                className="flex items-center justify-between text-primary cursor-pointer mb-2 lg:mb-12"
                onClick={() => {
                  setIsInformation(!isInformation);
                }}
              >
                <h1 className="font-medium ">Information</h1>
                {!isInformation && (
                  <i class="fa-solid fa-plus text-lg lg:hidden"></i>
                )}
                {isInformation && (
                  <i class="fa-solid fa-minus text-lg lg:hidden"></i>
                )}
              </div>
              {isInformation && (
                <div className="px-5 lg:px-0 ">
                  <ul>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Careers</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Blog</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Offers & Contest Details</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">Help & FAQs</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <a href="#">About Tanishq</a>
                    </li>
                  </ul>
                </div>
              )}
              <div className=" w-full h-[0.05rem] rounded-full bg-black lg:hidden"></div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <div
                className="flex items-center justify-between text-primary cursor-pointer mb-2 lg:mb-12"
                onClick={() => {
                  setIsContentctUS(!isContectUs);
                }}
              >
                <h1 className="font-medium">Contact Us</h1>
                {!isContectUs && (
                  <i class="fa-solid fa-plus text-lg lg:hidden"></i>
                )}
                {isContectUs && (
                  <i class="fa-solid fa-minus text-lg lg:hidden"></i>
                )}
              </div>
              {isContectUs && (
                <div className="px-5 lg:px-0 ">
                  <ul>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <i class="fa-solid fa-envelope me-3"></i>
                      <a href="#">Write to Us</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <i class="fa-solid fa-phone me-3"></i>
                      <a href="#">1800-266-0123</a>
                    </li>
                    <li className="pb-2 lg:pb-6 hover:underline hover:font-semibold">
                      <i class="fa-solid fa-message me-3"></i>
                      <a href="#">Chat with US</a>
                    </li>
                  </ul>
                </div>
              )}
              <div className=" w-full h-[0.05rem] rounded-full bg-black lg:hidden"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-4 lg:my-0">
            <h1 className="text-lg font-semibold">
              Download the Tanishq App Now
            </h1>
            <img src={qr} className="size-52 my-4"></img>
            <div className="w-full flex justify-center gap-3 mb-5">
              <div className="flex items-center bg-black text-white rounded-md px-3 py-1">
                <div className="me-1">
                  <i class="fa-brands fa-apple text-3xl"></i>
                </div>
                <div>
                  <p className="text-xs">Download on the</p>
                  <h1>App Store</h1>
                </div>
              </div>
              <div className="flex items-center bg-black text-white rounded-md px-3 py-1">
                <div className="me-1">
                  <i class="fa-brands fa-google-play text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <h1>Google Play</h1>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-8">
              <h1 className="text-xl font-semibold">Follow Us On</h1>
              <div className="flex gap-6 text-2xl">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block h-[0.05rem] rounded-full bg-black mt-10"></div>
      </div>
      <div className="w-5/6 flex flex-col lg:flex-row items-center justify-between pt-10">
        <div className="flex flex-wrap w-2/3 lg:w-auto my-4 lg:my-0 order-2 lg:order-1 gap-10 text-4xl ps-14 text-primary">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-paypal"></i>
          <i class="fa-brands fa-mastodon"></i>
          <i class="fa-solid fa-icicles"></i>
          <i class="fa-solid fa-building-columns"></i>
          <i class="fa-solid fa-money-check-dollar"></i>
        </div>
        <div className="text-sm flex lg:flex-col justify-center items-center flex-wrap w-2/3 lg:w-auto order-1 lg:order-2 lg:auto text-primary">
          <div className="order-2 lg:order-1 my-4 lg:my-0">
            <p>© 2024 Titan Company Limited. All Rights Reserved</p>
          </div>
          <div className="w-fit flex gap-4 justify-between items-center text-base order-1 lg:order-2">
            <h6 className="hover:text-[red] hover:cursor-pointer">
              Terms & Conditions
            </h6>
            <div className="hidden lg:block w-[0.20rem] h-4 bg-default-high rounded-full"></div>
            <h6 className="hover:text-[red] hover:cursor-pointer">
              Privacy Policy
            </h6>
            <div className="hidden lg:block w-[0.20rem] h-4 bg-default-high rounded-full"></div>
            <h6 className="hover:text-[red] hover:cursor-pointer">
              Disclaimer
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
