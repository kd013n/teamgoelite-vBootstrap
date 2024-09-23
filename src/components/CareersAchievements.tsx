import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/CareersAchievements.scss";

import { Link } from "react-router-dom";

import caach1 from "../assets/images/ca-info/ca-info1.png";
import caach2 from "../assets/images/ca-info/ca-info2.png";
import caach3 from "../assets/images/ca-info/ca-info3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;
const arrowUpRightFromSquare = (
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade />
);

export default function CareersAchievements() {
  return (
    <>
      <div className="container-caach">
        <div className="caach-carcontainer">
          <div
            id="carouselAchievements"
            className="carousel slide caach-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card caach-card">
                  <img
                    src={caach1}
                    className="caach-img-left rounded-start"
                    alt="..."
                  />
                  <div className="card-body caach-body">
                    <h5 className="card-heading caach-heading">MDRT</h5>
                    <p className="card-text caach-text">
                      Take control of your financial future. Set your desired
                      earnings and achieve your goals on your terms.
                    </p>
                    <div className="caach-btn-grp">
                      <button className="caach-btn rounded">
                        Testimonials {chevronRight}
                      </button>
                      <button className="caach-btn rounded">
                        MDRT Mentoring Program {chevronRight}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card caach-card">
                  <img
                    src={caach2}
                    className="caach-img-left rounded-start"
                    alt="..."
                  />
                  <div className="card-body caach-body">
                    <h5 className="card-heading caach-heading">GAMA</h5>
                    <p className="card-text caach-text">
                      Join us to elevate your career. Together, we'll unlock
                      your potential and achieve incredible milestones. Your
                      growth awaits!
                    </p>
                    <div className="caach-btn-grp">
                      <button className="caach-btn rounded">
                        Testimonials {chevronRight}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card caach-card">
                  <img
                    src={caach3}
                    className="caach-img-left rounded-start"
                    alt="..."
                  />
                  <div className="card-body caach-body">
                    <h5 className="card-heading caach-heading">AXA Prime</h5>
                    <p className="card-text caach-text">
                      Unlock your earning potential with our innovative bonuses.
                      Achieve your financial dreams faster than ever before.
                    </p>
                    <div className="caach-btn-grp">
                      <Link
                        to="https://www.axa.com.ph/axaprime"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="caach-btn rounded">
                          AXA Prime {arrowUpRightFromSquare}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselAchievements"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
        </div>
        <div className="caach-primer">
          <h1 className="caach-title">Team Go Elite Milestones</h1>
          <p className="caach-desc">
            Over the past years, we have developed consistent qualifiers to the
            prestigious <b>Million Dollar Round Table</b>.
          </p>
          <div className="caach-fyi">
            <div className="vr caach-fyivr"></div>
            <p className="caach-fyidesc">
              The <b>Million Dollar Round Table (MDRT)</b>, recognized as The
              Premier Association of Financial Professionals®, is an independent
              global organization made up of elite life insurance and financial
              services experts. Its members hail from more than 700 companies
              and represent 80 nations and territories worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
