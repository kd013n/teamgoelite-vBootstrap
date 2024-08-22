import './assets/css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import tgeLogo from './assets/images/tgelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const search_icon = <FontAwesomeIcon icon={faMagnifyingGlass} />

function Navbar() {
  return <>
    <nav className="navbar navbar-dark navbar-expand-lg h-25 z-3">
      <div className="container-fluid navbar-all">
        <a className="navbar-brand" href="#">
          <img className="nav-logo" src={tgeLogo} alt="TeamGoElite" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

            <div className="nav-item btn-group">
              <button type="button" className="btn  nav-title">Home</button>
            </div>

            <div className="nav-item dropdown">
              <button className="btn nav-title" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Careers
              </button>
              <ul className="dropdown-menu d-none">
                <li><a className="dropdown-item" href="#">Career Programs</a></li>
                <li><a className="dropdown-item" href="#">Travels and Incentives</a></li>
                <li><a className="dropdown-item" href="#">High-Income Earners</a></li>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <button className="btn nav-title" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </button>
              <ul className="dropdown-menu d-none">
                <li><a className="dropdown-item" href="#">Health</a></li>
                <li><a className="dropdown-item" href="#">Income Protection</a></li>
                <li><a className="dropdown-item" href="#">Lifestyle Protection</a></li>
                <li><hr className="dropdown-divider"/ ></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>

            <div className="nav-item dropdown">
              <button className="btn nav-title" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </button>
              <ul className="dropdown-menu d-none">
                <li><a className="dropdown-item" href="#">Resources</a></li>
                <li><a className="dropdown-item" href="#">Locate Us</a></li>
                <li><a className="dropdown-item" href="#">FAQs</a></li>
                <li><hr className="dropdown-divider"/ ></li>
                <li><a className="dropdown-item" href="#">Internal Resources</a></li>
              </ul>
            </div>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn nav-search btn-outline-success" type="submit">
              {search_icon}
            </button>
          </form>
        </div>
      </div>
    </nav>
  </> 
};

export default Navbar
