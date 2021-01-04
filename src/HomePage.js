import React, { useContext } from "react";
import MovieList from "./MovieList";
import { NominationContext } from "./NominationContext";

function HomePage() {
  const [nominations, setNominations] = useContext(NominationContext);

  return (
    <div>
      <h1>Nominations:</h1>
      <MovieList movieList={nominations} />
    </div>
  );
}

export default HomePage;
