import React from "react";
import AdminNav from "./AdminNav";
import AdminSideMenu from "./AdminSideMenu";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-full">
      <AdminNav />
      <div className="flex">
        <AdminSideMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
