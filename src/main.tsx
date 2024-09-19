import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/scss/index.scss";

import Home from "../src/pages/Home.tsx";
import Careers from "../src/pages/Careers.tsx";
import Products from "../src/pages/Products.tsx";
import Support from "../src/pages/Support.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
