import "../../styles/categories.scss";
import Categories from "../component/categories.js";
import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import MediaCard from "../component/card.js";
const useStyles = makeStyles(theme => ({
	purpledition: {
		backgroundColor: "#9D4EDD",
		paddingTop: "5px",
		paddingBottom: "5px"
	},
	rectangle1: {
		width: "100%",
		height: "2%",
		background: "#FF9100"
	},
	rectangle2: {
		width: "100%",
		height: "2%",
		background: "#9D4EDD"
	},
	rectangle3: {
		width: "100%",
		height: "2%",
		background: "#5A189A"
	}
}));
const ControlPage = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [productTab, setProductTab] = useState(
		<img src="https://c.tenor.com/DBqjevyA2o4AAAAd/bongo-cat-codes.gif" />
	);

	//Recibo el parametro.
	const params = useParams();

	useEffect(
		() => {
			console.log(params.str);
			if (params.str === undefined) {
				setProductTab(
					store.product.map((element, index) => {
						//let object = actions.getProduct(element);
						let object = element;
						return (
							<Grid item key={index} xs={6} sm={4} md={2} aligncontent="center">
								<MediaCard
									id_product={object.id}
									title_card={object.product_name}
									description_card={object.text}
									ammount={object.price}
									vendor_name={object.vendor_name}
									image_card={object.media}
								/>
							</Grid>
						);
					})
				);
			} else {
				actions.categorySearch(params.str);
				setProductTab(
					store.searchProduct.map((element, index) => {
						let object = actions.getProduct(element);

						return (
							<Grid item key={index} xs={6} sm={4} md={2} aligncontent="center">
								<MediaCard
									id_product={object.id}
									title_card={object.product_name}
									description_card={object.text}
									ammount={object.price}
									vendor_name={object.vendor_name}
									image_card={object.media}
								/>
							</Grid>
						);
					})
				);
			}
		},
		[params.str]
	);

	return (
		<div className="text-center mt-5">
			<div>
				<Container maxWidth="sm" align="center">
					<Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
						Select Category
					</Typography>
				</Container>
			</div>

			<div className={classes.purpledition}>
				<Categories />
			</div>

			<Grid container gridtemplatecolumns="repeat(12, 2fr)" align="center">
				{productTab}
			</Grid>
		</div>
	);
};
ControlPage.propTypes = {
	control: PropTypes.string
};
export default ControlPage;
