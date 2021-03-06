import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Link from "@material-ui/core/Link";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
	root: {
		width: 300,
		height: 300,
		backgroundColor: "white",
		margin: "5px",

		justifyContent: "flex-end",

		[theme.breakpoints.down("sm")]: {
			maxWidth: 169.5,
			maxHeight: 225.594
		}
	},
	iconSolidFavorite: {
		color: "#FF9100",
		width: "1.5em",
		height: "1.5em",
		"& .hidden-icon": {
			display: "none"
		},
		"&:hover .hidden-icon": {
			display: "flex"
		}
	},
	iconBorderFavorite: {
		color: "#FF9100",
		width: "1.5em",
		height: "1.5em",
		"& .hidden-icon": {
			display: "none"
		},
		"&:hover .hidden-icon": {
			display: "flex"
		}
	},
	media: {
		height: 180,
		width: 300,
		display: "flex",
		justifyContent: "flex-end",
		"& $genericButton": {
			display: "none"
		},
		"&:hover $genericButton": {
			display: "flex"
		},

		[theme.breakpoints.down("sm")]: {
			maxWidth: 169.5,
			maxHeight: 134.594
		}
	},
	miniFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white"
	},
	bodyCard: {
		textAlign: "left",
		paddingLeft: "9px",
		paddingTop: "0",
		paddingBottom: "0",
		paddingRight: "0",
		alignContent: "space-between"
	},
	genericButton: {
		paddingTop: "22px",
		width: "50px",
		height: "50px"
	},
	title: {
		fontSize: "large",
		fontWeight: "bold"
	},
	descriptionCard: {
		display: "flex",
		fontSize: "medium",
		variant: "body2",
		color: "textSecondary",
		component: "p",
		textAlign: "left",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	smallPrice: {
		fontSize: "large"
	}
}));

const MediaCard = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState(<FavoriteBorderIcon className={classes.iconBorderFavorite} />);

	const URL_CARD = "/product/" + props.id_product;

	const notifySuccess = string => {
		toast.success(string, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const notifyWarn = () => {
		toast.warn("???? removed from wishlist", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const product = {
		id: props.id_product,
		media: props.image_card,
		price: props.ammount,
		product_name: props.title_card,
		text: props.description_card,
		vendor_name: props.vendor_name
	};
	console.log(product);

	useEffect(
		() => {
			if (localStorage.getItem("wishlist")) {
				let wishl = localStorage.getItem("wishlist").split(",");
				if (wishl.length > 0) {
					if (wishl.includes(props.id_product.toString())) {
						setFavorite(<FavoriteIcon className={classes.iconBorderFavorite} />);
					} else {
						setFavorite(<FavoriteBorderIcon className={classes.iconBorderFavorite} />);
					}
				} else {
					setFavorite(<FavoriteBorderIcon className={classes.iconBorderFavorite} />);
				}
			}
		},
		[localStorage.getItem("wishlist")]
	);

	const textObserver = (description, number) => {
		if (description.length < number) {
			return description;
		} else {
			let descriptionFormat = description.slice(0, number);
			return descriptionFormat.concat("...");
		}
	};

	return (
		<Link href={URL_CARD}>
			<Card className={classes.root}>
				<CardMedia className={classes.media} image={props.image_card}>
					<Button
						className={classes.genericButton}
						onClick={event => {
							event.preventDefault();
							if (localStorage.getItem("wishlist")) {
								let wishl = localStorage.getItem("wishlist").split(",");
								if (wishl.includes(props.id_product.toString())) {
									//actions.unFavorite(props.id_product);

									const found = wishl.filter(element => element != props.id_product.toString());
									notifyWarn();
									localStorage.setItem("wishlist", found);
								} else {
									actions.favorite(props.id_product);
									notifySuccess("???? Product added to wishlist");
								}
							} else {
								notifySuccess("???? Product added to wishlist");
								actions.favorite(props.id_product);
							}
						}}>
						{favorite}
					</Button>
				</CardMedia>

				<CardContent className={classes.bodyCard}>
					<Typography className={classes.title}>{textObserver(props.title_card, 15)}</Typography>
					<Typography className={classes.descriptionCard}>
						{textObserver(props.description_card, 35)}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p" align="left">
						Vendor:
						{textObserver(props.vendor_name, 10)}
					</Typography>
					<div className={classes.miniFooter}>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							pt="20px"
							className={classes.smallPrice}>
							{props.ammount}$
						</Typography>
						<Button
							color="primary"
							onClick={event => {
								notifySuccess("???? product added to cart");
								event.preventDefault();
								//actions.shopCart(props.id_product);
								actions.addProductToCart(product);
							}}>
							<ShoppingCartIcon />
						</Button>
					</div>
				</CardContent>
			</Card>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Link>
	);
};

MediaCard.propTypes = {
	id_product: PropTypes.number,
	title_card: PropTypes.string,
	description_card: PropTypes.string,
	ammount: PropTypes.number,
	vendor_name: PropTypes.string,
	image_card: PropTypes.string
};

export default MediaCard;
