import React, { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <div className="container">
      {/* <Home /> */}
      <LoginPage />
    </div>
  );
}
