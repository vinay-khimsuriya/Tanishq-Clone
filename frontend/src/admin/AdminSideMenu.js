import React from "react";
import { Link } from "react-router-dom";

const AdminSideMenu = () => {
  return (
    <div className="w-64 border-r-2 h-[650px] ps-5 pt-5">
      <ul className="flex flex-col gap-2">
        <li>
          <Link to="/admin/managecategory">Manage Category</Link>
        </li>
        <li>
          <Link to="/admin/manageproduct">ManageProduct</Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
        <li>
          <Link to=""></Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideMenu;
