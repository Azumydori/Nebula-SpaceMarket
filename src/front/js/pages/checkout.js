import React, { useContext, onSubmit, handleSubmit } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "../../styles/checkout.scss";

const stripePromise = loadStripe(
	"pk_test_51JXMcbFBOOWtTsFd7FfMBYDIBGgKUiBmoPH3NSLwzeNkm7Odtq0zT0SjUvxQTiwZqMaLu2pldeCaLWE4OpPBQlcY008WCWMTNh"
);

const Checkout = () => {
	return (
		<Elements stripe={stripePromise}>
			<InputStripe className="full-container" />
		</Elements>
	);
};

const InputStripe = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleStripe = async event => {
		event.preventDefault();
		console.log("event: ", event);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement)
		});

		if (error) {
			console.log(error);
		} else {
			console.log(paymentMethod);
			axios({
				url: "https://3001-purple-meerkat-cd1lvkvr.ws-eu18.gitpod.io/api/payment/card",
				method: "POST",
				data: {
					id: paymentMethod.id,
					description: "Viva el capitalismo",
					amount: 50 * 100
				}
			});
		}
	};

	return (
		<form onSubmit={event => handleStripe(event)}>
			<CardElement
				options={{
					hidePostalCode: true,
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4"
							}
						},
						invalid: {
							color: "#9e2146"
						}
					}
				}}
			/>
			<div className="col-2">
				<input type="submit" value="Pay now" className="btn" />
			</div>
		</form>
	);
};

export default Checkout;
