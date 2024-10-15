import React, { useState } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const ManageProduct = () => {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-full grid grid-cols-12 gap-3 p-2 relative">
      <div className="col-span-3 border">
        <button
          className="w-full btn-primary p-2 my-1 hover:bg-orange-800"
          onClick={() => {
            setIsShow(true);
            setIsEdit(false);
          }}
        >
          Add Product
        </button>
        <button
          className="w-full btn-primary p-2 my-1 hover:bg-orange-800"
          onClick={() => {
            setIsShow(false);
            setIsEdit(true);
          }}
        >
          Edit Product
        </button>
      </div>
      <div className="col-span-9 border">2</div>
      {isShow && <AddProduct setIsShow={setIsShow} />}
      {isEdit && <EditProduct setIsEdit={setIsEdit} />}
    </div>
  );
};

export default ManageProduct;
