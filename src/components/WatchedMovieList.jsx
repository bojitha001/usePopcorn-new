import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watched,handleDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} handleDeleteWatched={handleDeleteWatched} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
