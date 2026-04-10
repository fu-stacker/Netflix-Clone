import React, { useState } from "react";
import netflixbackground from "../../assets/netflix-background.jpg";
import "./LoginPage.css";
import netflixlogo from "../../assets/netflix-logo.png";
import { Login } from "@mui/icons-material";
import LoginForm from "./LoginForm";

function LoginPage() {
  const bannerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(20,20,20,1) 100%), url(${netflixbackground})`,
  };
  const [signin, setsignin] = useState(false);
  const display = () => {
    setsignin(!signin);
  };
  return (
    <div className="login-screen" style={bannerStyle}>
      <nav className="navigation">
        <li>
          <img src={netflixlogo} alt="" />
        </li>
        <li>
          <button onClick={() => display()}>Sign In</button>
        </li>
      </nav>
      {signin ? (
        <div className="login-form-mainbox">
          <LoginForm />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default LoginPage;
