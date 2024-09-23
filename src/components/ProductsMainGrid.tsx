import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/ProductsMainGrid.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faPersonCane } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faHouseLock } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const viewall = <FontAwesomeIcon icon={faSquarePlus} />;
const prod1 = <FontAwesomeIcon icon={faUserDoctor} />;
const prod2 = <FontAwesomeIcon icon={faWallet} />;
const prod3 = <FontAwesomeIcon icon={faUserGraduate} />;
const prod4 = <FontAwesomeIcon icon={faPersonCane} />;
const prod5 = <FontAwesomeIcon icon={faPiggyBank} />;
const prod6 = <FontAwesomeIcon icon={faEarthAsia} />;
const prod7 = <FontAwesomeIcon icon={faCar} />;
const prod8 = <FontAwesomeIcon icon={faHouseLock} />;
const prod9 = <FontAwesomeIcon icon={faBriefcase} />;

export default function ProductsMainGrid() {
  return (
    <>
      <div className="prmg-container">
        <div className="prmg-heading">
          <div className="prmg-title-group">
            <p className="prmg-title2">Product</p>
            <p className="prmg-title"> Solutions</p>
          </div>

          <p className="prmg-subtitle">
            Aut voluptatum natus asperiores quas laudantium?
          </p>
        </div>

        <div className="prmg-grid">
          <ul
            className="nav nav-pills prmg-tabnav"
            id="pills-tab"
            role="tablist"
          >
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                <div className="prmg-navlinkicon">{viewall}</div>
                <div className="prmg-navlinktitle">
                  <p>All Products</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-health-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-health"
                type="button"
                role="tab"
                aria-controls="pills-health"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod1}</div>
                <div className="prmg-navlinktitle">
                  <p>Health &amp; Critical Illness</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-income-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-income"
                type="button"
                role="tab"
                aria-controls="pills-income"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod2}</div>
                <div className="prmg-navlinktitle">
                  <p>Income Protection</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-edu-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edu"
                type="button"
                role="tab"
                aria-controls="pills-edu"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod3}</div>
                <div className="prmg-navlinktitle">
                  <p>Education</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-retirement-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-retirement"
                type="button"
                role="tab"
                aria-controls="pills-retirement"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod4}</div>
                <div className="prmg-navlinktitle">
                  <p>Retirement</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-savings-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-savings"
                type="button"
                role="tab"
                aria-controls="pills-savings"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod5}</div>
                <div className="prmg-navlinktitle">
                  <p>Savings &amp; Investments</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-travel-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-travel"
                type="button"
                role="tab"
                aria-controls="pills-travel"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod6}</div>
                <div className="prmg-navlinktitle">
                  <p>Travel Insurance</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-car-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-car"
                type="button"
                role="tab"
                aria-controls="pills-car"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod7}</div>
                <div className="prmg-navlinktitle">
                  <p>Car Insurance</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod8}</div>
                <div className="prmg-navlinktitle">
                  <p>Home Insurance</p>
                </div>
              </button>
            </li>
            <li className="prmg-navitem" role="presentation">
              <button
                className="nav-link prmg-navlink"
                id="pills-commercial-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-commercial"
                type="button"
                role="tab"
                aria-controls="pills-commercial"
                aria-selected="false"
              >
                <div className="prmg-navlinkicon">{prod9}</div>
                <div className="prmg-navlinktitle">
                  <p>Commercial Insurance</p>
                </div>
              </button>
            </li>
          </ul>

          <div className="tab-content prmg-tabcontent" id="pills-tabContent">
            <div
              className="tab-pane prmg-pane prmg-categories fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              All Products
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-health"
              role="tabpanel"
              aria-labelledby="pills-health-tab"
            >
              Health and Critical Illness
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-income"
              role="tabpanel"
              aria-labelledby="pills-income-tab"
            >
              Income Protection
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-edu"
              role="tabpanel"
              aria-labelledby="pills-edu-tab"
            >
              Education
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-retirement"
              role="tabpanel"
              aria-labelledby="pills-retirement-tab"
            >
              Retirement
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-savings"
              role="tabpanel"
              aria-labelledby="pills-savings-tab"
            >
              Savings and Investment
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-travel"
              role="tabpanel"
              aria-labelledby="pills-travel-tab"
            >
              Travel Insurance
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-car"
              role="tabpanel"
              aria-labelledby="pills-car-tab"
            >
              Car Insurance
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              Home Insurance
            </div>
            <div
              className="tab-pane prmg-pane fade"
              id="pills-commercial"
              role="tabpanel"
              aria-labelledby="pills-commercial-tab"
            >
              Commercial Insurance
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
