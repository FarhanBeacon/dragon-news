import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Layouts/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/news" element={<h1>This is News</h1>} />
    </Routes>
  );
};

export default Router;
