import React from "react";
import { BottomNavigation, makeStyles } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
	root: {},
	toolbar: {
		width: "100%",

		position: "fixed",
		justifyContent: "space-evenly",
		bottom: 0,
		zIndex: 3,
		backgroundColor: "#5A189A"
	},
	icon: {
		color: "#FFFFFF"
	}
}));

const Bottombar = () => {
	const [selected, setSelected] = useState(0);
	const classes = useStyles({ open });
	return (
		<Hidden only={["xl", "lg", "md"]}>
			<BottomNavigation
				onChange={(value, newValue) => {
					setSelected(newValue);
				}}
				className={classes.toolbar}>
				<IconButton label="Chat" href="chat" className={classes.icon}>
					<ChatBubbleIcon />
				</IconButton>
				<IconButton label="Whislist" href="whishlist" className={classes.icon}>
					<FavoriteIcon />
				</IconButton>
				<IconButton label="Upload" href="upload" className={classes.icon}>
					<AddCircleIcon />
				</IconButton>
				<IconButton label="Account" href="account" className={classes.icon}>
					<AccountCircleIcon />
				</IconButton>
				<IconButton label="Cart" href="cart" className={classes.icon}>
					<ShoppingCartIcon />
				</IconButton>
			</BottomNavigation>
		</Hidden>
	);
};

export default Bottombar;
