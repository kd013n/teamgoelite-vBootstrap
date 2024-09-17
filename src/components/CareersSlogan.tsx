import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "../assets/css/CareersSlogan.css";

import imagerand from "../assets/images/db-banner1.png";
import imagerand2 from "../assets/images/db-banner2.png";
import imagerand3 from "../assets/images/db-banner3.png";

export default function CareersSlogan() {
  return (
    <>
      <div className="caslg-main">
        <div className="caslg-grid">
          <div className="caslg-leftcell">
            <h1 className="caslg-title">#TeamGoEliteAsset</h1>
            <p className="caslg-highlight">
              Our most important asset is our people.
            </p>
            <p className="caslg-text">
              We empower individuals to realize their full potential, supporting
              their growth both professionally and personally.
            </p>
          </div>
          <div className="caslg-rightcell">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide caslg-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img src={imagerand} className="w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={imagerand2} className="w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={imagerand3} className="w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
