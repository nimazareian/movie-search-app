import React, { useState } from "react";
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
	const [selected, setSelected] = useState(false);
	const movie = props.movie;

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
					<ToggleButton
						value="Nominate"
						selected={selected}
						onChange={() => {
							setSelected(!selected);
						}}
					>
						<TrophyEmoji color={selected ? "secondary" : "primary"} />
					</ToggleButton>
				</CardActions>
			</Card>
		</div>
	);
}

export default MovieCard;
