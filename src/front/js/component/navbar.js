import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";
import SettingsIcon from "@material-ui/icons/Settings";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "#5A189A"
	},
	logoLg: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	logoSm: {
		display: "block",
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	search: {
		display: "flex",
		alignItems: "center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
		[theme.breakpoints.down("sm", "md", "lg")]: {
			display: props => (props.open ? "flex" : "none"),
			width: "70%"
		}
	},
	input: {
		color: "white",
		marginLeft: theme.spacing(1),
		width: "100%"
	},
	cancel: {
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	searchButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	icons: {
		alignItems: "center",
		display: props => (props.open ? "none" : "flex")
	},
	hiden: {
		alignItems: "center",
		display: props => (props.open ? "none" : "flex"),
		[theme.breakpoints.down("sm")]: {
			display: props => (props.open ? "flex" : "none"),
			width: "70%"
		}
	},
	badge: {
		marginRight: theme.spacing(2)
	},
	myWhiteIcon: {
		color: "#FFFFFF"
	}
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles({ open });
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position="fixed">
			<Toolbar className={classes.toolbar}>
				<Link href="/" color="inherit">
					<Typography variant="h6" className={classes.logoLg}>
						Nebula
					</Typography>
				</Link>
				<Button className={classes.logoSm} onClick={() => window.history.back()}>
					<ArrowBackIcon className={classes.myWhiteIcon} />
				</Button>

				<Box pr={3}>
					<Link href="/" color="inherit">
						<Typography variant="h6" className={classes.logoSm}>
							Nebula
						</Typography>
					</Link>
				</Box>

				<div className={classes.search}>
					<Search />
					<InputBase placeholder="Search..." className={classes.input} />
					<Cancel className={classes.cancel} onClick={() => setOpen(false)} />
				</div>
				<div className={classes.icons}>
					<Search className={classes.searchButton} onClick={() => setOpen(true)} />
					<div className={classes.hiden}>
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={handleClick}
							className={classes.myWhiteIcon}>
							<AccountCircleIcon />
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<Link href="/upload" color="inherit">
								<MenuItem onClick={handleClose}>
									<CameraEnhanceIcon />
									Upload Product
								</MenuItem>
							</Link>
							<Link href="/wishlist" color="inherit">
								<MenuItem onClick={handleClose}>
									<FavoriteIcon /> Wishlist
								</MenuItem>
							</Link>
							<Link href="/nft" color="inherit">
								<MenuItem onClick={handleClose}>
									<ImportantDevicesIcon />
									NFT Explorer
								</MenuItem>
							</Link>
							<Link href="/account" color="inherit">
								<MenuItem onClick={handleClose}>
									<SettingsIcon />
									Account
								</MenuItem>
							</Link>
							<Link href="/login" color="inherit">
								<MenuItem onClick={handleClose}>
									<PersonIcon />
									Log In / Log out
								</MenuItem>
							</Link>
						</Menu>
						<Link href="/cart" color="inherit">
							<Button className={classes.myWhiteIcon}>
								<ShoppingCartIcon />
							</Button>
						</Link>
					</div>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
