import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import HomePage from "./HomePage";
import SearchResultPage from "./SearchResultPage";
import { NominationProvider } from "./NominationContext";

function App() {
	return (
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
	);
}

export default App;
