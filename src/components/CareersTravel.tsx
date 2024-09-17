import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/css/CareersTravel.css";

import catravel1 from "../assets/images/ca-sidebanner1.jpg";
import catravel2 from "../assets/images/ca-sidebanner2.jpg";
import catravel3 from "../assets/images/ca-sidebanner3.jpg";

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
          <div className="catravel-item">
            <div className="catravel-marquee">
              <div className="catravel-mqcontent">
                <div className="catravel-mqitem">
                  <img src={catravel1} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel2} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel3} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel1} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel2} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="catravel-item">
            <div className="catravel-marquee">
              <div className="catravel-mqcontent">
                <div className="catravel-mqitem">
                  <img src={catravel1} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel2} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel3} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel1} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel2} alt="" />
                </div>

                <div className="catravel-mqitem">
                  <img src={catravel3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
