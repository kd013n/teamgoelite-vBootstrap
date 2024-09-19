import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/Footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import tgelogo from "../assets/images/tgelogo.png";

const facebook = <FontAwesomeIcon icon={faFacebookF} />;
const xtwitter = <FontAwesomeIcon icon={faXTwitter} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const tiktok = <FontAwesomeIcon icon={faTiktok} />;

function Footer() {
  return (
    <>
      <footer className="footer w-100">
        <section>
          <div className="footer-logo-top">
            <div className="footer-logo">
              <img src={tgelogo} alt="" />
            </div>
            <div className="footer-title">TEAM GO ELITE</div>
          </div>

          <div
            style={{
              overflow: "hidden",
              resize: "none",
              maxWidth: "100%",
              width: "78%",
              height: "200px",
              paddingTop: "2vw",
            }}
          >
            <div
              id="embedded-map-display"
              style={{
                height: "100%",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <iframe
                style={{
                  height: "100%",
                  width: "100%",
                  border: "0",
                  filter: "invert(100%)",
                }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=wellington+binondo+axa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
            <a
              className="code-for-google-map"
              href="https://www.bootstrapskins.com/themes"
              id="authorize-maps-data"
            ></a>
          </div>
        </section>

        <section>
          <a className="section-title">Careers</a>
          <div className="section-links">
            <a href="#">Financial Advisor</a>
            <a href="#">Unit Head</a>
            <a href="#">Associate Branch Head</a>
            <a href="#">Branch Head</a>
            <br />
            <a href="#">Travels & Incentives</a>
            <a href="#">High-Income Earners</a>
          </div>
        </section>

        <section>
          <a className="section-title">Products</a>
          <div className="section-links">
            <a href="#">Health and Critical Illness</a>
            <a href="#">Income Protection</a>
            <a href="#">Lifestyle Protection</a>
            <a href="#">Education</a>
            <a href="#">Retirement</a>
            <a href="#">Savings and Investment</a>
            <a href="#">General Insurance</a>
          </div>
        </section>

        <section>
          <a className="section-title">Support</a>
          <div className="section-links">
            <a href="#">Resources</a>
            <a href="#">Locate Us</a>
            <a href="#">FAQs</a>
            <br />
            <p className="section-contact">Contact Us</p>
            <a href="mailto:info@teamgoelite.com" className="non-links">
              info@teamgoelite.com
            </a>
            <a
              className="non-links"
              onClick={() => navigator.clipboard.writeText("09989996517")}
            >
              +63 998 999 6517
            </a>
          </div>
        </section>

        <section>
          <div className="section-misc">
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Testimonials</a>
            <a href="#">Credits</a>
          </div>
        </section>

        <section>
          <div>
            <p className="footer-follow-title">Follow Us</p>
            <hr className="footer-hr" />
            <div className="footer-follow">
              <div className="footer-icons">
                <a href="https://facebook.com">{facebook}</a>
              </div>
              <div className="footer-icons">
                <a href="https://x.com">{xtwitter}</a>
              </div>
              <div className="footer-icons">
                <a href="https://youtube.com">{youtube}</a>
              </div>
              <div className="footer-icons">
                <a href="https://instagram.com">{instagram}</a>
              </div>
              <div className="footer-icons">
                <a href="https://tiktok.com">{tiktok}</a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            Copyright &copy; 2024 TeamGoElite &times; kd013n. All Rights
            Reserved.
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
