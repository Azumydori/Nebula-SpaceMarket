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
				<Typography>We are happy to help !</Typography>
			</Grid>
			<Grid container>
				<Grid container item xs={12} direction="column" justifyContent="flex-end" alignItems="flex-end">
					<img src={FaqNebula} />
				</Grid>
			</Grid>
			<div className="faq-header">Nebula Space Market</div>
			<ControlledAccordions
				Question={"What is Nebula?"}
				Answer={
					"Nebula is a integrated market, powered by blockchain technology. It is decentralized because we don't a server and a database, Nebula is scattered on computers all over the world, so we don't have a single point of failure. It is more secure because anyone can audit transactions and it is kept safe by advanced cryptography."
				}
				PanelId={"q1"}
			/>
			<ControlledAccordions
				Question={"Why is is a decentralized application?"}
				Answer={
					"By running our application on blockchain, we make tampering transactions impossible. We use this new technology to create the world's first real democratic, free and secure marketplace. We believe decentralized applications have a tremendous future and we want to be a part of this new era of the web 3.0"
				}
				PanelId={"q2"}
			/>
			<ControlledAccordions
				Question={"Why should I pay crypto?"}
				Answer={
					"We want to give you that option because cryptocurrencies are cheaper, more secure options than fiat money. At the end of the day, central banks have total control over your money. Each time they print a note, your money is worth less. Cryptocurrencies give back the control to the citizens, making international payments easy with very little fees."
				}
				PanelId={"q3"}
			/>

			<div className="faq-header">Account</div>
			<ControlledAccordions
				Question={"How much feed am I paying?"}
				Answer={
					"We charge 0.2% of the order in fees to maintain Nebula running. We don't make any profit from taking commissions from transactions. We believe in a market where the vendors get the most profits they can, and buyers get the fairest price by eilimiting as much middleman as possible."
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
