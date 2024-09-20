import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import "../assets/scss/ProductsFNA.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const chevronRight = <FontAwesomeIcon icon={faChevronRight} fade />;
const arrowUpRightFromSquare = (
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade />
);

export default function ProductsFNA() {
  return (
    <>
      <div className="prfna-container"></div>

      {chevronRight}
      {arrowUpRightFromSquare}
    </>
  );
}
