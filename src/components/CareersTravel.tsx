import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/css/CareersTravel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;

export default function CareersTravel() {
  return (
    <>
      <div className="caprograms-container">{chevronRight}</div>
    </>
  );
}
