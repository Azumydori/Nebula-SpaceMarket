import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import LogRegister from "../component/log&register.js";

const LoginPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<LogRegister />
		</div>
	);
};

export default LoginPage;
