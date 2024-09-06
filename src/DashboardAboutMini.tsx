import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/DashboardAboutMini.css";

import imagerand from "./assets/images/db-banner1.png";

function DashboardAboutMini() {
  return (
    <>
      <div className="container dashgrid">
        <div className="dashleftcell">
          <h1 className="display-2">#KnowYouCan</h1>
          <p>
            Team Go Elite is a ﬁnancial organization organized to provide
            ﬁnancial literacy and advocate risk management to Filipino families.{" "}
            <br />
            We also provide opportunities to Filipinos to achieve ﬁnancial
            freedom; We mentor, we empower, and we lead you to be successful.
          </p>
        </div>
        <div className="dashrightcell">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAboutMini;
