import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/css/DashboardAboutMini.css";

import imagerand from "../assets/images/db-banner1.png";
import imagerand2 from "../assets/images/db-banner2.png";
import imagerand3 from "../assets/images/db-banner3.png";

export default function DashboardAboutMini() {
  return (
    <>
      <div className="dashmain">
        <div className="dashgrid">
          <div className="dashleftcell">
            <h1 className="dashabout-title">#KnowYouCan</h1>
            <p className="dashabout-text">
              Team Go Elite is a financial organization dedicated to promoting
              financial literacy and advocating for risk management among
              Filipino families. We aim to empower Filipinos by providing them
              with opportunities to achieve financial freedom and improve their
              overall financial well-being. <br />
              <br />
              <b>We mentor, we empower, and we lead you to be successful.</b>
            </p>
          </div>
          <div className="dashrightcell">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide dashabout-carousel rounded"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner dashabout-inner rounded">
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
