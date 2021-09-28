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
import CustomSeparator from "../component/bread.js";
import MediaCard from "../component/card.js";
import { Box } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
	spacing: {
		marginTop: "5rem"
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
	},
	spacingControl: {
		marginTop: "0.75rem"
	}
}));
const ControlPage = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [productTab, setProductTab] = useState(
		<img src="https://c.tenor.com/DBqjevyA2o4AAAAd/bongo-cat-codes.gif" />
	);
	console.log(localStorage.getItem("token"));
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
							<Grid item key={index} xs={6} sm={4} md={3} xl={2} aligncontent="center">
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
					//store.searchProduct.map((element, index) => {
					store.product.map((element, index) => {
						//let object = actions.getProduct(element);
						let object = element;
						if (element.category == params.str) {
							return (
								<Grid item key={index} xs={6} sm={4} md={3} xl={2}>
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
						}
					})
				);
			}
		},
		[params.str]
	);

	const selectorCategory = category => {
		if (category == undefined) {
			return (
				<div>
					<CustomSeparator first="Nebula" second="Control Page" third="All" />
					<Typography
						component="h4"
						variant="h4"
						color="textPrimary"
						gutterBottom
						className={classes.spacingControl}>
						All products:
					</Typography>
				</div>
			);
		} else {
			return (
				<div>
					<CustomSeparator first="Nebula" second="Control Page" third={category} />
					<Typography
						component="h4"
						variant="h4"
						color="textPrimary"
						gutterBottom
						className={classes.spacingControl}>
						{category} products:
					</Typography>
				</div>
			);
		}
	};

	return (
		<div className={classes.spacing}>
			<div>
				<Container maxWidth="sm" align="center">
					{
						<Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
							Select Category
						</Typography>
					}
				</Container>
			</div>

			<div>
				<Categories />
			</div>
			<Box m={2}>{selectorCategory(params.str)}</Box>

			<Grid container gridtemplatecolumns="repeat(12, 2fr)" align="center">
				{productTab}
			</Grid>
			<div />
		</div>
	);
};
ControlPage.propTypes = {
	control: PropTypes.string
};
export default ControlPage;
