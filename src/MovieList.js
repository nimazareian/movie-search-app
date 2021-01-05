import React from "react";
import MovieCard from "./MovieCard";

import { Grid } from "@material-ui/core";

function MovieList({ movieList }) {
  return (
    <Grid container justify="center" spacing={3} direction="row" alignItems="flex-start">
      {movieList.map((movie) => {
        return (
          <Grid item key={movie.imdbID} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MovieList;
