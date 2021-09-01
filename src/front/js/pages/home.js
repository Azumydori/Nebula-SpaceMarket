import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	return <div className="text-center mt-5" />;
};

export default Home;
