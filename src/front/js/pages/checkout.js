import React, { useContext, onSubmit, handleSubmit } from "react";
import CheckoutTab from "../component/checkoutTab.js";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import "../../styles/checkout.scss";

import rover from "../../img/rover.png";
import rocket from "../../img/rocket.png";
import lander from "../../img/lander.png";

const stripePromise = loadStripe(
	"pk_test_51JXMcbFBOOWtTsFd7FfMBYDIBGgKUiBmoPH3NSLwzeNkm7Odtq0zT0SjUvxQTiwZqMaLu2pldeCaLWE4OpPBQlcY008WCWMTNh"
);

const Checkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<Elements stripe={stripePromise}>
			<div className="full-container d-flex flex-column">
				<div className="delivery-container">
					<div className="row">
						<div className="col-12">
							<h2>Billing Address</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-6 d-flex flex-column">
							<label htmlFor="country">Country</label>
							<input type="text" {...register("country", { required: true })} />
						</div>

						<div className="col-6 d-flex flex-column">
							<label htmlFor="address">Full Address</label>
							<input type="text" {...register("address", { required: true })} />
						</div>
					</div>

					<div className="row">
						<div className="col-6 d-flex flex-column">
							<label htmlFor="state">State</label>
							<input type="text" {...register("state", { required: true })} />
						</div>
						<div className="col-6 d-flex flex-column">
							<label htmlFor="city">City</label>
							<input type="text" {...register("city", { required: true })} />
						</div>
					</div>
				</div>

				<div className="delivery-options">
					<div className="row">
						<div className="col-12">
							<h2>Delivery Options</h2>
						</div>
					</div>

					<div className="row card-collection d-flex justify-content-around">
						<div className="col-3 delivery-card text-center">
							<img src={rover} className="delivery-icons" />
							<p className="delivery-icons-title">Standard Plan</p>
							<p>2 weeks - 1 month</p>
						</div>
						<div className="col-3 delivery-card text-center">
							<img src={lander} className="delivery-icons" />
							<p className="delivery-icons-title">Fast Delivery</p>
							<p>1-2 weeks</p>
						</div>
						<div className="col-3 delivery-card text-center">
							<img src={rocket} className="delivery-icons" />
							<p className="delivery-icons-title">Faster-than-light travel</p>
							<p>1-7 days</p>
						</div>
					</div>
				</div>

				<div className="row payment-container">
					<div className="col-12">
						<h2>Payment Method</h2>
					</div>
				</div>

				<CheckoutTab />
			</div>
		</Elements>
	);
};

export default Checkout;
