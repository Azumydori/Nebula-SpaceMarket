import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import clothing from "../../img/clothing.png";
import laptop from "../../img/laptop.png";
import drill from "../../img/drill.png";
import sports from "../../img/sports.png";
import nft from "../../img/nft.png";
import phone from "../../img/phone.png";
import console from "../../img/console.png";
import movies from "../../img/movies.png";
import washingmachine from "../../img/washing-machine.png";
import tv from "../../img/tv.png";
import motorcycle from "../../img/motorcycle.png";
import diamond from "../../img/diamond.png";

const useStyles = makeStyles(theme => ({
	center: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	container: {
		paddingLeft: "1rem",
		paddingRight: "1rem",
		alignSelf: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "row"
		}
	},

	subColumn: {
		display: "flex"
	},
	heading: {
		fontFamily: "Roboto",
		fontSize: " 1.5em",
		letterSpacing: "0.08em",
		fontWeight: "300",
		textShadow: "0 1px 1px #FFFFFF",
		textTransform: "uppercase",
		color: "#9D4EDD",
		paddingLeft: "1rem",
		paddingRight: "1rem"
	},
	divider: {
		borderBottom: "1px solid #FF9100",
		backgroundColor: "#FF9100",
		height: "1px",
		margin: "0.5em 0px 0.5em",
		paddingLeft: "1rem",
		paddingRight: "1rem"
	},
	dividerSpan: {
		display: "block",
		width: "100%",
		height: "1px",
		backgroundColor: " #9D4EDD",
		paddingLeft: "1rem",
		paddingRight: "1rem"
	},
	iconsCategory: {
		[theme.breakpoints.up("md")]: {
			width: "5rem"
		},
		[theme.breakpoints.down("sm")]: {
			width: "2rem"
		}
	},
	textCategory: {
		fontSize: "1rem",
		fontWeight: "bold",
		color: "black",
		textDecoration: "none"
	},
	borderCategory: {
		"&:hover": {
			background: "#bf9ed9",
			borderRadius: 16,
			border: 1
		}
	},
	margin: {
		marginTop: "2rem"
	}
}));

const Categories = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	return (
		<div className={classes.margin}>
			<h1 className={classes.heading}>The stuff we can help you sell</h1>
			<div className={classes.divider}>
				<span className={classes.dividerSpan} />
			</div>
			<Grid container className={classes.container}>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Clothing" className={classes.center}>
						<div className={classes.center}>
							<img src={clothing} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Clothing</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Computers" className={classes.center}>
						<div className={classes.center}>
							<img src={laptop} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Computers</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Gaming" className={classes.center}>
						<div className={classes.center}>
							<img src={console} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Gaming</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Sports" className={classes.center}>
						<div className={classes.center}>
							<img src={sports} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Sports</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/nft" className={classes.center}>
						<div className={classes.center}>
							<img src={nft} className={classes.iconsCategory} />
							<span className={classes.textCategory}>NFTs</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Cellphones" className={classes.center}>
						<div className={classes.center}>
							<img src={phone} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Cellphones</span>
						</div>
					</Link>
				</Grid>

				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Motorbikes" className={classes.center}>
						<div className={classes.center}>
							<img src={motorcycle} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Motorbikes</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Other" className={classes.center}>
						<div className={classes.center}>
							<img src={diamond} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Other</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Appliances" className={classes.center}>
						<div className={classes.center}>
							<img src={washingmachine} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Appliances</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/TV,Audio&Cameras" className={classes.center}>
						<div className={classes.center}>
							<img src={tv} className={classes.iconsCategory} />
							<span className={classes.textCategory}>TV, Audio & Cameras</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Home&Garden" className={classes.center}>
						<div className={classes.center}>
							<img src={drill} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Home & Garden</span>
						</div>
					</Link>
				</Grid>
				<Grid item xs={4} sm={4} md={2} className={classes.borderCategory}>
					<Link to="/controlpage/Movies,Books&Music" className={classes.center}>
						<div className={classes.center}>
							<img src={movies} className={classes.iconsCategory} />
							<span className={classes.textCategory}>Movies, Books & Music</span>
						</div>
					</Link>
				</Grid>
			</Grid>
			<div className={classes.divider}>
				<span className={classes.dividerSpan} />
			</div>
		</div>
	);
};

export default Categories;
