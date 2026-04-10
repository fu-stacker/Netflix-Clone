import React, { useState, useEffect } from "react";
import api from "../../utils/axios";
import request from "../../utils/request";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState({});
  useEffect(() => {
    api
      .get(request.fetchNetflixOriginals)
      .then((s) => {
        const randomSelection =
          s.data.results[Math.floor(Math.random() * s.data.results.length)];

        setmovie(randomSelection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const truncate = (p, 150) =>
  
  { return p?.length > n ? p.substr(0, n - 1) + "..." + p; }
  
  return (
    <div
      className="banner-main-box"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "448px", // IMPORTANT: Banner needs a height to be visible!
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <div className="banner-conntent">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p>{movie?.overview}</p>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
// Math.floor(Math.random() * s.data.results.length())
