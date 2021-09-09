import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShoppingCard = () => {
	return (
		<Fragment>
			<Row>
				<div className="linebreak" />
				<Col md={3}>
					<img
						src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
						className="teamimage rounded"
						alt="..."
					/>
				</Col>
				<Col md={3}>
					<h3>Name of the product</h3>
					<p>Vendor shop name</p>
				</Col>
				<Col md={5}>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua.{" "}
					</p>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ShoppingCard;
