import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Login from "../component/login.js";

const LoginPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Login />
		</div>
	);
};

export default LoginPage;
