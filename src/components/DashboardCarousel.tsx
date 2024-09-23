import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/DashboardCarousel.scss";

import dbbanner1 from "../assets/images/db-banners/db-banner1.png";
import dbbanner2 from "../assets/images/db-banners/db-banner2.png";
import dbbanner3 from "../assets/images/db-banners/db-banner3.png";
import dbbanner4 from "../assets/images/db-banners/db-banner4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;

export default function DashboardCarousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3500">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">TEAM </p>
                <p className="disp2"> GO</p>
              </div>
              <div className="dbline">
                <p className="disp1">ELITE</p>
              </div>

              <div className="dashboard-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  facilis culpa ipsa, nam tenetur delectus fugiat quae alias
                  animi dignissimos assumenda modi
                </p>
                <button className="dashcar-btn rounded">
                  See more {chevronRight}
                </button>
              </div>
            </div>
            <img src={dbbanner1} className="object-fit-cover w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">WHAT'S </p>
              </div>
              <div className="dbline">
                <p className="disp2">NEW?</p>
              </div>

              <div className="dashboard-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  facilis culpa ipsa, nam tenetur delectus fugiat quae alias
                  animi dignissimos assumenda modi
                </p>
                <button className="dashcar-btn rounded">
                  See more {chevronRight}
                </button>
              </div>
            </div>
            <img src={dbbanner2} className="object-fit-cover w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">THE TGE</p>
              </div>
              <div className="dbline">
                <p className="disp2">MISSION</p>
              </div>

              <div className="dashboard-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  facilis culpa ipsa, nam tenetur delectus fugiat quae alias
                  animi dignissimos assumenda modi
                </p>
              </div>
            </div>
            <img src={dbbanner3} className="object-fit-cover w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="3500">
            <div className="dashboard-banner position-absolute">
              <div className="dbline">
                <p className="disp1">THE TGE</p>
              </div>
              <div className="dbline">
                <p className="disp2">VISION</p>
              </div>

              <div className="dashboard-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  facilis culpa ipsa, nam tenetur delectus fugiat quae alias
                  animi dignissimos assumenda modi
                </p>
              </div>
            </div>
            <img src={dbbanner4} className="object-fit-cover w-100" alt="..." />
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
