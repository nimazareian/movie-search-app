import React, { useContext } from "react";

import { Grid, makeStyles } from "@material-ui/core";
import MovieCard from "./MovieCard";

function MovieList(props) {
	return (
		<Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
			{props.movieList.map((movie) => {
				return (
					<Grid item justify="center" alignItems="center" lg={3}>
						<MovieCard movie={movie} />
					</Grid>
				);
			})}
		</Grid>
	);
}

export default MovieList;
