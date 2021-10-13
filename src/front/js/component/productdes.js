import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import PropTypes from "prop-types";

const useProductStyle = makeStyles({
	avatar: {
		width: "5rem",
		height: "5rem"
	},
	picchange: {
		fontWeight: "bold"
	},
	divider: {
		backgroundColor: "black"
	},
	linelength: {
		width: "20rem"
	},
	paper: {
		borderColor: "black",
		borderWidth: "1px",
		padding: "1rem",
		fontSize: "14px",
		maxWidth: "379px"
	},
	button: {
		height: "3rem",
		width: "8rem",
		textTransform: "none",
		fontSize: "12px"
	},
	textWeight: {
		fontWeight: "bold"
	},
	carousel: {
		maxWidth: "800px",
		margin: "4rem auto"
	}
});

const costumTheme = createTheme({
	palette: {
		primary: {
			//This is Purple
			main: "#59189a",
			light: "#ad2cbd",
			contrastText: "#fff"
		},
		secondary: {
			// This is Yellow
			main: "#ff9100",
			contrastText: "#303030"
		}
	}
});

const ProductDescription = props => {
	const classes = useProductStyle();
	const { store, action } = useContext(Context);
	const params = useParams();
	const [value, setValue] = React.useState(5);
	const [productInfo, setProductInfo] = useState("");

	return (
		<Fragment>
			<Grid container>
				<Grid item xs={8} container direction="row" justifyContent="flex-end" align-items="flex-end">
					<Box p={1}>
						<Typography>{props.category}</Typography>
					</Box>
				</Grid>
				<Grid item xs={4} container direction="row" justifyContent="flex-end" align-items="flex-end">
					<Box p={1}>
						<Rating name="read-only" value={value} readOnly />
					</Box>
				</Grid>
				<Grid container item xs={12} direction="row" justifyContent="flex-end" align-items="flex-end">
					<Grid>
						<Typography variant="h3" className={classes.textWeight}>
							€ {props.price}
						</Typography>
					</Grid>
				</Grid>
				<Grid container item xs={12} direction="row" justifyContent="flex-end" alignItems="center">
					<Grid>
						<Box p={1}>
							<Typography className={classes.textWeight}>Description</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12} direction="row" justifyContent="flex-end" alignItems="flex-end">
					<Box p={1} my={1}>
						<Paper elevation={0} className={classes.paper} variant="outlined">
							{props.text}
						</Paper>
					</Box>
				</Grid>
			</Grid>
			<Grid container>
				<ThemeProvider theme={costumTheme}>
					<Grid container item xs={12} justifyContent="flex-end">
						<Grid item={1}>
							<Button
								variant="contained"
								color="secondary"
								size="small"
								className={classes.button}
								elevation={0}>
								<FavoriteBorderIcon />
								Wishlist
							</Button>
						</Grid>
						<Grid item={4}>
							<Box px={1}>
								<Button
									variant="contained"
									color="secondary"
									size="small"
									className={classes.button}
									elevation={0}>
									<ShoppingCartIcon />
									Add
								</Button>
							</Box>
						</Grid>
						<Grid item={4}>
							<Box>
								<Button
									className={classes.button}
									variant="contained"
									color="secondary"
									size="small"
									elevation={0}>
									<ForumIcon /> Chat
								</Button>
							</Box>
						</Grid>
					</Grid>
				</ThemeProvider>
			</Grid>
		</Fragment>
	);
};

ProductDescription.propTypes = {
	category: PropTypes.string,
	price: PropTypes.string,
	text: PropTypes.string
};

export default ProductDescription;
