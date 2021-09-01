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

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345,
		maxHeight: 345,
		backgroundColor: "white",
		margin: "2rem",
		elevation: 0,
		[theme.breakpoints.down("md")]: {
			Width: 200,
			Height: 200,
			minWidth: 200,
			minHeight: 200
		}
	},
	iconBorderFavorite: {
		color: "#FF9100",
		width: "1.5em",
		height: "1.5em"
	},
	iconFavorite: {
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
		display: "flex",
		"& $genericButton": {
			display: "none"
		},
		"&:hover $genericButton": {
			display: "flex"
		},
		justifyContent: "flex-end"
	},
	miniFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		paddingLeft: "9px"
	},
	bodyCard: {
		textAlign: "left",
		paddingLeft: "9px",
		paddingTop: "0",
		paddingBottom: "0"
	},
	genericButton: {
		paddingTop: "22px",
		width: "50px",
		height: "50px"
	}
}));

const MediaCard = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState(<FavoriteBorderIcon className={classes.iconFavorite} />);

	useEffect(
		() => {
			//add code for change favorite bottom
		},
		[localStorage.getItem("favourites")]
	);

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={props.image_card}>
				<Button
					className={classes.genericButton}
					onClick={event => {
						event.preventDefault();
						actions.setFavorite(props.title_card);
					}}>
					{favorite}
				</Button>
			</CardMedia>
			<CardContent className={classes.bodyCard}>
				<Typography gutterBottom variant="h6" component="h6">
					{props.title_card}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p" text-align="left">
					{props.description_card}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p" pt="20px">
					{props.ammount}$
				</Typography>
			</CardContent>

			<div className={classes.miniFooter}>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.vendor_card}
				</Typography>
				<Button size="small" color="primary">
					<ShoppingCartIcon />
				</Button>
			</div>
		</Card>
	);
};

MediaCard.propTypes = {
	title_card: PropTypes.string,
	description_card: PropTypes.string,
	ammount: PropTypes.string,
	vendor_card: PropTypes.string,
	image_card: PropTypes.string
};

export default MediaCard;
