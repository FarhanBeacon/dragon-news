import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../Layouts/HomePage.jsx";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params })=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
