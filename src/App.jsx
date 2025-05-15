import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Search from "./components/Search";
import Logo from "./components/Logo";
import NumResult from "./components/NumResult";
import Box from "./components/Box";
import WatchedBox from "./components/WatchedBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./UseMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "cc1b7c7";

export default function App() {
  const [query, setQuery] = useState("");

  // const tempQuery = "interstellar"
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);

  const { movies, isLoading } = useMovies(query);

  const[watched, setWatched] = useLocalStorageState([], "watched")

  // get the movies that watched from the local storage
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched");
  //   return JSON.parse(storedValue);
  // });

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  // useEffect(
  //   function () {
  //     localStorage.setItem("watched", JSON.stringify(watched));
  //   },
  //   [watched]
  // );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading ? (
            <Loader />
          ) : (
            <MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
          )}
        </Box>

        <Box>
          <>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMovieList
                  watched={watched}
                  handleDeleteWatched={handleDeleteWatched}
                />
              </>
            )}
          </>
        </Box>
      </Main>
    </>
  );
}
