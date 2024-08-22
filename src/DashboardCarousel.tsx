import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/DashboardCarousel.css";
import dbbanner1 from "./assets/images/db-banner1.png";
import dbbanner2 from "./assets/images/db-banner2.png";

function DashboardCarousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2300">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">TEAM </p>
                <p className="disp2"> GO</p>
              </div>
              <div className="dbline">
                <p className="disp1">ELITE</p>
              </div>
            </div>
            <div className="dashboard-text">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button">
                  Button
                </button>
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
            <img src={dbbanner1} className="object-fit-cover w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2300">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">WHAT'S </p>
              </div>
              <div className="dbline">
                <p className="disp2">NEW?</p>
              </div>
            </div>
            <img src={dbbanner2} className="object-fit-cover w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2300">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">THE TGE</p>
              </div>
              <div className="dbline">
                <p className="disp2">MISSION</p>
              </div>
            </div>
            <img src={dbbanner1} className="object-fit-cover w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2300">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">THE TGE</p>
              </div>
              <div className="dbline">
                <p className="disp2">VISION</p>
              </div>
            </div>
            <img src={dbbanner2} className="object-fit-cover w-100" alt="..." />
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
    </>
  );
}

export default DashboardCarousel;
