import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Pages/Navbar/Navbar";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Students from "./Pages/Students/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/students",
        element: <Students />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
