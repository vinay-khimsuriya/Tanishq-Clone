import React from "react";
import { RxCross1 } from "react-icons/rx";

const EditProduct = ({ setIsEdit }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25">
      <div className="bg-transparent flex justify-center items-center w-full h-screen relative">
        <span
          className="absolute top-3 right-3 text-xl cursor-pointer"
          onClick={() => setIsEdit(false)}
        >
          <RxCross1 />
        </span>
        <form className="w-500px bg-white border border-primary rounded-md">
            
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
