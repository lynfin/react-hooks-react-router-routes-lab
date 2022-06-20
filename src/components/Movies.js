import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div key={movie.title}>
          <h2>Name: {movie.title}</h2>
          <h3>Time: {movie.time}</h3>
          <h3>Genres:</h3>
          <ul>
            {movie.genres.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
}

export default Movies;
