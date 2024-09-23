import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/ProductsFNA.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;
const arrowUpRightFromSquare = (
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade />
);

import prfnabanner1 from "../assets/images/pr-fna/prfna-banner1.jpg";
import prfnabanner2 from "../assets/images/pr-fna/prfna-banner2.jpg";
import prfnabanner3 from "../assets/images/pr-fna/prfna-banner3.jpg";
import prfnabanner4 from "../assets/images/pr-fna/prfna-banner4.jpg";

export default function ProductsFNA() {
  return (
    <>
      <div className="prfna-container">
        <div id="carouselFNA" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="prfna-itemcontainer">
                <div className="prfna-heading">
                  <p className="prfna-title">Financial Needs Analysis</p>
                  <p className="prfna-subtitle">
                    Team Go Elite can assist you in planning for your financial
                    future through a thorough financial needs analysis. We focus
                    on helping you achieve financial security by understanding
                    your unique goals and developing a personalized strategy
                    that aligns with your life stages.
                  </p>
                  <div className="prfna-btngrp">
                    <button className="prfna-btn rounded">
                      Consult an Adviser {arrowUpRightFromSquare}
                    </button>
                    <button
                      className="prfna-btn rounded"
                      type="button"
                      data-bs-target="#carouselFNA"
                      data-bs-slide="next"
                    >
                      More about FNA {chevronRight}
                    </button>
                  </div>
                </div>
                <div className="prfna-banner">
                  <img src={prfnabanner1} className="rounded" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="prfna-itemcontainer">
                <div className="prfna-heading">
                  <p className="prfna-title">Financial Needs Analysis</p>
                  <p className="prfna-subtitle">
                    Team Go Elite can assist you in planning for your financial
                    future through a thorough financial needs analysis. We focus
                    on helping you achieve financial security by understanding
                    your unique goals and developing a personalized strategy
                    that aligns with your life stages.
                  </p>
                  <div className="prfna-btngrp">
                    <button className="prfna-btn rounded">
                      Consult an Adviser {arrowUpRightFromSquare}
                    </button>
                    <button
                      className="prfna-btn rounded"
                      type="button"
                      data-bs-target="#carouselFNA"
                      data-bs-slide="next"
                    >
                      More about FNA {chevronRight}
                    </button>
                  </div>
                </div>
                <div className="prfna-banner">
                  <img src={prfnabanner2} className="rounded" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="prfna-itemcontainer">
                <div className="prfna-heading">
                  <p className="prfna-title">Financial Needs Analysis</p>
                  <p className="prfna-subtitle">
                    Team Go Elite can assist you in planning for your financial
                    future through a thorough financial needs analysis. We focus
                    on helping you achieve financial security by understanding
                    your unique goals and developing a personalized strategy
                    that aligns with your life stages.
                  </p>
                  <div className="prfna-btngrp">
                    <button className="prfna-btn rounded">
                      Consult an Adviser {arrowUpRightFromSquare}
                    </button>
                    <button
                      className="prfna-btn rounded"
                      type="button"
                      data-bs-target="#carouselFNA"
                      data-bs-slide="next"
                    >
                      More about FNA {chevronRight}
                    </button>
                  </div>
                </div>
                <div className="prfna-banner">
                  <img src={prfnabanner3} className="rounded" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="prfna-itemcontainer">
                <div className="prfna-heading">
                  <p className="prfna-title">Financial Needs Analysis</p>
                  <p className="prfna-subtitle">
                    Team Go Elite can assist you in planning for your financial
                    future through a thorough financial needs analysis. We focus
                    on helping you achieve financial security by understanding
                    your unique goals and developing a personalized strategy
                    that aligns with your life stages.
                  </p>
                  <div className="prfna-btngrp">
                    <button className="prfna-btn rounded">
                      Consult an Adviser {arrowUpRightFromSquare}
                    </button>
                    <button
                      className="prfna-btn rounded"
                      type="button"
                      data-bs-target="#carouselFNA"
                      data-bs-slide="next"
                    >
                      More about FNA {chevronRight}
                    </button>
                  </div>
                </div>
                <div className="prfna-banner">
                  <img src={prfnabanner4} className="rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
