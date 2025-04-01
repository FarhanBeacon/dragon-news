import { RouterProvider } from "react-router";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/Router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
