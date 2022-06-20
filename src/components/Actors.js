import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = () => {
    return actors.map((actor) => {
      return (
        <div key={actor.name}>
          <h2>Name: {actor.name}</h2>

          <h3>Movies:</h3>
          <ul>
            {actor.movies.map((movie) => {
              return <li key={movie}>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
}

export default Actors;
