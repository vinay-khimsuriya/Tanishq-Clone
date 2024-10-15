import React from "react";
import logo from "../img/logo.svg";

const AdminNav = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 py-1 border-b-2">
      <div className="ms-14">
        <img className="w-16" src={logo} alt="logo" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="rounded-full">
          <img className=" w-10" src={logo} alt="profile photo" />
        </div>
        <div className="text-primary">
          <h6>admin name</h6>
          <p className="text-sm">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
