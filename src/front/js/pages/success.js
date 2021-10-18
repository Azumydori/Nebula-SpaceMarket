import React from "react";
import "../../styles/success.scss";
import success from "../../img/success.png";

const Success = () => {
	return (
		<div className="container text-center">
			<img src={success} className="icon" />
			<h2>Successful payment !</h2>
			<h3>
				You will receive an email confirmation of your order with the stimated delivery time. We hope to see you
				again soon
			</h3>
			<a className="btn" href="/controlpage">
				Continue shopping
			</a>
		</div>
	);
};

export default Success;
