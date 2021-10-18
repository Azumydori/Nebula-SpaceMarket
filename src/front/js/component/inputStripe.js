import React, { useContext, onSubmit, handleSubmit } from "react";
import CheckoutTab from "../component/checkoutTab.js";
import { Context } from "../store/appContext.js";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import "../../styles/checkout.scss";

const InputStripe = () => {
	const stripe = useStripe();
	const elements = useElements();
	const { store, actions } = useContext(Context);

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
				url: "https://3001-copper-yak-78fo7fh9.ws-eu17.gitpod.io/api/payment/card",
				method: "POST",
				data: {
					id: paymentMethod.id,
					description: "Viva el capitalismo",
					amount: 50 * 100
				}
			});
		}
		window.location = store.domainURL.concat("/success");
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
			<div className="row payment-buttons d-flex justify-content-center">
				<div className="col-2">
					<button className="cancel">Cancel</button>
				</div>
				<div className="col-2">
					<input type="submit" value="Pay now" className="btn" />
				</div>
			</div>
		</form>
	);
};

export default InputStripe;
