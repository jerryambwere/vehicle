import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilter,
  faQuestion,
  faCar,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" aria-label="Navigate to Home" className="nav-link">
          <FontAwesomeIcon size="2x" icon={faHouse} className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/Filter" aria-label="Navigate to Filter" className="nav-link">
          <FontAwesomeIcon size="2x" icon={faFilter} className="nav-icon" />
          <span className="nav-text">Filter</span>
        </Link>
        <Link to="/About" aria-label="Navigate to About" className="nav-link">
          <FontAwesomeIcon size="2x" icon={faQuestion} className="nav-icon" />
          <span className="nav-text">About</span>
        </Link>
        <Link
          to="/DataDisplay"
          aria-label="Navigate to Specs"
          className="nav-link"
        >
          <FontAwesomeIcon size="2x" icon={faCar} className="nav-icon" />
          <span className="nav-text">Specs</span>
        </Link>
        <Link
          to="/Reviews"
          aria-label="Navigate to Comment"
          className="nav-link"
        >
          <FontAwesomeIcon size="2x" icon={faComment} className="nav-icon" />
          <span className="nav-text">Comment</span>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
