import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardCarousel from "../components/DashboardCarousel";
import DashboardCards from "../components/DashboardCards";
import DashboardAboutMini from "../components/DashboardAboutMini";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <DashboardCarousel></DashboardCarousel>
      <DashboardCards></DashboardCards>
      <DashboardAboutMini></DashboardAboutMini>
      <Footer></Footer>
    </>
  );
}
