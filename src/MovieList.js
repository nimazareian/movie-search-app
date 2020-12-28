import React, { useContext } from "react";
import MovieCard from "./MovieCard";

import { Grid, makeStyles } from "@material-ui/core";

function MovieList(props) {
	return (
		<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
			{props.movieList.map((movie) => {
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
