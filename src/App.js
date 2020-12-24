import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./TopNavBar";
import HomePage from "./HomePage";
import SearchResultPage from "./SearchResultPage";

function App() {
	return (
		<Router>
			<div className="App">
				<TopNavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/search/:id" component={SearchResultPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
