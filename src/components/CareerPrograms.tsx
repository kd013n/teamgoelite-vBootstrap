import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

import "../assets/css/CareerPrograms.css";

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
            We are here to assist you advance your career and help you to reach
            your best potential.{" "}
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
                <p className="genview-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas cupiditate aspernatur perferendis exercitationem{" "}
                </p>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <p className="genview-text">
                  {" "}
                  Lorem ignium dolor sit amet consectetur adipisicing elit.
                  Voluptas cupiditate aspernatur perferendis exercitationem{" "}
                </p>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <p className="genview-text">
                  {" "}
                  Lorem talcum dolor sit amet consectetur adipisicing elit.
                  Voluptas cupiditate aspernatur perferendis exercitationem{" "}
                </p>
              </div>
              <div
                className="tab-pane caprograms-genview card"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <p className="genview-text">
                  {" "}
                  Lorem gypsum dolor sit amet consectetur adipisicing elit.
                  Voluptas cupiditate aspernatur perferendis exercitationem{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
