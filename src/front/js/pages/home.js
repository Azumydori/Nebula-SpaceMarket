import React, { useContext } from "react";
import SimpleMenu from "../component/navbar.js";
import SignUp from "../pages/registerpage.js";
import UserProfile from "../pages/userprofile.js";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<SignUp />
		</div>
	);
};

export default Home;
