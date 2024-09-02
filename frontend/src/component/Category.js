import React from "react";
import { categoryType } from "../utils/Categories";

export default function Category() {
  return (
    <div>
      <div className="w-full flex justify-center relative">
        <div className="w-5/6 text-slate-900 font-medium text-opacity-80 text-base py-[0.8rem] hidden lg:flex items-center justify-center">
          <ul className="flex text-nowrap w-full justify-evenly ">
            {categoryType.map((category, index) => (
              <li key={index}>
                <a href="#" className="hover:text-[#c95c5c]">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
