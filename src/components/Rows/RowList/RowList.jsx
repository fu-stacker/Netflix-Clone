import React from "react";
import Row from "../Row/Row";
import request from "../../../utils/request";
import "./RowList.css";

function RowList() {
  return (
    <div className="rowList">
      {/* The 'Originals' row usually comes first and is the largest */}
      <Row
        tittle="NETFLIX ORIGINALS"
        fetchurl={request.fetchNetflixOriginals}
        // islarge={true}
      />

      {/* The following rows use the standard horizontal layout */}
      <Row tittle="Trending Now" fetchurl={request.fetchTrending} />
      <Row tittle="Top Rated" fetchurl={request.fetchTopRated} />
      <Row tittle="Action Movies" fetchurl={request.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Row tittle="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default RowList;
