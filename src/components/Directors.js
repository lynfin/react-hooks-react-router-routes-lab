import React from "react";
import { directors } from "../data";

function Directors() {
  const renderDirectors = () => {
    return directors.map((director) => {
      return (
        <div key={director.name}>
          <h2>Name: {director.name}</h2>

          <h3>Movies:</h3>
          <ul>
            {director.movies.map((movie) => {
              return <li key={movie}>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors;
