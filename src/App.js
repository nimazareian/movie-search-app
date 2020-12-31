import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import HomePage from "./HomePage";
import SearchResultPage from "./SearchResultPage";
import { NominationProvider } from "./NominationContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	// const myColors = {

	// }

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
					primary: {
						light: "#00818a",
						main: "#8f1eff",
						dark: "#8f1eff",
					},
					// secondary: {
					//   light: myColors.whitesmoke,
					//   main: myColors.white,
					//   dark: myColors.snow,
					// },
					// info: {
					//   light: myColors.greenLight,
					//   main: myColors.green,
					//   dark: myColors.greenDark,
					// }
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NominationProvider>
				<Router>
					<div className="App">
						<TopNavBar />
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/search/:id" component={SearchResultPage} />
						</Switch>
					</div>
				</Router>
			</NominationProvider>
		</ThemeProvider>
	);
}

export default App;
