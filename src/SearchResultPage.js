import React, { useEffect } from "react";
import MovieCart from "./MovieCart";

function SearchResultPage({ match }) {
	const searchQuery = match.params.id;

	const fetchSearchMovies = async () => {
		const searchResult = await fetch(
			`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${searchQuery}`
		);

		const searchResultJSON = await searchResult.json();
		console.log("SearchResult", searchResultJSON);
	};

	useEffect(() => {
		fetchSearchMovies();
	}, []);

	return (
		<div>
			<h1>Search Result Page {match.params.id}</h1>
			<MovieCart />
		</div>
	);
}

export default SearchResultPage;
