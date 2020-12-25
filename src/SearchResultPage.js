import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MovieCard from "./MovieCard";
import * as searchResultJSON from "./sample_data.json";

const useStyles = makeStyles((theme) => ({
	searchResult: {
		padding: "25px",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
}));

function SearchResultPage({ match }) {
	const classes = useStyles();
	const searchQuery = match.params.id;

	const fetchSearchMovies = async () => {
		const searchResult = await fetch(
			`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${searchQuery}&page=${1}`
		);

		// const searchResultJSON = await searchResult.json();
		// console.log("SearchResult", searchResultJSON);
	};

	useEffect(() => {
		// fetchSearchMovies();
		console.log("data", searchResultJSON);
		console.log("Response", searchResultJSON.Response);
	}, []);

	return (
		<div className={classes.searchResult}>
			{searchResultJSON.Response === "True" ? (
				<div>
					<h2>
						{searchResultJSON.totalResults} results found for {searchQuery}
					</h2>
					<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
						{searchResultJSON.Search.map((movie) => {
							return (
								<Grid item justify="center" alignItems="center" lg={3}>
									<MovieCard movie={movie} />
								</Grid>
							);
						})}
					</Grid>
				</div>
			) : (
				<h2>No results found for {searchQuery}</h2>
			)}
		</div>
	);
}

export default SearchResultPage;
