import React from "react";

const ManageProduct = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-3 p-2">
      <div className="col-span-3 border">
        <button className="w-full btn-primary p-2 my-1 hover:bg-orange-800">
          Add Product
        </button>
        <button className="w-full btn-primary p-2 my-1 hover:bg-orange-800">
          Edit Product
        </button>
      </div>
      <div className="col-span-9 border">2</div>
    </div>
  );
};

export default ManageProduct;
