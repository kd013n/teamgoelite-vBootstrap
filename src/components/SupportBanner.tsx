import "../assets/scss/PageBanner.scss";

import spbanner1 from "../assets/images/sp-banner1.png";

export default function SupportBanner() {
  return (
    <>
      <div className="container-banner">
        <div className="banner-text position-absolute">
          <p>Support @</p>
          <p className="banner-tge">TGE</p>
        </div>
        <img
          className="banner-image object-fit-cover w-100"
          src={spbanner1}
          alt=""
        />
      </div>
    </>
  );
}
