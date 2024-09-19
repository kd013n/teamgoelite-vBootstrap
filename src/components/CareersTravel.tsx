import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/CareersTravel.scss";

import catravel01 from "../assets/images/ca-travels/catravel-japan2017.jpg";
import catravel02 from "../assets/images/ca-travels/catravel-greece2014.jpg";
import catravel03 from "../assets/images/ca-travels/catravel-greece2017.jpg";
import catravel04 from "../assets/images/ca-travels/catravel-italy2016.jpeg";
import catravel05 from "../assets/images/ca-travels/catravel-italy2017.jpg";
import catravel06 from "../assets/images/ca-travels/catravel-italy2022.jpg";
import catravel07 from "../assets/images/ca-travels/catravel-malta2018.jpg";
import catravel08 from "../assets/images/ca-travels/catravel-norway2015.jpg";
import catravel09 from "../assets/images/ca-travels/catravel-norway2018.jpg";
import catravel10 from "../assets/images/ca-travels/catravel-thailand2015.jpg";
import catravel11 from "../assets/images/ca-travels/catravel-thailand2018.jpg";
import catravel12 from "../assets/images/ca-travels/catravel-turkey2016.jpg";
import catravel13 from "../assets/images/ca-travels/catravel-vietnam2015.jpg";
import catravel14 from "../assets/images/ca-travels/catravel-maldives2016.jpg";

export default function CareersTravel() {
  return (
    <>
      <div className="catravel-container">
        <div className="catravel-heading">
          <div className="catravel-tge-group">
            <p className="catravel-title">Team </p>
            <p className="catravel-title2">Go</p>
            <p className="catravel-title"> Elite</p>
          </div>
          <p className="catravel-title">Travel Sense</p>

          <p className="catravel-subtitle">
            Embark on unforgettable journeys with our special travel promotions.
            Explore both local and international destinations without any cost.
            Discover the world around you while enjoying exclusive offers.
          </p>
        </div>
        <div className="catravel-anims">
          <div className="catravel-left">
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Japan <br />
                  2017
                </p>
              </div>
              <img src={catravel01} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Greece <br />
                  2014
                </p>
              </div>
              <img src={catravel02} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Greece <br />
                  2017
                </p>
              </div>
              <img src={catravel03} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Italy <br />
                  2016
                </p>
              </div>
              <img src={catravel04} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Italy <br />
                  2017
                </p>
              </div>
              <img src={catravel05} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Italy <br />
                  2022
                </p>
              </div>
              <img src={catravel06} />
            </div>
            <div className="catravel-leftitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Malta <br />
                  2018
                </p>
              </div>
              <img src={catravel07} />
            </div>
          </div>

          <div className="catravel-right">
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Norway <br />
                  2015
                </p>
              </div>
              <img src={catravel08} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Norway <br />
                  2018
                </p>
              </div>
              <img src={catravel09} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Thailand <br />
                  2015
                </p>
              </div>
              <img src={catravel10} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Thailand <br />
                  2018
                </p>
              </div>
              <img src={catravel11} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Turkey <br />
                  2016
                </p>
              </div>
              <img src={catravel12} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Vietnam <br />
                  2015
                </p>
              </div>
              <img src={catravel13} />
            </div>
            <div className="catravel-rightitem rounded">
              <div className="catravel-text z-3 position-absolute">
                <p>
                  Maldives <br />
                  2016
                </p>
              </div>
              <img src={catravel14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
