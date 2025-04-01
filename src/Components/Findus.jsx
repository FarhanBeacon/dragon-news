import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Find Us On</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start"><FaFacebook />Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter />Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default Findus;
