import React, { useState, useEffect } from "react";
import api from "../../../utils/axios";
import request from "../../../utils/request";
import "./Row.css";

function Row({ tittle, fetchurl, islarge }) {
  const [movies, setmovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    api
      .get(fetchurl)
      .then((s) => {
        console.log(s);
        setmovies(s.data.results);
      })
      .then((a) => console.log(a))
      .catch((err) => {
        console.log(err);
      });
  }, [fetchurl]);

  return (
    <div className="row">
      <h2>{tittle}</h2>
      <div className="row__posters">
        {/* Step 4: Map through the movies to see them! */}
        {movies?.map((movie) => (
          <img
            key={movie.id}
            style={{ maxHeight: "150px", margin: "10px" }}
            src={`${base_url}${islarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
