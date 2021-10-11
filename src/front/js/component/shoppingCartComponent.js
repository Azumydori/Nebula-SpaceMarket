import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { fontSize } from "@material-ui/system";
import PropTypes from "prop-types";

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

const useShoppingCart = makeStyles({
	image: {
		height: "7rem",
		width: "10rem",
		borderRadius: "1rem",
		borderWidth: "0.5rem",
		borderColor: "black"
	},
	divider: {
		backgroundColor: "black",
		width: "50%"
	},
	paper: {
		borderColor: "black",
		borderWidth: "1px",
		padding: "1rem",
		fontSize: "14px"
	},
	button: {
		height: "3rem",
		width: "4rem",
		textTransform: "none"
	},

	buttonAddRemove: {
		borderRadius: "100%",
		width: "3rem",
		height: "3rem"
	},
	buttonModify: {
		textTransform: "none"
	},
	textBold: {
		fontWeight: "bold"
	}
});

const ShoppingCartComponent = ({ name, vendorName, price, image }) => {
	//Javascript/React for buttons

	//Increase/Decrease Products
	const [countProduct, setCountProduct] = useState(1);
	const incrementProduct = () => setCountProduct(countProduct + 1);
	const decreaseProduct = () => setCountProduct(countProduct - 1);

	if (countProduct <= 0) {
		decreaseProduct = () => setCounter(1);
	}

	//Increase/decrease Price

	//Product name storage
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [detailProduct, getDetailProduct] = useState("");
	const classes = useShoppingCart();

	useEffect(
		() => {
			//actions.getDetailProduct(params.id);
			store.getDetailProduct = store.product[params.id];
			getDetailProduct(store.detailProductStore);
		},
		[store.detailProductStore]
	);

	return (
		<Grid container>
			<Grid item xs={12} direction="column" justifyContent="flex-end" alignContent="center">
				<Box p={2} mt={5}>
					<img className={classes.image} src={image} />
				</Box>
				<Typography className={classes.textBold} variant="h6">
					{name}
				</Typography>
				<Typography variant="h6">{vendorName}</Typography>
				<Grid container item xs={6} alignContent="flex-end" justifyContent="flex-end">
					<Typography className={classes.textBold} variant="h6">
						{price}
					</Typography>
				</Grid>
				<Divider className={classes.divider} />
				<Grid container>
					<Grid>
						<ThemeProvider theme={costumTheme}>
							<Box p={1}>
								<Button
									className={classes.buttonAddRemove}
									color="primary"
									variant="contained"
									size="small"
									onClick={decreaseProduct}>
									<RemoveIcon />
								</Button>
							</Box>
						</ThemeProvider>
					</Grid>
					<Box p={1} my={2}>
						<Typography className={classes.textBold} variant="h6">
							{countProduct}
						</Typography>
					</Box>
					<Grid>
						<ThemeProvider theme={costumTheme}>
							<Box p={1}>
								<Button
									className={classes.buttonAddRemove}
									color="primary"
									variant="contained"
									size="small"
									onClick={incrementProduct}>
									<AddIcon />
								</Button>
							</Box>
						</ThemeProvider>
					</Grid>
					<Grid item xs={5} direction="row" justifyContent="flex-end" alignItems="flex-end">
						<Box mt={2}>
							<ThemeProvider theme={costumTheme}>
								<Button className={classes.Button} color="primary" size="small">
									<DeleteIcon />
								</Button>
							</ThemeProvider>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

ShoppingCartComponent.propTypes = {
	name: PropTypes.string,
	vendorName: PropTypes.string,
	price: PropTypes.number,
	image: PropTypes.string
};
export default ShoppingCartComponent;
