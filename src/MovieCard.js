import React, { useState, useContext } from "react";

import { NominationContext } from "./NominationContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TrophyEmoji from "@material-ui/icons/EmojiEvents";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const cardHeight = 360;
const cardWidth = 270;

const useStyles = makeStyles({
  card: {
    margin: "auto",
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    width: cardWidth,
    height: cardHeight,
    transition: "transform 0.3s",
    boxShadow: "0 4px 8px rgba(0,0,0,0.35);",
    "&:hover": {
      transform: "translate(0, -5px)",
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    left: 0,
    bottom: 0,
    width: cardWidth - 48,
  },
  movieTitle: {
    fontFamily: "Spartan",
    fontWeight: 700,
    color: "white",
    marginTop: 0,
    marginBottom: 8,
  },
  movieYear: {
    color: "white",
    fontWeight: 400,
    marginTop: 0,
    marginBottom: 0,
  },
  cardImg: {
    verticalAlign: "text-top",
    width: cardWidth,
    height: cardHeight,
  },
  nominateButton: {
    margin: 8,
    position: "absolute",
    zIndex: 2,
    color: "white",
    top: 0,
    right: 0,
  },
});

function MovieCard({ movie }) {
  const classes = useStyles();
  const [nominations, setNominations] = useContext(NominationContext);
  const maxNominations = 5;
  const [openMaxAlert, setOpenMaxAlert] = useState(false);
  const [selected, setSelected] = useState(() => {
    var alreadyNominated = nominations.some((nominee) => {
      return nominee.imdbID === movie.imdbID;
    });
    return alreadyNominated;
  });

  const removeNomination = () => {
    setNominations((prev) => {
      return prev.filter((nominee) => nominee.imdbID !== movie.imdbID);
    });
    localStorage.removeItem(movie.imdbID);
  };

  const addNomination = () => {
    var index = nominations.findIndex((nominee) => nominee.imdbID === movie.imdbID);
    if (index === -1) {
      setNominations((prev) => {
        return [...prev, movie];
      });
    }
    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
  };

  const updateNominations = () => {
    if (localStorage.length >= maxNominations && !selected) {
      setOpenMaxAlert(true);
      return;
    }

    if (!selected) {
      addNomination();
    } else {
      removeNomination();
    }
    //setState is async therefore updated state after updating nominations
    setSelected(!selected);
  };

  return (
    <div>
      <Card className={classes.card}>
        {movie.Poster !== "N/A" && (
          <CardMedia
            className={classes.cardImg}
            component="img"
            alt={movie.Title}
            image={movie.Poster}
            title={movie.Title}
          />
        )}
        <IconButton
          className={classes.nominateButton}
          variant="outlined"
          value="Nominate"
          selected={selected}
          onClick={updateNominations}
        >
          <Tooltip TransitionComponent={Zoom} title="Nominate" enterDelay={500}>
            <TrophyEmoji fontSize="large" color={selected ? "secondary" : "primary"} />
          </Tooltip>
        </IconButton>
        <Box py={3} px={3} className={classes.content}>
          <h2 className={classes.movieTitle}>{movie.Title}</h2>
          <h3 className={classes.movieYear}>{movie.Year}</h3>
        </Box>
      </Card>
      <Dialog
        open={openMaxAlert}
        onClose={() => {
          setOpenMaxAlert(false);
        }}
        aria-labelledby="Max Nominations Reached"
      >
        <DialogTitle id="alert-dialog-title">{"Alert:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`You have nominated ${maxNominations} movies, please remove some of your nominations to be able to add this movie.`}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MovieCard;
