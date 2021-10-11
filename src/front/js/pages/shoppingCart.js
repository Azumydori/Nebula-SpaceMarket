import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import ShoppingCartComponent from "../component/shoppingCartComponent.js";
import ProductTotal from "../component/productTotal.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const useShoppingCart = makeStyles({
	image: {
		height: "10rem",
		width: "15rem",
		borderRadius: "1rem"
	},
	divider: {
		backgroundColor: "black",
		width: "100%"
	},
	paper: {
		borderColor: "black",
		borderWidth: "1px",
		padding: "1rem",
		fontSize: "14px"
	},
	button: {
		height: "3rem",
		width: "9rem",
		textTransform: "none"
	},
	textBold: {
		fontWeight: "bold"
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

const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const [cartProduct, setCartProduct] = useState([]);

	//Map

	useEffect(() => {
		setCartProduct(store.cart);
	}, []);
	console.log({ cartProduct });
	return (
		<Container>
			<Grid container>
				<Grid container item xs={12} justifyContent="center">
					<Box mt={10}>
						<Typography variant="h3">Shopping Cart</Typography>
					</Box>
				</Grid>
				<Grid container item xs={12} justifyContent="center">
					<Box p={2}>
						<Typography variant="h5">Products Inside Shopping Cart</Typography>
					</Box>
				</Grid>
				<Grid container>
					<Grid item xs={4} />
					<Grid item xs={4}>
						{cartProduct.length == 0
							? null
							: cartProduct.map((product, index) => (
									<ShoppingCartComponent
										key={index}
										name={product.product_name}
										vendorName={product.vendor_name}
										price={product.price}
										image={product.media}
									/>
							  ))}
					</Grid>
					<Grid item xs={4}>
						<ProductTotal />
					</Grid>
				</Grid>
				<Grid />
			</Grid>
		</Container>
	);
};

/*ShoppingCart.proptype = {
	cart_name: PropTypes.string,
	cart_id: PropTypes.string,
	cart_media: PropTypes.img,
	cart_price: PropTypes.number,
	cart_quantity: PropTypes.string
};*/

export default ShoppingCart;
