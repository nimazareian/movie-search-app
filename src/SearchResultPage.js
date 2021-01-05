import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MovieList from "./MovieList";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
// import * as searchResultJSON from "./sample_data.json";

const useStyles = makeStyles((theme) => ({
  searchResult: {
    // boxSizing: "border-box",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  pageSelector: {
    margin: "35px 0",
    display: "flex",
    justifyContent: "center",
  },
  searchInfoText: {
    marginLeft: 15,
  },
}));

function SearchResultPage(props) {
  const classes = useStyles();
  const searchQuery = props.match.params.id;
  const [searchResultJSON, setSearchResultJSON] = useState({});
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(4);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      const searchResult = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${searchQuery}&page=${page}`
      );

      const searchResultJSON = await searchResult.json();
      setSearchResultJSON(searchResultJSON);
      setNumPages(Math.ceil(searchResultJSON.totalResults / 10));
    };
    fetchSearchMovies();
  }, [searchQuery, page]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const changePage = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.searchResult}>
      {searchResultJSON.Response === "True" ? (
        <div>
          <h2 className={classes.searchInfoText}>
            {searchResultJSON.totalResults} results found for {searchQuery}
          </h2>
          <MovieList movieList={searchResultJSON.Search} />
          {numPages > 1 && (
            <Pagination
              count={numPages}
              page={page}
              onChange={changePage}
              className={classes.pageSelector}
              color="secondary"
            />
          )}
        </div>
      ) : searchResultJSON.Response === "False" ? (
        <h2 className={classes.searchInfoText}>Error: {searchResultJSON.Error}</h2>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
}

export default SearchResultPage;
