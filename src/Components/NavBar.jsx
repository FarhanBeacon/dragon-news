import React from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-12 py-3 items-center">
      <div className="col-span-4"></div>
      <div className="navBar col-span-4">
        <div className="flex justify-center gap-4">
          <NavLink to={"/test"}>Home</NavLink>
          <NavLink to={"/test"}>About</NavLink>
          <NavLink to={"/test"}>Career</NavLink>
        </div>
      </div>
      <div className="userStatus col-span-4">
        <div className="flex items-center  justify-end gap-2.5 ">
          <img src={userIcon} className="rounded-full" alt="user-profile" />
          <button className="btn px-5 py-1.5 bg-neutral text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
