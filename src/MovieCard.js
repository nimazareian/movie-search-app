import React, { useState, useEffect, useContext } from "react";

import { NominationContext } from "./NominationContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TrophyEmoji from "@material-ui/icons/EmojiEvents";
import ToggleButton from "@material-ui/lab/ToggleButton";

const useStyles = makeStyles({
	root: {
		margin: "auto",
		maxWidth: 345,
	},
});

function MovieCard(props) {
	const classes = useStyles();
	const [nominations, setNominations] = useContext(NominationContext);
	const movie = props.movie;
	const [selected, setSelected] = useState(() => {
		console.log("nominations", nominations);
		var alreadyNominated = nominations.some((nominee) => {
			console.log(`${nominee.imdbID} === ${movie.imdbID}`, nominee.imdbID === movie.imdbID);
			return nominee.imdbID === movie.imdbID;
		});
		return alreadyNominated;
	});
	const maxNominations = 5;

	const removeNomination = () => {
		setNominations((prev) => {
			return prev.filter((nominee) => nominee.imdbID === movie.imdbID);
		});
		localStorage.removeItem(movie.imdbID);
	};

	const addNomination = () => {
		// TODO check if movie already doesnt exist
		var index = nominations.findIndex((nominee) => nominee.imdbID === movie.imdbID);
		if (index === -1) {
			setNominations((prev) => {
				return [...prev, movie];
			});
		}
		localStorage.setItem(movie.imdbID, JSON.stringify(movie));
	};

	// useEffect(() => {
	// 	if (selected) {
	// 		setNominations((prev) => {
	// 			return prev.filter((nominee) => nominee.imdbID === movie.imdbID);
	// 		});
	// 		localStorage.removeItem(movie.imdbID);
	// 	} else {
	// 		var index = nominations.findIndex((nominee) => nominee.imdbID === nominee);
	// 		if (index === -1) {
	// 			setNominations((prev) => {
	// 				return [...prev, movie];
	// 			});
	// 		}
	// 		localStorage.setItem(movie.imdbID, JSON.stringify(movie));
	// 	}
	// }, [selected]);

	const updateNominations = () => {
		if (localStorage.length >= maxNominations && !selected) {
			alert("You have nominated 5 movies!");
			return;
		}

		if (!selected) {
			addNomination();
		} else {
			removeNomination();
		}
		//setState is async therefore updated state after updating nominations
		setSelected(!selected);
		// console.log("selected-af", selected);

		// console.log("nominations", nominations);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={movie.Title}
						height="517"
						image={movie.Poster}
						title={movie.Title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{movie.Title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{movie.Year}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					{/* <Button size="small" color="primary" startIcon={<TrophyEmoji />}>
						Nominate
					</Button> */}
					<ToggleButton value="Nominate" selected={selected} onChange={updateNominations}>
						<TrophyEmoji color={selected ? "secondary" : "primary"} />
					</ToggleButton>
				</CardActions>
			</Card>
		</div>
	);
}

export default MovieCard;
