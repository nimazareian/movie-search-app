import React from "react";
import MovieCard from "./MovieCard";

import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: "350px",
  },
}));

function MovieList(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={3} direction="row" alignItems="flex-start">
      {props.movieList.map((movie) => {
        return (
          <Grid className={classes.gridItem} item key={movie.imdbID} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MovieList;
