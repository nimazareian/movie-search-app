import React, { useState, createContext } from "react";

export const NominationContext = createContext();

export const NominationProvider = (props) => {
	const [nominations, setNominations] = useState([
		{
			Title: "Finding Altamira",
			Year: "2016",
			imdbID: "tt3014910",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMTUyMjEzNjE5Ml5BMl5BanBnXkFtZTgwNTQ0ODA2OTE@._V1_SX300.jpg",
		},
		{
			Title: "Finding Bliss",
			Year: "2009",
			imdbID: "tt1185242",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjIxMDc1MjEzNV5BMl5BanBnXkFtZTcwNDk2MzQ0Mg@@._V1_SX300.jpg",
		},
		{
			Title: "Finding Mr. Right",
			Year: "2013",
			imdbID: "tt2169322",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjY1ZDY3ZDEtMzUyYi00ZTZjLTljMzQtYmY1ZmE1YmE1NmEzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg",
		},
	]);
	return (
		<NominationContext.Provider value={[nominations, setNominations]}>{props.children}</NominationContext.Provider>
	);
};
