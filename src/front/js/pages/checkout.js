import React, { useContext, onSubmit, handleSubmit } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";

import "../../styles/checkout.scss";

import rover from "../../img/rover.png";
import rocket from "../../img/rocket.png";
import lander from "../../img/lander.png";

const Checkout = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className="full-container d-flex flex-column">
			<form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
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

				<div className="payment-container">
					<div className="row">
						<div className="col-12">
							<h2>Payment Method</h2>
						</div>
					</div>

					<div className="row payment-options d-flex justify-content-center text-center">
						<div className="col-2">
							<button className="btn">Credit card</button>
						</div>
						<div className="col-2">
							<button className="cancel">Paypal</button>
						</div>
						<div className="col-2">
							<button className="cancel">Crypto</button>
						</div>
					</div>

					<div className="row">
						<div className="col-6 d-flex flex-column">
							<label htmlFor="cardNumber">Card Number</label>
							<input
								type="text"
								{...register("cardNumber", {
									required: true,
									pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
								})}
							/>
						</div>
						<div className="col-6 d-flex flex-column">
							<label htmlFor="cvc">CVC</label>
							<input type="text" {...register("cvc", { required: true, pattern: /^[0-9]{3,4}$/ })} />
						</div>
					</div>

					<div className="row">
						<div className="col-6 d-flex flex-column">
							<label htmlFor="cardholderName">Cardholder Name</label>
							<input
								type="text"
								{...register("cardholderName", { required: true, pattern: /^[a-zA-Z ]*$/ })}
							/>
						</div>
						<div className="col-6 d-flex flex-column">
							<label htmlFor="expiryDate">Expiry Date</label>
							<input
								type="text"
								{...register("expiryDate", {
									required: true,
									pattern: /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/
								})}
							/>
						</div>
					</div>

					<div className="row payment-buttons d-flex justify-content-center">
						<div className="col-2">
							<button className="cancel">Cancel</button>
						</div>
						<div className="col-2">
							<input type="submit" value="Pay now" className="btn" />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Checkout;
