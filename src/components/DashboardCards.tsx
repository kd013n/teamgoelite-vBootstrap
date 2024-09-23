import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "../assets/scss/DashboardCards.scss";

import imgcareers from "../assets/images/page-banners/ca-banner1.png";
import imgproducts from "../assets/images/page-banners/pr-banner1.png";
import imgsupport from "../assets/images/page-banners/sp-banner1.png";

export default function DashboardCards() {
  return (
    <>
      <div className="container-fluid dashboardcards-container">
        <div className="dashboardcards-title-group">
          <p className="dashboardcards-title">Explore Team </p>
          <p className="dashboardcards-title2">Go</p>
          <p className="dashboardcards-title"> Elite</p>
        </div>
        <div className="cards-container">
          <div id="carouselExample" className="carousel slide cards-carousel">
            <div className="carousel-inner cards-inner">
              <div className="carousel-item card-items active">
                <div className="row card-cluster">
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imgcareers}
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
                        src={imgproducts}
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
                        src={imgsupport}
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
              <div className="carousel-item card-items">
                <div className="row card-cluster">
                  <div className="col-sm">
                    <div className="card dashcards-card">
                      <img
                        src={imgcareers}
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
                        src={imgproducts}
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
                        src={imgsupport}
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
