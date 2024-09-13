import "../assets/css/CareersAchievements.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import caach1 from "../assets/images/ca-info1.png";
import caach2 from "../assets/images/ca-info2.png";
import caach3 from "../assets/images/ca-info3.png";
import caach4 from "../assets/images/ca-info4.png";

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
                  <img src={caach1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading caach-heading">
                      Income Opportunities
                    </h5>
                    <p className="card-text caach-text">
                      Take control of your financial future. Set your desired
                      earnings and achieve your goals on your terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card caach-card">
                  <img src={caach2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading caach-heading">
                      Career Growth
                    </h5>
                    <p className="card-text caach-text">
                      Join us to elevate your career. Together, we'll unlock
                      your potential and achieve incredible milestones. Your
                      growth awaits!
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card caach-card">
                  <img src={caach3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading caach-heading">
                      Rewards and Recognition
                    </h5>
                    <p className="card-text caach-text">
                      Unlock your earning potential with our innovative bonuses.
                      Achieve your financial dreams faster than ever before.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card caach-card">
                  <img src={caach4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading caach-heading">Travel</h5>
                    <p className="card-text caach-text">
                      Discover exciting domestic and international travel
                      promotions, exploring the world around you at no cost.
                    </p>
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
