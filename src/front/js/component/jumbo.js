import React from "react";
import PropTypes from "prop-types";
import eco from "../../img/ecommerce.jpg";

const Jumbotron = props => {
	return (
		<div className="jumbotron d-flex flex-column justify-content-center">
			<h2 className="display-4">{props.title}</h2>
			<p className="lead text-left">{props.text}</p>
			<button className="learn-more" href="#" role="button">
				Learn more
			</button>
			<img src={eco} className="eco" />
		</div>
	);
};

export default Jumbotron;

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
