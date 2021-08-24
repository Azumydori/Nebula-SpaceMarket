import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import ControlledAccordions from "../component/accordion.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<ControlledAccordions
				firstQuestion={"What the hell is a crypto?"}
				firstAnswer={
					"A cryptocurrency is a form of digitl asset based on a network distributed accross a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities. The word is derived from the encryption techniques which are used to secure the network."
				}
				secondQuestion={"What is blockchain?"}
				secondAnswer={
					"Blockchain is a specific type of database that stores data in blocks chained together in chronological order. Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. Decentralized blockchains are immutable, which means that the data entered is irreversible."
				}
				thirdQuestion={"How can I pay with crypto?"}
				thirdAnswer={
					"You need a digital wallet (like Metamask or Coinomi) which allows you to store, manage, and trade cryptocurrencies. Your public keys/wallet addresses are like your email address, and private keys are similar to the password you use to login to your email. You give out your wallet address so that people can send you coins much like how you provide your email address to your contacts to send you messages."
				}
			/>

			<ControlledAccordions
			firstQuestion = {}
			firstAnswer = {}
			secondQuestion = {}
			secondAnswer = {}
			thirdQuestion = {}
			thirdAnswer = {}
			/>
		</div>
	);
};
