import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Pages/Navbar/Navbar";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Students from "./Pages/Students/Students";
import StudentsPage from "./Pages/StudentPage/StudentPage"
import ContactPage from "./Pages/ContactPage/ContactPage"
import ContactPageStudent from "./Pages/ContactPage/ContactPageStudent"


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
      {
        path: "/students/:id",
        element: <StudentsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/contact/:id",
        element: <ContactPageStudent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
