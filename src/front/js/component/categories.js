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
	button: {
		display: "flex",
		flexDirection: "column"
	},
	alination: {
		gridTemplateColumns: "repeat(12, 1fr)",
		marginLeft: "10px",
		marginRight: "10px",
		align: "center",
		justifyContent: "center"
	}
}));

const Categories = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Grid container className={classes.alination}>
				<Link to="/controlpage/Clothing">
					<Button onClick={actions.categorySearch("Clothing")}>
						<div className={classes.button}>
							<img src={clothing} className="categories-icons" />
							<span>Clothing</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Computers">
					<Button onClick={actions.categorySearch("Computers")}>
						<div className={classes.button}>
							<img src={laptop} className="categories-icons" />
							<span>Computers</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Home&Garden">
					<Button onClick={actions.categorySearch("Home&Garden")}>
						<div className={classes.button}>
							<img src={drill} className="categories-icons" />
							<span>Home & Garden</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Sports">
					<Button onClick={actions.categorySearch("Sports")}>
						<div className={classes.button}>
							<img src={sports} className="categories-icons" />
							<span>Sports</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/NFTs">
					<Button onClick={actions.categorySearch("NFTs")}>
						<div className={classes.button}>
							<img src={nft} className="categories-icons" />
							<span>NFTs</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Cellphones">
					<Button onClick={actions.categorySearch("Cellphones")}>
						<div className={classes.button}>
							<img src={phone} className="categories-icons" />
							<span>Cellphones</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Gaming">
					<Button onClick={actions.categorySearch("Gaming")}>
						<div className={classes.button}>
							<img src={console} className="categories-icons" />
							<span>Gaming</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Movies,Books&Music">
					<Button onClick={actions.categorySearch("Movies,Books&Music")}>
						<div className={classes.button}>
							<img src={movies} className="categories-icons" />
							<span>Movies, Books & Music</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Appliances">
					<Button onClick={actions.categorySearch("Appliances")}>
						<div className={classes.button}>
							<img src={washingmachine} className="categories-icons" />
							<span>Appliances</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/TV,Audio&Cameras">
					<Button onClick={actions.categorySearch("TV,Audio&Cameras")}>
						<div className={classes.button}>
							<img src={tv} className="categories-icons" />
							<span>TV, Audio & Cameras</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Motorbikes">
					<Button onClick={actions.categorySearch("Motorbikes")}>
						<div className={classes.button}>
							<img src={motorcycle} className="categories-icons" />
							<span>Motorbikes</span>
						</div>
					</Button>
				</Link>
				<Link to="/controlpage/Other">
					<Button onClick={actions.categorySearch("Other")}>
						<div className={classes.button}>
							<img src={diamond} className="categories-icons" />
							<span>Other</span>
						</div>
					</Button>
				</Link>
			</Grid>
		</div>
	);
};

export default Categories;
