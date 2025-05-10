import React from "react";
import { useState } from "react";
import Movie from "./Movie";



const MovieList = ({movies, onSelectMovie}) => {
  
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} onSelectMovie= {onSelectMovie}/>
      ))}
    </ul>
  );
};

export default MovieList;
