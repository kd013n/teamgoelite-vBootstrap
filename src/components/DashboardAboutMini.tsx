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
              Team Go Elite is a ﬁnancial organization organized to provide
              ﬁnancial literacy and advocate risk management to Filipino
              families. We also provide opportunities to Filipinos to achieve
              ﬁnancial freedom. <br /> <br />
              We mentor, we empower, and we lead you to be successful.
            </p>
          </div>
          <div className="dashrightcell">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide dashabout-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner dashabout-inner">
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
