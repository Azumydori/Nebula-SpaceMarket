import "../../styles/categories.scss";
import Categories from "../component/categories.js";
import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
	const [productTab, setProductTab] = useState("");

	//Recibo el parametro.
	const params = useParams();
	useEffect(() => {
		actions.getProducts();
	}, []);

	const categories = [
		"Computers",
		"Home&Garden",
		"Sports",
		"Cellphones",
		"Movies,Books&Music",
		"Appliances",
		"TV,Audio&Cameras",
		"Motorbikes",
		"Other",
		"Clothing",
		"Gaming"
	];

	useEffect(
		() => {
			console.log(params.str);
			if (store.allProducts != 0) {
				if (params.str == undefined) {
					setProductTab(
						store.allProducts.map((element, index) => {
							element.price;
							return (
								<Grid item key={index} xs={6} sm={4} md={3} xl={2} aligncontent="center">
									<MediaCard
										id_product={element.id}
										title_card={element.product_name}
										description_card={element.product_name}
										ammount={element.price}
										vendor_name={element.vendor_name}
										image_card={element.media}
									/>
								</Grid>
							);
						})
					);
				} else if (categories.includes(params.str)) {
					console.log("newos", categories.includes(params.str));

					setProductTab(
						store.allProducts.map((element, index) => {
							if (element.category.replace(/ /g, "") == params.str) {
								console.log(element.category);
								return (
									<Grid item key={index} xs={6} sm={4} md={3} xl={2}>
										<MediaCard
											id_product={element.id}
											title_card={element.product_name}
											description_card={element.text}
											ammount={element.price}
											vendor_name={element.vendor_name}
											image_card={element.media}
										/>
									</Grid>
								);
							}
						})
					);
				} else {
					setProductTab(
						store.allProducts.map((element, index) => {
							if (
								element.vendor_name.toLowerCase().includes(params.str.toLowerCase()) ||
								element.product_name.toLowerCase().includes(params.str.toLowerCase()) ||
								element.text.toLowerCase().includes(params.str.toLowerCase())
							) {
								return (
									<Grid item key={index} xs={6} sm={4} md={3} xl={2}>
										<MediaCard
											id_product={element.id}
											title_card={element.product_name}
											description_card={element.text}
											ammount={element.price}
											vendor_name={element.vendor_name}
											image_card={element.media}
										/>
									</Grid>
								);
							}
						})
					);
				}
			}
		},
		[params.str, store.allProducts]
	);

	const selectorCategory = category => {
		if (category == undefined) {
			return (
				<div>
					<CustomSeparator first="Nebula" second="Control Page" third="All" />
					<Typography component="h4" variant="h4" gutterBottom className={classes.spacingControl}>
						All products:
					</Typography>
				</div>
			);
		} else if (categories.includes(params.str)) {
			return (
				<div>
					<CustomSeparator first="Nebula" second="Control Page" third={category} />
					<Typography component="h4" variant="h4" gutterBottom className={classes.spacingControl}>
						{category} products:
					</Typography>
				</div>
			);
		} else {
			return (
				<div>
					<CustomSeparator first="Nebula" second="Control Page" third={category} />
					<Typography component="h4" variant="h4" gutterBottom className={classes.spacingControl}>
						Result of your search : {category}
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
						<Typography component="h1" variant="h2" gutterBottom>
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
