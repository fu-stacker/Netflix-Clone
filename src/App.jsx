import React, { useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
export const allowlogincontext = createContext();

export default function App() {
  const [allowlogin, setallowlogin] = useState(false);
  const swichpage = () => {
    console.log("changing the the page ");
    setallowlogin(true);
  };
  return (
    <div className="container">
      {allowlogin ? <Home /> : <LoginPage isallow={swichpage} />}
    </div>
  );
}
