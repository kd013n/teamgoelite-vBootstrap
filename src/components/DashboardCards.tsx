import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/css/DashboardCards.css";

import imagerand from "../assets/images/db-banner1.png";

export default function DashboardCards() {
  return (
    <>
      <div className="container-fluid dashboardcards-container">
        <p className="dashboardcards-title">Explore Team Go Elite</p>
        <div className="cards-container">
          <div id="carouselExample" className="carousel slide cards-carousel">
            <div className="carousel-inner cards-inner">
              <div className="carousel-item active">
                <div className="row card-cluster">
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="Careers"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Careers</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Careers at TGE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="Products"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Products</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Discover our products
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="Support"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Support</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Get support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row card-cluster">
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="Testimonials"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Testimonials</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Find out more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="Events"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Events</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Engage with us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imagerand}
                        className="card-img-top"
                        alt="About"
                      />
                      <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn card-btn">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
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
              data-bs-target="#carouselExample"
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
