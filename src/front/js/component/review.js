import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "../../styles/review.scss";
import StarRating from "../component/starRating";

const Review = () => {
	return (
		<Fragment>
			<Row>
				<div className="linebreak" />
				<Col md={3}>
					<img
						src="https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422__480.jpg"
						className="teamimage rounded-circle"
						alt="..."
					/>
				</Col>
				<Col md={3}>
					<h3>Username</h3>
					<p>15.02.1877</p>
				</Col>
				<Col md={5}>
					<StarRating />
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua.{" "}
					</p>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Review;
