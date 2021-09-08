import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import "../../styles/product-detail.scss";
import Carousel from "react-bootstrap/Carousel";
import { Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import StarRating from "../component/starRating";
import Review from "../component/review";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CallToActionSharp } from "@material-ui/icons";
import { Context } from "../store/appContext";

const Productdetail = () => {
	const params = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => actions.addreview(data, localStorage.getItem("tokenID"));
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getProduct(params.id);
	}, []);

	return (
		<Fragment>
			<Container fluid>
				<Row>
					<Col md={8}>
						<Carousel className="carousel" fade>
							<Carousel.Item>
								<img className="d-block w-100 rounded" src={store.product_id.media} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100 rounded"
									src={store.product_id.media}
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 rounded" src={store.product_id.media} alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col className="description" md={4}>
						<h1>{store.product_id.product_name}</h1>
						<p>
							{store.product_id.shopname}/{store.product_id.category}
						</p>
						<StarRating />
						<h2>{store.product_id.price}$</h2>
						<p>Description:</p>
						<div>
							<p>{store.product_id.text}</p>
						</div>
						<div className="button">
							<button type="button" className="buttondescription1 mr-2 rounded">
								❤️ Add to wishlist
							</button>
							<button type="button" className="buttondescription1 rounded">
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
							<br />
							<button type="submit" className="buttonreview mt-2 rounded ">
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
