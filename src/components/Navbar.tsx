import "./assets/css/Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Link } from "react-router-dom";

import tgeLogo from "./assets/images/tgelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const search_icon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg h-25 z-3 position-sticky">
        <div className="container-fluid navbar-all">
          <Link to="/" className="navbar-brand">
            <img className="nav-logo" src={tgeLogo} alt="TeamGoElite" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <div className="nav-item btn-group">
                <Link to="/" className="btn nav-title">
                  Home
                </Link>
              </div>

              <div className="nav-item dropdown">
                <Link to="/careers" className="btn nav-title">
                  Careers
                </Link>
                <ul className="dropdown-menu d-none">
                  <li>
                    <a className="dropdown-item" href="#">
                      Career Programs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Travels and Incentives
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High-Income Earners
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <Link to="/products" className="btn nav-title">
                  Products
                </Link>
                <ul className="dropdown-menu d-none">
                  <li>
                    <a className="dropdown-item" href="#">
                      Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Income Protection
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lifestyle Protection
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Education
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Retirement
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Savings and Investment
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      General Insurance
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-item dropdown">
                <Link to="/support" className="btn nav-title">
                  Support
                </Link>
                <ul className="dropdown-menu d-none">
                  <li>
                    <a className="dropdown-item" href="#">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Locate Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Internal Resources
                    </a>
                  </li>
                </ul>
              </div>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn nav-search btn-outline-success"
                type="submit"
              >
                {search_icon}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
