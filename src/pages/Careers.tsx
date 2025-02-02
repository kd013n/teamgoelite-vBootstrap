import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareersBanner from "../components/CareersBanner";
import CareersInfo from "../components/CareersInfo";
import CareerPrograms from "../components/CareerPrograms";
import CareersAchievements from "../components/CareersAchievements";
import CareersTravel from "../components/CareersTravel";
import CareersSlogan from "../components/CareersSlogan";

export default function Careers() {
  return (
    <>
      <Navbar></Navbar>
      <CareersBanner></CareersBanner>
      <CareersInfo></CareersInfo>
      <CareerPrograms></CareerPrograms>
      <CareersAchievements></CareersAchievements>
      <CareersTravel></CareersTravel>
      <CareersSlogan></CareersSlogan>
      <Footer></Footer>
    </>
  );
}
