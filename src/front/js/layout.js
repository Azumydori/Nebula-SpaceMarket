import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar.js";
import Bottombar from "./component/bottombar.js";
import Footer from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Bottombar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
