import React from "react";
import SocialLogin from "../Components/SocialLogin";
import Findus from "../Components/Findus";

const RightNavbar = () => {
  return (
    <div className="space-y-4">
      <SocialLogin />
      <Findus />
    </div>
  );
};

export default RightNavbar;
