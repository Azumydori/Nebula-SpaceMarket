import React, { useContext } from "react";
import "../../styles/accordion.scss";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FaqNebula from "../../img/nebulaFAQ.png";

import ControlledAccordions from "../component/accordion.js";

export const Faq = () => {
	return (
		<div className="faq-container">
			<Grid item xs={12} container direction="column" justifyContent="center" alignItems="center">
				<Box p={2}>
					<Typography variant="h3" component="h3">
						F A Q
					</Typography>
				</Box>
				<Typography>We hope we can solve all your inquiries</Typography>
			</Grid>
			<Grid container>
				<Grid container item xs={12} direction="column" justifyContent="flex-end" alignItems="flex-end">
					<img src={FaqNebula} />
				</Grid>
			</Grid>
			<div className="faq-header">Crypto</div>
			<ControlledAccordions
				Question={"What is a crypto?"}
				Answer={
					"A cryptocurrency is a form of digitl asset based on a network distributed accross a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities. The word is derived from the encryption techniques which are used to secure the network."
				}
				PanelId={"q1"}
			/>
			<ControlledAccordions
				Question={"What is blockchain?"}
				Answer={
					"Blockchain is a specific type of database that stores data in blocks chained together in chronological order. Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. Decentralized blockchains are immutable, which means that the data entered is irreversible."
				}
				PanelId={"q2"}
			/>
			<ControlledAccordions
				Question={"How can I pay with crypto?"}
				Answer={
					"You need a digital wallet (like Metamask or Coinomi) which allows you to store, manage, and trade cryptocurrencies. Your public keys/wallet addresses are like your email address, and private keys are similar to the password you use to login to your email. You give out your wallet address so that people can send you coins much like how you provide your email address to your contacts to send you messages."
				}
				PanelId={"q3"}
			/>

			<div className="faq-header">Account</div>
			<ControlledAccordions
				Question={"How to Register?"}
				Answer={
					"Go to the landing page or click the user icon to access the register menu.  Enter the email address and password you’ll use for your account. You will receive a verification email in your inbox. "
				}
				PanelId={"q4"}
			/>
			<ControlledAccordions
				Question={"How to Disable My Account?"}
				Answer={"Go to [Account] - [Security] - [Manage Account] - [Disable Account]"}
				PanelId={"q5"}
			/>
			<ControlledAccordions
				Question={"What is the Referral Program?"}
				Answer={
					"By inviting your friends to join the Nebula community. Invite friends and earn crypto together!"
				}
				PanelId={"q6"}
			/>
		</div>
	);
};

export default Faq;
