import React, { useState, createContext } from "react";

export const NominationContext = createContext();

export const NominationProvider = (props) => {
	const [nominations, setNominations] = useState(() => {
		// Get all previous nominees from browser localStorage
		var allSavedNominees = [];
		var keys = Object.keys(localStorage);
		var i = keys.length;

		while (i--) {
			//convert to JSON and add to array
			allSavedNominees.push(JSON.parse(localStorage.getItem(keys[i])));
		}

		console.log("imported nominees from storage", allSavedNominees);
		return allSavedNominees;
	});
	return (
		<NominationContext.Provider value={[nominations, setNominations]}>{props.children}</NominationContext.Provider>
	);
};
