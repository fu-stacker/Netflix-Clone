import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="main-container">
      <div className="first-box">
        <div className="first-box-button">
          <li>
            <FacebookRoundedIcon
              sx={{ color: "#1877f2", "&:hover": { color: "#195eb8" } }}
            />
          </li>
          <li>
            <InstagramIcon
              sx={{ color: "#e1306c", "&:hover": { color: "#be2055" } }}
            />
          </li>
          <li>
            <YouTubeIcon
              sx={{ color: "#ff0000", "&:hover": { color: "#c32424" } }}
            />
          </li>
        </div>

        <div className="first-box-info">
          <li>Audio and Subtitles</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </div>
      </div>

      <div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <ul>
            <button className="service-code">Service Code</button>
            <li>&copy; 2026 Netflix Clone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
