import "../assets/css/CareersInfo1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import cainfo1 from "../assets/images/ca-info1.png";
import cainfo2 from "../assets/images/ca-info2.png";
import cainfo3 from "../assets/images/ca-info3.png";
import cainfo4 from "../assets/images/ca-info4.png";

export default function CareersInfo1() {
  return (
    <>
      <div className="container-cainfo">
        <div className="cainfo-carcontainer">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide cainfo-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card cainfo-card">
                  <img src={cainfo1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading cainfo-heading">
                      Income Opportunities
                    </h5>
                    <p className="card-text cainfo-text">
                      Take control of your financial future. Set your desired
                      earnings and achieve your goals on your terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card cainfo-card">
                  <img src={cainfo2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading cainfo-heading">
                      Career Growth
                    </h5>
                    <p className="card-text cainfo-text">
                      Join us to elevate your career. Together, we'll unlock
                      your potential and achieve incredible milestones. Your
                      growth awaits!
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card cainfo-card">
                  <img src={cainfo3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading cainfo-heading">
                      Rewards and Recognition
                    </h5>
                    <p className="card-text cainfo-text">
                      Unlock your earning potential with our innovative bonuses.
                      Achieve your financial dreams faster than ever before.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card cainfo-card">
                  <img src={cainfo4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-heading cainfo-heading">Travel</h5>
                    <p className="card-text cainfo-text">
                      Discover exciting domestic and international travel
                      promotions, exploring the world around you at no cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

        <div className="cainfo-primer">
          <h1 className="cainfo-title">Career Benefits</h1>
          <p className="cainfo-desc">
            Our benefits are created to help all of our employees and enhance
            the operating environment. To encourage people, we ensure that what
            we offer was equitable, supportive and compete with the market.
            <br />
            <br />
            <b>We mentor, we empower, and we lead you to be successful.</b>
          </p>
        </div>
      </div>
    </>
  );
}
