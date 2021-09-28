import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/jumbotron.scss";
import "../../styles/home.scss";
import "../../styles/categories.scss";

import Jumbotron from "../component/jumbo.js";
import Signup from "../component/registerpage.js";
import Categories from "../component/categories.js";
import PaginationCards from "../component/cardpagination.js";

import bitcoin from "../../img/bitcoin.png";
import innovation from "../../img/innovation.png";
import secure from "../../img/secure.png";
import LogRegister from "../component/log&register.js";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
			<div className="row d-flex">
				<div className="col-7">
					<Jumbotron
						title={"Enter the next era of ecommerce"}
						text={"Nebula is a decentralized integrated marketplace for secure online purchases."}
					/>
				</div>
				<div className="col-5 login">
					<LogRegister />
				</div>
			</div>

			<div className="row d-flex features">
				<div className="col-4 feature-wrapper">
					<img src={secure} className="feature-icons" />
					<p className="feature-text">More data protection, security and transparency.</p>
				</div>
				<div className="col-4 feature-wrapper">
					<img src={innovation} className="feature-icons" />
					<p className="feature-text">
						The constant search for innovations and solutions is part of this for us. The continuous
						improvement process is our DNA.
					</p>
				</div>
				<div className="col-4 feature-wrapper">
					<img src={bitcoin} className="feature-icons" />
					<p className="feature-text">Payments also with cryptocurrenciews.</p>
				</div>
			</div>

			<div>
				<Categories />
			</div>

			<div>
				<PaginationCards />
			</div>
		</div>
	);
};

export default Home;
