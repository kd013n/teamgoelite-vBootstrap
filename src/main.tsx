import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/scss/index.scss";

import Home from "../src/pages/Home.tsx";
import Careers from "../src/pages/Careers.tsx";
import Products from "../src/pages/Products.tsx";
import Support from "../src/pages/Support.tsx";
import NotFound from "./pages/NotFound.tsx";

import CaPrograms from "./components/CareerPrograms.tsx";

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
  { path: "/careers/programs", element: <CaPrograms /> },
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
