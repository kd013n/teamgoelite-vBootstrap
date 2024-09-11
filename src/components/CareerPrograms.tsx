import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/css/CareerPrograms.css";

import cainfo1 from "../assets/images/ca-info1.png";
import cainfo2 from "../assets/images/ca-info2.png";
import cainfo3 from "../assets/images/ca-info3.png";
import cainfo4 from "../assets/images/ca-info4.png";

export default function CareerPrograms() {
  return (
    <>
      <div className="caprograms-container">
        <div className="caprograms-heading">
          <h1 className="caprograms-title">Join Team Go Elite</h1>
          <p>
            We are here to assist you advance your career and help you to reach
            your best potential.{" "}
          </p>
        </div>

        <div className="caprograms-offerings">
          <div className="caprograms-list">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the second item's accordion body. Let's imagine this
                    being filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the third item's accordion body. Nothing more
                    exciting happening here in terms of content, but just
                    filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in
                    a real-world application.
                  </div>
                </div>
              </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="btn-group">
                <button
                  className="btn btn-primary active"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  Active link
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                >
                  3
                </button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={cainfo1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={cainfo2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={cainfo3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={cainfo4} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="caprograms-view"></div>
        </div>
      </div>
    </>
  );
}
