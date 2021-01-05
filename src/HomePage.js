import React, { useContext } from "react";
import MovieList from "./MovieList";
import { NominationContext } from "./NominationContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginLeft: 15,
  },
}));

function HomePage() {
  const classes = useStyles();
  const [nominations, setNominations] = useContext(NominationContext);

  return (
    <div>
      <h1 className={classes.pageTitle}>Nominations:</h1>
      <MovieList movieList={nominations} />
    </div>
  );
}

export default HomePage;
