import React from "react";
import "./Navbar.css";
import netflixlogo from "../../assets/netflix-logo.png";
function Navbar() {
  return (
    <div className="nav-container">
      <div className="lists">
        <div className="left-list">
          <li>
            <img src={netflixlogo} alt="netflix-logo" width={100} />
          </li>
          <li>home</li>
          <li>TVshows</li>
          <li>movioes</li>
          <li>Latest</li>
          <li>Mylist</li>
        </div>

        <div className="right-list">
          <li>search</li>
          <li>fd</li>
          <li>fjk</li>
          <li>ukd</li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
