import React from "react";
import PropTypes from "prop-types";
import NebulaLanding from "../../img/nebulaLanding.png";
import Link from "@material-ui/core/Link";

const Jumbotron = props => {
	return (
		<div className="jumbotron d-flex flex-column justify-content-center" style={{ background: "#fafafa" }}>
			<h2 className="display-4">{props.title}</h2>
			<p className="lead text-left">{props.text}</p>
			<Link className="learn-more justify-content-center" href="/blockchain" role="button">
				Learn more
			</Link>
			<img src={NebulaLanding} className="eco" />
		</div>
	);
};

export default Jumbotron;

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
