import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.tsx";
import "./assets/css/index.css";
import DashboardCarousel from "./DashboardCarousel.tsx";
import Footer from "./Footer.tsx";
import DashboardCards from "./DashboardCards.tsx";
import DashboardAboutMini from "./DashboardAboutMini.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <DashboardCarousel />
    <DashboardCards />
    <DashboardAboutMini />
    <Footer />
  </StrictMode>
);
