import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4">
      <div className="logo">
        <img className="w-[320px]" src={logo} alt="header-image" />
      </div>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-gray-600">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
