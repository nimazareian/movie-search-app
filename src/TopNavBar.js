import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { NominationContext } from "./NominationContext";
import { ROOT_URL } from "./App";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  fade,
  makeStyles,
  Badge,
  Tooltip,
  Zoom,
  useTheme,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TrophyEmoji from "@material-ui/icons/EmojiEvents";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: "none",
    color: "white",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  searchDiv: {
    marginLeft: "auto",
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
  const [nominations, setNominations] = useContext(NominationContext);
  var [searchVal, setSearchVal] = useState("");
  var history = useHistory();

  const submitSearch = (event) => {
    if (event.key === "Enter") {
      history.push(`${ROOT_URL}/search/${searchVal}`);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={`${ROOT_URL}`} className={classes.title}>
          <Typography variant="h6" noWrap>
            Movie Nomination
          </Typography>
        </Link>
        <div className={classes.searchDiv}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={searchVal}
              onChange={(event) => {
                setSearchVal(event.target.value);
              }}
              onKeyPress={submitSearch}
              placeholder="Search…"
              autoFocus={true}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <Link to={`${ROOT_URL}`}>
          <IconButton aria-label="Nominations">
            <Tooltip TransitionComponent={Zoom} title={`${nominations.length} Movies Nominated`}>
              <Badge color="secondary" badgeContent={nominations.length}>
                <TrophyEmoji className={classes.nominationIcon} />
              </Badge>
            </Tooltip>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;
