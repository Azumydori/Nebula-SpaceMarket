import React from "react";
import eco from "../../img/ecommerce.jpg";

const Jumbotron = () => {
	return (
		<div className="jumbotron d-flex flex-column justify-content-center">
			<h2 className="display-4">Enter the next era of ecommerce</h2>
			<p className="lead text-left">
				Nebula is a decentralized integrated marketplace for secure online purchases.
			</p>
			<button className="learn-more" href="#" role="button">
				Learn more
			</button>
			<img src={eco} className="eco" />
		</div>
	);
};

export default Jumbotron;
