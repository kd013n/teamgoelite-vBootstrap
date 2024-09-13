import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

import "../assets/css/CareerPrograms.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import casidebanner1 from "../assets/images/ca-sidebanner1.jpg";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;

export default function CareerPrograms() {
  return (
    <>
      <div className="caprograms-container">
        <div className="caprograms-heading">
          <div className="caprograms-title-group">
            <p className="caprograms-title">Join Team </p>
            <p className="caprograms-title2">Go</p>
            <p className="caprograms-title"> Elite</p>
          </div>

          <p className="caprograms-subtitle">
            Transform your aspirations into tangible achievements and success
            stories. <br />
            Experience the power of teamwork, mentorship, and success in our
            elite community!
          </p>
        </div>

        <div className="caprograms-offerings">
          <div className="caprograms-list">
            <div className="row caprograms-row">
              <div className="col-10 ">
                <div
                  className="list-group caprograms-links"
                  id="list-tab"
                  role="tablist"
                >
                  <Link
                    className="list-group-item list-group-item-action ca-links active"
                    id="list-home-list"
                    data-bs-toggle="list"
                    to="#list-home"
                    role="tab"
                    aria-controls="list-home"
                  >
                    <p className="link-title">
                      Financial Advisors Hiring Program
                    </p>
                    <p className="link-subtext">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda doloribus quae recusandae exercitationem sint
                    </p>
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action ca-links"
                    id="list-profile-list"
                    data-bs-toggle="list"
                    to="#list-profile"
                    role="tab"
                    aria-controls="list-profile"
                  >
                    <p className="link-title">Associate Branch Head Program</p>
                    <p className="link-subtext">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda doloribus quae recusandae exercitationem sint
                    </p>
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action ca-links"
                    id="list-messages-list"
                    data-bs-toggle="list"
                    to="#list-messages"
                    role="tab"
                    aria-controls="list-messages"
                  >
                    <p className="link-title">Manager Hiring Program</p>
                    <p className="link-subtext">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda doloribus quae recusandae exercitationem sint
                    </p>
                  </Link>
                  <Link
                    className="list-group-item list-group-item-action ca-links"
                    id="list-settings-list"
                    data-bs-toggle="list"
                    to="#list-settings"
                    role="tab"
                    aria-controls="list-settings"
                  >
                    <p className="link-title">Manager Development Program</p>
                    <p className="link-subtext">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda doloribus quae recusandae exercitationem sint
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="caprograms-view">
            <div className="tab-content caprograms-tabrow" id="nav-tabContent">
              <div
                className="tab-pane caprograms-genview card show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <div className="genview-container card">
                  <div className="genview-left rounded-start">
                    <img src={casidebanner1} alt="" />
                  </div>
                  <div className="genview-right rounded-end">
                    <p className="genview-title">
                      Financial Advisors Hiring Program
                    </p>
                    <p className="genview-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatum assumenda praesentium reiciendis nostrum
                      voluptatibus id et deserunt neque, architecto, consectetur
                      commodi?
                    </p>
                    <button className="genview-button rounded  border-0">
                      Learn More {chevronRight}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <div className="genview-container card">
                  <div className="genview-left rounded-start">
                    <img src={casidebanner1} alt="" />
                  </div>
                  <div className="genview-right rounded-end">
                    <p className="genview-title">
                      Associate Branch Head Program
                    </p>
                    <p className="genview-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatum assumenda praesentium reiciendis nostrum
                      voluptatibus id et deserunt neque, architecto, consectetur
                      commodi?
                    </p>
                    <button className="genview-button rounded  border-0">
                      Learn More {chevronRight}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <div className="genview-container card">
                  <div className="genview-left rounded-start">
                    <img src={casidebanner1} alt="" />
                  </div>
                  <div className="genview-right rounded-end">
                    <p className="genview-title">Manager Hiring Program</p>
                    <p className="genview-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatum assumenda praesentium reiciendis nostrum
                      voluptatibus id et deserunt neque, architecto, consectetur
                      commodi?
                    </p>
                    <button className="genview-button rounded  border-0">
                      Learn More {chevronRight}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <div className="genview-container card">
                  <div className="genview-left rounded-start">
                    <img src={casidebanner1} alt="" />
                  </div>
                  <div className="genview-right rounded-end">
                    <p className="genview-title">Manager Development Program</p>
                    <p className="genview-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptatum assumenda praesentium reiciendis nostrum
                      voluptatibus id et deserunt neque, architecto, consectetur
                      commodi?
                    </p>
                    <button className="genview-button rounded  border-0">
                      Learn More {chevronRight}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
