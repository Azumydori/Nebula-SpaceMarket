import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home.js";
import LoginPage from "./pages/loginPage.js";
import Nft from "./pages/nft.js";
import { AboutUs } from "./pages/about-us.js";
import SignUp from "./pages/registerpage.js";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar.js";
import Bottombar from "./component/bottombar.js";
import Footer from "./component/footer";
import UploadProduct from "./pages/uploadProduct.js";
import VendorProfile from "./pages/vendorprofile.js";
import Faq from "./pages/faq.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/register">
						<SignUp />
					</Route>
					<Route exact path="/product">
						<UploadProduct />
					</Route>
					<Route exact path="/faq">
						<Faq />
					</Route>
					<Route exact path="/nft">
						<Nft />
					</Route>
					<Route exact path="/about-us">
						<AboutUs />
					</Route>
					<Route exact path="/vendor">
						<VendorProfile />
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
