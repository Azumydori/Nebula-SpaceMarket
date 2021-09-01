import React from "react";
import { Fragment, useState } from "react";
import "../../styles/product-detail.scss";
import Carousel from "react-bootstrap/Carousel";
import { Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import StarRating from "../component/starRating";
import Review from "../component/review";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

const Productdetail = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<Fragment>
			<Container fluid>
				<Row>
					<Col md={8}>
						<Carousel className="carousel" fade>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded"
									src="https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123__480.jpg"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded"
									src="https://cdn.pixabay.com/photo/2016/01/19/14/47/motorcycle-1148963__480.jpg"
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded"
									src="https://cdn.pixabay.com/photo/2016/10/11/14/46/motorcycle-1731774__480.jpg"
									alt="Third slide"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col className="description" md={4}>
						<h1>Product Name</h1>
						<p>Shopname/Category</p>
						<StarRating />
						<h2>20$</h2>
						<p>Description:</p>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
								accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur
								sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
								rebum.
							</p>
						</div>
						<div className="button">
							<button type="button" className="buttondescription1">
								❤️ Add to wishlist
							</button>
							<button type="button" className="buttondescription2">
								💬Chat with vendor
							</button>
						</div>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col className="review" md={8}>
						<h2>Add review</h2>

						<Form onSubmit={handleSubmit(onSubmit)}>
							<StarRating />
							<div className="linebreak" />
							<textarea {...register("review_text", { required: true })} />
							<button type="submit" className="buttondescription2 mt-2">
								Send review
							</button>
						</Form>

						<h2 className="mt-5">Reviews of vendor</h2>
						<Review />
						<Review />
						<Review />
						<Review />
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Productdetail;
