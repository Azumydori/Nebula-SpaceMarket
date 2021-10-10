import React from "react";
import "../../styles/success.scss";
import error from "../../img/error.png";

const Error = () => {
	return (
		<div className="container text-center">
			<img src={error} className="icon" />
			<h2>There has been an erorr :(</h2>
			<h3>
				Check your payment is correct and check with your payment provider. If the problem continue, please
				contact our technical support team
			</h3>
			<a className="btn" href="/">
				Continue shopping
			</a>
		</div>
	);
};

export default Error;
