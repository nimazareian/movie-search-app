import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { AppBar, Toolbar, Typography, InputBase, fade, makeStyles, Badge, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TrophyEmoji from "@material-ui/icons/EmojiEvents";
import NominateBorderIcon from "@material-ui/icons/FavoriteBorder";
import NominateIcon from "@material-ui/icons/Favorite";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
	title: {
		textDecoration: "none",
		color: "white",
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		right: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

function TopNavBar() {
	const classes = useStyles();
	var [searchVal, setSearchVal] = useState("");
	var history = useHistory();
	var location = useLocation();

	const submitSearch = (event) => {
		if (event.key === "Enter") {
			console.log("value", event.target.value);
			console.log("history", history.search);
			console.log("location", location.search);
			history.push(`/search/${searchVal}`);
		}
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Link to="/" className={classes.title}>
					<Typography variant="h6" noWrap>
						Movie Nomination
					</Typography>
				</Link>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						value={searchVal}
						onChange={(event) => {
							setSearchVal(event.target.value);
							console.log(searchVal);
						}}
						onKeyPress={submitSearch}
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					onClick={() => {
						// TODO show all nomanies
					}}
				>
					<Badge color="secondary" badgeContent={2}>
						{/* TODO Badge count of number of films nominated */}
						<TrophyEmoji />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default TopNavBar;
