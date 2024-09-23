import "../assets/scss/PageBanner.scss";

import cabanner1 from "../assets/images/page-banners/ca-banner1.png";

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
