import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/css/CareersTravel.css";
import { FacebookEmbed } from "react-social-media-embed";

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FacebookEmbed
              url="https://www.facebook.com/share/p/8PrN3eHZpt8jU6BY/"
              width={550}
            />
          </div>
        </div>
      </div>
    </>
  );
}
