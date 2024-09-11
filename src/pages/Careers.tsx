import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersBanner from "../components/CareersBanner";
import CareersInfo from "../components/CareersInfo";
import CareerPrograms from "../components/CareerPrograms";

export default function Careers() {
  return (
    <>
      <Navbar></Navbar>
      <CareersBanner></CareersBanner>
      <CareersInfo></CareersInfo>
      <CareerPrograms></CareerPrograms>
      <Footer></Footer>
    </>
  );
}
