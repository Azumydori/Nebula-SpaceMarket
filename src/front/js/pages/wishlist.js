import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MediaCard from "../component/card.js";

const useStyles = makeStyles(theme => ({
	icon: {
		marginRight: theme.spacing(2)
	},
	whishcontent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},

	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	heartOfIron: {
		color: "#FF9100",
		width: "10rem",
		height: "10rem"
	}
}));

const Wishlist = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [wishListTab, setwislistTab] = useState("");
	useEffect(() => {
		actions.getProducts();
	}, []);

	useEffect(
		() => {
			//actions.favorite();
			if (localStorage.getItem("wishlist")) {
				let wishl = localStorage.getItem("wishlist").split(",");

				if (wishl.length > 0) {
					setwislistTab(
						store.allProducts.map((element, index) => {
							if (wishl.includes(element.id.toString())) {
								return (
									<Grid item key={index} xs={6} sm={4} md={4} alignContent="center">
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
		[store.allProducts]
	);

	return (
		<Fragment>
			<main>
				<div className={classes.whishcontent}>
					<Container maxWidth="sm" align="center">
						<FavoriteBorderIcon className={classes.heartOfIron} />
						<Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
							Wishlist
						</Typography>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container gridtemplatecolumns="repeat(12, 3fr)" align="center">
						{wishListTab}
					</Grid>
				</Container>
			</main>
		</Fragment>
	);
};
export default Wishlist;
