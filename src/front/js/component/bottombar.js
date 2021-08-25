import React from "react";
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useState } from "react";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
	toolbar: {
		width: "50%",
		width: "100%",
		position: "fixed",
		bottom: 0,
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
				className={classes.toolbar}
				showLabels>
				<BottomNavigationAction label="Chat" icon={<ChatBubbleIcon />} className={classes.icon} />
				<BottomNavigationAction label="Whislist" icon={<FavoriteIcon />} className={classes.icon} />
				<BottomNavigationAction label="Upload" icon={<AddCircleIcon />} className={classes.icon} />
				<BottomNavigationAction label="Account" icon={<AccountCircleIcon />} className={classes.icon} />
				<BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} className={classes.icon} />
			</BottomNavigation>
		</Hidden>
	);
};

export default Bottombar;
