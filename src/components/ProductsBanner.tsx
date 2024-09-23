import "../assets/scss/PageBanner.scss";

import prbanner1 from "../assets/images/page-banners/pr-banner1.png";

export default function ProductsBanner() {
  return (
    <>
      <div className="container-banner">
        <div className="banner-text position-absolute">
          <p>Products @</p>
          <p className="banner-tge">TGE</p>
        </div>
        <img
          className="banner-image object-fit-cover w-100"
          src={prbanner1}
          alt=""
        />
      </div>
    </>
  );
}
