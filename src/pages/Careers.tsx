import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersBanner from "../components/CareersBanner";
import CareersInfo1 from "../components/CareersInfo1";
import CareerPrograms from "../components/CareerPrograms";

export default function Careers() {
  return (
    <>
      <Navbar></Navbar>
      <CareersBanner></CareersBanner>
      <CareersInfo1></CareersInfo1>
      <CareerPrograms></CareerPrograms>
      <Footer></Footer>
    </>
  );
}
