import "../assets/css/CareersBanner.css";

import cabanner1 from "../assets/images/ca-banner1.png";

export default function CareersBanner() {
  return (
    <>
      <div className="container-banner">
        <div className="banner-text position-absolute">
          <p>Careers @</p>
          <p className="banner-tge">TGE</p>
        </div>
        <img
          className="banner-image object-fit-cover w-100"
          src={cabanner1}
          alt=""
        />
      </div>
    </>
  );
}
