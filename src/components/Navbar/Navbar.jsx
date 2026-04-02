import React from "react";
import "./Navbar.css";
import netflixlogo from "../../assets/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { SiNetflix } from "react-icons/si";
function Navbar() {
  return (
    <div className="nav-container">
      <div className="left-list">
        <li>
          <SiNetflix color="red" />
        </li>

        <li>home</li>
        <li>TVshows</li>
        <li>movioes</li>
        <li>Latest</li>
        <li>Mylist</li>
      </div>

      <div className="right-list">
        <li>
          <SearchIcon />
        </li>
        <li>
          <NotificationsIcon />
        </li>
        <li>
          <AccountCircleIcon />
        </li>
        <li>
          <ArrowDropDownIcon />
        </li>
      </div>
    </div>
  );
}

export default Navbar;
