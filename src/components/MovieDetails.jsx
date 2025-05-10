import React, { useEffect } from "react";

const MovieDetails = ({ selectedId, onCloseMovie }) => {

  useEffect(function() {
    async function getMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log(data)
    }
  },[selectedId])

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;{" "}
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
